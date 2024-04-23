"use client"
import SubHeader from "./SubHeader";
import { Roboto } from "next/font/google";
import HeaderMobile from "./HeaderMobile";
import Modal from "./Modal";
import { useEffect, useRef, useState } from "react";
import {onLogin} from "../../hooks/SDK"

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
            {isShow?!isCreate?<Modal setIsShow={setIsShow} title={`SIGN IN`} children={<ContentLogin setIsCreate={setIsCreate}/>}/>:<Modal setIsShow={setIsShow} title={`REGISTER`} children={<ContentRegister setIsCreate={setIsCreate}/>}/>:""}
            {open&&<HeaderMobile setOpen={setOpen} setIsShow={setIsShow}/>}
        </div>
    )
}

const ContentLogin = ({setIsCreate}) =>{
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const handleLogin = () => {
        onLogin(user,pass,setIsLogin);
        console.log(isLogin)
        if(isLogin){
            location.replace(location.href);
        }else{
            setUser('')
            setPass('');
        }
    }
    return(
        <div class="p-4 md:p-5">                           
            <div class="relative mt-2">
                <input type="email" value={user} onChange={(e)=>setUser(e.target.value)} id="hs-floating-underline-input-email" class="peer focus:outline-none py-5 px-1 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm placeholder:text-transparent focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600 dark:focus:border-b-neutral-600
                focus:pt-8
                focus:pb-2
                [&:not(:placeholder-shown)]:pt-8
                [&:not(:placeholder-shown)]:pb-2
                autofill:pt-6
                autofill:pb-2" placeholder="you@email.com"/>
                <label htmlFor="hs-floating-underline-input-email" class="absolute top-0 start-0 py-4 px-0 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                peer-focus:scale-90
                peer-focus:translate-x-0.5
                peer-focus:-translate-y-1.5
                peer-focus:text-gray-300 dark:peer-focus:text-neutral-500
                peer-[:not(:placeholder-shown)]:scale-90
                peer-[:not(:placeholder-shown)]:translate-x-0.5
                peer-[:not(:placeholder-shown)]:-translate-y-1.5
                peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500">Email</label>
            </div>
            <div class="relative mt-2">
                <input type="password" value={pass} onChange={(e)=>setPass(e.target.value)} id="hs-floating-underline-input-passowrd" class="peer focus:outline-none py-5 px-1 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm placeholder:text-transparent focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600 dark:focus:border-b-neutral-600
                focus:pt-8
                focus:pb-2
                [&:not(:placeholder-shown)]:pt-8
                [&:not(:placeholder-shown)]:pb-2
                autofill:pt-6
                autofill:pb-2" placeholder="********"/>
                <label htmlFor="hs-floating-underline-input-passowrd" class="absolute top-0 start-0 py-4 px-0 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                peer-focus:scale-90
                peer-focus:translate-x-0.5
                peer-focus:-translate-y-1.5
                peer-focus:text-gray-300 dark:peer-focus:text-neutral-500
                peer-[:not(:placeholder-shown)]:scale-90
                peer-[:not(:placeholder-shown)]:translate-x-0.5
                peer-[:not(:placeholder-shown)]:-translate-y-1.5
                peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500">Password</label>
            </div>
            <div className="flex items-center justify-end">
                {/* <button type="submit" class="text-white font-semibold mt-12 inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Đăng Nhập
                </button> */}
                <div class="flex flex-col w-full sm:w-auto sm:flex-row p-4 mt-12">
                    <button onClick={()=>setIsCreate(true)} class="flex flex-row items-center justify-center w-full px-4 py-4 mb-4 text-sm font-bold bg-[#1a5fb4] leading-6 capitalize duration-100 transform rounded-sm shadow cursor-pointer focus:ring-4 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:w-auto sm:mr-4 md:pl-8 md:pr-6 xl:pl-5 xl:pr-5  hover:shadow-lg hover:-translate-y-1">
                        Create your account
                        <span class="ml-4">
                            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" class="w-5 h-5 fill-current"><path fill="currentColor" d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"></path>
                            </svg>
                        </span>
                    </button>
                    <button onClick={handleLogin}
                        class="flex items-center justify-center w-full px-4 py-4 text-sm font-bold leading-6 capitalize duration-100 transform border-2 rounded-sm cursor-pointer border-[#1a5fb4] focus:ring-4 focus:ring-opacity-50 focus:outline-none sm:w-auto sm:px-6 border-text  hover:shadow-lg hover:-translate-y-1">
                        Sign in
                    </button>
                </div>
            </div>
        </div>
    )
}

