"use client"
import Header from "../component/Header"
import Footer from "../Footer"
import { useState } from "react"

export default function Home(){
    const [open,setOpen] = useState(false);
    const [isShow,setIsShow] = useState(false);

    const isOpen = isShow?isShow:open;

    return(
        <div className={`${isOpen?"fixed":""}`}>
            <Header open={open} setOpen={setOpen} setIsShow={setIsShow} isShow={isShow}/>
            <div className="container max-w-screen-3xl mx-auto flex flex-col justify-center items-center px-3 md:px-[75px]">
                <div className="md:mt-12 mt-2">
                    <img src="https://tjbs.ttuscience.org/public/journals/2/homepageImage_en_US.jpg"/>
                </div>
                <div className="mt-5">
                    <p>The TTU Journal of Biomedical Sciences (TJBS) is a new peer-reviewed journal covering all areas of Biomedical Research published by Tan Tao University. The TJBS aims to launch the first issue in October 2022. We expect you could make an excellent contribution based on your expertise and recent achievements in the following areas: clinical science, dental, nursing, other related medical fields, and biotechnology.</p>
                </div>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-10 mt-10">
                    <div className="flex justify-end mt-2 md:mt-0">
                        <div className="w-[500px] h-[500px]">
                            <div className="border border-gray-200">
                                <div className="text-center border-t-2 border-[#183762] py-3">
                                    <h1 className="font-bold">TIN TỨC - SỰ KIỆN</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end mt-2 md:mt-0">
                        <div className="w-[500px] h-[500px]">
                            <div className="border border-gray-200">
                                <div className="text-center border-t-2 border-[#183762] py-3">
                                    <h1 className="font-bold">CÔNG TRÌNH NGHIÊN CỨU</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end mt-2 md:mt-0">
                        <div className="w-[500px] h-[500px]">
                            <div className="border border-gray-200">
                                <div className="text-center border-t-2 border-[#183762] py-3">
                                    <h1 className="font-bold">TẠP CHÍ KHOA HỌC</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}