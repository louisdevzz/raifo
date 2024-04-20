export default function Modal({setIsShow}){
    return(
        <div tabindex="-1" class="fixed bg-black transition duration-300 ease-in-out bg-opacity-75 z-50 flex justify-center items-center overscroll-none inset-0 h-full overflow-hidden max-h-full">
                <div class="relative p-4 w-full max-w-lg max-h-full text-white">
                    <div class="relative bg-gradient-to-r from-blue-800 to-indigo-900 rounded-lg shadow dark:bg-gray-700">
                        <div class="flex items-center justify-center p-4 md:p-5 rounded-t dark:border-gray-600">
                            <h3 class="text-lg text-white text-center font-semibold dark:text-white">
                                <p>SIGN IN</p>
                            </h3>
                            <div className="absolute top-4 right-3">
                                <button type="button" onClick={()=>setIsShow(false)} class="text-white bg-transparent hover:text-gray-400 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                    </svg>
                                    <span class="sr-only">Close modal</span>
                                </button>
                            </div>
                        </div>
                        <form class="p-4 md:p-5">                           
                            <div class="relative">
                                <input type="email" id="hs-floating-underline-input-email" class="peer focus:outline-none py-5 px-1 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm placeholder:text-transparent focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600 dark:focus:border-b-neutral-600
                                focus:pt-8
                                focus:pb-2
                                [&:not(:placeholder-shown)]:pt-8
                                [&:not(:placeholder-shown)]:pb-2
                                autofill:pt-6
                                autofill:pb-2" placeholder="you@email.com"/>
                                <label for="hs-floating-underline-input-email" class="absolute top-0 start-0 py-4 px-0 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                                peer-focus:scale-90
                                peer-focus:translate-x-0.5
                                peer-focus:-translate-y-1.5
                                peer-focus:text-gray-300 dark:peer-focus:text-neutral-500
                                peer-[:not(:placeholder-shown)]:scale-90
                                peer-[:not(:placeholder-shown)]:translate-x-0.5
                                peer-[:not(:placeholder-shown)]:-translate-y-1.5
                                peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500">Email</label>
                            </div>
                            <div class="relative">
                                <input type="password" id="hs-floating-underline-input-passowrd" class="peer focus:outline-none py-5 px-1 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm placeholder:text-transparent focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600 dark:focus:border-b-neutral-600
                                focus:pt-8
                                focus:pb-2
                                [&:not(:placeholder-shown)]:pt-8
                                [&:not(:placeholder-shown)]:pb-2
                                autofill:pt-6
                                autofill:pb-2" placeholder="********"/>
                                <label for="hs-floating-underline-input-passowrd" class="absolute top-0 start-0 py-4 px-0 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
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
                                    <a href=""
                                        class="flex flex-row items-center justify-center w-full px-4 py-4 mb-4 text-sm font-bold bg-[#1a5fb4] leading-6 capitalize duration-100 transform rounded-sm shadow cursor-pointer focus:ring-4 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:w-auto sm:mr-4 md:pl-8 md:pr-6 xl:pl-5 xl:pr-5  hover:shadow-lg hover:-translate-y-1">
                                        Create your account
                                        <span class="ml-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" class="w-5 h-5 fill-current"><path fill="currentColor" d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"></path>
                                            </svg>
                                        </span>
                                    </a>
                                    <a href=""
                                        class="flex items-center justify-center w-full px-4 py-4 text-sm font-bold leading-6 capitalize duration-100 transform border-2 rounded-sm cursor-pointer border-[#1a5fb4] focus:ring-4 focus:ring-opacity-50 focus:outline-none sm:w-auto sm:px-6 border-text  hover:shadow-lg hover:-translate-y-1">
                                        Sign in
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div> 
    )
}