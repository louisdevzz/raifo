"use client"
import CIcon from '@coreui/icons-react';
import { cilHome } from '@coreui/icons';
import { useState,useEffect } from 'react';
import { NewsPaper,SManagement,InalCooperation } from '../../utils/utils';
import { DropDownMenu } from '../component/DropDownMenu'

export default function SubHeader(){
    const [fullname, setFullname] = useState('');

    useEffect(() => {
        const getFullname = localStorage.getItem("fullname") ? localStorage.getItem("fullname") : null;
        setFullname(getFullname);
    }, []);
    const onLogout = ()=>{
        localStorage.removeItem("fullname");
        location.replace(location.href);
    }

    return(
        <div className='hidden xl:max-w-screen-2xl lg:max-w-screen-xl max-w-screen-lg mx-auto md:flex flex-row md:px-4 lg:px-10 xl:px-[75px] gap-5'>
            <a href='/' className='bg-[#164b8e] w-[40px] p-2 flex justify-center items-center'>
                <CIcon icon={cilHome} style={{width:"30px",color:"#ffffff"}}/>
            </a>
            <div className='flex justify-between w-full'>
                <ul className='flex flex-row justify-between gap-10'>
                    <li>
                        <a href='/thongtinchung'>
                            <div className='py-2 cursor-pointer'>Thông tin chung</div>
                        </a>
                    </li>
                    <li className='relative group'>
                        <DropDownMenu title={"Tạp Chí Khoa Học"} children={NewsPaper}/>
                    </li>
                    <li className='relative group'>
                        <DropDownMenu title={"Quản lý khoa học"} children={SManagement}/>
                    </li>
                    <li className='relative group'>
                        <DropDownMenu title={"Hợp tác quốc tế"} children={InalCooperation}/>
                    </li>
                    <li>
                        <a href='#'>
                            <div className='py-2 cursor-pointer'>Văn bản - Biểu mẫu</div>
                        </a>
                    </li>
                </ul>
                {fullname&&
                <div className="group relative">
                    <div className='p-2 relative px-4 cursor-pointer flex flex-row items-center gap-2'>
                        <p>{fullname}</p>
                        <div>
                            <img src='/images/arrow-down.svg' width={10}/>
                        </div>
                    </div>
                    <div className='absolute py-3 invisible group-hover:visible shadow-md bg-white w-[180px] border-t-4 border-[#164b8e]'>
                        <div>
                            <button onClick={onLogout} className="px-3 py-2 w-full hover:bg-[#164b8e] hover:text-white text-start">Đăng xuất</button>
                        </div>
                    </div>
                </div>
                }
                
            </div>
        </div>
    )
}

