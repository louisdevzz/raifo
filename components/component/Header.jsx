"use client"
import SubHeader from "./SubHeader";
import { Roboto } from "next/font/google";
import HeaderMobile from "./HeaderMobile";
import Modal from "./Modal";
import { useEffect, useState } from "react";
import FormSignIn from "../component/Login/FormSignIn";
import FormSignUp from "../component/Login/FormSignUp";

const roboto = Roboto({ subsets: ["latin"],weight:"700" });

export default function Header({open,setOpen,isShow,setIsShow}){
    const [isCreate, setIsCreate] = useState(false);
    const [fullname,setFullname] = useState('');
    useEffect(()=>{
        if(localStorage.getItem("fullname")){
            setFullname(localStorage.getItem("fullname"))
        }
    },[])
    const Logout = ()=>{
        localStorage.removeItem("fullname");
        location.replace(location.href);
    }
    return(
        <div>
            <div className="bg-gradient-to-r from-white to-[#2878cf]">
                <div className="container max-w-screen-2xl mx-auto  md:px-20 px-4">
                    <div className="flex flex-row py-5 justify-between items-center">
                        <a href="/">
                            <img src="/images/logo_ttu.png" className="md:w-[120px] md:ml-2 w-[80px]"/>
                        </a>
                        <div className="md:ml-[60px] hidden md:block text-[#183762] text-center text-xl font-semibold">
                            <div className={`${roboto.className} drop-shadow-md`}>PHÒNG QUẢN LÝ KHOA HỌC VÀ HỢP TÁC QUỐC TẾ</div>
                            <div className={`${roboto.className} drop-shadow-md`}>RESEARCH ADMINISTRATION AND INTERNATIONAL RELATION OFFICE</div>
                        </div>
                        {fullname?
                            <div className="ml-12 mr-10 group relative">
                                <div className="flex flex-row items-center gap-3">
                                    <div className="bg-[#183762] p-1 w-10 rounded-full">
                                        <img src="/images/avatar.svg" width={35}/>
                                    </div>
                                </div>
                                <div className="absolute invisible group-hover:visible mt-2 p-3 bg-[#f6f5f4] rounded-lg w-[200px] h-[200px] right-[10px]">
                                    <div className="flex justify-center flex-col items-center gap-5 mt-4">
                                        <div>
                                            <p className="text-lg font-semibold">{fullname}</p>
                                        </div>
                                        <div className="mt-5 w-full">
                                            <button onClick={Logout} className="font-semibold bg-white hover:bg-[#efefef] px-3 py-2 w-full">Đăng xuất</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :<div className="md:ml-[80px] ml-12 flex flex-row gap-5 items-center justify-center">
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
                        }
                    </div>
                </div>
            </div>
            <SubHeader/>
            {isShow?!isCreate?<Modal setIsShow={setIsShow} title={`ĐĂNG NHẬP`} children={<FormSignIn setIsCreate={setIsCreate}/>}/>:<Modal setIsShow={setIsShow} title={`ĐĂNG KÝ`} children={<FormSignUp setIsCreate={setIsCreate}/>}/>:""}
            {open&&<HeaderMobile setOpen={setOpen} setIsShow={setIsShow}/>}
        </div>
    )
}


