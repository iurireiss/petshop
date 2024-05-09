import { IoCalendar } from "react-icons/io5";
// import DatePicker from "react-datepicker";
// import ptBR from 'date-fns/locale/pt-BR';

// import "react-datepicker/dist/react-datepicker.css";
// import { useState } from "react";

export function Agendamento() {
    // const [date, setDate] = useState();
    // // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // const weekend = (date: any) => new Date() < date;

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
                <input
                    type="text"
                    className="bg-slate-200 outline-none rounded-md py-2 px-6"
                    placeholder="Nome completo"
                />
                <select
                    className="bg-slate-200 w-full max-w-56 outline-none rounded-md py-2 px-6"
                    name="" id="">
                    <option selected className="text-gray-500 px-4">Tamanho</option>
                    <option value="US">Pequeno</option>
                    <option value="CA">Medio</option>
                    <option value="FR">Grande</option>
                </select>
                {/* <DatePicker
                    className="bg-slate-200 outline-none rounded-md py-2 px-6"
                    placeholderText="Seleciona a Data"
                    selected={date}
                    isClearable
                    locale={ptBR}
                    filterDate={weekend}
                    dateFormat="dd/MM/yyyy"
                    onChange={(date) => setDate(date)}
                /> */}
                <input
                    type="date"
                    className="bg-slate-200 w-full max-w-56 outline-none rounded-md py-2 px-6"
                    placeholder="Nome completo"
                />
                <input
                    type="time"
                    className="bg-slate-200 w-full max-w-56 outline-none rounded-md py-2 px-6"
                    placeholder="Nome completo"
                />
                <button className="bg-blue-600 py-2 px-6 text-white font-semibold rounded-md">
                    Agendar
                </button>

            </div>
        </div>
    )
}