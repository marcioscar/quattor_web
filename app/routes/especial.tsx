import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getGrupos, getHistoricoSemana } from "@/utils/aluno.server";
import { json, redirect, type LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getWeek } from "date-fns";
import _ from "lodash";
import { Bar } from "react-chartjs-2";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  LineElement,
  LinearScale,
  PointElement,
  Title,
} from "chart.js/auto";
import { commitSession, getSession } from "@/session.server";

export const loader: LoaderFunction = async ({ request, params }) => {
  const session = await getSession(request.headers.get("Cookie"));
  const alId = session.get("aluno")?.id;
  if (!alId) {
    session.set("aluno", {
      red: "/aluno",
    });
    return redirect("/login", {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  }
  const grupos = await getGrupos();
  const historicoTreinos = await getHistoricoSemana();
  return json({ grupos, historicoTreinos });
};
export default function Especial() {
  const { grupos, historicoTreinos } = useLoaderData();

  function treinosFeitos(aluno: any) {
    const treinos = _.filter(historicoTreinos, { aluno: aluno });

    const treinosFiltered = _.flatten(treinos.map((t) => t.treinos));
    const treinosAluno = _.filter(treinosFiltered, {
      semana: getWeek(new Date()),
    }).length;
    return treinosAluno;
  }

  const semanas1 = numeroSemanas(
    grupos.map((g: any) => g.inicio)[0],
    grupos.map((g: any) => g.fim)[0]
  );

  function treinosFeitosTotal(aluno: any) {
    const treinos = _.filter(historicoTreinos, { aluno: aluno });
    const treinosFiltered = _.flatten(treinos.map((t) => t.treinos));

    const treinosAluno = _.filter(treinosFiltered, (v) =>
      _.includes(semanas1, v.semana)
    ).length;
    return treinosAluno;
  }

  function treinosFeitosPeriodo(aluno: any, data: number) {
    const treinos = _.filter(historicoTreinos, { aluno: aluno });
    const treinosFiltered = _.flatten(treinos.map((t) => t.treinos));
    const treinosAluno = _.filter(treinosFiltered, {
      semana: data,
    }).length;
    return treinosAluno;
  }

  function pontosGrupo(nome: string, data: number) {
    const grupo = _.filter(grupos, { nome: nome });
    // console.log(grupo);
    const treinos = grupo.map((a) =>
      a.alunos.map((b: any) => treinosFeitosPeriodo(b.idMember, data))
    );
    const pontuar = _.flatten(treinos).length * 3;
    const feitos = _.sum(_.flatten(treinos));
    if (feitos - pontuar >= 0) {
      return 1;
    } else {
      return 0;
    }
  }

  function somaTreinosGrupo(nome: string) {
    const grupo = _.filter(grupos, { nome: nome });
    const treinos = grupo.map((a) =>
      a.alunos.map((b: any) => treinosFeitos(b.idMember))
    );
    return _.sum(_.flatten(treinos));
  }

  function numeroSemanas(inicio: string, fim: string) {
    let ini = getWeek(new Date(inicio));
    let final = getWeek(new Date(fim));
    let weeks = [];
    for (let i = ini; i <= final; i++) {
      weeks.push(i);
    }
    return weeks;
  }

  function totalGrupos(grupo: any) {
    const semanas = numeroSemanas(
      grupos.map((g: any) => g.inicio)[0],
      grupos.map((g: any) => g.fim)[0]
    );

    const tot = semanas.map((s) => pontosGrupo(grupo, s));
    return _.sum(tot);
  }

  function pontosSemana(grupo: any) {
    const semanas = numeroSemanas(
      grupos.map((g: any) => g.inicio)[0],
      grupos.map((g: any) => g.fim)[0]
    );
    const tot = semanas.map((s) => pontosGrupo(grupo, s));
    const sem = _.map(tot, function (value, key) {
      return {
        semana: key + 1,
        pontos: value,
      };
    });

    return sem;
  }

  const gruposGraficoSemana = Object.fromEntries(
    grupos.map((g: any) => [g.nome, pontosSemana(g.nome)])
  );

  const gruposGrafico = Object.fromEntries(
    grupos.map((g: any) => [g.nome, totalGrupos(g.nome)])
  );

  var pontosem = _.map(gruposGraficoSemana, function (value, key) {
    return {
      name: key,
      pontos: value,
    };
  });

  const colors = [
    "orange",
    "#0088FE",
    "#FF8042",
    "#FFBB28",
    "#00C49F",
    "pink",
    "blue",
  ];
  var output = _.map(gruposGrafico, function (value, key) {
    return {
      name: key,
      pontos: value,
      // @ts-ignore
      fill: colors[key.slice(-1)],
    };
  });
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    LineElement,
    Title
  );

  const TotlTreinosAlunos = _.flatten(
    grupos.map((g: any) =>
      g.alunos.map((a: any) => ({
        nome: a.nome,
        treinos: treinosFeitosTotal(a.idMember),
      }))
    )
  );

  const cores = [];
  for (let i = 0; i < 40; i++) {
    const randomColor = `hsla(${~~(430 * Math.random())}, 70%,  72%, 0.8)`;
    cores.push(randomColor);
  }
  const labelsAlunos = TotlTreinosAlunos.map((o: any) => o.nome.split(" ")[0]);
  const totalAlunos = TotlTreinosAlunos.map((o: any) => o.treinos);
  const dataAlunos = {
    labels: labelsAlunos,
    datasets: [
      {
        label: "Total de Pontos",
        data: totalAlunos,
        axis: "y",
        backgroundColor: cores,
      },
    ],
  };
  // const dataAlunos = {
  //   labels: ["Pontos"],
  //   datasets: TotlTreinosAlunos.map((o: any) => ({
  //     label: o.nome.split(" ")[0],
  //     data: [o.treinos],
  //     axis: "y",
  //   })),
  // };

  const dataLine = {
    labels: ["Total"],
    datasets: output.map((o) => ({
      label: o.name,
      data: [o.pontos],
    })),
  };
  const data = {
    labels: semanas1,
    datasets: pontosem.map((p) => ({
      label: p.name,
      data: p.pontos.map((v: any) => v.pontos),
      // backgroundColor: bak[index],
    })),
  };
  const optionsBar = {
    plugins: {
      title: {
        display: true,
        text: "Pontos por semana",
      },
    },

    scales: {
      x: {
        min: 0,
        max: 4,
      },
    },
    ticks: {
      stepSize: 1,
    },
    responsive: true,
  };
  const optionsBarTotal = {
    plugins: {
      title: {
        display: true,
        text: "Pontos Totais",
      },
    },

    scales: {
      x: {
        min: 0,
        max: 4,
      },
    },
    ticks: {
      stepSize: 1,
    },
    responsive: true,
  };
  const optionsBarAlunos = {
    indexAxis: "y",
    plugins: {
      title: {
        display: true,
        text: "Pontos por Aluno",
      },
    },
    scales: {
      y: {
        ticks: {
          display: true,
        },
      },
    },

    ticks: {
      stepSize: 1,
    },
    responsive: true,
  };

  return (
    <>
      <div className=" mt-4 p-2 md:container grid gap-3 grid-cols-1 md:grid-cols-3">
        {grupos.map((g: any, index: any) => (
          <Card key={g.id} className="overflow-hidden shadow-md">
            <CardTitle className=" bg-gradient-to-r from-transparent via-stone-300 space-x-5 to-transparent mb-3 font-normal items-center  place-content-center flex ">
              <div className="flex  font-light items-center ">{g.nome}</div>
              <Separator
                orientation="vertical"
                className="  h-4 border border-white "
              />
              <div className="flex text-base space items-center font-light space-x-4   gap-2  pb-1 pt-1 p-3 ">
                PONTOS
                <div className=" text-lg font-semibold">
                  {totalGrupos(g.nome)}
                </div>
              </div>
            </CardTitle>
            <div className="flex items-center place-content-center mb-4">
              <div className="flex text-blue-600  font-extralight gap-2">
                Treinos - {somaTreinosGrupo(g.nome)}{" "}
                <div className="flex items-center">
                  <Separator
                    orientation="vertical"
                    className="  h-4 border border-stone-300 "
                  />
                </div>{" "}
                {g.alunos.length * 3}
              </div>
            </div>
            <CardContent className="grid gap-6">
              {g.alunos.map((a: any, index: any) => (
                <div
                  key={index}
                  className="flex items-center justify-between space-x-4">
                  <div className="flex items-center space-x-2">
                    <Avatar className=" w-14 h-14">
                      <AvatarImage
                        className="object-cover"
                        src={a.photo}
                        alt="avatar"
                      />
                      <AvatarFallback>
                        <img src="/user.png" alt="avatar" />
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium leading-none">
                        {a.nome.split(" ")[0]}
                      </p>
                      <p className="text-sm font-extralight text-muted-foreground">
                        {a.nome.substr(a.nome.indexOf(" ") + 1)}
                      </p>
                    </div>
                  </div>
                  <div className="w-12 bg-gray-200  rounded-full">
                    <div
                      className={`${
                        treinosFeitos(a.idMember) >= 3
                          ? "bg-green-400"
                          : treinosFeitos(a.idMember) === 2
                          ? "bg-amber-400"
                          : treinosFeitos(a.idMember) === 0
                          ? "bg-slate-200"
                          : "bg-red-400"
                      }  rounded-full p-0.5 text-center text-xs font-medium leading-none text-primary-100`}
                      style={{
                        width:
                          treinosFeitos(a.idMember) > 3
                            ? "100%"
                            : treinosFeitos(a.idMember) === 0
                            ? "100%"
                            : treinosFeitos(a.idMember) * 33.333 + "%",
                      }}>
                      {treinosFeitos(a.idMember) > 0
                        ? treinosFeitos(a.idMember)
                        : ""}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}

        {/* graficos */}
        <div>
          <Bar data={dataLine} options={optionsBarTotal} />
        </div>
        <div>
          <Bar data={data} options={optionsBar} />
        </div>
        <div>
          <Bar
            data={dataAlunos}
            // @ts-ignore
            options={optionsBarAlunos}
          />
        </div>
      </div>
    </>
  );
}
