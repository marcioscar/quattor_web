import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import {
  deleteExercicio,
  getExercicios,
  updateCadastroTreino,
} from "~/utils/treinos.server";
import { FaSave, FaTrash } from "react-icons/fa";
export const loader: LoaderFunction = async ({ request, params }) => {
  const exercicio = await getExercicios(params.grupo);

  return exercicio;
};
export const action: ActionFunction = async ({ request, params }) => {
  const form = await request.formData();
  const nome = form.get("nome");
  const repeticoes = form.get("repeticoes");
  const carga = form.get("carga");
  const obs = form.get("obs");
  const execid = form.get("execid");
  const video = form.get("video");
  const _action = form.get("_action");
  const id = params.exe;
  if (_action === "save") {
    await updateCadastroTreino(id, nome, repeticoes, carga, obs, execid, video);
  }
  if (_action === "delete") {
    await deleteExercicio(id, execid);
  }
  return redirect(`/treinos/${id}`);
};

export default function Grupocadastrado() {
  const { exercicios } = useLoaderData();

  return (
    <ul>
      <div className="grid grid-cols-12 py-2 gap-2">
        <div className="col-span-4 font-light text-sm text-sky-500">Número</div>
        <div className="col-span-4 font-light text-sm text-sky-500">Nome</div>
      </div>
      {exercicios.map((exec: any, index: any) => (
        <li key={exec.execid} className="py-1  ">
          <Form method="post">
            <div className="grid grid-cols-12  gap-2">
              <input type="text" id="index" defaultValue={index + 1} />
              <input
                hidden
                type="text"
                id="execid"
                name="execid"
                defaultValue={exec.execid}
              />

              <input
                type="text"
                id="nome"
                name="nome"
                defaultValue={exec.nome}
                className="col-span-4 bg-stone-50 border-b-2 "
              />

              <input
                type="text"
                id="carga"
                name="carga"
                defaultValue={exec.carga}
                className="col-span-2 bg-stone-50 border-b-2 "
              />

              <input
                type="text"
                id="repeticoes"
                name="repeticoes"
                defaultValue={exec.Repeticoes}
                className="col-span-2 bg-stone-50 border-b-2"
              />

              <input
                type="text"
                id="obs"
                name="obs"
                defaultValue={exec.obs}
                className="col-span-3 text-sm bg-stone-50 border-b-2"
              />
              <input
                type="text"
                id="video"
                name="video"
                defaultValue={exec.video}
                className="col-span-3 text-sm bg-stone-50 border-b-2"
              />
              <div className="grid justify-items-center grid-cols-2 gap2">
                <button
                  className="flex content-center text-green-500 bg-stone-100 "
                  type="submit"
                  name="_action"
                  value="save">
                  <FaSave />
                </button>
                <button
                  className="flex content-center text-red-500 bg-stone-100 "
                  type="submit"
                  name="_action"
                  value="delete">
                  <FaTrash />
                </button>
              </div>
            </div>
          </Form>
        </li>
      ))}
    </ul>

    // <Form method="post">
    //   <div className="flex justify-center overflow-y-auto  max-h-[32rem] ">
    //     <table
    //       className="text-sm text-left mt-4
    //     text-gray-500 border-l-2 border-r-2 border-slate-100"
    //     >
    //       <thead
    //         className="text-xs text-gray-700 uppercase
    //        bg-stone-100 dark:bg-gray-700 dark:text-gray-400"
    //       >
    //         <tr>
    //           <th scope="col" className="px-6 py-1">
    //             Nome
    //           </th>
    //           <th scope="col" className="px-6 w-16 py-1">
    //             Repeticoes
    //           </th>
    //           <th scope="col" className="px-6 py-1 ">
    //             Carga
    //           </th>
    //           <th scope="col" className="px-6 py-1 ">
    //             Obs
    //           </th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {exercicios.map((exec: any, index: any) => (
    //           <tr
    //             key={exec.execid}
    //             className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
    //           >
    //             <th
    //               scope="row"
    //               className="px-6  font-medium text-gray-900 dark:text-white whitespace-nowrap"
    //             >
    //               <input
    //                 hidden
    //                 type="text"
    //                 id="execid"
    //                 name="execid"
    //                 defaultValue={exec.execid}
    //               />

    //               <input
    //                 type="text"
    //                 id="nome"
    //                 name="nome"
    //                 defaultValue={exec.nome}
    //                 // className="w-full p-2 rounded-xl my-2"
    //               />
    //               {/* {exec.nome} */}
    //             </th>
    //             <td className="px-6 w-20 py-3 ">
    //               <input
    //                 type="text"
    //                 id="repeticoes"
    //                 name="repeticoes"
    //                 defaultValue={exec.Repeticoes}
    //                 // className="w-full p-2 rounded-xl my-2"
    //               />
    //             </td>
    //             <td className="px-6 py-3 ">
    //               {" "}
    //               <input
    //                 type="text"
    //                 id="carga"
    //                 name="carga"
    //                 defaultValue={exec.carga}
    //                 // className="w-full p-2 rounded-xl my-2"
    //               />
    //             </td>
    //             <td className="px-6 py-3 ">
    //               <input
    //                 type="text"
    //                 id="obs"
    //                 name="obs"
    //                 defaultValue={exec.obs}
    //               />
    //             </td>
    //             <td>
    //               <button
    //                 className=" flex items-right bg-green-500 p-2 rounded-lg"
    //                 type="submit"
    //               >
    //                 enviar
    //               </button>
    //             </td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    // </Form>
  );
}
