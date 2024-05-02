"use client"
import Header from "../component/Header"
import Footer from "../Footer"
import { useState } from "react"

export default function Home(){
    const [open,setOpen] = useState(false);
    const [isShow,setIsShow] = useState(false);

    const isOpen = isShow?isShow:open;

    return(
        <div className={`${isOpen?"fixed right-0 left-0":""}`}>
            <Header open={open} setOpen={setOpen} setIsShow={setIsShow} isShow={isShow}/>
            <div className="container max-w-screen-3xl mx-auto flex flex-col justify-center items-center px-3 md:px-[75px]">
                <div className="md:mt-12 mt-2">
                    <img src="images/background/background_home.jpg" className=""/>
                </div>
                <div className="mt-5">
                    <p>The TTU Journal of Biomedical Sciences (TJBS) is a new peer-reviewed journal covering all areas of Biomedical Research published by Tan Tao University. The TJBS aims to launch the first issue in October 2022. We expect you could make an excellent contribution based on your expertise and recent achievements in the following areas: clinical science, dental, nursing, other related medical fields, and biotechnology.</p>
                </div>
                <div className="grid md:grid-cols-4 grid-cols-1 gap-10 mt-10">
                    <div className="mt-2 md:mt-0 h-[500px] col-span-1">
                        <div className="flex items-center flex-col">
                            <div className="border border-gray-200 w-full">
                                <div className="text-center border-t-2 border-[#183762] py-3">
                                    <h1 className="font-bold">TIN TỨC - SỰ KIỆN</h1>
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
                    </div>
                    <div className="flex justify-end mt-2 md:mt-0 col-span-2">
                        <div className="w-full h-[500px]">
                            <div className="border border-gray-200">
                                <div className="text-center border-t-2 border-[#183762] py-3">
                                    <h1 className="font-bold">BÀI BÁO KHOA HỌC</h1>
                                </div>
                            </div>
                            <div className="mt-5 flex flex-col gap-3 text-base">
                                <div className="font-medium flex flex-row">
                                    <strong className="mr-2">225.</strong>
                                    <p>Vien T. Truong., Tam Ngo., Hoang N.H. Duong., Vivek Patel.,Phan Q. Dai., Mansoor Ahmad., Krunalkumar Patel., Abhishek Dutta., Amna Khan., Syed Muhammad Usama., Minh A. Vo., Devendra Tripathi. (2023). Revascularization In Patients With Ischemic Cardiomyopathy And Viability: A Meta-analysis Of Randomized Controlled Trials. Abstract, Control # 2023-SS-A-16558-AHA.</p>
                                </div>
                                <div className="font-medium flex flex-row">
                                    <strong className="mr-2">225.</strong>
                                    <p>Vien T. Truong., Tam Ngo., Hoang N.H. Duong., Vivek Patel.,Phan Q. Dai., Mansoor Ahmad., Krunalkumar Patel., Abhishek Dutta., Amna Khan., Syed Muhammad Usama., Minh A. Vo., Devendra Tripathi. (2023). Revascularization In Patients With Ischemic Cardiomyopathy And Viability: A Meta-analysis Of Randomized Controlled Trials. Abstract, Control # 2023-SS-A-16558-AHA.</p>
                                </div>
                                <div className="mt-4 border-t border-[#2a5389] text-right">
                                    <a href="#">
                                        <p className="py-3 text-[#183a66] font-semibold">Xem thêm &gt;</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end mt-2 md:mt-0 col-span-1">
                        <div className="w-full h-[500px]">
                            <div className="border border-gray-200">
                                <div className="text-center border-t-2 border-[#183762] py-3">
                                    <h1 className="font-bold">ĐỀ TÀI NGHIÊN CỨU</h1>
                                </div>
                            </div>
                            <div className="mt-5 flex flex-col gap-5 text-base">
                                <div className="font-medium">
                                    <p>{formatString("Kiến thức, thái độ và thực hành về tiêm phòng cúm mùa của sinh viên Khoa Y Trường Đại học Tân Tạo.")}</p>
                                </div>
                                <div className="font-medium">
                                    <p>{formatString("Tổng hợp nano bạc bằng phương pháp sinh học sử dụng dịch chiết của thực vật và khảo sát hoạt tính kháng khuẩn của hạt nano.")}</p>
                                </div>
                                <div className="font-medium">
                                    <p>{formatString("Tổng hợp nano bạc bằng phương pháp sinh học sử dụng dịch chiết của thực vật và khảo sát hoạt tính kháng khuẩn của hạt nano.")}</p>
                                </div>
                                <div className="font-medium">
                                    <p>{formatString("Tổng hợp nano bạc bằng phương pháp sinh học sử dụng dịch chiết của thực vật và khảo sát hoạt tính kháng khuẩn của hạt nano.")}</p>
                                </div>
                                <div className="mt-2 border-t border-[#2a5389] text-right">
                                    <a href="#">
                                        <p className="py-3 text-[#183a66] font-semibold">Xem thêm &gt;</p>
                                    </a>
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
