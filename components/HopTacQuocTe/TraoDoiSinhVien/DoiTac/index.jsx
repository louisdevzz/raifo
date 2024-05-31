"use client"
import Events from "@/components/events";

export default function DoiTacCP(){
    return(
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-20">
            <div className="col-span-2">
                <div className="flex justify-start items-start">
                    <div className="border border-gray-200 w-full">
                        <div className="text-center border-t-2 border-[#183762] py-3">
                            <h1 className="font-bold">CÁC TRƯỜNG ĐẠI HỌC ĐỐI TÁC</h1>
                        </div>
                    </div>
                </div>
                <div className="w-full mt-5">
                    <div className="flex flex-col">
                        <div className="-m-1.5 overflow-x-auto">
                            <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="overflow-hidden">
                                <table className="min-w-full divide-y divide-gray-200">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-start text-md font-extrabold uppercase">STT</th>
                                        <th scope="col" className="px-6 py-3 text-start text-md font-extrabold uppercase">Năm</th>
                                        <th scope="col" className="px-6 py-3 text-start text-md font-extrabold uppercase">Trường Đại Học</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="odd:bg-white even:bg-gray-100">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">1</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">2020</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">National Chung Hsing University</td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
            <div className="col-span-1 mt-12 md:mt-0 md:w-[80%] flex flex-col gap-20">
                <Events/>
                <div>
                    <div className="flex justify-start items-start">
                        <div className="border border-gray-200 w-full">
                            <div className="text-center border-t-2 border-[#183762] py-3">
                                <h1 className="font-bold">THÔNG BÁO</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}