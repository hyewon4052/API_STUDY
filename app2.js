const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const port = 2000
app.use(bodyParser.json())

// 1. 주소를 통해서 정보 전달 - 데이터를 주소를 변수처럼 취급하라 ":" 
// parseInt"+"
app.post("/calc1/:num1/:num2",(req,res)=> {
    const num1 = +req.params.num1
    const num2 = +req.params.num2
    res.json({result:num1 + num2 })
})

// 2. 데이터를 쿼리스트링을 통해서 보내기
app.post("/calc2",(req,res)=> {
    const num1 = +req.query.num1
    const num2 = +req.query.num2
    res.json({result:num1 + num2 })
})

// 3. 데이터를 바디를 통해서 보내는 방법
app.post("/body_data",(req,res)=> {
    console.log(req.body)
    res.json({})
})

// 4. 데이터를 헤더를 통해서 보내는 방법
app.post("/calc3/:num1/num2",(req,res)=> {
    console.log(JSON.stringify(req.headers));   // 헤더라는 데이터를 json으로 변환
    const num1 = +req.header("My-Number1")      // mynumber1이라는 키를 가진 값을 num1에 저장
    const num2 = +req.header("My-Number2")
    res.json({result:num1 + num2 })
})
app.listen(port, () => {    // 설정했던 포트번호를 읽고 서버에 띄우기 
    console.log(`Example app listening on port ${port}`)
})

