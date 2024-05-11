
import { db } from '../../services/firebaseConnection'
import { useEffect, useState } from 'react';

import {
    collection,
    onSnapshot,
    query,
    orderBy,

} from 'firebase/firestore';
import { FiTrash } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { TbLogin2 } from 'react-icons/tb';

interface AgendaProps {
    id: string;
    name: string;
    data: string;
    tamanho: string;
    telefone: string;
    hora: string,
}

export function PainelAgendamento() {

    const [agenda, setAgenda] = useState<AgendaProps[]>([])

    useEffect(() => {

        const agendaRef = collection(db, "Agendamento")
        const queryRef = query(agendaRef, orderBy("created", "asc"))

        const unsub = onSnapshot(queryRef, (snapshot) => {
            const lista = [] as AgendaProps[];

            snapshot.forEach((doc) => {
                lista.push({
                    id: doc.id,
                    name: doc.data().name,
                    data: doc.data().data,
                    tamanho: doc.data().tamanho,
                    telefone: doc.data().telefone,
                    hora: doc.data().hora
                })
            })

            setAgenda(lista);


        })


        return () => {
            unsub();
        }


    }, [])

    return (
        <div className="w-full flex flex-col p-4 items-center justify-center">
            <header className="w-11/12 flex max-w-xl mt-4 mb-5 items-center  px-1">
                <nav className="w-full bg-slate-200 border-2 ite  border-blue-600 h-12 flex items-center justify-between rounded-md px-3">
                    <div className="flex gap-4 items-center justify-center text-lg font-medium">
                        <Link className='hover:text-blue-700' to="/">
                            Inicio
                        </Link>
                        <Link className='hover:text-blue-700' to="/painelAgenda">
                            Agendamentos
                        </Link>


                    </div>
                    <button className='flex flex-row gap-2 font-semibold' >
                        Sair
                        <TbLogin2 size={28} color="#ca3c23" />
                    </button>
                </nav>
            </header>
            <h1 className="text-3xl font-bold mb-4 text-blue-700">Painel Agenda</h1>
            <p className='mb-4 text-slate-700'>Aqui você pode editar, ver detalhes do agendamento e<br></br> cancelar um agendamento !</p>
            {agenda.map((Agenda) => (
                <article
                    key={Agenda.id}
                    className="flex text-lg  bg-blue-700 text-white items-center justify-between w-11/12 max-w-xl rounded py-4 px-4 mb-2 select-none"
                >
                    <p>{Agenda.name}</p>
                    <p>{Agenda.data}</p>
                    <p>{Agenda.hora}</p>
                    <div>
                        <button
                            className="border border-dashed hover:bg-blue-300 p-1 rounded "

                        >
                            <FiTrash size={18} color="#FFF" />
                        </button>
                    </div>
                </article>
            ))}
        </div>
    )
}