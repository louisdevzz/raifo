import { loadCondition } from "@/database/condition";

export async function GET() {
    try{
        const result = await loadCondition();
        return Response.json(result);
    }catch(err){
        return Response.json(err);
    }
}
