import { prisma } from "./prisma.server";

export const getAulas = async () => {
  return prisma.classes.findMany({
    orderBy: {
      start: "asc",
    },
  });
};
export const getSpinning = async () => {
  return prisma.classes.findMany({
    where: {
      turma: "Spinning",
    },
    orderBy: {
      start: "asc",
    },
  });
};

export const getAgendamentos = async () => {
  // var nowDate = new Date();
  var nova = new Date()
    .toLocaleString("en-ZA", {
      timeZone: "America/Sao_Paulo",
    })
    .slice(0, 10);

  // console.log(nowDate);
  // var date =
  //   nowDate.getFullYear() +
  //   "/" +
  //   (nowDate.getMonth() + 1) +
  //   "/" +
  //   nowDate.getDate();

  return prisma.reservas.findMany({
    where: {
      data: new Date(nova),
    },
  });
};

export const createAgendamento = async (agenda: any) => {
  var nowDate = new Date();
  var date =
    nowDate.getFullYear() +
    "/" +
    (nowDate.getMonth() + 1) +
    "/" +
    nowDate.getDate();

  const agendada = await prisma.reservas.upsert({
    where: { identificador: agenda.identificador },
    update: {
      alunos: {
        push: {
          nome: agenda.nome,
          idMember: +agenda.idMember,
          photo: agenda.photo,
        },
      },
    },
    create: {
      alunos: {
        nome: agenda.nome,
        idMember: +agenda.idMember,
        photo: agenda.photo,
      },
      aula: agenda.aula,
      Hora: agenda.hora,
      identificador: agenda.identificador,
      data: new Date(date),
    },
  });
  return agendada;
};

export const deleteAlulaAgendada = async (id: any, idMember: any) => {
  return prisma.reservas.update({
    where: {
      id: id,
    },
    data: {
      alunos: {
        deleteMany: {
          where: {
            idMember: +idMember,
          },
        },
      },
    },
  });
};

export const getAulasNome = async () => {
  return prisma.classes.findMany({
    orderBy: {
      turma: "asc",
    },
  });
};

export const getAulaId = async (id: string) => {
  return prisma.classes.findUnique({
    where: {
      id: id,
    },
  });
};

export const createAula = async (values: any, dias: any) => {
  var icone = values.classe + ".png";

  return prisma.classes.create({
    data: {
      start: values.inicio,
      finish: values.final,
      classe: values.classe,
      turma: values.turma,
      icon: icone,
      days: dias,
    },
  });
};

export const updateAula = async (values: any, dias: any) => {
  return prisma.classes.update({
    where: {
      id: values.id,
    },
    data: {
      start: values.inicio,
      finish: values.final,
      classe: values.classe,
      turma: values.turma,
      icon: values.icon,
      days: dias,
    },
  });
};

export const deleteAula = async (id: string) => {
  return prisma.classes.delete({
    where: {
      id: id,
    },
  });
};
