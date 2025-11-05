/* eslint-disable react-hooks/rules-of-hooks */
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Form, useNavigation } from "@remix-run/react";

import { getAulaId, updateAula, deleteAula } from "~/utils/aulas.server";

export const loader: LoaderFunction = async ({ request, params }) => {
  const id = params.aula;
  const aula = await getAulaId(id as string);
  return json({ aula });
};

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  var dias = [];
  let values = Object.fromEntries(form);
  if (values.segunda) {
    dias.push(parseInt(values.segunda));
  }
  if (values.terca) {
    dias.push(parseInt(values.terca));
  }
  if (values.quarta) {
    dias.push(parseInt(values.quarta));
  }
  if (values.quinta) {
    dias.push(parseInt(values.quinta));
  }
  if (values.sexta) {
    dias.push(parseInt(values.sexta));
  }
  if (values.sabado) {
    dias.push(parseInt(values.sabado));
  }

  const action = form.get("_action");

  if (action === "save") {
    // @ts-ignore
    await updateAula(values, dias);
  } else {
    // @ts-ignore
    await deleteAula(values.id);
  }

  return redirect("/cadaulas");
};

export default function aula() {
  const transition = useNavigation();
  const { aula } = useLoaderData();

  return (
    <>
      <div className="h-full justify-center items-center flex flex-col gap-y-4">
        <h2 className="text-2xl font-extrabold text-slate-700">
          Alterar Aulas
        </h2>
        <Form method="post" className="rounded-2xl bg-stone-100 p-6 w-5/4">
          <input hidden type="text" name="id" defaultValue={aula?.id} />
          <input
            hidden
            type="text"
            name="icon"
            defaultValue={aula.classe + ".png"}
          />
          <label htmlFor="conta" className="text-blue-600 font-semibold">
            AUla
          </label>
          <input
            type="text"
            id="turma"
            name="turma"
            defaultValue={aula.turma}
            className="w-full p-2 rounded-xl my-2"
          />
          <label htmlFor="valor" className="text-blue-600 font-semibold">
            Modalidade
          </label>
          <select
            id="classe"
            name="classe"
            defaultValue={aula.classe}
            className="bg-gray-50 border p-2 my-2 border-gray-300 text-gray-900 mb-6  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="lutas">Lutas</option>
            <option value="natacao">Natação</option>
            <option value="ginastica">Ginástica</option>
            <option value="danca">Dança</option>
            <option value="spinning">Spinning</option>
            <option value="pilates">Pilates</option>
          </select>

          <label htmlFor="password" className="text-blue-600 font-semibold">
            Início
          </label>
          <input
            type="text"
            id="inicio"
            name="inicio"
            defaultValue={aula.start}
            className="w-full p-2 rounded-xl my-2"
          />
          <label htmlFor="password" className="text-blue-600 font-semibold">
            Final
          </label>
          <input
            type="text"
            id="final"
            name="final"
            defaultValue={aula.finish}
            className="w-full p-2 rounded-xl my-2"
          />
          {/* <label
            htmlFor="password"
            className="text-blue-600 justify-center items-center font-semibold"
          >
            Dias
          </label> */}
          <label className="font-thin mr-4 ">
            <input
              className="form-checkbox justify-center h-5 w-5 mr-2 "
              type="checkbox"
              name="segunda"
              defaultChecked={aula.days.includes(1)}
              value="1"
            />
            Segunda
          </label>
          <label className="font-thin mr-4 ">
            <input
              className="form-checkbox h-5 w-5 mr-2 "
              type="checkbox"
              // checked={aula.days.includes(2)}
              defaultChecked={aula.days.includes(2)}
              name="terca"
              id="terça"
              value="2"
            />
            Terça
          </label>
          <label className="font-thin mr-4 ">
            <input
              className="form-checkbox h-5 w-5 mr-2 "
              type="checkbox"
              defaultChecked={aula.days.includes(3)}
              name="quarta"
              id="quarta"
              value="3"
            />
            Quarta
          </label>
          <label className="font-thin mr-4 ">
            <input
              className="form-checkbox h-5 w-5 mr-2 "
              type="checkbox"
              defaultChecked={aula.days.includes(4)}
              name="quinta"
              value="4"
              id="quinta"
            />
            Quinta
          </label>
          <label className="font-thin mr-4 ">
            <input
              className="form-checkbox h-5 w-5 mr-2 "
              type="checkbox"
              defaultChecked={aula.days.includes(5)}
              name="sexta"
              value="5"
              id="sexta"
            />
            Sexta
          </label>
          <label className="font-thin mr-4 ">
            <input
              className="form-checkbox h-5 w-5 mr-2 "
              type="checkbox"
              defaultChecked={aula.days.includes(6)}
              name="sabado"
              id="sabado"
              value="6"
            />
            Sábado
          </label>

          <div className="w-full text-center mt-4 space-x-5">
            <button
              type="submit"
              className="rounded-xl mt-2 bg-blue-500 text-white px-3 py-2 font-semibold transition duration-300 ease-in-out hover:bg-blue-700 hover:-translate-y-1"
              name="_action"
              value="save">
              {transition.state === "submitting"
                ? "Cadastrando..."
                : "Cadastrar"}
            </button>
            <button
              type="submit"
              className="rounded-xl mt-2 bg-red-500 text-white px-3 py-2 font-semibold transition duration-300 ease-in-out hover:bg-red-700 hover:-translate-y-1"
              name="_action"
              value="delete">
              {transition.state === "submitting" ? "Apagando..." : "Apagar"}
            </button>
          </div>
        </Form>
      </div>
    </>
  );
}
