import Modal from "~/components/Modal";
import { Link, useLoaderData, useNavigate } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { FaWindowClose } from "react-icons/fa";

export const loader: LoaderFunction = async ({ request, params }) => {
  const maquina = params.maquina;
  return maquina;
};
export default function Maquina() {
  const maquina = useLoaderData();

  const navigate = useNavigate();
  function closeHandler() {
    navigate("/aluno");
  }
  return (
    <Modal onClose={closeHandler}>
      <img
        src={`/${maquina}`}
        className=" shadow-lg w-96 h-96  mx-auto"
        alt="Video"
      />
      <Link to="/aluno" className="m-4 text-xl ">
        <FaWindowClose />
      </Link>
    </Modal>
  );
}
