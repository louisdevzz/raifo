import mysql from "mysql2/promise";

const db = await mysql.createConnection({
  host:process.env.HOST,
  database:process.env.DATABASE,
  user:process.env.USER,
  password:process.env.PASSWORD
});

export async function GET() {
  try{
    const [result] = await db.execute("SELECT * FROM user");
    return Response.json(result);
  }catch(err){
    return Response.json(err);
  }
}

export async function POST(req) {
  try{
    const { data } = await req.json();
    return Response.json(data);
  }catch(err){
    return Response.json(err);
  }
}