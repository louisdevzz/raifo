import { Raleway } from "next/font/google";
const raleway = Raleway({ subsets: ["latin"],weight:"800" });
const relewayThin = Raleway({subsets:["latin"],weight:"400"})

export default function About(){
    return(
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 container max-w-screen-3xl mx-auto md:mt-12 md:px-[75px] px-3 mt-5">
            {/* left */}
            <div className="w-full md:col-span-2">
                <div className="border border-gray-200">
                    <div className="md:text-start text-center px-3 border-t-2 border-[#183762] py-3">
                        <h1>THÔNG TIN CHUNG</h1>
                    </div>
                </div>
                <div className="mt-2 md:px-3">
                    <div>
                        <span className={`${raleway.className}`}>Tên đơn vị</span>
                        <h1 className={`${relewayThin.className} md:text-lg text-sm`}>Phòng Quản Lý Khoa Học và Hợp Tác Quốc Tế</h1>
                        <h1 className={`${relewayThin.className} md:text-lg text-sm`}>Research Administration and International Relation Office</h1>
                    </div>
                </div>
            </div>
            {/* right */}
            <div className="flex justify-end mt-2 md:mt-0">
                <div className="w-[400px] h-[500px]">
                    <div className="border border-gray-200">
                        <div className="text-center border-t-2 border-[#183762] py-3">
                            <h1>TIN TỨC - SỰ KIỆN</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}