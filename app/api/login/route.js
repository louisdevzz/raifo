import { checkLogin } from "../../../database/user";

export async function POST(req) {
  try{
    const { user,pass } = await req.json();
    const result = await checkLogin(user,pass)
    return Response.json(result);
  }catch(err){
    return Response.json(err);
  }
}