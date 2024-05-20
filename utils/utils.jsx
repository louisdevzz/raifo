import { url } from './config';
const NewsPaper = [
    {
        title:"TJBS",
        url: url.tapchikhoahoc.tjbs
    },
    {
        title:"TTU Review",
        url: url.tapchikhoahoc.ttuReview
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
export{
    NewsPaper,
    SManagement,
    InalCooperation
}