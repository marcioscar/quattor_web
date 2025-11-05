import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getExercicios } from "~/utils/treinos.server";

export const loader: LoaderFunction = async ({ request, params }) => {
  const aluno = await getExercicios(params.exercicios);
  return aluno;
};

export default function Treino() {
  const { exercicios } = useLoaderData();

  return (
    <>
      <div className="text-center font-semibold mt-2 uppercase text-blue-600">
        Exercícios
      </div>
      <div className="flex justify-center overflow-y-auto  max-h-[32rem] ">
        <table
          className="w-3/4 text-sm text-left mt-4 
        text-gray-500 border-l-2 border-r-2 border-slate-100"
        >
          <thead
            className="text-xs text-gray-700 uppercase
           bg-stone-100 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" className="px-6 py-1">
                Nome
              </th>
              <th scope="col" className="px-6 py-1">
                Repeticoes
              </th>
              <th scope="col" className="px-6 py-1 ">
                Carga
              </th>
              <th scope="col" className="px-6 py-1 ">
                Observações
              </th>
              <th scope="col" className="px-6 py-1 ">
                Video
              </th>
            </tr>
          </thead>
          <tbody>
            {exercicios.map((exec: any, index: any) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="px-6  font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  {exec.nome}
                </th>
                <td className="px-6 py-3 ">{exec.Repeticoes}</td>
                <td className="px-6 py-3 ">{exec.carga}</td>
                <td className="px-6 py-3 ">{exec.obs}</td>
                <td className="px-6 py-3 ">{exec.video}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
