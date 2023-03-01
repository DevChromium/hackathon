import Image from "next/image"

export const TableRow = () => {
    return (
            <tr className="hover:bg-gray-50">
            <th className="flex items-center gap-3 px-6 py-4 font-normal text-gray-900">
            <div className="relative w-10 h-10">
                <Image
                className="object-cover object-center w-full h-full rounded-full"
                src="/student.avif"
                alt="Avatar"
                width={10}
                height={10}
                />
        
            </div>
            <div className="text-sm">
                <div className="font-medium text-gray-700">Steven Jobs</div>
            </div>
            </th>
            <td className="px-6 py-4">
            <span
                className="inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold text-green-600 rounded-full bg-green-50"
            >
                <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                Aanwezig
            </span>
            </td>
            <td className="px-6 py-4">2SD</td>
        </tr>
    )
}