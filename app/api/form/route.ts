import { loadForm } from "@/database/form";

export async function GET() {
    try{
      const result = await loadForm();
      return Response.json(result);
    }catch(err){
      return Response.json(err);
    }
  }