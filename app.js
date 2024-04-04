const express = require('express')
const app = express()
const port = 2000

app.get('/', (req, res) => {    
    res.json("hello world!")    // json
})

app.get("/hello",(req,res)=> {
    //res.header("Content-Type","text/plain") // 데이터 타입이 텍스트임
    // CTRL f5를 누르면 변하는 이유 : 이전 캐시를 쓰지 말아라
    // CTRL f5를 누르면 변하는 이유 : 캐시를 해놨기 때문
    
    res.send("<h1>Hello</h1>")  // send이기 때문에 그냥 텍스트로 받겠다
})

app.get("/data", (req,res) => {
    res.json({name : "john", age : 20})
})

app.listen(port, () => {    // 설정했던 포트번호를 읽고 서버에 띄우기 
    console.log('Example app listening on port ${port}')
})