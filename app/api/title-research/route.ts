import { loadTitleResearch } from "@/database/titleResearch";

export async function GET() {
try{
    const result = await loadTitleResearch();
    return Response.json(result);
}catch(err){
    return Response.json(err);
}
}