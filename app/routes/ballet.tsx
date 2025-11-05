import {
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Ballet() {
	return (
		<>
			<div className='flex flex-col items-center '>
				<img
					src='/belaweb.jpg'
					alt='capa ballet'
					className='w-full md:w-[600px] '
				/>
			</div>
			<div className='md:container  flex place-content-center'>
				<Tabs defaultValue='historia' className='w-full'>
					<TabsList className='grid w-full grid-cols-2'>
						<TabsTrigger value='historia'>História</TabsTrigger>
						<TabsTrigger value='elenco'>Elenco</TabsTrigger>
						{/* <TabsTrigger value="personagens">Personagens</TabsTrigger> */}
					</TabsList>
					<div>
						<TabsContent value='historia' className='container sm '>
							<h2 className='scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight transition-colors first:mt-0'>
								A Bela e a Fera
							</h2>
							<p className='leading-7 [&:not(:first-child)]:mt-2'>
								Seja transportado para um mundo de magia e encanto com o ballet
								clássico "A Bela e a Fera". Descubra a história emocionante, os
								personagens cativantes, os deslumbrantes figurinos e cenários, e
								as principais cenas que tornam essa produção única.
							</p>
							<p className='leading-7 [&:not(:first-child)]:mt-2'>
								O ballet "A Bela e a Fera" é uma adaptação encantadora do conto
								de fadas clássico. Com coreografia elegante e música envolvente,
								o ballet traz à vida a história de amor entre a Bela, uma jovem
								doce e corajosa, e a Fera, um príncipe amaldiçoado.
							</p>
							<h2 className='scroll-m-20 border-b pb-1 text-lg font-semibold tracking-tight  transition-colors mt-3'>
								Prólogo
							</h2>
							<p className='leading-7 [&:not(:first-child)]:mt-4'>
								Os convidados chegam ao castelo. O príncipe e seus principais
								funcionários estão lá para recepcionar cada convidado, afinal
								hoje é uma noite de festa no castelo. A festa começa com uma
								grande valsa. O príncipe com seu mau-humor e arrogância, após
								muito custo, os funcionários do castelo, conseguem convencer o
								príncipe a se divertir no baile, e pelo menos tentar causar uma
								boa impressão ao reino.
								<p className='leading-7 mt-2'>
									Durante o baile, uma velha senhora usando capa adentra o baile
									sem ter sido convidada e oferece uma rosa aos convidados.
									Estes a ignoram, se afastam com medo e não querem ser
									incomodados. O príncipe percebe a confusão e vai ver o que
									está acontecendo. A velha lhe oferece a flor e ele nega e pede
									que ela saia do castelo, pois apenas os nobres poderiam estar
									no baile. A velha então se revela, ao ver que o príncipe
									valoriza apenas a beleza exterior e se transforma em um linda
									e poderosa feiticeira, deixando todos com medo da consequência
									dos seus atos. A feiticeira mostra a importância de não julgar
									os outros pelas aparências e ajudar sempre ao próximo, mesmo
									entre castas sociais diferentes. O Príncipe tenta pedir
									desculpa por toda sua arrogância, porém ela nega o pedido.
								</p>
								<p className='leading-7 mt-2'>
									A feiticeira segura uma rosa que com o tempo vai se tornando
									maior e maior. Esta rosa brilhante ao passar dançando entre os
									convidados os faz ficarem tontos e passando mal. O príncipe
									fica temeroso pelo destino de todos! O feitiço está fazendo
									efeito e transforma o seu melhor amigo e Maitre do castelo,
									Lumiere, em um candelabro, seu mordomo, Horloge em um relógio,
									Babette, sua faxineira em um espanador, Madame Samovar, a
									governanta em um Bule. O príncipe se desespera, porém também
									começa a sentir um mal-estar súbito e desmaia! Ele levanta
									como uma fera e entra em desespero junto com os outros
									personagens. A Feiticeira explica o feitiço junto com a rosa e
									o deixa sozinho dizendo que ele tem até o cair da última
									pétala da rosa para encontrar uma pessoa de bom coração que
									lhe ensine a apreciar a beleza interior, e que aceite se casar
									com ele.
								</p>
							</p>
							<h2 className='scroll-m-20 border-b pb-1 text-lg font-semibold tracking-tight transition-colors mt-3'>
								Ato I - Vilarejo
							</h2>
							<p className='leading-7 [&:not(:first-child)]:mt-4'>
								Todos acham Bela meio esquisita pois ela tem hábito de ler e de
								estudar.. Bela dança com todos do vilarejo. Gaston e seus amigos
								encontram Bela. Eles tentam de todo modo impressioná-la:
								levantando as camponesas, mostrando força e beleza, etc. Mas
								Bela os ignora e não se interessa pelo que vê. Gaston sai de
								cena e volta para junto de seus amigos, ele fica frustrado e
								muito bravo por ter tomado um fora. Todos observam sua tristeza
								por não se sentir pertencente ao vilarejo e se questionam do
								porquê ela está tão triste.
								<p className='leading-7 mt-2'>
									Todo vilarejo termina a feira dançando e no final a Bela pega
									uma mala e decide ir embora do vilarejo rumo a uma viagem;
								</p>
							</p>
							<h2 className='scroll-m-20 border-b pb-1 text-lg font-semibold tracking-tight transition-colors mt-3'>
								Ato II - Floresta
							</h2>
							<p className='leading-7 [&:not(:first-child)]:mt-4'>
								Bela Entra na Floresta e Ninfas a encontram e dançam junto com
								ela. Entra a rainha das ninfas para se apresentar e a rainha das
								ninfas dançam pra Bela. Ninfas dançam e Bela assiste. Bela fica
								sozinha e escuta as fadas da floresta retornando, elas dançam
								juntas e se divertem.
								<p className='leading-7 mt-2'>
									Enquanto Bela e as fadas se divertem, uma matilha de lobos
									aparecem e ataca Bela, enquanto as fadas giram ao redor da
									Bela, mas depois fogem quando a Fera aparece. Fera salva Bela
									e a carrega no colo e expulsando os lobos.
								</p>
							</p>
							<h2 className='scroll-m-20 border-b pb-1 text-lg font-semibold tracking-tight transition-colors mt-3'>
								Ato III- Castelo
							</h2>
							<p className='leading-7 [&:not(:first-child)]:mt-4'>
								Lumiere, Orloge, Babette e Mama bule dançam juntos dançam no
								castelo. A Fera chega da floresta, com a Bela no colo e entra no
								final da música com Bella no colo.
								<p className='leading-7 mt-2'>
									Quarteto Lumiére, Relógio, Bule e Espanador apresentam-se à
									Bela depois dela tomar um grande susto e contam o que
									aconteceu. Brigam o tempo todo até encontrarem uma explicação.
									O espanador limpa o castelo para o jantar e os mini
									espanadores dançam.
								</p>
								<p className='leading-7 mt-2'>
									O relógio anuncia que haverá um jantar em pouco minutos. Os
									reloginhos anunciam a hora do Jantar. Lumiere, o candelabro
									chama todos para degustarem o jantar. Os mini candelabros
									dançam e criam um clima mágico no castelo. Os chefs
									confeiteiros também chegam para o jantar e apresentam o Menu.
								</p>
								<p className='leading-7 mt-2'></p>
								As mini xícaras de chá anunciam a hora do chá. A fera presenteia
								Bela com um livro e ela percebe o quanto a fera é gentil
								enquanto mini xícaras anunciam a paixão que está surgindo.
								<p className='leading-7 mt-2'>
									A Feiticeira e a Rosa quebram o feitiço , ja que a Bela e a
									Fera encontraram o amor verdadeiro. Fera vira principe e todos
									os personagens viram humanos novamente. A Bela e a Fera dancam
									uma linda valsa para celebrar esse momento especial e vivem
									felizes para sempre.
								</p>
							</p>
						</TabsContent>
						<TabsContent value='elenco' className=''>
							<div className='grid grid-cols-1 md:grid-cols-3 p-2 space-y-2 md:space-x-2  md:space-y-0'>
								<Card className='shadow-sm'>
									<CardHeader>
										<CardTitle>
											<img
												src='/bela.jpg'
												alt='capa ballet'
												className='w-full rounded-md  shadow-md '
											/>
										</CardTitle>
										<CardDescription className='text-lg  font-medium text-yellow-400'>
											A Bela
										</CardDescription>
									</CardHeader>
									<CardContent className='text-sm grid grid-cols-1'>
										<li>Marina Coimbra </li>
									</CardContent>
								</Card>
								<Card className='shadow-sm'>
									<CardHeader>
										<CardTitle>
											<img
												src='/vinicius.jpg'
												alt='capa fera'
												className='w-full rounded-md  shadow-md '
											/>
										</CardTitle>
										<CardDescription className='text-lg  font-medium text-blue-500'>
											A Fera - Coreografo e Professor
										</CardDescription>
									</CardHeader>
									<CardContent className='text-sm grid grid-cols-1'>
										<li>Vinicius Gomes </li>
									</CardContent>
								</Card>
								<Card className='shadow-sm'>
									<CardHeader>
										<CardTitle>
											<img
												src='/lumiere.jpg'
												alt='capa fera'
												className='w-full rounded-md  shadow-md '
											/>
										</CardTitle>
										<CardDescription className='text-lg  font-medium text-amber-500'>
											Lumiere (Candelabro)
										</CardDescription>
									</CardHeader>
									<CardContent className='text-sm grid grid-cols-1'>
										<li>Júlia Carneiro </li>
									</CardContent>
								</Card>

								<Card className='shadow-sm'>
									<CardHeader>
										<CardTitle>
											<img
												src='/relogio.jpg'
												alt='capa fera'
												className='w-full rounded-md  shadow-md '
											/>
										</CardTitle>
										<CardDescription className='text-lg  font-medium text-purple-500'>
											Relogio (Orloge)
										</CardDescription>
									</CardHeader>
									<CardContent className='text-sm grid grid-cols-1'>
										<li>Camila Silva Carneiro</li>
									</CardContent>
								</Card>

								<Card className='shadow-sm'>
									<CardHeader>
										<CardTitle>
											<img
												src='/mama.jpg'
												alt='capa fera'
												className='w-full rounded-md  shadow-md '
											/>
										</CardTitle>
										<CardDescription className='text-lg  font-medium text-blue-500'>
											Mama Bule (Coreografa e Professora)
										</CardDescription>
									</CardHeader>
									<CardContent className='text-sm grid grid-cols-1'>
										<li>Karitiana Teixeira</li>
									</CardContent>
								</Card>

								<Card className='shadow-sm'>
									<CardHeader>
										<CardTitle>
											<img
												src='/espanadora.jpg'
												alt='capa fera'
												className='w-full rounded-md  shadow-md '
											/>
										</CardTitle>
										<CardDescription className='text-lg  font-medium text-blue-500'>
											Espanadora e Ninfa da Floresta
										</CardDescription>
									</CardHeader>
									<CardContent className='text-sm grid grid-cols-1'>
										<li>Valentina Fuzo Faé </li>
									</CardContent>
								</Card>

								<Card className='shadow-sm'>
									<CardHeader>
										<CardTitle>
											<img
												src='/feiticeira.jpg'
												alt='capa fera'
												className='w-full rounded-md  shadow-md '
											/>
										</CardTitle>
										<CardDescription className='text-lg  font-medium text-blue-500'>
											Feiticeira
										</CardDescription>
									</CardHeader>
									<CardContent className='text-sm grid grid-cols-1'>
										<li>Míriam Carneiro</li>
									</CardContent>
								</Card>

								<Card className='shadow-sm'>
									<CardHeader>
										<CardTitle>
											<img
												src='/rosa.jpg'
												alt='capa fera'
												className='w-full rounded-md  shadow-md '
											/>
										</CardTitle>
										<CardDescription className='text-lg  font-medium text-blue-500'>
											Rosa e Camponesa
										</CardDescription>
									</CardHeader>
									<CardContent className='text-sm grid grid-cols-1'>
										<li>Vivian Fujikawa </li>
									</CardContent>
								</Card>

								<Card className='shadow-sm'>
									<CardHeader>
										<CardTitle>
											<img
												src='/gaston.jpg'
												alt='capa fera'
												className='w-full rounded-md  shadow-md '
											/>
										</CardTitle>
										<CardDescription className='text-lg  font-medium text-blue-500'>
											Gaston e Amigos
										</CardDescription>
									</CardHeader>
									<CardContent className='text-sm grid grid-cols-1'>
										<li>Alvo Lopes</li>
										<li>Pedro Vieira</li>
										<li>Rosiane Mafra</li>
										<li>Caio Queiroz</li>
									</CardContent>
								</Card>

								<Card className='shadow-sm'>
									<CardHeader>
										<CardTitle>
											<img
												src='camponesas.jpg'
												alt='capa fera'
												className='w-full rounded-md  shadow-md '
											/>
										</CardTitle>
										<CardDescription className='text-lg  font-medium text-blue-500'>
											Camponesas
										</CardDescription>
									</CardHeader>
									<CardContent className='text-sm grid grid-cols-1'>
										<li>Bárbara Borges </li>
										<li>Oriane Graciani de Souza </li>
										<li>Silvana Aquino </li>
										<li>Ana Clara Cintra </li>
										<li>Vanessa Farias </li>
										<li>Júlia Sousa </li>
									</CardContent>
								</Card>
								<Card className='shadow-sm'>
									<CardHeader>
										<CardTitle>
											<img
												src='damasdacorte.jpg'
												alt='capa fera'
												className='w-full rounded-md  shadow-md '
											/>
										</CardTitle>
										<CardDescription className='text-lg  font-medium text-blue-500'>
											Damas da Corte
										</CardDescription>
									</CardHeader>
									<CardContent className='text-sm grid grid-cols-1'>
										<li>Bárbara Borges </li>
										<li>Oriane Graciani de Souza </li>
										<li>Silvana Aquino </li>
										<li>Ana Clara Cintra </li>
										<li>Vanessa Farias </li>
										<li>Júlia Sousa </li>
										<li>Rejane Fleury</li>
										<li>Renata Coelho Cardoso</li>
									</CardContent>
								</Card>

								<Card className='shadow-sm'>
									<CardHeader>
										<CardTitle>
											<img
												src='triodecaponeses.jpg'
												alt='capa fera'
												className='w-full rounded-md  shadow-md '
											/>
										</CardTitle>
										<CardDescription className='text-lg  font-medium text-blue-500'>
											Trio de Camponeses
										</CardDescription>
									</CardHeader>
									<CardContent className='text-sm grid grid-cols-1'>
										<li>Vivian Fujikawa </li>
										<li>Ítalo Lorenzo </li>
										<li>Débora Bezerra</li>
									</CardContent>
								</Card>

								<Card className='shadow-sm'>
									<CardHeader>
										<CardTitle>
											<img
												src='/damafloresta.jpg'
												alt='capa fera'
												className='w-full rounded-md  shadow-md '
											/>
										</CardTitle>
										<CardDescription className='text-lg  font-medium text-blue-500'>
											Damas da Corte
										</CardDescription>
									</CardHeader>
									<CardContent className='text-sm grid grid-cols-1'>
										<li>Thaís Franco</li>
										<li>Marjhory Gonçalves Moura</li>
										<li>Flávia Guimarães </li>
										<li>Lanuza O. Rocha Neves </li>
									</CardContent>
								</Card>

								<Card className='shadow-sm'>
									<CardHeader>
										<CardTitle>
											<img
												src='/ninfas.jpg'
												alt='capa fera'
												className='w-full rounded-md  shadow-md '
											/>
										</CardTitle>
										<CardDescription className='text-lg  font-medium text-blue-500'>
											Ninfas da Floresta
										</CardDescription>
									</CardHeader>
									<CardContent className='text-sm grid grid-cols-1'>
										<li>Julia Nery</li>
										<li>Gabriela Alves Pereira </li>
										<li>Cristiana Santos Silva </li>
										<li>Marcelo Nazaré </li>
										<li>Claudia Alves </li>
									</CardContent>
								</Card>

								<Card className='shadow-sm'>
									<CardHeader>
										<CardTitle>
											<img
												src='/minifloristas.jpg'
												alt='capa fera'
												className='w-full rounded-md  shadow-md '
											/>
										</CardTitle>
										<CardDescription className='text-lg  font-medium text-blue-500'>
											Floristas
										</CardDescription>
									</CardHeader>
									<CardContent className='text-sm grid grid-cols-1'>
										<li>Alice Silva Porto Xavier </li>
										<li>Ana Beatriz Rodrigues Pérez Domingues</li>
										<li>Isabella Santos Barbosa Félix </li>
									</CardContent>
								</Card>

								<Card className='shadow-sm'>
									<CardHeader>
										<CardTitle>
											<img
												src='/minirosas.jpg'
												alt='capa fera'
												className='w-full rounded-md  shadow-md '
											/>
										</CardTitle>
										<CardDescription className='text-lg  font-medium text-blue-500'>
											Mini Rosas
										</CardDescription>
									</CardHeader>
									<CardContent className='text-sm grid grid-cols-1'>
										<li>Luíza Ribeiro</li>
										<li>Letícia Jaime Mendes</li>
										<li>Ana Luiza Abrantes</li>
									</CardContent>
								</Card>

								<Card className='shadow-sm'>
									<CardHeader>
										<CardTitle>
											<img
												src='chefsconfeiteiros.jpg'
												alt='capa fera'
												className='w-full rounded-md  shadow-md '
											/>
										</CardTitle>
										<CardDescription className='text-lg  font-medium text-blue-500'>
											Chefs confeiteiros
										</CardDescription>
									</CardHeader>
									<CardContent className='text-sm grid grid-cols-1'>
										<li>Débora Bezerra </li>
										<li>Marília Bonfim</li>
										<li>Ítalo Lorenzo </li>
									</CardContent>
								</Card>

								<Card className='shadow-sm'>
									<CardHeader>
										<CardTitle>
											<img
												src='/candelabrinhos.jpg'
												alt='capa fera'
												className='w-full rounded-md  shadow-md '
											/>
										</CardTitle>
										<CardDescription className='text-lg  font-medium text-blue-500'>
											Candelabros
										</CardDescription>
									</CardHeader>
									<CardContent className='text-sm grid grid-cols-1'>
										<li>Gabriela Frazao</li>
										<li>Heloísa Ferreira de Carvalho</li>
										<li>Ana Vitoria Timm Casagrande</li>
										<li>Maria Eduarda Mendes Takao</li>
										<li>Alice Carvalho</li>
										<li>Maria Fernanda Bastos Rizzo</li>
										<li>Larissa Carvalho de Oliveira Barquilha</li>
										<li>Rafaela Noleto Barbosa</li>
									</CardContent>
								</Card>

								<Card className='shadow-sm'>
									<CardHeader>
										<CardTitle>
											<img
												src='/miniespanadores.jpg'
												alt='capa fera'
												className='w-full rounded-md  shadow-md '
											/>
										</CardTitle>
										<CardDescription className='text-lg  font-medium text-blue-500'>
											Mini espanadores
										</CardDescription>
									</CardHeader>
									<CardContent className='text-sm grid grid-cols-1'>
										<li>Stella Fontoura Bangoim </li>
										<li>Ísis Sales de Calçado tamanho </li>
										<li>Lis Sales de Calçado </li>
									</CardContent>
								</Card>

								<Card className='shadow-sm'>
									<CardHeader>
										<CardTitle>
											<img
												src='/xicaras.jpg'
												alt='capa fera'
												className='w-full rounded-md  shadow-md '
											/>
										</CardTitle>
										<CardDescription className='text-lg  font-medium text-blue-500'>
											Xícaras
										</CardDescription>
									</CardHeader>
									<CardContent className='text-sm grid grid-cols-1'>
										<li>Catarina Calegari Hollanda</li>
										<li>Laura Moschem Gonçalves</li>
										<li>Sophia Raulino de Sousa</li>
										<li>Helena Melo de Oliveira </li>
									</CardContent>
								</Card>

								<Card className='shadow-sm'>
									<CardHeader>
										<CardTitle>
											<img
												src='/taverna.jpg'
												alt='capa fera'
												className='w-full rounded-md  shadow-md '
											/>
										</CardTitle>
										<CardDescription className='text-lg  font-medium text-blue-500'>
											Taverna
										</CardDescription>
									</CardHeader>

									<CardContent className='text-sm grid grid-cols-1'>
										<li>Rosiane Mafra</li>
										<li>Maria Eduarda Matos </li>
										<li>Ane Derungs Stimamiglio</li>
										<li>Suzy Dourado</li>
										<li>Paloma Vieira</li>
										<li>Erika Terahata</li>
										<li>Vanessa Alves</li>
										<li>Nilde Serejo</li>
										<li>Alvo Lopes</li>
									</CardContent>
								</Card>

								<Card className='shadow-sm'>
									<CardHeader>
										<CardTitle>
											<img
												src='/reloginho_site.webp'
												alt='capa ballet'
												className='w-full rounded-md  shadow-md '
											/>
										</CardTitle>
										<CardDescription className='text-lg  font-medium text-red-500'>
											Relógios
										</CardDescription>
									</CardHeader>
									<CardContent className='text-sm grid grid-cols-1'>
										<li>Antonella Silvestre Franca</li>
										<li>Clarisse</li>
										<li>Catarina Ferreira Garcia Nunes </li>
										<li>Catarina Ramos Ismael</li>
										<li>Isabella Koshevnikoff Zambelli Hampel </li>
										<li>Larissa Viana</li>
										<li>Manuela Antunes de Souza</li>
										<li>Olívia de Sá Andrade </li>
									</CardContent>
								</Card>
								<Card className='shadow-sm'>
									<CardHeader>
										<CardTitle>
											<img
												src='/fadas_floresta_web.webp'
												alt='capa ballet'
												className='w-full rounded-md shadow-md'
											/>
										</CardTitle>
										<CardDescription className='  text-lg  font-medium text-green-500'>
											Fadas da Floresta
										</CardDescription>
									</CardHeader>
									<CardContent className='text-sm grid grid-cols-1'>
										<li>Beatriz Ferreira </li>
										<li>Carolina Calgaro </li>
										<li>Clara de Mesquita Loures</li>
										<li>Elisa Dias</li>
										<li>Giovanna Mota </li>
										<li>Manuela Simão</li>
										<li>Júlia Cecílio</li>
										<li>Júlia Luna</li>
										<li>Sofia Luiza Mafra </li>
									</CardContent>
								</Card>

								<Card className='shadow-sm'>
									<CardHeader>
										<CardTitle>
											<img
												src='/belaweb.jpg'
												alt='capa fera'
												className='w-full rounded-md  shadow-md '
											/>
										</CardTitle>
										<CardDescription className='text-lg  font-medium text-blue-500'>
											Lobos: Dança contemporânea
										</CardDescription>
									</CardHeader>
									<CardContent className='text-sm grid grid-cols-1'>
										<li>Eduarda Lameirão Guitton</li>
										<li> Ana Luíza Silveira Costa Pinto </li>
										<li> Beatriz Vilas Bôas Menon</li>
										<li>Stella Hadassa Ferreira França </li>
										<li>Camille Bionda Pereira Mendes</li>
										<li>Maria Clara Baião Diniz de Souza Rodrigues</li>
									</CardContent>
								</Card>

								<Card className='shadow-sm'>
									<CardHeader>
										<CardTitle>
											<img
												src='/brenda.jpg'
												alt='capa fera'
												className='w-full rounded-md  shadow-md '
											/>
										</CardTitle>
										<CardDescription className='text-lg  font-medium text-blue-500'>
											Coreografa e Professora
										</CardDescription>
									</CardHeader>
									<CardContent className='text-sm grid grid-cols-1'>
										<li>Brenda Aissa</li>
									</CardContent>
								</Card>

								<Card className='shadow-sm'>
									<CardHeader>
										<CardTitle>
											<img
												src='/debora.jpg'
												alt='capa fera'
												className='w-full rounded-md  shadow-md '
											/>
										</CardTitle>
										<CardDescription className='text-lg  font-medium text-blue-500'>
											Coreografa e Professora
										</CardDescription>
									</CardHeader>
									<CardContent className='text-sm grid grid-cols-1'>
										<li>Debora Simoes</li>
									</CardContent>
								</Card>

								<Card className='shadow-sm'>
									<CardHeader>
										<CardTitle>
											<img
												src='/warley1.jpg'
												alt='capa fera'
												className='w-full rounded-md  shadow-md '
											/>
										</CardTitle>
										<CardDescription className='text-lg  font-medium text-blue-500'>
											Livreiro, Coreógrafo e Professor
										</CardDescription>
									</CardHeader>
									<CardContent className='text-sm grid grid-cols-1'>
										<li>Warley Castro</li>
									</CardContent>
								</Card>
							</div>
						</TabsContent>
						{/* <TabsContent value="personagens" className="space-x-2 space-y-2">
              <div className="grid grid-cols-1 md:grid-cols-3 p-2  ">
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <img
                        src="/bela.webp"
                        alt="capa ballet"
                        className="w-full"
                      />
                    </CardTitle>
                    <CardDescription className="">A Bela</CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm grid">
                    <p className=" pl-2 mt-2 ">
                      Bela vive no vilarejo e é uma jovem muito inteligente, que
                      tem como sua maior paixão,os livros. O que ela valoriza
                      são bons sentimentos e a bondade das pessoas.
                      <p className="mt-2">
                        E foi com o olhar além das aparências e com o amor
                        verdadeiro, que Bela conseguiu quebrar o feitiço da Fera
                        e todos seus funcionários, trazendo a felicidade de
                        volta para o castelo .
                      </p>
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <img
                        src="/fera.png"
                        alt="capa ballet"
                        className="w-full  "
                      />
                    </CardTitle>
                    <CardDescription className="">A Fera</CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm grid">
                    <p className=" pl-2  ">
                      A Fera era um príncipe egoísta e irritado, que nunca
                      estava satisfeito com nada e que fora amaldiçoado por uma
                      feiticeira, por não enxergar o verdadeiro valor das
                      pessoas.
                      <p className=" mt-2 ">
                        O castigo dirigiu-se a todos em seu castelo, fazendo os
                        empregados viverem como objetos e ele como monstro:a
                        fera.
                      </p>
                      <p className=" mt-2  ">
                        O feitiço foi feito com uma rosa vermelha encantada e só
                        foi quebrado quando ele encontrou o amor verdadeiro por
                        Bela.
                      </p>
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent> */}
					</div>
				</Tabs>
			</div>
		</>
	);
}
