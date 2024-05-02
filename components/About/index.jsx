import { Roboto } from "next/font/google";
const roboto = Roboto({ subsets: ["latin"],weight:"700" });

const Title = roboto.className;

export default function About(){
    return(
        <div>
            {/* left */}
            <div className="w-full">    
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
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="mt-5">
                            <h1 className={`${Title}`}>Nhân sự</h1>
                            <div className="mt-3 md:mt-0 flex md:flex-row flex-col-reverse justify-between items-start md:items-center">
                                <div className="mt-3 md:mt-0">
                                    <div className="text-sm flex flex-row">
                                        <p>Trưởng phòng: &nbsp;</p>
                                        <em>TS.Nguyễn Thanh Điền</em>
                                    </div>
                                    <div className="text-sm mt-2 flex flex-row">
                                        <p>Email: &nbsp;</p>
                                        <em>dien.nguyenthanh@ttu.edu.vn</em>
                                    </div>
                                </div>
                                <div className="border border-gray-300">
                                    <img src="https://ttu.edu.vn/wp-content/uploads/2022/03/Nguyen-Thanh-Dien-356x220.png" className="w-[153px] h-[110px]"/>
                                </div>
                            </div>
                            <div className="mt-3 md:mt-5 flex md:flex-row flex-col-reverse justify-between items-start md:items-center">
                                <div className="mt-3 md:mt-0">
                                    <div className="text-sm flex flex-row">
                                        <p>Chuyên viên quản lý khoa học: &nbsp;</p>
                                        <em>Ths.Phạm Thị Bảo Trân</em>
                                    </div>
                                    <div className="text-sm mt-2 flex flex-row">
                                        <p>Email: &nbsp;</p>
                                        <em>tran.pham@ttu.edu.vn</em>
                                    </div>
                                </div>
                                <div className="border border-gray-300">
                                    <img src="https://ttu.edu.vn/wp-content/uploads/2022/03/ThS.-Phạm-Thị-Bảo-Trân-356x220.png" className="w-[153px] h-[110px]"/>
                                </div>
                            </div>
                            <div className="mt-3 md:mt-5 flex md:flex-row flex-col-reverse justify-between items-start md:items-center">
                                <div className="mt-3 md:mt-0">
                                    <div className="text-sm flex flex-row">
                                        <p>Chuyên viên quản lý khoa học: &nbsp;</p>
                                        <em>Ths.Nguyễn Bích Ngọc Hương</em>
                                    </div>
                                    <div className="text-sm mt-2 flex flex-row">
                                        <p>Email: &nbsp;</p>
                                        <em>huong.nguyen@ttu.edu.vn</em>
                                    </div>
                                </div>
                                <div className="border border-gray-300">
                                    <img src="images/profile/nguyenbichngochuongcropbg.png" className="w-[153px] h-[110px]"/>
                                </div>
                            </div>
                            <div className="mt-3 md:mt-5 flex md:flex-row flex-col-reverse justify-between items-start md:items-center">
                                <div className="mt-3 md:mt-0">
                                    <div className="text-sm flex flex-row">
                                        <p>Chuyên viên quản lý quốc tế: &nbsp;</p>
                                        <em>CN.Nguyễn Thị Kim Châu</em>
                                    </div>
                                    <div className="text-sm mt-2 flex flex-row">
                                        <p>Email: &nbsp;</p>
                                        <em>chau.nguyen@ttu.edu.vn</em>
                                    </div>
                                </div>
                                <div className="border border-gray-300">
                                    <img src="https://ttu.edu.vn/wp-content/uploads/2022/03/Nguyen-Thi-Kim-Chau-218x150.png" className="w-[153px] h-[110px]"/>
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}