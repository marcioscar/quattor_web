import styles from "./globals.css";
// import { cssBundleHref } from "@remix-run/css-bundle";
import type { MetaFunction } from "@remix-run/react";
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLoaderData,
} from "@remix-run/react";
import { Analytics } from "@vercel/analytics/react";
import type { LinksFunction } from "@vercel/remix";

import stylesheet from "~/tailwind.css";

import Nav from "./components/Nav";
import { getSession } from "./session.server";
import { getAluno } from "./utils/aluno.server";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";

export const links: LinksFunction = () => [
	{ rel: "stylesheet", href: stylesheet },
];

// export const meta: MetaFunction = () => ({
//   charset: "utf-8",
//   title: "Quattor Academia",
//   viewport: "width=device-width,initial-scale=1",
// });

export const loader: LoaderFunction = async ({ request }) => {
	const session = await getSession(request.headers.get("Cookie"));
	if (!session.get("aluno")?.id) {
		return null;
	}
	const alunoa = await getAluno(session.get("aluno")?.id);
	const aluno = alunoa[0];
	return json(aluno);
};

export default function App() {
	const aluno = useLoaderData();
	return (
		<html lang='en'>
			<head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<Meta />
				<Links />
			</head>
			<body>
				<div className=' h-full min-h-screen  bg-stone-200 '>
					{/* <div className=' h-full min-h-screen bg-[url(/assets/fundo.jpeg)] '></div> */}
					<Nav aluno={aluno} />
					<Outlet />
					<ScrollRestoration />
					<Scripts />
					<LiveReload />
					<Analytics />
				</div>
			</body>
		</html>
	);
}
