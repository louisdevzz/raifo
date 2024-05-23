"use client"
import Events from "@/components/events";
import { useEffect, useState } from "react";

export default function DieuKienCP(){
    const [condition, setCondition] = useState([]);
    async function loadCondition(){
        const data = await fetch("/api/condition",{
            method:"GET",
            mode:"cors",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const result = await data.json();
        setCondition(result)
    }
    useEffect(()=>{
        loadCondition()
    },[])
    return(
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-20">
            <div className="col-span-2">
                <div className="flex justify-start items-start">
                    <div className="border border-gray-200 w-full">
                        <div className="text-center border-t-2 border-[#183762] py-3">
                            <h1 className="font-bold">ĐIỀU KIỆN CỦA SINH VIÊN</h1>
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    {condition.map((dt,i)=>(
                        <div key={1} dangerouslySetInnerHTML={{__html:dt.content}}/>
                    ))}
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