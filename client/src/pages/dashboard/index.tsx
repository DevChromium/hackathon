import type { NextPage } from "next"
import Image from "next/image"
import { useEffect, useState } from "react"
import { NavLink } from "../../components/NavLink"
import { Button } from "../../components/Button"
import { TableRow } from "../../components/TableRow"
import axios from "axios"

export async function getServerSideProps() {
    const response = await axios.get('http://localhost:1337/api/getStudents');
    const data = response.data;
  
    return { props: { data } };
  }

const Dashboard: NextPage =  ({data}: any) => {

    const [students, setStudents] = useState<any[]>([{ naam: "Steven Goegebeur", klas: "2SD"}])

    useEffect(() => {
        setStudents(data)
    }, [])

    return (
        <div className="h-[100vh] flex">
            <section className="w-[22.5rem] h-full flex flex-col items-center py-12">
                    <Image src="/vives_logo.svg" alt="vives logo" width={150} height={150}/>
                    <div className="flex flex-col items-center mt-20">
                        <Image className="rounded-[100%] mb-6" src="/avatar.jpg" alt="avatar" width={100} height={100}/>
                        <h2 className="block text-xs font-bold tracking-wide text-center text-gray-700 uppercase">Dorian Declerque</h2>
                        <small className="block tracking-wide text-center text-gray-400 uppercase">Docent Frans</small>
                    </div>

                    <div className="flex flex-col justify-end h-full mt-24">
                        <NavLink text="Dashboard" isActive={true} />
                        <NavLink text="Instellingen" isActive={false} />
                        <Button text="Log out" />
                    </div>
            </section>
            <section className="w-full h-fullg! rounded-[35px] bg-neutral-100">
                <div className="container py-12 mx-auto">
                    <div className="p-8 mx-8 bg-white rounded-lg">
                        <h2 className="mb-1 text-3xl font-bold tracking-wide text-gray-700">Aanwezige studenten</h2>
                        {students.length === 0 
                            ? ( <h4 className="text-xs font-bold tracking-wide text-gray-400 uppercase">Geen studenten aanwezig</h4>) 
                            :  (
                                <>
                                    <h6 className="mb-4 text-xs font-bold tracking-wide text-gray-400 uppercase">{students.length} van de 34 studenten aanwezig</h6>
                                    <div className="-mx-2 overflow-hidden border border-gray-200 rounded-lg">
                                    <table className="w-full text-sm text-left text-gray-500 bg-white border-collapse">
                                        <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Naam</th>
                                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Status</th>
                                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Klas</th>
                                        </tr>
                                        </thead>
                                        <tbody className="border-t border-gray-100 divide-y divide-gray-100">
                                            {students.map(student => ( <TableRow key={student} data={student} /> ))} 
                                        </tbody>
                                    </table>
                                    </div>
                                </>
                            )
                            
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Dashboard