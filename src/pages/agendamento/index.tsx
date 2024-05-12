import { IoCalendar } from "react-icons/io5";


import { useForm } from "react-hook-form"

import {
    addDoc,
    collection,
} from "firebase/firestore";



import { db } from '../../services/firebaseConnection'
import toast from "react-hot-toast";

interface FormInput {
    id:string,
    name: string,
    telefone: string,
    tamanho: string,
    date: string,
    hora: string,
}


export function Agendamento() {

    const { register, handleSubmit } = useForm<FormInput>()



    function onSubmit(data: FormInput) {



        const date = data.date;
        const hora = data.hora;


        // Supondo que o formato de data seja DD-MM-YYYY
        const partesData = date.split("-");
        const partesHora = hora.split(":");

        // Convertendo strings para números usando o operador '+' para conversão explícita
        const dataCompleta = new Date(
            +partesData[0],              // ano
            +partesData[1] - 1,          // mês (ajustado para base zero)
            +partesData[2],              // dia
            +partesHora[0],              // horas
            +partesHora[1]               // minutos
        );
        console.log(dataCompleta.getHours().toLocaleString(), ":", dataCompleta.getMinutes().toLocaleString());

        addDoc(collection(db, "Agendamento"), {
            
            name: data.name,
            telefone: data.telefone,
            tamanho: data.tamanho,
            data: data.date,
            hora: data.hora,
            created: dataCompleta


        })
            .then(() => {
                console.log("Registrado")
                toast.custom((t) => (
                    <div className="w-full z-30 bg-red-400 flex flex-col items-center justify-center">
                        <div
                            className={`${t.visible ? 'animate-enter' : 'animate-leave'
                                } max-w-md w-full border-2 border-green-500 shadow-md absolute z-30 top-60 bg-white rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                        >
                            <div className="flex-1 w-0 p-4">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 pt-0.5">
                                        <img
                                            className="h-10 w-10 rounded-full"
                                            src="https://thumbs.dreamstime.com/b/%C3%ADcone-do-rel%C3%B3gio-calend%C3%A1rio-de-agendamento-vetor-simples-cheio-forma-plana-pictograma-azul-s%C3%B3lido-isolado-em-fundo-branco-203314495.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="ml-3 flex-1">
                                        <p className="text-sm font-medium text-gray-900">
                                            Agendamento Realizado
                                        </p>
                                        <p className="mt-1 text-sm text-gray-500">
                                            Para alteração no agendamento ou cancelamento , entre em contato via whatsapp
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex border-l border-gray-200">
                                <button
                                    onClick={() => toast.dismiss(t.id)}
                                    className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                    Fechar
                                </button>
                            </div>
                        </div>
                    </div>
                ))


            }
            )
    }

    return (

        <div className="w-full  max-w-[1280px] flex flex-col items-center justify-center">
            <div className="w-full gap-5 mt-5 flex flex-row items-center justify-center">
                <p className="text-blue-600 font-bold text-4xl ">Agendamento</p>
                <IoCalendar size={35} color="#0d4dd8e6" />
            </div>
            <div className="w-full mt-8 flex justify-center ">
                <img
                    src="https://blog.polipet.com.br/wp-content/uploads/2023/04/Cachorro-banho.png"
                    alt=""
                    className="rounded-lg overflow-hidden  bg-auto shadow-md h-44 hover:scale-110 duration-300"
                />
            </div>
            <div className="w-full flex gap-3 flex-col items-center justify-center mt-10">
                <form onSubmit={handleSubmit(onSubmit)} className="w-10/12 sm:w-1/2 p-4 flex flex-col gap-3">
                    <input
                        type="text"
                        className="bg-slate-200 outline-none rounded-md py-2 px-6"
                        placeholder="Nome completo"
                        //name="nome"
                        {...register("name")}
                    />
                    <input
                        type="text"
                        className="bg-slate-200 outline-none rounded-md py-2 px-6"
                        placeholder="Telefone"
                        //name="telefone"
                        {...register("telefone")}
                    />
                    <select
                        className="bg-slate-200  outline-none rounded-md py-2 px-6"
                        //name="tamanho"
                        {...register("tamanho")}
                        id="">
                        <option selected className="text-gray-500 px-4">Tamanho</option>
                        <option value="Pequeno">Pequeno</option>
                        <option value="Medio">Medio</option>
                        <option value="Grande">Grande</option>
                    </select>

                    <input
                        type="date"
                        className="bg-slate-200  outline-none rounded-md py-2 px-6"
                        placeholder="data"
                        //name="data"
                        {...register("date")}
                    />
                    <input
                        type="time"
                        className="bg-slate-200  outline-none rounded-md py-2 px-6"
                        placeholder="horario"
                        //name="hora"
                        {...register("hora")}
                    />
                    <button type="submit" className="bg-blue-600 py-2 px-6 text-white font-semibold rounded-md">
                        Agendar
                    </button>
                </form>

            </div>
        </div>
    )
}