import clientPromise from "./db"


let client:any;
let dbs:any;
let condition:any;

async function init(){
    if(dbs) return;
    try{
        client = await clientPromise;
        dbs = client.db("research-ttu");
        condition = dbs.collection('condition')
    }catch(error){
        //"Failed to stablish connection to database"
        throw new Error(error)
    }
}

(async()=>{
    await init()
})()


async function loadCondition(){
    try{
        if(!condition) await init();
        const result = await condition.find({}).toArray();
        return result;
    }catch(error){
        return {error:"Failed to load condition!!",er:error}
    }
}

export{
    loadCondition
}