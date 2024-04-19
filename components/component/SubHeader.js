"use client"
import CIcon from '@coreui/icons-react';
import { cilHome } from '@coreui/icons';

export default function SubHeader(){
    const NewsPaper = [
        {
            title:"TTU Review",
            url:"https://review.ttu.edu.vn/index.php/review/index"
        },
        {
            title:"TJBS",
            url:"https://tjbs.ttuscience.org/index.php/tjbs"
        }
    ];
    const SManagement = [
        {
            title:"Công trình nghiên cứu",
            children:[
                {
                    name:"Bài báo khoa học",
                    url:"#"
                },
                {
                    name:"Bài báo hội thảo",
                    url:"#"
                },
                {
                    name:"Đề tài nghiên cứu",
                    url:"#"
                }
            ]
        },
        {
            title:"Hoạt động khoa học",
            children:[
                {
                    name:"Seminar",
                    url:"#"
                },
                {
                    name:"Tin tức – sự kiện",
                    url:"#"
                }
            ]
        }
    ];    
    const InalCooperation = [
        {
            title:"Chương trình hợp tác quốc tế",
            url:"#"
        },
        {
            title:"Mạng lưới hợp tác",
            url:"#"
        },
        {
            title:"Dự án quốc tế",
            url:"#"
        },
        {
            title:"Trao đổi sinh viên",
            children:[
                {
                    name:"Điều kiện",
                    url:"#"
                },
                {
                    name:"Các trường đối tác",
                    url:"#"
                },
                {
                    name:"Sinh viên quốc tế",
                    url:"#"
                }
            ]
        }
    ]
    return(
        <div className='hidden container max-w-screen-3xl mx-auto md:flex flex-row justify-start items-center px-[75px] gap-5'>
            <a href='/' className='bg-[#164b8e] w-[40px] p-2 flex justify-center items-center'>
                <CIcon icon={cilHome} style={{width:"30px",color:"#ffffff"}}/>
            </a>
            <ul className='flex flex-row justify-between gap-10'>
                <li>
                    <a href='/about'>
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
                    <DropDownMenu title={"Họp tác quốc tế"} children={InalCooperation}/>
                </li>
                <li>
                    <a href='#'>
                        <div className='py-2 cursor-pointer'>Văn bản - Biểu mẫu</div>
                    </a>
                </li>
            </ul>
        </div>
    )
}

const DropDownMenu = ({title,children}) =>{
    return(
        <div className='duration-500 transition-all'>
            <div className='cursor-pointer py-2'>{title}</div>
            <div className='absolute w-[170px] invisible group-hover:visible border-t-4 bg-white drop-shadow-xl border-[#183762]  text-sm leading-loose'>
                <ul className='relative z-10'>
                    {children.map((dt,index)=>{
                        if(dt.url){
                            return(
                                <li key={index} className='hover:bg-[#183762] hover:text-white px-3 py-2'><a href={dt.url}>{dt.title}</a></li>
                            )
                        }else{
                            return(
                                <DropDownMenuChildren title={dt.title} children={dt.children}/>
                            )
                        }
                    })}
                </ul>
            </div>
        </div>
    )
}

const DropDownMenuChildren = ({title,children}) =>{
    console.log(children)
    return(
        <div>
            <div className='group/item'>
                <div className='cursor-pointer py-2 hover:bg-[#183762] hover:text-white px-2'>{title}</div>
                <div className='absolute w-[250px] translate-x-[170px] -translate-y-[48px] invisible group-hover/item:visible border-t-4 bg-white drop-shadow-xl border-[#183762]  text-sm leading-loose'>
                    <ul className='z-10'>
                        {children.map((dt)=>(
                            <li className='hover:bg-[#183762] hover:text-white px-3 py-2'><a href={dt.url}>{dt.name}</a></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}