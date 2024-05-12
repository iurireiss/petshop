import { FaArrowRight } from "react-icons/fa";
import { PiBathtub } from "react-icons/pi";
import { FaWind } from "react-icons/fa";
import { GiComb } from "react-icons/gi";
import { MdCleaningServices } from "react-icons/md";
import { FaScissors } from "react-icons/fa6";

import { IoLogoWhatsapp } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";

import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";

export function Home() {
    return (
        <div className="w-full flex flex-col items-center  ">

            <div className="fixed z-30 bottom-5 right-4 shadow-lg  bg-white rounded-full">
                <IoLogoWhatsapp className="text-green-600 hover:text-green-500" size={80} />
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
                    <p className="font-semibold text-3xl mt-6"> O cuidado que seu pet merece</p>
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
            <section className="w-full shadow-md rounded bg-blue-500 p-4 gap-4 max-w-[1280px] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 items-center justify-center">

                <div className="bg-slate-100 shadow-md flex gap-2 flex-col items-center justify-center w-full font-semibold hover:bg-slate-200 rounded-md py-8 px-8 ml-2">
                    <PiBathtub size={30} />
                    <p className="text-lg">Banho</p>
                </div>
                <div className="bg-slate-100 shadow-md flex gap-2 flex-col items-center justify-center w-full font-semibold hover:bg-slate-200 rounded-md py-8 px-8 ml-2">
                    <FaWind size={30} />
                    <p className="text-lg">Secagem</p>
                </div>
                <div className="bg-slate-100 shadow-md flex gap-2 flex-col items-center justify-center w-full font-semibold hover:bg-slate-200 rounded-md py-8 px-8 ml-2">
                    <GiComb size={30} />
                    <p className="text-lg">Escova na pelagem</p>
                </div>
                <div className="bg-slate-100 shadow-md flex gap-2 flex-col items-center justify-center w-full font-semibold hover:bg-slate-200 rounded-md py-8 px-8 ml-2">
                    <MdCleaningServices size={30} />
                    <p className="text-lg">Limpeza dos ouvidos</p>
                </div>
                <div className="bg-slate-100 shadow-md flex gap-2 flex-col items-center justify-center w-full font-semibold hover:bg-slate-200 rounded-md py-8 px-8 ml-2">
                    <FaScissors size={30} />
                    <p className="text-lg">Corte de unhas </p>
                </div>
            </section>
            <p className="text-4xl mt-8 font-medium mb-6">Contato</p>
            <section className="w-full max-w-[1280px] gap-2 flex md:flex-row flex-col p-2">
                <div className="w-full gap-2 grid sm:grid-cols-2">
                    <div className="w-full p-4 flex flex-col  justify-center gap-3 rounded-lg mb-4 bg-slate-100">
                        <IoLocationOutline className="text-blue-600" size={40} />
                        <span className="font-semibold text-2xl">Endereço</span>
                        <p className="text-sm">Rua xxxxx, nº1000</p>
                        <p className="text-sm">Cidade - ND</p>
                    </div>
                    <div className="w-full p-4 flex flex-col  justify-center gap-3 rounded-lg mb-4 bg-slate-100">
                        <FiPhone className="text-blue-600" size={40} />
                        <span className="font-semibold text-2xl">Telefone</span>
                        <p className="text-sm">+55 (00) 0000-0000</p>
                        <p className="text-sm">+55 (00) 0000-0000</p>
                    </div>
                    <div className="w-full p-4 flex flex-col  justify-center gap-3 rounded-lg mb-4 bg-slate-100">
                        <MdOutlineMail className="text-blue-600" size={40} />
                        <span className="font-semibold text-2xl">Email</span>
                        <p className="text-sm">email@teste.com</p>
                        <p className="text-sm">email@teste.com</p>
                    </div>
                    <div className="w-full p-4 flex flex-col  justify-center gap-3 rounded-lg mb-4 bg-slate-100">
                        <IoTimeOutline className="text-blue-600" size={40} />
                        <span className="font-semibold text-2xl">Horario de Funcionamento</span>
                        <p className="text-sm">Segunda á Sexta</p>
                        <p className="text-sm">08:00 - 18:00</p>
                    </div>
                </div>

                <div className=" w-full pb-8  border rounded p-2 items-center justify-center flex flex-col gap-2 ">
                    <p className="text-lg font-thin">Contato por E-mail</p>
                    <input
                        type="text"
                        placeholder="Nome "
                        className="bg-slate-100 rounded-md py-2 px-20 w-full p-4 outline-none"
                    />
                    <input
                        type="text"
                        placeholder="Email "
                        className="bg-slate-100 w-full rounded-md py-2 px-20 outline-none"
                    />
                    <input
                        type="text"
                        placeholder="Telefone "
                        className="bg-slate-100 w-full rounded-md py-2 px-20 outline-none"
                    />
                    <input
                        type="description"
                        placeholder="Descrição "
                        className="bg-slate-100 w-full rounded-md py-10 px-20 outline-none"
                    />
                    <button className="bg-blue-500 w-1/2 mt-4 py-2 px-8 rounded-lg text-white font-semibold shadow-md hover:bg-blue-400">
                        Enviar Mensagem
                    </button>
                </div>
            </section>
            <section className="w-full mt-2 max-w-[1280px]">
                <div className="w-full grid flex-col p-4 gap-2 md:grid-cols-2 lg:grid-cols-4 justify-benter items-baseline">
                    <div className="w-full flex flex-col items-center justify-center">
                        <span className="text-2xl font-medium text-blue-700">INFORMAÇÕES</span>
                        <div className="text-gray-600  text-sm flex flex-col items-center gap-1 mt-2">
                            <p className="hover:text-blue-600">Sobre nós</p>
                            <p className="hover:text-blue-600">Central de Atendimento</p>
                            <p className="hover:text-blue-600">Dúvidas Frequentes</p>
                            <p className="hover:text-blue-600">Nossas Lojas</p>
                            <p className="hover:text-blue-600">Cashback</p>
                        </div>
                        
                    </div>
                    <div className="w-full flex flex-col items-center justify-center">
                        <span className="text-2xl font-medium text-blue-700">ACESSO RÁPIDO</span>
                        <div className="text-gray-600  text-sm flex flex-col items-center gap-1 mt-2">
                            <p className="hover:text-blue-600">Minha Conta</p>
                            <p className="hover:text-blue-600">Meus Pedidos</p>
                            <p className="hover:text-blue-600">Cadastre-se</p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center">
                        <span className="text-2xl font-medium text-blue-700">POLITICAS</span>
                        <div className="text-gray-600  text-sm flex flex-col items-center gap-1 mt-2">
                            <p className="hover:text-blue-600">Entregas</p>
                            <p className="hover:text-blue-600">Devolução</p>
                            <p className="hover:text-blue-600">Formas de Pagamento</p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center">
                        <span className="text-2xl font-medium text-blue-700">REDES SOCIAIS</span>
                        <div className="flex mt-4 text-blue-600 gap-3">
                        <FaFacebookSquare size={50}/>
                        <FaSquareInstagram size={50}/>
                        <FaSquareYoutube size={50}/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}