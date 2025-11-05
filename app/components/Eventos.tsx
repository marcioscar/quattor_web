export default function Eventos() {
  return (
    <div className="grid mb-8 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
      <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-tr-lg border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Aulão de Spinning e Glúteos
          </h3>
          <p className="my-4 text-orange-500 font-medium">
            Aulão de Spinning FERIADÃO com o professor PEDRÃO
          </p>
        </blockquote>
        <figcaption className="flex justify-center items-center space-x-3">
          <img className="w-full" src="aulao2.jpg" alt="spinning " />
        </figcaption>
      </figure>
      <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="mx-auto mb-2 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Espetáculo de Ballet Clássico
          </h3>
          <p className="my-2 text-rose-300 text-lg font-medium">
            A Bela Adormecida
          </p>
        </blockquote>
        <figcaption className="flex justify-center items-center space-x-3">
          <img className="w-full " src="ballet.jpg" alt="Ballet" />
        </figcaption>
      </figure>
    </div>
  );
}
