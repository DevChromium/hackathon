import type { NextPage } from "next"
import Image from "next/image"
import { useEffect, useState } from "react"
import { NavLink } from "../../components/NavLink"
import { Button } from "../../components/Button"
import { TableRow } from "../../components/TableRow"
import axios from "axios"


const Dashboard: NextPage =  () => {

    const [students, setStudents] = useState<any[]>([])

    useEffect(() => {
        axios.get("https://hackaton2023.azurewebsites.net/api/VivesHackathon", { headers: { 'User-Agent': 'insomnia/2022.7.2' }})
        
            .then((response) => {
                setStudents(response.data)
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <div className="h-[100vh] flex">
            <section className="w-[15%] h-full flex flex-col items-center py-12">
                    <Image src="/vives_logo.svg" alt="vives logo" width={150} height={150}/>
                    <div className="mt-20 flex flex-col items-center">
                        <Image className="rounded-[100%] mb-6" src="/avatar.jpg" alt="avatar" width={100} height={100}/>
                        <h2 className="text-center block uppercase tracking-wide text-gray-700 text-xs font-bold">Dorian Declerque</h2>
                        <small className="text-center block uppercase tracking-wide text-gray-400">Docent Frans</small>
                    </div>

                    <div className="mt-24 flex flex-col h-full justify-end">
                        <NavLink text="Dashboard" isActive={true} />
                        <NavLink text="Instellingen" isActive={false} />
                        <Button text="Log out" />
                    </div>
            </section>
            <section className="w-full rounded-lg bg-neutral-100">
                <div className="container mx-auto py-12">
                <h2 className="uppercase tracking-wide text-gray-700 text-xs font-bold px-6">{students.length} van de 34 studenten aanwezig</h2>
                    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
                    <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                        <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Naam</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Status</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Klas</th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                            {students.map(student => ( <TableRow key={student} /> ))} 
                        </tbody>
                    </table>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Dashboard