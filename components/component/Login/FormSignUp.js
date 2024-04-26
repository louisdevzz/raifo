import { useState } from "react";
import {createUser} from "../../../hooks/SDK"

export default function FormSignUp ({setIsCreate}){
    
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [fullname,setFullName] = useState('');
    const [email,setEmail] = useState('');

    const handleSetUser = (e)=>{
        const value =  e.target.value;
        const res = /[\=\-_+\s*]/g.exec(value);
        if(!res){
            setUser(value)
        }
    }

    const handleSetPass = (e) =>{
        const value =  e.target.value;
        const res = /[\=\-_+\s*]/g.exec(value);
        if(!res){
            setPass(value)
        }
    }
    const handleSetFullName = (e) =>{
        const value =  e.target.value;
        setFullName(value)
    }
    const handleSetEmail = (e) =>{
        const value =  e.target.value;
        const res = /[\=\-_+\s*]/g.exec(value);
        if(!res){
            setEmail(value)
        }
    }

    const handleCreateUser = async () => {
        const result = await createUser(user,pass,fullname,email);
        if(result.acknowledged == true){
            setIsCreate(false);
        }else{
            setUser('');
            setPass('');
            setEmail('');
            setFullName('');
        }
    }
    return(
        <div class="p-4 md:p-5">                           
            <div class="relative">
                <input onChange={handleSetEmail} value={email} type="email" id="hs-floating-underline-input-email" class="peer focus:outline-none py-5 px-1 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm placeholder:text-transparent focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600 dark:focus:border-b-neutral-600
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
                <input onChange={handleSetUser} value={user} type="text" id="hs-floating-underline-input-email" class="peer focus:outline-none py-5 px-1 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm placeholder:text-transparent focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600 dark:focus:border-b-neutral-600
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
                peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500">Tên đăng nhập</label>
            </div>
            <div class="relative mt-2">
                <input onChange={handleSetPass} value={pass} type="password" id="hs-floating-underline-input-passowrd" class="peer focus:outline-none py-5 px-1 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm placeholder:text-transparent focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600 dark:focus:border-b-neutral-600
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
                peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500">Mật khẩu</label>
            </div>
            <div class="relative mt-2">
                <input onChange={handleSetFullName} value={fullname} type="text" id="hs-floating-underline-input-email" class="peer focus:outline-none py-5 px-1 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm placeholder:text-transparent focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600 dark:focus:border-b-neutral-600
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
                peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500">Họ và Tên</label>
            </div>
            <div className="flex items-center justify-end">
                <div class="flex flex-col w-full sm:w-auto sm:flex-row p-4 mt-12">
                    <button onClick={()=>setIsCreate(false)}
                        class="flex items-center justify-center w-full px-4 py-4 text-sm font-bold leading-6 capitalize duration-100 transform border-2 rounded-sm cursor-pointer border-[#1a5fb4] focus:ring-4 focus:ring-opacity-50 focus:outline-none sm:w-auto sm:px-6 sm:mr-4 border-text  hover:shadow-lg hover:-translate-y-1">
                        Đăng nhập
                    </button>
                    <button onClick={handleCreateUser} class="flex flex-row items-center justify-center w-full px-4 py-4 mb-4 text-sm font-bold bg-[#1a5fb4] leading-6 capitalize duration-100 transform rounded-sm shadow cursor-pointer focus:ring-4 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:w-auto md:pl-8 md:pr-6 xl:pl-5 xl:pr-5  hover:shadow-lg hover:-translate-y-1">
                        Đăng ký
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