import News from "@/components/News"

export async function generateMetadata({ params}) {
    const id = params.slug
    const result = await fetch("http://localhost:9001/api/events",{
        method:"POST",
        mode:"cors",
        headers: {
            "Content-Type": "application/json",
        },
        body:JSON.stringify({
            slug: id
        })
    });
    const product = await result.json();
    return {
        title: product[0].title,
        openGraph: {
            images: product[0].image,
        },
    }
}

export default function NewsPage({params},parent){
    return(
        <News params={params}/>
    )
}