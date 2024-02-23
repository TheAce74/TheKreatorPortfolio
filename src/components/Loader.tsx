import loader from "../assets/loader.svg";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-30 bg-neutral-100 flex flex-col items-center justify-center">
      <img src={loader} alt="" />
    </div>
  );
}
