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
                                <li key={index} className='hover:bg-[#183762] hover:text-white px-3 py-2'>
                                    {dt.title=="TTU Review"||dt.title=="TJBS"?(
                                        <a target='_blank' href={dt.url}>{dt.title}</a>
                                    ):(
                                        <a href={dt.url}>{dt.title}</a>
                                    )}
                                </li>
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

export{
    DropDownMenu
}