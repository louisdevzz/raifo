import clientPromise from "./db"


let client;
let dbs;
let event;

async function init(){
    if(dbs) return;
    try{
        client = await clientPromise;
        dbs = client.db("research-ttu");
        event = dbs.collection('news')
    }catch(error){
        //"Failed to stablish connection to database"
        throw new Error(error)
    }
}

(async()=>{
    await init()
})()


async function createEventPost(content ,title, image){
    try{
        if(!event) await init();
        const rs = await event.insertOne({
            content: content,
            title: title,
            image: image
        });
        return rs;
    }catch(error){
        return {error:"Failed to create event!!",er:error}
    }
}

async function loadEventBySlug(slug){
    try{
        if(!event) await init();
        const result = await event.find({slug:{$eq:slug}}).toArray();
        return result;
    }catch(error){
        return {error:"Failed to load event!!",er:error}
    }
}

async function loadEvent(){
    try{
        if(!event) await init();
        const result = await event.find({}).toArray();
        return result;
    }catch(error){
        return {error:"Failed to load event!!",er:error}
    }
}

export{
    createEventPost,
    loadEvent,
    loadEventBySlug
}