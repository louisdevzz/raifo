
const isLogin = async(user,pass) => {
    const userObj = {
        user:user,
        pass:pass
    }
    const data = await fetch(process.env.API_LOGIN_PATH,{
        method:"POST",
        mode:"cors",
        headers: {
            "Content-Type": "application/json",
        },
        body:JSON.stringify(userObj)
    });
    const result = await data.json();
    if(result.length>0){
        return [true,result];
    }else{
        return false;
    }
};

const createUser = async(user,pass,fullname,email) => {
    const userObj = {
        user:user,
        pass:pass,
        name:fullname,
        email:email
    }
    console.log("userObj",userObj)
    const data = await fetch(process.env.API_REGISTER_PATH,{
        method:"POST",
        mode:"cors",
        headers: {
            "Content-Type": "application/json",
        },
        body:JSON.stringify(userObj)
    });
    const result = await data.json();
    return result;
};

export {
    isLogin,
    createUser
}