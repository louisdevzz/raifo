import { loadScientificArticle } from "@/database/scientificArticle";

export async function GET() {
try{
    const result = await loadScientificArticle();
    return Response.json(result);
}catch(err){
    return Response.json(err);
}
}