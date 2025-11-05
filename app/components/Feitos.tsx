import format from "date-fns/format";
import _ from "lodash";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "./ui/accordion";

export default function Feitos(historicoExercicios: any, grupo: String) {
	console.log(historicoExercicios);
	const HistoricoExercicios = _.map(
		_.mapValues(historicoExercicios?.histexe, function (o) {
			return {
				treino: o.nome,
				carga: o.carga,
				grupo: o.grupo,
				obs: o.obs,
				data: format(new Date(o.data), "dd/MM/yy"),
			};
		})
	);

	const exe = _.takeRight(
		HistoricoExercicios.filter((o) => o.grupo?.includes(grupo)),
		7
	);

	return (
		<>
			{exe.length > 0 && (
				<Card className='  border-stone-100  shadow-sm  rounded-xl'>
					<CardHeader>
						<Accordion type='single' collapsible className='w-full'>
							<AccordionItem value='item-1'>
								<AccordionTrigger>
									<CardTitle className=' font-light text-sm'>
										{grupo
											.toLocaleLowerCase()
											.replace(/(^\w{1})|(\s+\w{1})/g, (letra) =>
												letra.toUpperCase()
											)}
									</CardTitle>
								</AccordionTrigger>
								<AccordionContent>
									<CardDescription>
										{exe.map((s, index) => (
											<div key={index} className=' '>
												<div className=' text-sm   text-stone-700 font-semibold'>
													{s.treino
														? s.treino
																.toLocaleLowerCase()
																.replace(
																	/(^\w{1})|(\s+\w{1})/g,
																	(letra: String) => letra.toUpperCase()
																)
														: ""}{" "}
												</div>
												<div className=' grid grid-cols-3 place-content-around  gap-3 '>
													<div className='text-orange-400 mb-3 '>{s.carga}</div>
													<div>{s.obs ? s.obs.toLocaleLowerCase() : ""}</div>
													<div>{s.data}</div>
												</div>
											</div>
										))}
									</CardDescription>
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</CardHeader>
				</Card>
			)}
		</>
	);
}
