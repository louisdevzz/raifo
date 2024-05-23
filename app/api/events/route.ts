import { loadEvent,loadEventBySlug } from "@/database/event";

export async function GET() {
    try{
        const result = await loadEvent();
        return Response.json(result);
    }catch(err){
        return Response.json(err);
    }
}

export async function POST(req: Request) {
    try{
        const { slug } = await req.json();
        const result = await loadEventBySlug(slug);
        return Response.json(result);
    }catch(err){
        return Response.json(err);
    }
}