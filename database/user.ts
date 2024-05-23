import clientPromise from "./db"


let client:any;
let dbs:any;
let users:any;

async function init(){
    if(dbs) return;
    try{
        client = await clientPromise;
        dbs = client.db("research-ttu");
        users = dbs.collection('user')
    }catch(error){
        //"Failed to stablish connection to database"
        throw new Error(error)
    }
}

(async()=>{
    await init()
})()

async function checkLogin(user:string,pass:string){
    try{
        if(!users) await init();
        const result = await users
            .find({username:{$eq:user},password:{$eq:pass}})
            .toArray()
        return result;
    }catch(error){
        return {error:"Failed to check login"}
    }
}

async function createUser(username:string,passowrd:string,fullname:string,email:string){
    try{
        if(!users) await init();
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        const randomString = Math.random().toString(36).substring(2, 7);
        const uid = `${username}-${randomString}${randomNumber}`
        const rs = await users.insertOne({
            uid:uid,
            username:username,
            passowrd:passowrd,
            fullname:fullname,
            email:email
        })
        return rs;
    }catch(error){
        return {error:"Failed to create user"}
    }
}

export {checkLogin,createUser}
