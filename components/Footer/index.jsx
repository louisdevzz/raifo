"use client"
import { Roboto } from "next/font/google";
const roboto = Roboto({ subsets: ["latin"],weight:"700" });

const Title = roboto.className;

export default function Footer(){
    return(
        <div>
            <div className="bg-gray-100 h-full py-10 md:px-[250px] px-5 mt-[200px]">
                <div className="container max-w-screen-3xl mx-auto md:px-2 ">
                    <div className="flex md:flex-row flex-col gap-[2rem]">
                        <div className="flex flex-col">
                            <h1 className={`${Title} text-xl py-2 border-b border-[#6a6764] w-full md:w-[250px]`}>Thông Tin</h1>
                            <div className="mt-5">
                                <a href="/thongtinchung">Thông Tin Chung</a>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h1 className={`${Title} text-xl py-2 border-b border-[#6a6764] w-full md:w-[250px]`}>Tạp Chí Khoa Học</h1>
                            <div className="mt-5">
                                <ul>
                                    <li>
                                        <a href="https://review.ttu.edu.vn/index.php/review/index">TTU Review</a>
                                    </li>
                                    <li className="mt-2">
                                        <a href="https://tjbs.ttuscience.org/index.php/tjbs">TJBS</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h1 className={`${Title} text-xl py-2 border-b border-[#6a6764] w-full md:w-[250px]`}>Công Trình Nghiên Cứu</h1>
                            <div className="mt-5">
                                <ul>
                                    <li>
                                        <a href="/congtrinhnghiencuu/baibaokhoahoc">Bài báo khoa học</a>
                                    </li>
                                    <li className="mt-2">
                                        <a href="/congtrinhnghiencuu/baibaohoithao">Bài báo hội thảo</a>
                                    </li>
                                    <li className="mt-2">
                                        <a href="/congtrinhnghiencuu/detainghiencuu">Đề tài nghiên cứu</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h1 className={`${Title} text-xl py-2 border-b border-[#6a6764] w-full md:w-[250px]`}>Hoạt Động Khoa Học</h1>
                            <div className="mt-5">
                                <ul>
                                    <li>
                                        <a href="/hoatdongkhoahoc/seminar">Seminar</a>
                                    </li>
                                    <li className="mt-2">
                                        <a href="/hoatdongkhoahoc/tintucsukien">Tin tức - Sự kiện</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h1 className={`${Title} text-xl py-2 border-b border-[#6a6764] w-full md:w-[250px]`}>Hợp Tác Quốc Tế</h1>
                            <div className="mt-5">
                                <ul>
                                    <li>
                                        <a href="/hoptacquocte/cthoptacquocte">Chương trình hợp tác quốc tế</a>
                                    </li>
                                    <li className="mt-2">
                                        <a href="/hoptacquocte/mangluoihoptac">Mạng lưới hợp tác</a>
                                    </li>
                                    <li className="mt-2">
                                        <a href="/hoptacquocte/duanquocte">Dự án quốc tế</a>
                                    </li>
                                    <li className="mt-2">
                                        <a href="/hoptacquocte/traodoisinhvien/dieukien">Điều kiện</a>
                                    </li>
                                    <li className="mt-2">
                                        <a href="/hoptacquocte/traodoisinhvien/doitac">Các trường đối tác</a>
                                    </li>
                                    <li className="mt-2">
                                        <a href="/hoptacquocte/traodoisinhvien/sinhvienquocte">Sinh viên quôc tế</a>
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