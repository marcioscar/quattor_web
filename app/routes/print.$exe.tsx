import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getExercicios } from "~/utils/treinos.server";
export const loader: LoaderFunction = async ({ request, params }) => {
	const exercicio = await getExercicios(params.exe);
	return exercicio;
};

export default function Treino() {
	const { exercicios } = useLoaderData<typeof loader>();
	const grupo = useLoaderData<typeof loader>();

	return (
		<>
			<div className='w-full container text-center mx-auto bg-white  rounded-sm border border-gray-500'>
				<header className='px-5 py-4 border-b border-gray-500'>
					<div className=' flex place-content-between items-center font-extrabold text-3xl print:text-xl'>
						<img src='/logo_alto.svg' className=' w-32' alt='logo' />
						{grupo.grupo}
						{/* <img src="/logo_preto.svg" className="w-[108px] " alt="logo" /> */}
						<img className=' w-20 ' alt='qr' src='/qr1.svg' />
					</div>
				</header>
				<table className='table-auto w-full text-left'>
					<tbody className='text-sm divide-y divide-gray-500'>
						{exercicios.map((exec: any, index: any) => (
							<tr key={exec.execid}>
								<td>
									<div className=' font-extrabold text-3xl mb-2'>
										{index + 1} - {exec.nome}
									</div>
									<div className='pl-8 space-y-1'>
										{/* <div className="items-center flex">
                      <GiWeightLiftingUp className=" h-4 w-4 text-gray-400 mr-3" />
                      {exec.carga}
                    </div> */}
										{/* <div className="items-center flex font-semibold text-lg">
                      <img
                        src="/ponto_verde.svg"
                        alt="bolas"
                        className="w-3  mr-3  text-red-600"
                      />
                      {exec.carga}
                    </div> */}
										<div className='items-center flex italic  font-medium text-3xl mt-1 mb-2'>
											{/* <ImSortNumbericDesc className=" h-4 w-4 text-gray-400 mr-3" /> */}
											<img
												src='/ponto_vermelho.svg'
												alt='bolas'
												className='w-3 mr-3 '
											/>
											{exec.Repeticoes}
										</div>
										{exec.obs && (
											<div className='items-center flex font-semibold text-lg'>
												{/* <GiNotebook className="h-4 w-4 text-gray-400 mr-3" /> */}

												<img
													src='/ponto_laranja.svg'
													alt='bolas'
													className='w-3 mr-3 '
												/>
												{exec.obs}
											</div>
										)}
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<footer>
				<img
					className=' h-[80px] pt-1 mx-auto items-center'
					alt='footer'
					src='/semana 5.svg'
				/>
			</footer>
			{/* <footer>
        <img
          className=" h-[100px] pt-1 mx-auto items-center"
          alt="footer"
          src="/link_jpg.jpg"
        />
      </footer> */}
		</>
	);
}
