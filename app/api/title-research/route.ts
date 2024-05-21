import { loadTitleSearch } from "@/database/content";

export async function GET() {
try{
    const result = await loadTitleSearch();
    return Response.json(result);
}catch(err){
    return Response.json(err);
}
}