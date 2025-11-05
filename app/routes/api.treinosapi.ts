import { updateHistoricoAPI } from "@/utils/aluno.server";
import { getExercisebyGroup, getTreinos } from "@/utils/treinos.server";
import type { LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/react";
import _ from "lodash";

export const loader = async ({ request,params }: LoaderFunctionArgs) => {
 let { searchParams } = new URL(request.url);
 
  let week = searchParams?.get("week");
  
    const treinos = await getTreinos(week);

  const grupos = treinos.map((t)=>t.grupo) 

  return [...grupos].sort()  
  // return json({ grupos });
};

export const action = async ({ request }: ActionFunctionArgs) => {
  
    switch (request.method) {
    case "POST": {

        const url = new URL(request.url);
    const queryParams = Object.fromEntries(url.searchParams);
    console.log(queryParams)

        //  const param = await request.json();
            const group = queryParams.groupSelected
            const week = queryParams.week
            const exercisesGroup =  await getExercisebyGroup(group, week)
            const exercises = _.flatten(exercisesGroup.map((e)=> e.exercicios))
            return json(exercises)

        
      /* handle "POST" */
    }
    case "PUT": {
      const url = new URL(request.url);
    const queryParams = Object.fromEntries(url.searchParams);

    const teste = updateHistoricoAPI(queryParams.aluno, queryParams.grupo)
    console.log(queryParams)
    return teste
    }
    case "PATCH": {
      /* handle "PATCH" */
    }
    case "DELETE": {
      /* handle "DELETE" */
    }
  }
};
