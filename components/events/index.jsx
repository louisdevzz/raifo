import {formatString,formatStringDescription} from "@/hooks/Tool"
import { useState,useEffect } from "react";

export default function Events(){
    const [events,setEvents] = useState([]);
    async function loadEvents(){
        const result = await fetch("/api/events",{
            method:"GET",
            mode:"cors",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const rs = await result.json();
        setEvents(rs)
    }
    useEffect(()=>{
        loadEvents()
    },[])
    return(
        events.length>0&&<div>
            <div className="flex justify-start items-start">
                <div className="border border-gray-200 w-full">
                    <div className="text-center border-t-2 border-[#183762] py-3">
                        <h1 className="font-bold">TIN TỨC - SỰ KIỆN</h1>
                    </div>
                </div>
            </div>
            {events.slice(0,1).map((dt,i)=>(
                <div className="flex items-center flex-col mt-5 gap-2" key={i}>
                    <a target="_blank" href={`/news/${dt.slug}`} className="flex items-center flex-col">
                        <img src={dt.image} className="w-full"/>
                        <div className="text-lg text-wrap mt-2">
                            <h3 className="font-semibold">{formatString(dt.title)}</h3>
                        </div>
                    </a>
                    <div dangerouslySetInnerHTML={{__html:formatStringDescription(dt.content)}} className="mt-2 text-sm text-gray-500"></div>
                </div>
            ))}
        </div>
    )
}