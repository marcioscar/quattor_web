import Modal from "~/components/Modal";
import {
	Form,
	Link,
	useLoaderData,
	useNavigate,
	useRouteLoaderData,
} from "@remix-run/react";
import { FaWindowClose } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { updatePlanejamento } from "@/utils/aluno.server";
import { treinos } from "@/utils/treinos.server";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

import { useForm } from "react-hook-form";

export const loader: LoaderFunction = async ({ request, params }) => {
	const grupos = treinos;
	return grupos;
};
export const action: ActionFunction = async ({ request }) => {
	const form = await request.formData();
	let values = Object.fromEntries(form);
	var dias = [];

	const treinosPlanejados = form.getAll("treinos");
	console.log(values);

	if (values.segunda) {
		dias.push("segunda");
	}
	if (values.terca) {
		dias.push("terca");
	}
	if (values.quarta) {
		dias.push("quarta");
	}
	if (values.quinta) {
		dias.push("quinta");
	}
	if (values.sexta) {
		dias.push("sexta");
	}
	if (values.sabado) {
		dias.push("sabado");
	}
	if (values.domingo) {
		dias.push("domingo");
	}

	const planejado = await updatePlanejamento(values, treinosPlanejados);

	return redirect(`..`);
};
export default function Novo() {
	const form = useForm;
	const { grupos } = useLoaderData();

	const { aluno } = useRouteLoaderData("routes/aluno.planejamento.$idaluno");

	const [open, setOpen] = useState(false);
	const [treino, setTreino] = useState("");

	const navigate = useNavigate();
	function closeHandler() {
		navigate(-1);
	}
	const [date, setDate] = useState();

	return (
		<Modal onClose={closeHandler}>
			<Form
				{...form}
				method='post'
				className='font-semibold grid space-x-2 space-y-4 bg-white md:w-96  '>
				<div className=' md:col-span-2 text-center mb-4'>
					Planejamento de treino - {aluno.firstName}{" "}
				</div>
				<select
					// onChange={(event) => setSemana(event.target.value)}
					id='numero'
					name='numero'
					className='rounded-md col-span-2 border-2  block
                          w-full '>
					<option value='01'>Treino 1</option>
					<option value='02'>Treino 2</option>
					<option value='03'>Treino 3</option>
					<option value='04'>Treino 4</option>
					<option value='05'>Treino 5</option>
					<option value='06'>Treino 6</option>
					<option value='07'>Treino 7</option>
				</select>
				{/* <Popover open={open} onOpenChange={setOpen}>
					<PopoverTrigger asChild>
						<Button
							variant='outline'
							role='combobox'
							aria-expanded={open}
							className=' text-stone-500 justify-between'>
							{treino.toUpperCase()
								? grupos.find(
										(grupo: any) =>
											grupo.value.toUpperCase() == treino.toUpperCase()
								  )?.label
								: "Selecione o Treino.."}
							<ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
						</Button>
					</PopoverTrigger>
					<PopoverContent className='w-[300px] bg-white p-0'>
						<Command>
							<CommandInput placeholder='Procurar Treino...' />
							<CommandEmpty>Treino não encontrado</CommandEmpty>
							<CommandGroup>
								{grupos.map((grupo: any) => (
									<CommandItem
										key={grupo.value}
										onSelect={(currentValue) => {
											setTreino(
												currentValue == treino.toUpperCase()
													? ""
													: currentValue.toUpperCase()
											);
											setOpen(false);
										}}>
										<Check
											className={cn(
												"mr-2 h-4 w-4",
												treino.toUpperCase() == grupo.value.toUpperCase()
													? "opacity-100"
													: "opacity-0"
											)}
										/>
										{grupo.label}
									</CommandItem>
								))}
							</CommandGroup>
						</Command>
					</PopoverContent>
				</Popover> */}
				<div className=' text-left'>
					{/* <input hidden required value={date} id="data" name="data" /> */}
					<input hidden value={aluno.idMember} id='aluno' name='aluno' />
					{/* <input hidden value={treino} name='treino' id='treino'></input> */}

					{/* <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[300px] justify-start font-normal",
                  !date && "text-muted-foreground"
                )}>
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? (
                  format(date, "ccc, dd/MM", { locale: ptBR })
                ) : (
                  <span>Selecione a data:</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover> */}

					{grupos.map((grupo: any) => (
						<div className='md:flex' key={grupo.value}>
							<Checkbox
								value={grupo.value}
								id='treinos'
								name='treinos'
								className='mr-1'
							/>
							<label
								htmlFor={grupo.label}
								className='text-sm  mr-7  text-stone-700  peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
								{grupo.label}
							</label>
						</div>
					))}
					<div className='flex'>
						<label htmlFor='livre' className=''>
							<Input
								name='treinos'
								id='treinos'
								className='  h-6 w-96'
								placeholder='Treino Livre'
							/>
						</label>
					</div>

					{/* <div className='md:flex'>
						<Checkbox id='segunda' name='segunda' className='mr-1' />
						<label
							htmlFor='segunda'
							className='text-sm  mr-7  text-stone-700  peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
							1
						</label>
					</div>
					<div className='md:flex'>
						<Checkbox id='terca' name='terca' className='mr-1' />
						<label
							htmlFor='terca'
							className='text-sm mr-7 text-stone-700  peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
							2
						</label>
					</div>
					<div className='md:flex'>
						<Checkbox id='quarta' name='quarta' className='mr-1' />
						<label
							htmlFor='quarta'
							className='text-sm mr-7 text-stone-700  peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
							3
						</label>
					</div>
					<div className='md:flex'>
						<Checkbox id='quinta' name='quinta' className='mr-1' />
						<label
							htmlFor='quinta'
							className='text-sm mr-7 text-stone-700  peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
							4
						</label>
					</div>
					<div className='md:flex'>
						<Checkbox id='sexta' name='sexta' className='mr-1' />
						<label
							htmlFor='sexta'
							className='text-sm mr-7 text-stone-700  peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
							5
						</label>
					</div>
					<div className='md:flex'>
						<Checkbox id='sabado' name='sabado' className='mr-1' />
						<label
							htmlFor='sabado'
							className='text-sm mr-7 text-stone-700  peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
							6
						</label>
					</div>
					<div className='md:flex'>
						<Checkbox id='domingo' name='domingo' className='mr-1' />
						<label
							htmlFor='domingo'
							className='text-sm mr-7 text-stone-700  peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
							7
						</label>
					</div> */}
				</div>

				<Button
					variant='secondary'
					className='bg-stone-400 md:col-span-2 text-black '>
					Salvar
				</Button>
			</Form>
			<div className=' flex place-content-end'>
				<Link to='..' className='m-4 text-xl '>
					<FaWindowClose className=' font-semibold text-3xl text-stone-600 ' />
				</Link>
			</div>
		</Modal>
	);
}
