import Mock from  "mockjs" 

Mock.setup({
    timeout:1000
})

Mock.mock(/\/login/,"post",(opt)=>{
    const {username,password}=JSON.parse(opt.body);
    if(username==="admin"&&password==="123"){
        return {
            code : 200,
            msg: "登录成功",
            data : {
                username,
                token:username+"@eyJhbGciOiJIUzUxMiJ9.IsImV4cC",
            }
        };
    } else {
        return { code: -1, msg: "用户名或密码错误"};
    }
})
