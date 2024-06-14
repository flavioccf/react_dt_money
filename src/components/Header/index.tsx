import logoImg from "../../assets/logo.svg";
export function Header() {
  return (
    <header className="pt-10 px-0 pb-28 bg-gray-900 text-white">
      <div className="w-full max-w-screen-lg px-6 my-0 mx-auto flex justify-between items-center">
        <span className="flex justify-center items-center gap-4">
          <img src={logoImg} alt="" />
          DT Money
        </span>
        <button className="h-[50px] bg-green-500 font-bold py-0 px-5 rounded-md hover:bg-green-700 transition">
          New Transaction
        </button>
      </div>
    </header>
  );
}
