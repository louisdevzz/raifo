"use client"
import CIcon from '@coreui/icons-react'
import { cilHome } from '@coreui/icons'
export default function SubHeader(){
    return(
        <div className='hidden container max-w-screen-3xl mx-auto md:flex flex-row justify-start items-center px-[75px] gap-5'>
            <a href='/' className='bg-[#164b8e] w-[40px] p-2 flex justify-center items-center'>
                <CIcon icon={cilHome} style={{width:"30px",color:"#ffffff"}}/>
            </a>
            <ul className='flex flex-row justify-between gap-10'>
                <li><a href='/about'>Thông tin chung</a></li>
                <li>Tạp chí khoa học</li>
                <li>Quản lý khoa học</li>
                <li>Họp tác quốc tế</li>
                <li>Văn bản - Biểu mẫu</li>
            </ul>
        </div>
    )
}