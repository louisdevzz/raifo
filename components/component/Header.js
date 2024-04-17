export default function Header(){
    //bg-gradient-to-l from-[#164b8e] to-blue-500
    return(
        <div className="bg-gradient-to-r from-white to-[#2878cf]">
            <div className="container max-w-screen-3xl mx-auto flex flex-row justify-center items-center px-2">
                <div className="flex flex-row py-5 items-center">
                    <div>
                        <img src="https://tjbs.ttuscience.org/public/journals/2/pageHeaderLogoImage_en_US.png" width="120px" height="120px"/>
                    </div>
                    <div className="ml-[100px] text-[#183762] text-center text-xl font-semibold">
                        <div className="drop-shadow-md">PHÒNG QUẢN LÝ KHOA HỌC VÀ HỢP TÁC QUỐC TẾ</div>
                        <div className="drop-shadow-md">RESEARCH ADMINISTRATION AND INTERNATIONAL RELATION OFFICE</div>
                    </div>
                    <div className="ml-[80px] flex flex-row gap-5 items-center justify-center">
                        <div class="relative flex items-center w-full h-8 rounded-2xl focus-within:shadow-lg bg-white overflow-hidden">
                            <div class="grid place-items-center h-full w-12 text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>

                            <input
                            class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                            type="text"
                            id="search"
                            placeholder="Search" /> 
                        </div>
                        <div className="w-full mt-2 flex items-center justify-center">
                            <button type="button" class="text-white bg-[#1a5fb4] hover:bg-[#164b8e] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login / Register</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}