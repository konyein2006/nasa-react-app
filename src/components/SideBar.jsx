export default function SideBar({ handleShowModal, data }) {
  return (
    <div className="bg-slate-800 w-[70%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%] absolute top-0 right-0 bottom-0 shadow-2xl p-5 flex  flex-col gap-3 overflow-auto z-20">
      <h2 className="text-2xl font-bold">{data.title}</h2>
      <p className="text-xl font-extralight">{data.date}</p>
      <p className="text-2sm flex-1">{data.explanation}</p>
      <i
        className="fa-solid fa-arrow-right text-white cursor-pointer text-xl hover:opacity-[0.6] duration-700"
        onClick={handleShowModal}
      ></i>
    </div>
  );
}
