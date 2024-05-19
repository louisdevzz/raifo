import { createUser } from "../../../database/user";

export async function POST(req:any) {
try{
    const { user,pass,name,email } = await req.json();
    const result = await createUser(user,pass,name,email);
    return Response.json(result);
}catch(err){
    return Response.json(err);
}
}