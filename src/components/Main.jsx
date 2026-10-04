export default function Main({ data }) {
  return (
    <div className="w-full h-screen">
      <img
        src={data.hdurl}
        alt={data.title || "image"}
        className="w-full h-full object-contain object-center"
      />
    </div>
  );
}
