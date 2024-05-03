"use client"
import CIcon from '@coreui/icons-react';
import { cilHome } from '@coreui/icons';
import { useState,useEffect } from 'react';
import { url } from '../../utils/config';

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
    const NewsPaper = [
        {
            title:"TTU Review",
            url: url.tapchikhoahoc.ttuReview
        },
        {
            title:"TJBS",
            url: url.tapchikhoahoc.tjbs
        }
    ];
    const SManagement = [
        {
            title:"Công trình nghiên cứu",
            children:[
                {
                    name:"Bài báo khoa học",
                    url: url.quanlykhoahoc.congtrinhnghiencuu.baibaokhoahoc
                },
                {
                    name:"Bài báo hội thảo",
                    url: url.quanlykhoahoc.congtrinhnghiencuu.baibaohoithao
                },
                {
                    name:"Đề tài nghiên cứu",
                    url: url.quanlykhoahoc.congtrinhnghiencuu.detainghiencuu
                }
            ]
        },
        {
            title:"Hoạt động khoa học",
            children:[
                {
                    name:"Seminar",
                    url:url.quanlykhoahoc.hoatdongkhoahoc.seminar
                },
                {
                    name:"Tin tức - sự kiện",
                    url:url.quanlykhoahoc.hoatdongkhoahoc.tintucsukien
                }
            ]
        }
    ];    
    const InalCooperation = [
        {
            title:"Chương trình hợp tác quốc tế",
            url: url.hoptacquocte.cthoptacquocte
        },
        {
            title:"Mạng lưới hợp tác",
            url: url.hoptacquocte.mangluoihoptac
        },
        {
            title:"Dự án quốc tế",
            url: url.hoptacquocte.duanquocte
        },
        {
            title:"Trao đổi sinh viên",
            children:[
                {
                    name:"Điều kiện",
                    url: url.hoptacquocte.traodoisinhvien.dieukien
                },
                {
                    name:"Các trường đối tác",
                    url: url.hoptacquocte.traodoisinhvien.doitac
                },
                {
                    name:"Sinh viên quốc tế",
                    url: url.hoptacquocte.traodoisinhvien.sinhvienquocte
                }
            ]
        }
    ]
    return(
        <div className='hidden container max-w-screen-3xl mx-auto md:flex flex-row px-[75px] gap-5'>
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

const DropDownMenu = ({title,children}) =>{
    return(
        <div className='duration-500 transition-all'>
            <div className='cursor-pointer py-2 flex flex-row gap-2 items-center'>
                <span>{title}</span>
                <img src='/images/arrow-down.svg' width={10}/>
            </div>
            <div className='absolute w-[170px] invisible group-hover:visible border-t-4 bg-white drop-shadow-xl border-[#183762]  text-sm leading-loose'>
                <ul className='relative z-10'>
                    {children.map((dt,index)=>{
                        if(dt.url){
                            return(
                                <li key={index} className='hover:bg-[#183762] hover:text-white px-3 py-2'><a href={dt.url}>{dt.title}</a></li>
                            )
                        }else{
                            return(
                                <DropDownMenuChildren key={index} title={dt.title} children={dt.children}/>
                            )
                        }
                    })}
                </ul>
            </div>
        </div>
    )
}

const DropDownMenuChildren = ({title,children}) =>{
    return(
        <div>
            <div className='group/item'>
                <div className='cursor-pointer py-2 hover:bg-[#183762] hover:text-white px-2'>{title}</div>
                <div className='absolute w-[250px] translate-x-[170px] -translate-y-[48px] invisible group-hover/item:visible border-t-4 bg-white drop-shadow-xl border-[#183762]  text-sm leading-loose'>
                    <ul className='z-10'>
                        {children.map((dt,index)=>(
                            <li key={index} className='hover:bg-[#183762] hover:text-white px-3 py-2'><a href={dt.url}>{dt.name}</a></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}