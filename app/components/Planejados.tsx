import _ from "lodash";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

export default function Feitos(historicoTreinos: any, dia: String) {
	const PlaneTreino = _.mapValues(historicoTreinos?.planejados, function (o) {
		return { treino: o.treinoP, dia: o.dia };
	});

	const plano = _.map(PlaneTreino, (treino: any) => {
		return treino;
	});
	const planodia = plano.filter((o) => o.dia?.includes(dia));

	return (
		<>
			{planodia.length > 0 && (
				<Card className=' rounded-2xl '>
					<CardHeader>
						<CardTitle className=' font-light text-stone-500'>{dia}</CardTitle>
						<CardDescription>
							{planodia.map((s, index) => (
								<div key={index}>{s.treino}</div>
							))}
						</CardDescription>
					</CardHeader>
				</Card>
			)}
		</>
	);
}
