export default function Footer({ handleShowModal, data }) {
  return (
    <main className="fixed bottom-5 left-5 flex justify-between items-center  w-[93%] z-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-base font-extralight ">APOD PROJECT</h1>
        <h2 className="text-2xl mb-4">{data?.title}</h2>
      </div>
      <button
        className="bg-white rounded-[50%] px-3 py-1 hover:opacity-[0.6] duration-700 cursor-pointer"
        onClick={handleShowModal}
      >
        <i className="fa-solid fa-info text-black"></i>
      </button>
    </main>
  );
}
