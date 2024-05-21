'use client'
import { useEffect, useState } from "react";


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
    function formatString(str){
        if(str.length > 63){
            return str.slice(0,63)+"..."
        }else{
            return str;
        }
    }
    
    function formatStringDescription(str){
        if(str.length > 159){
            return str.slice(0,159)+"..."
        }else{
            return str;
        }
    }
    return(
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-20">
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
                        {scientificArticle.map((dt,i)=>(
                                <div className="font-medium flex flex-row">
                                    <strong className="mr-2">{i+1}.</strong>
                                    <div>
                                        <p>{dt.writer}	&ensp;({dt.years}).&ensp;{dt.content}&ensp;{dt.volume}</p>
                                        {dt.link&& <p>{dt.link}</p>}
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
            <div className="col-span-1 mt-12 md:ml-12 md:mt-0 md:w-[80%] flex flex-col gap-20">
                <div>
                    <div className="flex justify-start items-start">
                        <div className="border border-gray-200 w-full">
                            <div className="text-center border-t-2 border-[#183762] py-3">
                                <h1 className="font-bold">TIN TỨC - SỰ KIỆN</h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center flex-col mt-5">
                        <a target="_blank" href="https://ttu.edu.vn/nang-cao-nhan-thuc-ve-tam-quan-trong-cua-cac-ky-nang-the-ky-21-cho-sinh-vien-4cs/" className="flex items-center flex-col">
                            <img src="https://ttu.edu.vn/wp-content/uploads/2024/04/Thmbnail-324x235.jpg" className="w-full"/>
                            <div className="text-xl text-wrap mt-2">
                                <h3>{formatString("Nâng cao nhận thức về tầm quan trọng của các kỹ năng Thế kỷ 21 cho sinh viên: 4C’s")}</h3>
                            </div>
                        </a>
                        <p className="mt-2 text-gray-600">
                            <small>{formatStringDescription("Sáng ngày 25/04/2024, Đại học Tân Tạo đã tổ chức hội thảo chuyên đề với chủ đề “Kỹ năng Thế kỷ 21 và vai trò của chúng trong sự thành công ở hiện tại và trong tương lai của học sinh, sinh viên”.")}</small>
                        </p>
                    </div>
                </div>
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