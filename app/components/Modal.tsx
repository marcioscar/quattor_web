function Modal({ children, onClose }) {
  return (
    <div
      // className="position: fixed left-1/2 top-11  w-1/2 h-1/2 bg-red-500"
      className="justify-center bg-white/80  items-center flex overflow-x-hidden overflow-y-auto fixed  inset-0 z-50 outline-none focus:outline-none"
      onClick={onClose}>
      <dialog
        className="relative  min-h-[350px]  mx-auto  "
        open
        onClick={(event) => event.stopPropagation()}>
        {children}
      </dialog>
    </div>
  );
}

export default Modal;
