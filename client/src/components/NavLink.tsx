import Link from 'next/link'


export const NavLink = ({ text, isActive }: any) => {

    const activeClasses = isActive ? "font-bold text-[#e0001F] bg-gray-200" : "text-gray-700 bg-gray-100"

    return (
        <Link href="/" className={`${activeClasses} w-48 text-center text-md rounded-md px-4 py-2 mb-2 hover:font-bold hover:text-[#e0001F] hover:bg-gray-200 transition-all ease-in-out duration-100`}>
            {text}
        </Link>
    )   
}