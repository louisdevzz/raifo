import { loadConferencePaper } from "@/database/content";

export async function GET() {
try{
    const result = await loadConferencePaper();
    return Response.json(result);
}catch(err){
    return Response.json(err);
}
}