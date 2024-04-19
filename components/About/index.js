import { Raleway } from "next/font/google";
const raleway = Raleway({ subsets: ["latin"],weight:"800" });
const ralewayThin = Raleway({subsets:["latin"],weight:"400"});

const Title = raleway.className;
const Subtitle = ralewayThin.className;

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
                <div className="mt-5 md:px-3">
                    <div className="flex flex-col">
                        <p className={`${Title}`}>Phòng Quản Lý Khoa Học và Hợp Tác Quốc Tế</p>
                        <p className={`${Title}`}>Research Administration and International Relation Office</p>
                    </div>
                    <div className="mt-5">
                        <h1 className={`${Title}`}>Nhân sự</h1>
                        <div className="mt-3 md:mt-0 flex md:flex-row flex-col-reverse justify-between items-start md:items-center">
                            <div className="mt-3 md:mt-0">
                                <div className="text-sm flex flex-row">
                                    <p>Trưởng phòng: &nbsp;</p>
                                    <em>TS.Nguyễn Thanh Điền</em>
                                </div>
                                <div className="text-sm flex flex-row">
                                    <p>Email: &nbsp;</p>
                                    <em>dien.nguyenthanh@ttu.edu.vn</em>
                                </div>
                                <div className="text-sm flex flex-row">
                                    <p>Số điện thoại: &nbsp;</p>
                                    <em>0000000000000</em>
                                </div>
                            </div>
                            <div className="border border-gray-300">
                                <img src="https://ttu.edu.vn/wp-content/uploads/2022/03/Nguyen-Thanh-Dien-356x220.png" className="w-[153px] h-[110px]"/>
                            </div>
                        </div>
                        <div className="mt-3 md:mt-5 flex md:flex-row flex-col-reverse justify-between items-start md:items-center">
                            <div className="mt-3 md:mt-0">
                                <div className="text-sm flex flex-row">
                                    <p>Chuyên viên: &nbsp;</p>
                                    <em>Ths.Phạm Thị Bảo Trân</em>
                                </div>
                                <div className="text-sm flex flex-row">
                                    <p>Email: &nbsp;</p>
                                    <em>tran.pham@ttu.edu.vn</em>
                                </div>
                                <div className="text-sm flex flex-row">
                                    <p>Số điện thoại: &nbsp;</p>
                                    <em>0000000000000</em>
                                </div>
                            </div>
                            <div className="border border-gray-300">
                                <img src="https://ttu.edu.vn/wp-content/uploads/2022/03/ThS.-Phạm-Thị-Bảo-Trân-356x220.png" className="w-[153px] h-[110px]"/>
                            </div>
                        </div>
                        <div className="mt-3 md:mt-5 flex md:flex-row flex-col-reverse justify-between items-start md:items-center">
                            <div className="mt-3 md:mt-0">
                                <div className="text-sm flex flex-row">
                                    <p>Chuyên viên: &nbsp;</p>
                                    <em>CN.Nguyễn Thị Kim Châu</em>
                                </div>
                                <div className="text-sm flex flex-row">
                                    <p>Email: &nbsp;</p>
                                    <em>chau.nguyen@ttu.edu.vn</em>
                                </div>
                                <div className="text-sm flex flex-row">
                                    <p>Số điện thoại: &nbsp;</p>
                                    <em>0000000000000</em>
                                </div>
                            </div>
                            <div className="border border-gray-300">
                                <img src="https://img.freepik.com/free-photo/abstract-surface-textures-white-concrete-stone-wall_74190-8189.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1713484800&semt=ais" className="w-[153px] h-[110px]"/>
                            </div>
                        </div>
                        <div className="mt-3 md:mt-5 flex md:flex-row flex-col-reverse justify-between items-start md:items-center">
                            <div className="mt-3 md:mt-0">
                                <div className="text-sm flex flex-row">
                                    <p>Chuyên viên: &nbsp;</p>
                                    <em>Ths.Nguyễn Bích Ngọc Hương</em>
                                </div>
                                <div className="text-sm flex flex-row">
                                    <p>Email: &nbsp;</p>
                                    <em>huong.nguyen@ttu.edu.vn</em>
                                </div>
                                <div className="text-sm flex flex-row">
                                    <p>Số điện thoại: &nbsp;</p>
                                    <em>0000000000000</em>
                                </div>
                            </div>
                            <div className="border border-gray-300">
                                <img src="https://img.freepik.com/free-photo/abstract-surface-textures-white-concrete-stone-wall_74190-8189.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1713484800&semt=ais" className="w-[153px] h-[110px]"/>
                            </div>
                        </div>
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