import type { LoaderFunction } from "@remix-run/node";
import puppeteerCore from "puppeteer-core";
import chromium from "@sparticuz/chromium";

export const loader: LoaderFunction = async ({ request, params }) => {
	const { id } = params;
	if (!id) {
		throw new Response("ID não fornecido", { status: 400 });
	}

	try {
		// Obter a URL do relatório HTML
		const url = new URL(request.url);
		const baseUrl = `${url.protocol}//${url.host}`;
		const relatorioUrl = `${baseUrl}/desafio/admin/${id}/relatorio`;

		// Detectar se está em produção (Vercel)
		const isProduction =
			!!process.env.VERCEL || process.env.NODE_ENV === "production";

		// Configurar opções do Puppeteer baseado no ambiente
		let launchOptions: any;

		if (isProduction) {
			// Em produção (Vercel), usar puppeteer-core com chromium
			launchOptions = {
				args: [
					...chromium.args,
					"--hide-scrollbars",
					"--disable-web-security",
					"--disable-features=IsolateOrigins,site-per-process",
				],
				defaultViewport: { width: 1920, height: 1080 },
				executablePath: await chromium.executablePath(),
				headless: true,
			};
		} else {
			// Em desenvolvimento local, usar puppeteer-core com Chrome local
			// Tenta encontrar o Chrome em locais comuns
			const chromePaths = [
				process.env.PUPPETEER_EXECUTABLE_PATH,
				"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", // macOS
				"/usr/bin/google-chrome", // Linux
				"/usr/bin/chromium-browser", // Linux
				"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe", // Windows
				"C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe", // Windows 32-bit
			];

			const executablePath =
				chromePaths.find((path) => path) ||
				"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

			launchOptions = {
				args: ["--no-sandbox", "--disable-setuid-sandbox"],
				executablePath,
				headless: true,
			};
		}

		const browser = await puppeteerCore.launch(launchOptions);

		try {
			const page = await browser.newPage();

			// Configurar timeouts baseado no ambiente
			const timeout = isProduction ? 20000 : 60000;
			page.setDefaultTimeout(timeout);

			// Configurar viewport para A4
			await page.setViewport({
				width: 1200,
				height: 1600,
			});

			// Navegar para a página do relatório com timeout reduzido em produção
			await page.goto(relatorioUrl, {
				waitUntil: isProduction ? "domcontentloaded" : "networkidle0",
				timeout: timeout,
			});

			// Em produção, aguardar um tempo fixo menor para gráficos renderizarem
			// Em desenvolvimento, aguardar função que verifica canvas
			if (isProduction) {
				// Timeout reduzido para Vercel
				await new Promise((resolve) => setTimeout(resolve, 2000));
			} else {
				// Aguardar que os canvas dos gráficos sejam renderizados (apenas local)
				await page
					.waitForFunction(
						() => {
							const canvases = document.querySelectorAll("canvas");
							return (
								canvases.length > 0 &&
								Array.from(canvases).every((c) => c.width > 0)
							);
						},
						{ timeout: 30000 }
					)
					.catch(() => {
						console.log("Gráficos não encontrados, continuando...");
					});

				// Aguardar um pouco mais para garantir renderização completa
				await new Promise((resolve) => setTimeout(resolve, 2000));
			}

			// Gerar o PDF
			const pdf = await page.pdf({
				format: "A4",
				printBackground: true,
				margin: {
					top: "20mm",
					right: "15mm",
					bottom: "20mm",
					left: "15mm",
				},
			});

			await browser.close();

			// Retornar o PDF como resposta
			// Converter Buffer para formato que Response aceita
			return new Response(pdf as any, {
				headers: {
					"Content-Type": "application/pdf",
					"Content-Disposition": `attachment; filename="relatorio-desafio-${id}.pdf"`,
				},
			});
		} catch (error) {
			await browser.close();
			throw error;
		}
	} catch (error: any) {
		console.error("Erro ao gerar PDF:", error);
		return new Response(
			`Erro ao gerar PDF: ${error.message || "Erro desconhecido"}`,
			{
				status: 500,
				headers: {
					"Content-Type": "text/plain",
				},
			}
		);
	}
};

// Resource route - não precisa de componente default
// O loader retorna diretamente o Response com o PDF
