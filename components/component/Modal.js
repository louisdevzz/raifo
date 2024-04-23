export default function Modal({setIsShow,title,children}){

    return(
        <div tabindex="-1" class="fixed bg-black transition duration-300 ease-in-out bg-opacity-75 z-50 flex justify-center items-center overscroll-none inset-0 h-full overflow-hidden max-h-full">
                <div class="relative p-4 w-full max-w-lg max-h-full text-white">
                    <div class="relative bg-gradient-to-r from-blue-800 to-indigo-900 rounded-lg shadow dark:bg-gray-700">
                        <div class="flex items-center justify-center p-4 md:p-5 rounded-t dark:border-gray-600">
                            <h3 class="text-lg text-white text-center font-semibold dark:text-white">
                                <p>{title}</p>
                            </h3>
                            <div className="absolute top-4 right-3">
                                <button type="button" onClick={()=>setIsShow(false)} class="text-white bg-transparent hover:text-gray-400 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                    </svg>
                                    <span class="sr-only">Close modal</span>
                                </button>
                            </div>
                        </div>
                        {children}
                    </div>
                </div>
            </div> 
    )
}