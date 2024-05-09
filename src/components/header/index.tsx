import { IoSearch } from "react-icons/io5";

export function Header() {
  return (
    <div className="w-full px-4 flex flex-col items-center bg-slate-100 ">
      <header className="w-full shadow-sm m-4 gap-10 mt-4 rounded-lg max-w-[1280px] flex p-4 items-center justify-between bg-white h-20">

        <div className="w-full flex items-center justify-center">
          <a href="/">
            <p className="font-bold text-3xl text-blue-600 ">PETSHOP</p>
          </a>

        </div>
        <div className="bg-slate-200 hidden sm:flex items-center rounded-md py-1 px-6">
          <IoSearch className="text-slate-500" />
          <input type="text"
            className="bg-slate-200 rounded-md py-2 px-6 outline-none"
            placeholder="Pesquisar"
          />
        </div>
        <div>
          <button className="bg-blue-600 py-2 px-5 rounded text-white font-medium hover:bg-blue-500">
            Login
          </button>
        </div>
      </header>
    </div>

  )
}