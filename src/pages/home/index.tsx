import { FaArrowRight } from "react-icons/fa";
import { PiBathtub } from "react-icons/pi";
import { FaWind } from "react-icons/fa";
import { GiComb } from "react-icons/gi";
import { MdCleaningServices } from "react-icons/md";
import { FaScissors } from "react-icons/fa6";

import { IoLogoWhatsapp } from "react-icons/io";

export function Home() {
    return (
        <div className="w-full flex flex-col items-center bg-slate-100 h-screen">

            <div className="fixed z-30 bottom-5 right-4 lg:right-96 bg-white rounded-full">
                <IoLogoWhatsapp color="#11B93B" size={80} />
            </div>
            <section className="w-full mt-4 p-4 items-center justify-center max-w-[1280px] gap-4 flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/2 mb-10 flex justify-center sm:justify-start lg:justify-center">
                    <img
                        src="https://blog.polipet.com.br/wp-content/uploads/2023/04/Cachorro-banho.png"
                        alt=""
                        className="rounded-lg overflow-hidden  bg-auto shadow-md h-56 hover:scale-110 duration-300"
                    />
                </div>
                <div className="w-full items-center sm:items-start justify-center flex sm:w-1/2 flex-col">
                    <strong className="text-blue-600 font-bold text-4xl mb-6">BANHO & TOSA</strong>
                    <p className="font-semibold text-3xl mt-6"> O cuidade que seu pet merece</p>
                    <p className="mt-4 text-sm sm:text-md md:text-lg text-gray-700">Serviços completos e seguros para higiene do seu melhor amigo.</p>
                    <a href="/agendamento">
                        <button className="mt-10 mb-8 flex items-center gap-6 bg-blue-600 py-2 px-6 text-white font-semibold text-lg rounded-md">
                            Agendar agora
                            <FaArrowRight />
                        </button>
                    </a>

                </div>
            </section>
            <hr className="w-full max-w-[1280px] mb-2" />
            <p className="text-4xl font-medium mb-4">Conheça as etapas</p>
            <section className="w-full shadow-md rounded bg-blue-500 p-4 gap-4 max-w-[1280px] flex-col sm:flex-row grid sm:grid-cols-2 md:grid-cols-3 items-center justify-center">

                <div className="bg-slate-200 shadow-md flex gap-2 flex-col items-center justify-center w-full font-semibold hover:bg-slate-200 rounded-md py-8 px-8 ml-2">
                    <PiBathtub size={30} />
                    <p className="text-lg">Banho</p>
                </div>
                <div className="bg-slate-200 shadow-md flex gap-2 flex-col items-center justify-center w-full font-semibold hover:bg-slate-200 rounded-md py-8 px-8 ml-2">
                    <FaWind size={30} />
                    <p className="text-lg">Secagem</p>
                </div>
                <div className="bg-slate-200 shadow-md flex gap-2 flex-col items-center justify-center w-full font-semibold hover:bg-slate-200 rounded-md py-8 px-8 ml-2">
                    <GiComb size={30} />
                    <p className="text-lg">Escova na pelagem</p>
                </div>
                <div className="bg-slate-200 shadow-md flex gap-2 flex-col items-center justify-center w-full font-semibold hover:bg-slate-200 rounded-md py-8 px-8 ml-2">
                    <MdCleaningServices size={30} />
                    <p className="text-lg">Limpeza dos ouvidos</p>
                </div>
                <div className="bg-slate-200 shadow-md flex gap-2 flex-col items-center justify-center w-full font-semibold hover:bg-slate-200 rounded-md py-8 px-8 ml-2">
                    <FaScissors size={30} />
                    <p className="text-lg">Corte de unhas </p>
                </div>
            </section>
            <p className="text-4xl mt-8 font-medium mb-6">Contato</p>
            <section className="w-full max-w-[1280px] flex flex-col">
                <div className=" w-full bg-white items-center justify-center flex flex-col gap-2 mb-96">
                    <input
                        type="text"
                        placeholder="Nome "
                        className="bg-slate-300 rounded-md py-2 px-20 outline-none"
                    />
                    <input
                        type="text"
                        placeholder="Email "
                        className="bg-slate-300 rounded-md py-2 px-20 outline-none"
                    />
                    <input
                        type="text"
                        placeholder="Telefone "
                        className="bg-slate-300 rounded-md py-2 px-20 outline-none"
                    />
                    <input
                        type="description"
                        placeholder="Descrição "
                        className="bg-slate-300 rounded-md py-10 px-20 outline-none"
                    />
                    <button className="bg-blue-500 py-2 px-8 rounded-lg text-white font-semibold shadow-md hover:bg-blue-400">
                        Enviar
                    </button>
                </div>
            </section>
        </div>
    )
}