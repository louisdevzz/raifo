'use client'
import { useEffect, useState } from "react";
import { formatString,formatStringDescription } from "@/hooks/Tool";

export default function Home(){
    const [scientificArticle,setScientificArticle] = useState([]);
    const [titleResearch,setTitleResearch] = useState([]);
    const [events,setEvents] = useState([]);
    async function loadData(){
        const data = await fetch("/api/scientific-article",{
            method:"GET",
            mode:"cors",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const result = await data.json();
        const trs = await fetch("/api/title-research",{
            method:"GET",
            mode:"cors",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const rs = await trs.json();
        setScientificArticle(result)
        setTitleResearch(rs)
    }
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
        loadData()
        loadEvents()
    },[])
    return(
        <div>
            <div className="md:mt-10 mt-2">
                <img src="images/background/background_home.jpg" className=""/>
            </div>
            <div className="mt-5">
                <p>The TTU Journal of Biomedical Sciences (TJBS) is a new peer-reviewed journal covering all areas of Biomedical Research published by Tan Tao University. The TJBS aims to launch the first issue in October 2022. We expect you could make an excellent contribution based on your expertise and recent achievements in the following areas: clinical science, dental, nursing, other related medical fields, and biotechnology.</p>
            </div>
            <div className="grid md:grid-cols-4 grid-cols-1 md:gap-5 mt-10">
                <div className="mt-2 md:mt-0 w-full h-full lg:h-[500px] md:col-span-1">
                    <div className="flex items-center flex-col">
                        <div className="border border-gray-200 w-full">
                            <div className="text-center border-t-2 border-[#183762] py-3">
                                <h1 className="font-bold">TIN TỨC - SỰ KIỆN</h1>
                            </div>
                        </div>
                        {events.length>0?events.slice(0,1).map((dt,i)=>(
                            <div className="flex items-center flex-col mt-5" key={i}>
                                <a href={`/news/${dt.slug}`} className="flex items-center flex-col">
                                    <img src={dt.image} className="w-full"/>
                                    <div className="text-lg text-wrap mt-2">
                                        <h3 className="font-semibold">{formatString(dt.title)}</h3>
                                    </div>
                                </a>
                                <div dangerouslySetInnerHTML={{__html:formatStringDescription(dt.content)}} className="mt-2 text-sm text-gray-500"></div>
                            </div>
                        )):(
                            <div className="flex justify-center items-center mt-32 m-auto">
                                <svg className="w-12 h-12 text-gray-300 animate-spin" viewBox="0 0 64 64" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                    <path
                                        d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                                        stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path
                                        d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                                        stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" className="text-gray-900">
                                    </path>
                                </svg>
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex justify-end mt-5 md:mt-0 md:col-span-2">
                    <div className="w-full h-full md:h-[500px]">
                        <div className="border border-gray-200">
                            <div className="text-center border-t-2 border-[#183762] py-3">
                                <h1 className="font-bold">BÀI BÁO KHOA HỌC</h1>
                            </div>
                        </div>
                        <div className="mt-5 flex flex-col gap-3 lg:h-72 h-full text-base">
                            {scientificArticle.length>0?scientificArticle.slice(0,2).map((dt,i)=>(
                                <div className="font-medium flex flex-row" key={i}>
                                    <strong className="mr-2">{i+1}.</strong>
                                    <div dangerouslySetInnerHTML={{__html:dt.content}}/>
                                </div>
                            )):(
                                <div className="flex justify-center items-center m-auto">
                                    <svg className="w-12 h-12 text-gray-300 animate-spin" viewBox="0 0 64 64" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                        <path
                                            d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                                            stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path
                                            d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                                            stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" className="text-gray-900">
                                        </path>
                                    </svg>
                                </div>
                            )}
                        </div>                      
                        <div className="mt-4 border-t-2 border-[#2a5389] text-right">
                            <a href="/congtrinhnghiencuu/baibaokhoahoc">
                                <p className="py-3 text-[#183a66] font-semibold">Xem thêm &gt;</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end mt-12 md:mt-0 md:col-span-1">
                    <div className="w-full h-full md:h-[500px]">
                        <div className="border border-gray-200">
                            <div className="text-center border-t-2 border-[#183762] py-3">
                                <h1 className="font-bold">ĐỀ TÀI NGHIÊN CỨU</h1>
                            </div>
                        </div>
                        <div className="mt-5 flex flex-col gap-5 lg:h-72 h-full text-base">
                            {titleResearch.length > 0 ? titleResearch.slice(0,4).map((data,i)=>(
                                <div className="font-medium" key={i}>
                                    <p>{formatString(data.title)}</p>
                                </div>
                            )):(
                                <div className="flex justify-center items-center m-auto">
                                    <svg className="w-12 h-12 text-gray-300 animate-spin" viewBox="0 0 64 64" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                        <path
                                            d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                                            stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path
                                            d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                                            stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" className="text-gray-900">
                                        </path>
                                    </svg>
                                </div>
                            )}
                            
                        </div>
                        <div className="mt-4 border-t-2 border-[#2a5389] text-right">
                            <a href="/congtrinhnghiencuu/detainghiencuu">
                                <p className="py-3 text-[#183a66] font-semibold">Xem thêm &gt;</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


