'use client'
import About from "@/components/About";
import Header from "@/components/component/Header";
import { useState } from "react";

export default function AboutUS(){
    const [open,setOpen] = useState(false)
    return(
        <div>
            <Header open={open} setOpen={setOpen}/>
            <About/>
        </div>
    )
}