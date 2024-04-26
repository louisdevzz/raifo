"use client"
import SubHeader from "./SubHeader";
import { Roboto } from "next/font/google";
import HeaderMobile from "./HeaderMobile";
import Modal from "./Modal";
import { useState } from "react";
import FormSignIn from "../component/Login/FormSignIn";
import FormSignUp from "../component/Login/FormSignUp";

const roboto = Roboto({ subsets: ["latin"],weight:"700" });

export default function Header({open,setOpen,isShow,setIsShow}){
    const [isCreate, setIsCreate] = useState(false);
    return(
        <div>
            <div className="bg-gradient-to-r from-white to-[#2878cf]">
                <div className="container max-w-screen-3xl mx-auto flex flex-row justify-center items-center md:px-2 px-4">
                    <div className="flex flex-row py-5 items-center">
                        <a href="/">
                            <img src="/images/logo_ttu.png" className="md:w-[120px] md:ml-2 w-[80px]"/>
                        </a>
                        <div className="md:ml-[60px] hidden md:block text-[#183762] text-center text-xl font-semibold">
                            <div className={`${roboto.className} drop-shadow-md`}>PHÒNG QUẢN LÝ KHOA HỌC VÀ HỢP TÁC QUỐC TẾ</div>
                            <div className={`${roboto.className} drop-shadow-md`}>RESEARCH ADMINISTRATION AND INTERNATIONAL RELATION OFFICE</div>
                        </div>
                        <div className="md:ml-[80px] ml-12 flex flex-row gap-5 items-center justify-center">
                            <div className="relative flex items-center w-full h-8 rounded-2xl focus-within:shadow-lg bg-white overflow-hidden">
                                <div className="grid place-items-center h-full w-12 text-gray-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>

                                <input
                                className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                                type="text"
                                id="search"
                                placeholder="Tìm kiếm" /> 
                            </div>
                            <div className="md:hidden block">
                                <button className="mt-2" onClick={()=>setOpen(true)}>
                                    <img src="/images/menu.svg" width={45} className="text-[#183762]"/>
                                </button>
                            </div>
                            <div className="w-full hidden mt-2 md:flex items-center justify-center">
                                <button type="button" onClick={()=>setIsShow(!isShow)} className="text-white  bg-[#1a5fb4] hover:bg-[#164b8e] focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Đăng nhập / Đăng ký</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SubHeader/>
            {isShow?!isCreate?<Modal setIsShow={setIsShow} title={`ĐĂNG NHẬP`} children={<FormSignIn setIsCreate={setIsCreate}/>}/>:<Modal setIsShow={setIsShow} title={`ĐĂNG KÝ`} children={<FormSignUp setIsCreate={setIsCreate}/>}/>:""}
            {open&&<HeaderMobile setOpen={setOpen} setIsShow={setIsShow}/>}
        </div>
    )
}


