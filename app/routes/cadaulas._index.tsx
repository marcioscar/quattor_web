import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { NavLink, useLoaderData } from "@remix-run/react";
import AulasCadastro from "~/components/AulasCadastro";

import { getAulasNome } from "~/utils/aulas.server";

export const loader: LoaderFunction = async ({ request }) => {
  const TodasAulas = await getAulasNome();
  return json({ TodasAulas });
};

export default function Cadaulas() {
  const { TodasAulas } = useLoaderData();
  return (
    <div className=" bg-stone-100 font-Roboto ">
      <div className="mt-2 text-right mr-8 ">
        <NavLink
          className=" justify-center w-60 px-4 py-2  text-white bg-blue-600 hover:bg-blue-800  rounded-lg text-sm   "
          to="/cadaulas/nova">
          Nova
        </NavLink>
      </div>
      <AulasCadastro aulas={TodasAulas} />
    </div>
  );
}
