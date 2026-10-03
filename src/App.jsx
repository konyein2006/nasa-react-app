import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import SideBar from "./components/SideBar";

function App() {
  const [data, setData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function fetchNasaData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url =
        "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_KEY}`;

      const localKey = "NASA_" + new Date().toDateString();

      if (localStorage.getItem(localKey)) {
        const fetchData = JSON.parse(localStorage.getItem(localKey));
        setData(fetchData);
        return;
      }
      localStorage.clear();

      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const apiData = await res.json();
        localStorage.setItem(localKey, JSON.stringify(apiData));
        setData(apiData);
        console.log("Data\n", apiData);
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchNasaData();
  }, []);

  function handleShowModal() {
    setShowModal(!showModal);
  }

  return (
    <div className="flex relative min-w-screen min-h-screen">
      {data ? (
        <Main data={data} />
      ) : (
        <div className="flex  flex-1 items-center justify-center ">
          <i className="fa-solid fa-gear animate-spin opacity-[0.4] text-5xl"></i>
        </div>
      )}
      <Footer handleShowModal={handleShowModal} data={data} />
      {showModal && <SideBar handleShowModal={handleShowModal} data={data} />}
    </div>
  );
}

export default App;
