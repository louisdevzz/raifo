'use client'
import { useEffect, useState } from "react";
import {formatString,formatStringDescription,reverseArr} from '@/hooks/Tool';
import Events from "@/components/events";

export default function BaiBaoKhoaHoc(){
    const [scientificArticle,setScientificArticle] = useState([]);
    async function loadData(){
        const data = await fetch("/api/scientific-article",{
            method:"GET",
            mode:"cors",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const result = await data.json();
        setScientificArticle(result)
    }
    useEffect(()=>{
        loadData()
    },[])
    
    return(
        setScientificArticle.length > 0 && <div className="grid grid-cols-1 md:grid-cols-3 md:gap-20">
            <div className="col-span-2">
                <div className="flex justify-start items-start">
                    <div className="border border-gray-200 w-full">
                        <div className="text-center border-t-2 border-[#183762] py-3">
                            <h1 className="font-bold">BÀI BÁO KHOA HỌC</h1>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <p className="font-bold text-2xl">2023</p>
                    <div className="flex flex-col gap-5 mt-2">
                        {reverseArr(scientificArticle).map((dt,i)=>(
                                <div className="font-medium flex flex-row" key={i}>
                                    <strong className="mr-2">{dt.idx}.</strong>
                                    <div className="" dangerouslySetInnerHTML={{__html:dt.content}}/>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
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