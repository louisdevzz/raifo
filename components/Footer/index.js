"use client"
import { Roboto } from "next/font/google";
const roboto = Roboto({ subsets: ["latin"],weight:"700" });

const Title = roboto.className;

export default function Footer(){
    return(
        <div>
            <div className="bg-gray-100 md:h-[25vh] h-full py-5 md:px-[250px] px-5 mt-[200px]">
                <div className="container max-w-screen-3xl mx-auto md:px-2 ">
                    <div className="flex md:flex-row flex-col gap-[2rem]">
                        <div className="flex flex-col">
                            <h1 className={`${Title} text-xl py-2 border-b border-[#6a6764] w-[250px]`}>Thông Tin</h1>
                            <div className="mt-5">
                                <p><a href="/about">Thông Tin Chung</a></p>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h1 className={`${Title} text-xl py-2 border-b border-[#6a6764] w-[250px]`}>Tạp Chí Khoa Học</h1>
                            <div className="mt-5">
                                <p>
                                    <a href="https://review.ttu.edu.vn/index.php/review/index">TTU Review</a>
                                </p>
                                <p className="mt-2">
                                    <a href="https://tjbs.ttuscience.org/index.php/tjbs">TJBS</a>
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h1 className={`${Title} text-xl py-2 border-b border-[#6a6764] w-[250px]`}>Công Trình Nghiên Cứu</h1>
                            <div className="mt-5">
                                <p>
                                    <a href="#">Bài báo khoa học</a>
                                </p>
                                <p className="mt-2">
                                    <a href="#">Bài báo hội thảo</a>
                                </p>
                                <p className="mt-2">
                                    <a href="#">Đề tài nghiên cứu</a>
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h1 className={`${Title} text-xl py-2 border-b border-[#6a6764] w-[250px]`}>Hoạt Động Khoa Học</h1>
                            <div className="mt-5">
                                <p>
                                    <a href="#">Seminar</a>
                                </p>
                                <p className="mt-2">
                                    <a href="#">Tin tức - Sự kiện</a>
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h1 className={`${Title} text-xl py-2 border-b border-[#6a6764] w-[250px]`}>Hợp Tác Quốc Tế</h1>
                            <div className="mt-5">
                                <p>
                                    <a href="#">Chương trình hợp tác quốc tế</a>
                                </p>
                                <p className="mt-2">
                                    <a href="#">Mạng lưới hợp tác quốc tế</a>
                                </p>
                                <p className="mt-2">
                                    <a href="#">Dự án quốc tế</a>
                                </p>
                                <p className="mt-2">
                                    <a href="#">Trao đổi sinh viên</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[5vh] border-t border-[#6a6764] flex text-center justify-center items-center">
                <p className="text-sm text-gray-500">Copyright © 2024 Tan Tao University</p>
            </div>
        </div>
    )
}