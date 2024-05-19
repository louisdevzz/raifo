import clientPromise from "./db"


let client;
let dbs;
let contents;

async function init(){
    if(dbs) return;
    try{
        client = await clientPromise;
        dbs = client.db("research-ttu");
        contents = dbs.collection('content')
    }catch(error){
        //"Failed to stablish connection to database"
        throw new Error(error)
    }
}

(async()=>{
    await init()
})()

async function loadScientificArticle(){
    try{
        if(!contents) await init();
        const result = await contents.find({type:{$eq:"baibaokhoahoc"}}).toArray();
        return result;
    }catch(error){
        return {error:"Failed to load scientific article!!",er:error}
    }
}
async function loadConferencePaper(){
    try{
        if(!contents) await init();
        const result = await contents.find({type:{$eq:"baibaohoithao"}}).toArray();
        return result;
    }catch(error){
        return {error:"Failed to load scientific article!!",er:error}
    }
}
async function loadTitleSearch(){
    try{
        if(!contents) await init();
        const result = await contents.find({type:{$eq:"detainghiencuu"}}).toArray();
        return result;
    }catch(error){
        return {error:"Failed to load scientific article!!",er:error}
    }
}

export{
    loadConferencePaper,
    loadScientificArticle,
    loadTitleSearch
}