const onLogin = async(user,pass,setIsLogin) => {
    const data = await fetch(process.env.API_LOGIN_PATH);
    if(!data.ok){
        console.log("error")
    }
    const result = await data.json();
    result.map((data)=>{
        if(data.username == user && data.password == pass){
            setIsLogin(true)
            console.log('login success!!')
        }else{
            setIsLogin(false)
            console.log('login failed!!')
        }
    })
};

export {onLogin}