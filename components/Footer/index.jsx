"use client"
import { Roboto } from "next/font/google";
import { url } from "../../utils/config";
const roboto = Roboto({ subsets: ["latin"],weight:"700" });

const Title = roboto.className;

export default function Footer(){
    return(
        <div>
            <div className="bg-gray-100 h-full py-10 px-5 mt-[200px]">
                <div className="xl:max-w-screen-2xl lg:max-w-screen-xl max-w-screen-lg mx-auto lg:px-12 ">
                    <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-1">
                        <div className="flex flex-col">
                            <h1 className={`${Title} text-xl py-2 border-b border-[#6a6764] w-full md:w-[250px]`}>Thông Tin</h1>
                            <div className="mt-5">
                                <a href={url.thongtinchung}>Thông Tin Chung</a>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h1 className={`${Title} text-xl py-2 border-b border-[#6a6764] w-full md:w-[250px]`}>Tạp Chí Khoa Học</h1>
                            <div className="mt-5">
                                <ul>
                                    <li>
                                        <a href={url.tapchikhoahoc.ttuReview}>TTU Review</a>
                                    </li>
                                    <li className="mt-2">
                                        <a href={url.tapchikhoahoc.tjbs}>TJBS</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h1 className={`${Title} text-xl py-2 border-b border-[#6a6764] w-full md:w-[250px]`}>Công Trình Nghiên Cứu</h1>
                            <div className="mt-5">
                                <ul>
                                    <li>
                                        <a href={url.quanlykhoahoc.congtrinhnghiencuu.baibaokhoahoc}>Bài báo khoa học</a>
                                    </li>
                                    <li className="mt-2">
                                        <a href={url.quanlykhoahoc.congtrinhnghiencuu.baibaohoithao}>Bài báo hội thảo</a>
                                    </li>
                                    <li className="mt-2">
                                        <a href={url.quanlykhoahoc.congtrinhnghiencuu.detainghiencuu}>Đề tài nghiên cứu</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h1 className={`${Title} text-xl py-2 border-b border-[#6a6764] w-full md:w-[250px]`}>Hoạt Động Khoa Học</h1>
                            <div className="mt-5">
                                <ul>
                                    <li>
                                        <a href={url.quanlykhoahoc.hoatdongkhoahoc.seminar}>Seminar</a>
                                    </li>
                                    <li className="mt-2">
                                        <a href={url.quanlykhoahoc.hoatdongkhoahoc.tintucsukien}>Tin tức - Sự kiện</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h1 className={`${Title} text-xl py-2 border-b border-[#6a6764] w-full md:w-[250px]`}>Hợp Tác Quốc Tế</h1>
                            <div className="mt-5">
                                <ul>
                                    <li>
                                        <a href={url.hoptacquocte.cthoptacquocte}>Chương trình hợp tác quốc tế</a>
                                    </li>
                                    <li className="mt-2">
                                        <a href={url.hoptacquocte.mangluoihoptac}>Mạng lưới hợp tác</a>
                                    </li>
                                    <li className="mt-2">
                                        <a href={url.hoptacquocte.duanquocte}>Dự án quốc tế</a>
                                    </li>
                                    <li className="mt-2">
                                        <a href={url.hoptacquocte.traodoisinhvien.dieukien}>Điều kiện</a>
                                    </li>
                                    <li className="mt-2">
                                        <a href={url.hoptacquocte.traodoisinhvien.doitac}>Các trường đối tác</a>
                                    </li>
                                    <li className="mt-2">
                                        <a href={url.hoptacquocte.traodoisinhvien.sinhvienquocte}>Sinh viên quôc tế</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:h-[5vh] h-full py-2 md:py-0 w-full border-t border-[#6a6764] flex text-center justify-center items-center">
                <p className="text-sm text-gray-500">Copyright © 2024 Tan Tao University</p>
            </div>
        </div>
    )
}