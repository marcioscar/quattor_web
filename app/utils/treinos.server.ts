import { prisma } from "./prisma.server";
import { v4 as uuidv4 } from "uuid";

export const getExercicios = async (id: any) => {
  return prisma.treinos.findUnique({
    where: {
      id,
    },
  });
};

export const getExercise = async (id: any) => {
  return prisma.treinos.findUnique({
    where: {
      id,
    },
  });
};


export const getExercisebyGroup = async (group: any, week:any) => {
  return prisma.treinos.findMany({
    where: {
        semana: +week,
        grupo : group,
    },
  });
};


export const getTreinos = async (semana: any) => {
  return prisma.treinos.findMany({
    where: {
      semana: +semana,
    },
  });
};

export const deleteExercicio = async (id: any, execid: any) => {
  return prisma.treinos.update({
    where: {
      id: id,
    },
    data: {
      exercicios: {
        deleteMany: {
          where: {
            execid: execid,
          },
        },
      },
    },
  });
};

export const updateCadastroTreino = async (
  id: any,
  nome: any,
  repeticoes: any,
  carga: any,
  obs: any,
  execid: any,
  video: any
) => {
  return prisma.treinos.update({
    where: {
      id: id,
    },
    data: {
      exercicios: {
        updateMany: {
          where: {
            execid: execid,
          },
          data: {
            nome: nome,
            carga: carga,
            obs: obs,
            Repeticoes: repeticoes,
            video: video,
          },
        },
      },
    },
  });
};

export const updateTreino = async (treino: any) => {
    
  const existe = await prisma.treinos.findFirst({
    where: {
      grupo: treino.grupo,
      semana: +treino.semana,
    },
    select: {
      id: true,
    },
  });
  const idTreino = existe
    ? Object.values(existe).toString()
    : "000000000000000000000000";

  return prisma.treinos.upsert({

    where: {
      id: idTreino,
    },
    update: {
      exercicios: {
        push: {
          nome: treino.nome,
          Repeticoes: treino.repeticoes,
          carga: treino.carga,
          obs: treino.obs,
          video: treino.video? treino.video: 'producao.gif',
          execid: uuidv4(),
        },
      },
    },
    create: {
      grupo: treino.grupo,
      semana: +treino.semana,
      exercicios: {
        nome: treino.nome,
        Repeticoes: treino.repeticoes,
        carga: treino.carga,
        obs: treino.obs,
        video: treino.video? treino.video: 'producao.gif',
        execid: uuidv4(),
      },
    },
  });
};
export const grupos = {
  grupo: [
    {
      value: "GRUPO 1",
      label: "Grupo 1",
    },
    {
      value: "GRUPO 2",
      label: "Grupo 2",
    },
    {
      value: "GRUPO 3",
      label: "Grupo 3",
    },
    {
      value: "GRUPO 4",
      label: "Grupo 4",
    },
    {
      value: "GRUPO 5",
      label: "Grupo 5",
    },
  ],
};
export const treinos = {
  grupos: [
    {
      value: "ABDOME",
      label: "Abdome",
    },
    {
      value: "BICEPS",
      label: "Biceps",
    },
    {
      value: "COSTAS",
      label: "Costas",
    },
    {
      value: "GLUTEOS",
      label: "Gluteos",
    },
    {
      value: "MEMBROS INFERIORES GERAL",
      label: "Membros Inferiores Geral",
    },
    {
      value: "MEMBROS SUPERIORES GERAL",
      label: "Membros Superiores Geral",
    },
    {
      value: "MEMBROS SUPERIORES 1",
      label: "Membros Superiores 1",
    },
    {
      value: "MEMBROS SUPERIORES 2",
      label: "Membros Superiores 2",
    },
    {
      value: "OMBROS",
      label: "Ombros",
    },
    {
      value: "PANTURRILHA",
      label: "Panturrilha",
    },
    {
      value: "PEITORAL",
      label: "Peitoral",
    },
    {
      value: "POSTERIORES DE COXAS",
      label: "Posteriores de Coxas",
    },

    {
      value: "QUADS",
      label: "Quads",
    },
    {
      value: "TRICEPS",
      label: "Triceps",
    },
  ],
};
