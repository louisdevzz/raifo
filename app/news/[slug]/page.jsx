"use client"
import { useParams } from "next/navigation";
import { useState,useEffect } from "react";
import Events from "@/components/events"

export default function News(){
    const { slug } = useParams();
    const [events,setEvents] = useState([]);
    async function loadEvents(){
        const result = await fetch("/api/events",{
            method:"POST",
            mode:"cors",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                slug: slug
            })
        });
        const rs = await result.json();
        setEvents(rs)
    }
    useEffect(()=>{
        loadEvents()
    },[])
    return(
        <div className="w-full grid grid-cols-1 lg:grid-cols-3">
            {events.map((dt)=>(
                <div className="w-full col-span-2 items-start justify-start flex flex-col" key={1}>
                    <h1 className="font-bold text-3xl">{dt.title}</h1>
                    <div className="mt-5 flex flex-col justify-center items-center" dangerouslySetInnerHTML={{__html:dt.content}}/>
                </div>
            ))}
            <div className="col-span-1 mt-12 md:ml-12 md:mt-0 md:w-[80%] flex flex-col gap-20">
                <Events/>
                <div className="flex w-full justify-start items-start h-72">
                    <div className="border border-gray-200 w-full">
                        <div className="text-center border-t-2 border-[#183762] py-3">
                            <h1 className="font-bold">THÔNG BÁO</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}