const ContentRegister = ({setIsCreate}) =>{
    return(
        <div class="p-4 md:p-5">                           
            <div class="relative mt-2">
                <input type="email" id="hs-floating-underline-input-email" class="peer focus:outline-none py-5 px-1 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm placeholder:text-transparent focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600 dark:focus:border-b-neutral-600
                focus:pt-8
                focus:pb-2
                [&:not(:placeholder-shown)]:pt-8
                [&:not(:placeholder-shown)]:pb-2
                autofill:pt-6
                autofill:pb-2" placeholder="you@email.com"/>
                <label htmlFor="hs-floating-underline-input-email" class="absolute top-0 start-0 py-4 px-0 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                peer-focus:scale-90
                peer-focus:translate-x-0.5
                peer-focus:-translate-y-1.5
                peer-focus:text-gray-300 dark:peer-focus:text-neutral-500
                peer-[:not(:placeholder-shown)]:scale-90
                peer-[:not(:placeholder-shown)]:translate-x-0.5
                peer-[:not(:placeholder-shown)]:-translate-y-1.5
                peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500">Email</label>
            </div>
            <div class="relative mt-2">
                <input type="password" id="hs-floating-underline-input-passowrd" class="peer focus:outline-none py-5 px-1 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm placeholder:text-transparent focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600 dark:focus:border-b-neutral-600
                focus:pt-8
                focus:pb-2
                [&:not(:placeholder-shown)]:pt-8
                [&:not(:placeholder-shown)]:pb-2
                autofill:pt-6
                autofill:pb-2" placeholder="********"/>
                <label htmlFor="hs-floating-underline-input-passowrd" class="absolute top-0 start-0 py-4 px-0 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                peer-focus:scale-90
                peer-focus:translate-x-0.5
                peer-focus:-translate-y-1.5
                peer-focus:text-gray-300 dark:peer-focus:text-neutral-500
                peer-[:not(:placeholder-shown)]:scale-90
                peer-[:not(:placeholder-shown)]:translate-x-0.5
                peer-[:not(:placeholder-shown)]:-translate-y-1.5
                peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500">Password</label>
            </div>
            <div class="relative mt-2">
                <input type="text" id="hs-floating-underline-input-email" class="peer focus:outline-none py-5 px-1 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm placeholder:text-transparent focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600 dark:focus:border-b-neutral-600
                focus:pt-8
                focus:pb-2
                [&:not(:placeholder-shown)]:pt-8
                [&:not(:placeholder-shown)]:pb-2
                autofill:pt-6
                autofill:pb-2" placeholder=""/>
                <label htmlFor="hs-floating-underline-input-email" class="absolute top-0 start-0 py-4 px-0 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                peer-focus:scale-90
                peer-focus:translate-x-0.5
                peer-focus:-translate-y-1.5
                peer-focus:text-gray-300 dark:peer-focus:text-neutral-500
                peer-[:not(:placeholder-shown)]:scale-90
                peer-[:not(:placeholder-shown)]:translate-x-0.5
                peer-[:not(:placeholder-shown)]:-translate-y-1.5
                peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500">Full Name</label>
            </div>
            <div className="flex items-center justify-end">
                {/* <button type="submit" class="text-white font-semibold mt-12 inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Đăng Nhập
                </button> */}
                <div class="flex flex-col w-full sm:w-auto sm:flex-row p-4 mt-12">
                    <button onClick={()=>setIsCreate(false)}
                        class="flex items-center justify-center w-full px-4 py-4 text-sm font-bold leading-6 capitalize duration-100 transform border-2 rounded-sm cursor-pointer border-[#1a5fb4] focus:ring-4 focus:ring-opacity-50 focus:outline-none sm:w-auto sm:px-6 sm:mr-4 border-text  hover:shadow-lg hover:-translate-y-1">
                        Sign in
                    </button>
                    <button onClick={()=>setIsCreate(true)} class="flex flex-row items-center justify-center w-full px-4 py-4 mb-4 text-sm font-bold bg-[#1a5fb4] leading-6 capitalize duration-100 transform rounded-sm shadow cursor-pointer focus:ring-4 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:w-auto md:pl-8 md:pr-6 xl:pl-5 xl:pr-5  hover:shadow-lg hover:-translate-y-1">
                        Create your account
                        <span class="ml-4">
                            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" class="w-5 h-5 fill-current"><path fill="currentColor" d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"></path>
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}