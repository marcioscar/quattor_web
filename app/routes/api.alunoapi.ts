import { getAluno, getAlunoCPF, getAlunoGym } from "@/utils/aluno.server";

import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import _ from "lodash";


export const loader = async ({ request, params }: LoaderFunctionArgs) => {
 
// let { searchParams } = new URL(request.url);
 
// let param = searchParams?.get("registration");
// const registration = param? parseInt(param): 0
  
 
    
// const alunoa = await getAluno(registration );
//  const aluno = alunoa[0]? alunoa[0]: '';

//  let alunoGym = [];
// 	if (aluno.membershipStatus === "Inactive") {
// 		const alunoGymtudo = await getAlunoGym(Number(registration));
// 		alunoGym = alunoGymtudo.map((a: any) => a.gympassId);
// 	}

// 	// const alunoPhoto = _.filter(aluno.memberships, { membershipStatus: "active" }).map(
// 	// 	(n) => n.photoUrl
// 	// );
// const student = {
//     photo : aluno.photoUrl,
//     name: aluno.firstName +' '+ aluno.lastName,
//     status: aluno.membershipStatus,
//     registration: aluno.idMember
// }
	

//     if (!aluno.idMember) {
// 		return {
// 			message: "Aluno não encontrado",
// 		};
// 	}
// 	if (aluno.membershipStatus === "Inactive" && alunoGym[0] === null) {
// 		return {
// 			message: "Seu plano está Inativo Favor procurar recepção",
// 		};
// 	}
//     return json({ student});
};

export const action = async ({ request }: ActionFunctionArgs) => {
  
    switch (request.method) {
    case "POST": {

    const url = new URL(request.url);
    const queryParams = Object.fromEntries(url.searchParams);

    


            // const param = await request.json();

            const registration = queryParams.registration ? queryParams.registration.toString() : "0";
            
            console.log(parseInt(registration))
            
            let alunoa = [];
            if (registration.length<7){
                alunoa = await getAluno(parseInt(registration));  
    
            } else {
               alunoa = await getAlunoCPF((registration));  
            }
            


            // const alunoa = await getAluno(parseInt(registration));
            
            
            
            const aluno = alunoa[0]? alunoa[0]: '';



        let alunoGym = [];
            if (aluno.membershipStatus === "Inactive") {
                const alunoGymtudo = await getAlunoGym(Number(registration));
                alunoGym = alunoGymtudo.map((a: any) => a.gympassId);
            }
            
        const Plano = _.filter(aluno.memberships, { membershipStatus: "active" }).map(
            (n) => (n.name)
        );

        const vencimentoPlano = _.filter(aluno.memberships, { membershipStatus: "active" }).map(
            (n) => ( format(new Date(n.endDate.toString()), "dd/MM/yyyy", {locale: ptBR}).toString())
        );
            const student = {
            photo : aluno.photoUrl,
            name: aluno.firstName +' '+ aluno.lastName,
            status: aluno.membershipStatus,
            registration: aluno.idMember,
            endDate: vencimentoPlano.toString(),
            plano: Plano.toString()
        }
            

            if (!aluno.idMember) {
                return {
                    message: "Aluno não encontrado",
                };
            }
            if (aluno.membershipStatus === "Inactive" && alunoGym[0] === null) {
                return {
                    message: "Seu plano está Inativo | Favor procurar recepção",
                };
            }
            console.log(student)
            return json({ student});
        
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

