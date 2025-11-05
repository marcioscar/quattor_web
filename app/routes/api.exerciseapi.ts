import { getHistorico, getHistoricoExe, getHistoricoExeDate, updateHistoricoExe } from "@/utils/aluno.server";
import type { LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/react";
import { format } from "date-fns";
import _ from "lodash";


export const loader = async ({ request,params }: LoaderFunctionArgs) => {
 let { searchParams } = new URL(request.url);
  let register = searchParams?.get("register");
    const historic = await getHistoricoExe(register);
    const Getscheduled = await getHistorico(register)
    const scheduled = _.sortBy(Getscheduled?.planejados, ["title"]);
    // return json({historic, scheduled});

    const grupotreino = _.map(_.groupBy(historic, "data"), (data, idx) => {
            return { data: idx, treino: data };
        });

        const HistoricoExercicios = _.map(
		_.mapValues(historic?.histexe, function (o) {
			return {
				grupo: o.grupo,
				data: format(new Date(o.data), "dd/MM/yy"),
			};
		})
	);
        

      
    return _.takeRight(HistoricoExercicios, 7)
};

export const action = async ({ request }: ActionFunctionArgs) => {
  
    switch (request.method) {
    case "POST": {
         const param = await request.json();
         return updateHistoricoExe(param)
        
    }
    case "PUT": {
      /* handle "PUT" */
    }
    case "PATCH": {
      /* handle "PATCH" */
    }
    case "DELETE": {
      /* handle "DELETE" */
    }
  }
};
