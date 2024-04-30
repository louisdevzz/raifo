"use client"
import CIcon from '@coreui/icons-react';
import { cilHome } from '@coreui/icons';
import { useState } from 'react';

export default function HeaderMobile({setOpen,setIsShow}){
    return(
        <div
            role="dialog"
            class="z-50 absolute overflow-auto overscroll-auto gap-4 bg-white py-6 pb-20 px-3 shadow-lg inset-y-0 right-0 h-screen border-l ease-in-out duration-500 transition sm:max-w-sm w-[100%] sm:max-lg:max-w-[75%] md:max-w-[50%]"
            tabindex="-1"
            style={{ pointerEvents: "auto", width: "100%" }}
            >
                <div class="flex flex-col sm:text-left">
                    <div>
                        <a href='/' className='bg-[#164b8e] w-[40px] p-2 flex justify-center items-center'>
                            <CIcon icon={cilHome} style={{width:"30px",color:"#ffffff"}}/>
                        </a>
                        <button
                            onClick={()=>setOpen(false)}
                            type="button"
                            class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"
                        >
                            <img src="/images/close.svg/" width={40}/>
                        </button>
                    </div>
                    <div className="mt-[30px] flex flex-col justify-center items-center">
                        <div className="flex flex-row items-center gap-3">
                            <div className="bg-gray-700 p-1 w-12 rounded-full">
                                <img src="/images/avatar.svg" width={40}/>
                            </div>
                            <button role='button' onClick={()=>{setOpen(false);setIsShow(true)}}>
                                <p className="font-bold text-xl text-[#183762]">Đăng nhập / Đăng ký</p>
                            </button>
                        </div>
                    </div>
                    <div className="mt-10 flex flex-col justify-start">
                        <div className="px-1 py-2 text-xl border-b border-[#183762] font-semibold text-[#183762]">
                            <div>
                                <a href="/about">Thông tin chung</a>
                            </div>
                        </div>
                        <DropDownMenu title={"Tạp chí khoa học"}>
                            <p className='text-lg border-b border-[#867770] py-1'>
                                <a href="https://review.ttu.edu.vn/index.php/review/index">TTU Review</a>
                            </p>
                            <p className='text-lg border-b border-[#867770] py-1'>
                                <a href="https://tjbs.ttuscience.org/index.php/tjbs">TJBS</a>
                            </p>
                        </DropDownMenu>
                        <DropDownMenu title={"Quản lý khoa học"}>
                            <p className='text-lg py-1'>
                                <DropDownMenu title={"Công trình nghiên cứu"} options={true}>
                                    <p className='text-lg border-b border-[#867770] py-1'>
                                        <a href="#">Bài báo khoa học</a>
                                    </p>
                                    <p className='text-lg border-b border-[#867770] py-1'>
                                        <a href="#">Bài báo hội thảo</a>
                                    </p>
                                    <p className='text-lg border-b border-[#867770] py-1'>
                                        <a href="#">Đề tài nghiên cứu</a>
                                    </p>
                                </DropDownMenu>
                            </p>
                            <p className='text-lg py-1'>
                                <DropDownMenu title={"Hoạt động khoa học"} options={true}>
                                    <p className='text-lg border-b border-[#867770] py-1'>
                                        <a href="#">Seminar</a>
                                    </p>
                                    <p className='text-lg border-b border-[#867770] py-1'>
                                        <a href="#">Tin tức - Sự kiện</a>
                                    </p>
                                </DropDownMenu>
                            </p>
                        </DropDownMenu>
                        <DropDownMenu title={"Hợp tác quốc tế"}>
                            <p className='text-lg border-b border-[#867770] py-1'>
                                <a href="#">Chương trình hợp tác quốc tế</a>
                            </p>
                            <p className='text-lg border-b border-[#867770] py-1'>
                                <a href="#">Mạng lưới hợp tác</a>
                            </p>
                            <p className='text-lg border-b border-[#867770] py-1'>
                                <a href="#">Dự án quốc tế</a>
                            </p>
                            <p className='text-lg'>
                                <DropDownMenu title={"Trao đổi sinh viên"} options={true}>
                                    <p className='text-lg border-b border-[#867770] py-1'>
                                        <a href="#">Điều kiện</a>
                                    </p>
                                    <p className='text-lg border-b border-[#867770] py-1'>
                                        <a href="#">Các trường đối tác</a>
                                    </p>
                                    <p className='text-lg border-b border-[#867770] py-1'>
                                        <a href="#">Sinh viên quốc tế</a>
                                    </p>
                                </DropDownMenu>
                            </p>
                        </DropDownMenu>
                    </div>
                </div>
            </div>
    )
}

const DropDownMenu = ({children,title,options}) => {
    const [open,setOpen] = useState(false)
    return(
        <div>
            <button onClick={()=>setOpen(!open)} className={`flex flex-row gap-3 justify-between items-center ${options?"text-lg py-2":"text-xl px-1 mt-1 py-3 text-[#183762] font-semibold "} border-b border-[#183762] w-full`}>
                <p>{title}</p>
                {open?<img src="/images/arrow-up.svg" width={options?18:22} className='mr-2'/>:<img src="/images/arrow-down.svg" width={options?12:15} className='mr-2'/>}
            </button>
            {open&&<div className='px-1 py-1 bg-[#f6f5f4]'>
            <div className='ml-10'>
                {children}
            </div>
        </div>}
        </div>
    )
}