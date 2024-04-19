import Header from "../component/Header"
import Footer from "../Footer"

export default function Home(){
    return(
        <div>
            <Header/>
            <div className="container max-w-screen-3xl mx-auto flex flex-col justify-center items-center px-3 md:px-[75px]">
                <div className="md:mt-12 mt-2">
                    <img src="https://tjbs.ttuscience.org/public/journals/2/homepageImage_en_US.jpg"/>
                </div>
                <div className="mt-5">
                    <p>The TTU Journal of Biomedical Sciences (TJBS) is a new peer-reviewed journal covering all areas of Biomedical Research published by Tan Tao University. The TJBS aims to launch the first issue in October 2022. We expect you could make an excellent contribution based on your expertise and recent achievements in the following areas: clinical science, dental, nursing, other related medical fields, and biotechnology.</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}