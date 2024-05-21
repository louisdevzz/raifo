'use client'
import { useState,useEffect } from "react"

export default function DeTaiNghienCuu(){
    const [titleResearch, setTitleResearch] = useState([]);
    const [titleResearchStudent, setTitleResearchStudent] = useState([]);
    async function loadData(){
        const trs = await fetch("/api/title-research",{
            method:"GET",
            mode:"cors",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const rs = await trs.json();
        const student = rs.filter((data)=>data.job == "student")
        setTitleResearchStudent(student);
        setTitleResearch(rs)
    }
    useEffect(()=>{
        loadData()
    },[])
    return(
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20">
            <div className="col-span-1">
                <div className="flex justify-start items-start">
                    <div className="border border-gray-200 w-full">
                        <div className="text-center border-t-2 border-[#183762] py-3">
                            <h1 className="font-bold">ĐỀ TÀI NGHIÊN CỨU GIẢNG VIÊN</h1>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    {titleResearch.map((dt,i)=>(
                        <div className="mt-3 flex flex-col gap-3" key={i}>
                            <div className="flex flex-row">
                                <strong className="mr-2">1.</strong>
                                <p>{dt.title}</p>
                            </div>
                            <p className="mt-3">({dt.titleEN})</p>
                            <div className="mt-3">
                                <div className="flex flex-row">
                                    <strong className="mr-2">Mã số: </strong>
                                    <p>{dt.volume}</p>
                                </div>
                                <div className="flex flex-row">
                                    <strong className="mr-2">Người tham gia: </strong>
                                    <p>{dt.writer}</p>
                                </div>
                                <div className="flex flex-row">
                                    <strong className="mr-2">Chương trình tài trợ: </strong>
                                    <p>{dt.sponorship}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="col-span-1">
                <div className="flex justify-start items-start">
                    <div className="border border-gray-200 w-full">
                        <div className="text-center border-t-2 border-[#183762] py-3">
                            <h1 className="font-bold">ĐỀ TÀI NGHIÊN CỨU SINH VIÊN</h1>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    {titleResearchStudent.length > 0 && titleResearchStudent.map((dt,i)=>(
                        <div className="mt-3 flex flex-col gap-3" key={i}>
                            <div className="flex flex-row">
                                <strong className="mr-2">1.</strong>
                                <p>{dt.title}</p>
                            </div>
                            <p className="mt-3">({dt.titleEN})</p>
                            <div className="mt-3">
                                <div className="flex flex-row">
                                    <strong className="mr-2">Mã số: </strong>
                                    <p>{dt.volume}</p>
                                </div>
                                <div className="flex flex-row">
                                    <strong className="mr-2">Người tham gia: </strong>
                                    <p>{dt.writer}</p>
                                </div>
                                <div className="flex flex-row">
                                    <strong className="mr-2">Chương trình tài trợ: </strong>
                                    <p>{dt.sponorship}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}