"use client"
import Events from "@/components/events";
import { useEffect,useState } from "react";

export default function BieuMauCP(){
    const [form,setForm] = useState([]);
    async function loadData(){
        const data = await fetch("/api/form",{
            method:"GET",
            mode:"cors",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const result = await data.json();
        setForm(result)
    }
    useEffect(()=>{
        loadData()
    },[])
    return(
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-20">
            <div className="col-span-2">
                <div className="flex justify-start items-start">
                    <div className="border border-gray-200 w-full">
                        <div className="text-center border-t-2 border-[#183762] py-3">
                            <h1 className="font-bold">VĂN BẢN - BIỂU MẪU</h1>
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
                                        <th scope="col" className="px-6 py-3 text-start text-md font-extrabold uppercase dark:text-neutral-500">STT</th>
                                        <th scope="col" className="px-6 py-3 text-start text-md font-extrabold uppercase dark:text-neutral-500">Tiêu Đề</th>
                                        <th scope="col" className="px-6 py-3 text-start text-md whitespace-nowrap font-extrabold uppercase dark:text-neutral-500">Danh Mục</th>
                                        <th scope="col" className="px-6 py-3 text-start text-md font-extrabold uppercase dark:text-neutral-500">File</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {form.map((dt,i)=>{
                                        const file = dt.file
                                        const blob = new Blob([file],{type: "application/pdf"});
                                        const url = URL.createObjectURL(blob)
                                        return(
                                            <tr className="odd:bg-white even:bg-gray-100">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">{dt.idx}</td>
                                                <td className="px-6 py-4 text-sm font-medium text-gray-800 ">{dt.title}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">{dt.category}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                                                    <a href={url} download={"Van-ban-bieu-mau.pdf"}>File</a>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
            <div className="col-span-1 ml-12 mt-12 md:mt-0 md:w-[80%] flex flex-col gap-20">
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