"use client"
import Events from "@/components/events";

export default function CTHopTacQuocTeCP(){
    return(
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-20">
            <div className="col-span-2">
                <div className="flex justify-start items-start">
                    <div className="border border-gray-200 w-full">
                        <div className="text-center border-t-2 border-[#183762] py-3">
                            <h1 className="font-bold">CHƯƠNG TRÌNH HỢP TÁC QUỐC TẾ</h1>
                        </div>
                    </div>
                </div>
                <div className="w-full mt-10">
                    <div className="w-full flex flex-col lg:flex-row gap-8 items-center justify-center">
                        <div className="w-4/12">
                            <img src="https://ttu.edu.vn/wp-content/uploads/2017/03/Tan-Tao-University.jpg" alt="1" />
                        </div>
                        <a href="#" className="flex flex-col gap-3 lg:flex-row">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 12l-18 12v-24z"/></svg>
                            <div className="flex flex-col gap-1">
                                <p className="text-lg font-semibold">Tiếp và làm việc với Lãnh đạo trường Đại học Quốc gia Đông Hoa, Đài Loan</p>
                                <small>12-08-2018</small>
                                <small>Chiều ngày 10/08/2018, Trường Đại học Đông Hoa, Đài Loan (NDHU) do TS. Chao, Han-Chieh, Hiệu trưởng nhà trường dẫn đầu đã đến thăm và làm việc tại Trường Đại học Công nghiệp Thành phố Hồ Chí Minh (IUH).</small>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-span-1 mt-12 md:mt-0 md:w-[80%] flex flex-col gap-20">
                <Events/>
                <div>
                    <div className="flex justify-start items-start">
                        <div className="border border-gray-200 w-full">
                            <div className="text-center border-t-2 border-[#183762] py-3">
                                <h1 className="font-bold">THÔNG BÁO</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}