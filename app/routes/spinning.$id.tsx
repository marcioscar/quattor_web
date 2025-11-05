import { getAluno } from "~/utils/aluno.server";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, useActionData, useLoaderData } from "@remix-run/react";
import {
  createAgendamento,
  deleteAlulaAgendada,
  getAgendamentos,
  getSpinning,
} from "~/utils/aulas.server";
import { AiFillSchedule, AiTwotoneDelete } from "react-icons/ai";

import _ from "lodash";
import moment from "moment";
import { commitSession, getSession } from "~/session.server";

export const loader: LoaderFunction = async ({ request, params }) => {
  const session = await getSession(request.headers.get("Cookie"));
  const plano = session.get("aluno")?.plano;

  if (!session.has("aluno")) {
    return redirect("/login");
  }

  const spinning = plano.filter(
    (s: any) =>
      s.includes("FITNESS") || s.includes("SPINNING") || s.includes("TOTAL")
  ).length;

  if (spinning === 0) {
    const session = await getSession(request.headers.get("Cookie"));
    session.set("aluno", {
      motivo: "Spinning não está incluso em seu plano",
    });

    return redirect("/login", {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  }

  const alunoa = await getAluno(Number(params.id));
  const aluno = alunoa[0];

  const aulas = await getSpinning();
  const agendamentos = await getAgendamentos();
  return json({ aluno, aulas, agendamentos });
};

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  let values = Object.fromEntries(form);
  const agendamentos = await getAgendamentos();
  const aula_agendada = _.filter(agendamentos, ["Hora", values.hora]);
  const alunos = _.flatten(aula_agendada.map((dt: any) => dt.alunos));
  const existeaAgenda = _.filter(alunos, ["idMember", +values.idMember]).length;

  const _action = form.get("_action");

  if (_action === "delete") {
    await deleteAlulaAgendada(values.id, values.idMember);
    return null;
  }
  if (_action === "save") {
    if (existeaAgenda === 0) {
      const agendada = await createAgendamento(values);
      return agendada;
    }

    return {
      message:
        aula_agendada.map((h: any) => h.aula).toString() +
        " Horário: " +
        aula_agendada.map((h: any) => h.Hora).toString() +
        " já agendada para aluno: " +
        values.nome,
    };
  }
};

export default function Spinning() {
  const { aluno, aulas, agendamentos } = useLoaderData();
  const alunoAgendado = useActionData();

  const id = aluno.idMember;
  const now = new Date();
  const agora = moment();

  const hourFilter = aulas.filter((classes: any) =>
    classes.days.includes(now.getDay())
  );

  const agendaAluno = agendamentos.filter((e: any) =>
    e.alunos.some((aluno: any) => aluno.idMember === id)
  );

  // var result = _.mapValues(aulas, function (value, key) {
  //   return { start: value.start, turma: value.turma };
  // });

  const aula730 = _.filter(agendamentos, ["Hora", "07:30"]);
  const alunos730 = _.flatten(aula730.map((dt: any) => dt.alunos)).length;

  const aula19 = _.filter(agendamentos, ["Hora", "19:00"]);
  const alunos19 = _.flatten(aula19.map((dt: any) => dt.alunos)).length;

  return (
    <>
      <div className="px-2 mx-auto ">
        <div className="text-center">
          <img
            src={aluno.photo !== null ? aluno.photo : "/user.png"}
            className="rounded-full shadow-lg w-24 h-24 m-4 mx-auto"
            alt="Avatar"
          />
          <h5 className="text-xl  leading-tight mb-2">
            {aluno.firstName} {aluno.lastName} -{" "}
            <span className="font-mono text-gray-400"> {aluno.idMember}</span>
          </h5>
        </div>

        {hourFilter.length > 0 && aluno.idMember !== 4 && (
          <div className="w-full container mx-auto px-8 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ">
            <div className="flex   mb-4">
              <h5 className="text-md   font-medium leading-none text-slate-500 ">
                RESERVAR AULAS
              </h5>
            </div>
            <div className="flow-root">
              <ul className="divide-y divide-gray-200 ">
                {hourFilter.map((aula: any) => (
                  <li key={aula.id} className="py-3 sm:py-4">
                    <Form method="post">
                      <input
                        name="nome"
                        hidden
                        readOnly
                        value={aluno.firstName + " " + aluno.lastName}></input>
                      <input
                        name="idMember"
                        hidden
                        readOnly
                        value={aluno.idMember}></input>
                      <input
                        name="photo"
                        hidden
                        readOnly
                        value={aluno.photo}></input>
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0  ">
                          <button
                            // disabled={
                            //   aula.start === "07:30"
                            //     ? +alunos730 > 17
                            //     : +alunos19 > 17
                            // }
                            disabled={
                              aula.start === "07:30"
                                ? moment
                                    .duration(
                                      moment(aula.start, "HH:mm:ss").diff(agora)
                                    )
                                    .asHours() > 0.5 ||
                                  moment
                                    .duration(
                                      moment(aula.start, "HH:mm:ss").diff(agora)
                                    )
                                    .asHours() < 0 ||
                                  +alunos730 > 17
                                : moment
                                    .duration(
                                      moment(aula.start, "HH:mm:ss").diff(agora)
                                    )
                                    .asHours() > 0.5 ||
                                  moment
                                    .duration(
                                      moment(aula.start, "HH:mm:ss").diff(agora)
                                    )
                                    .asHours() < 0 ||
                                  +alunos19 > 17
                            }
                            className="bg-green-500 rounded-full px-2 pt-2.5 pb-2  disabled:bg-slate-400 disabled:cursor-not-allowed disabled:opacity-40 text-white active:bg-orange-600 font-bold uppercase text-sm  py-1  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="submit"
                            name="_action"
                            value="save">
                            <AiFillSchedule className="text-2xl" />
                          </button>
                        </div>
                        <div className="flex-1 min-w-2">
                          <p className=" font-medium text-gray-900 truncate">
                            {aula.turma}

                            <input
                              type="text"
                              name="aula"
                              hidden
                              readOnly
                              value={aula.turma}
                            />
                            <input
                              type="text"
                              name="identificador"
                              hidden
                              readOnly
                              value={
                                aula.turma +
                                "|" +
                                aula.start +
                                "|" +
                                (new Date().getMonth() + 1) +
                                "/" +
                                new Date().getDate()
                              }
                            />
                          </p>
                          <p className="text-sm  text-blue-500 truncate ">
                            {aula.start} - {aula.finish}
                            <input
                              type="text"
                              name="hora"
                              hidden
                              readOnly
                              value={aula.start}
                            />
                          </p>
                        </div>
                        <div className="items-center text-base font-semibold text-gray-900  w-1/2">
                          <p className="text-center text-blue-400 font-medium text-sm">
                            RESERVADO
                          </p>
                          <div className="w-full bg-gray-200  rounded-full ">
                            <div
                              className="bg-orange-300 rounded-full text-xs font-medium  text-center p-1 leading-none  "
                              style={
                                aula.start === "07:30"
                                  ? {
                                      width:
                                        Math.round((alunos730 / 17) * 100) +
                                        "%",
                                    }
                                  : {
                                      width:
                                        Math.round((alunos19 / 17) * 100) + "%",
                                    }
                              }>
                              {aula.start === "07:30"
                                ? Math.round((alunos730 / 17) * 100) + "% "
                                : Math.round((alunos19 / 17) * 100) + "% "}
                            </div>
                            {}
                          </div>
                        </div>
                      </div>
                    </Form>
                  </li>
                ))}
                {alunoAgendado?.message && (
                  <p className="  text-center text-md text-white font-medium px-4 py-3 bg-blue-400 rounded-lg">
                    {alunoAgendado.message}
                  </p>
                )}
              </ul>
            </div>
          </div>
        )}
        {agendaAluno.length > 0 && (
          <div className="divide-y flex-row divide-gray-200 ">
            <div>
              <h2 className="text-center font-semibold p-2">Aulas Reservada</h2>
              {agendaAluno.map((aulas: any) => (
                <Form
                  method="post"
                  key={aulas.id}
                  className=" text-center mb-2 flex h-10 items-center  justify-between rounded-[26px] shadow  bg-slate-200 py-0 px-[12px] text-[13px] font-semibold  text-slate-800 ">
                  <input
                    name="idMember"
                    hidden
                    readOnly
                    value={aluno.idMember}></input>
                  <input name="id" hidden readOnly value={aulas.id}></input>
                  <div className=" text-lg font-semibold">{aulas.aula}</div>
                  <p className="text-lg font-semibold">{aulas.Hora}</p>

                  <button
                    className="flex items-center space-x-2 h-3/4  text-white rounded-full bg-red-500 py-2 px-3  "
                    type="submit"
                    name="_action"
                    value="delete">
                    <span className="text-white items-center  font-medium">
                      Não Vou
                    </span>
                    <AiTwotoneDelete className=" text-lg " />
                  </button>
                </Form>
              ))}
            </div>
          </div>
        )}

        {aluno.idMember === 4 && (
          <div className="w-full container mx-auto px-8 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ">
            <div className="divide-y flex-row divide-gray-200 ">
              {agendamentos.map((ag: any) => (
                <div key={ag.id} className="py-3 sm:py-4 flex-row">
                  <div className="flex mb-2 font-semibold text-lg  space-x-4 justify-center  ">
                    <p className=" uppercase">{ag.aula}</p>
                    <p>{ag.Hora}</p>
                  </div>

                  <div>
                    {ag.alunos.map((a: any) => (
                      <div key={a.idMember}>
                        <div className=" text-center mb-2 flex  items-center  justify-between rounded-[26px] shadow  bg-slate-100 py-0 px-[12px] text-[13px] font-semibold  text-slate-800 ">
                          <img
                            className="my-0 mr-[8px]  shadow-md -ml-[12px] h-14 w-14 object-cover rounded-full"
                            src={a.photo !== "" ? a.photo : "/user.png"}
                            alt="avatar"
                          />
                          <p className="mr-8">{a.nome}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
