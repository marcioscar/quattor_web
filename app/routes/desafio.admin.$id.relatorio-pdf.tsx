import type { LoaderFunction } from "@remix-run/node";
import puppeteer from "puppeteer";

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

		// Iniciar o navegador headless
		const browser = await puppeteer.launch({
			headless: true,
			args: ["--no-sandbox", "--disable-setuid-sandbox"],
		});

		try {
			const page = await browser.newPage();

			// Aumentar o timeout para renderização de gráficos
			page.setDefaultTimeout(60000);

			// Configurar viewport para A4
			await page.setViewport({
				width: 1200,
				height: 1600,
			});

			// Navegar para a página do relatório
			await page.goto(relatorioUrl, {
				waitUntil: "networkidle0",
			});

			// Aguardar que os canvas dos gráficos sejam renderizados
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
					// Se não houver gráficos, continuar mesmo assim
					console.log("Gráficos não encontrados, continuando...");
				});

			// Aguardar um pouco mais para garantir renderização completa
			// waitForTimeout não existe em versões mais recentes do Puppeteer
			await new Promise((resolve) => setTimeout(resolve, 3000));

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
