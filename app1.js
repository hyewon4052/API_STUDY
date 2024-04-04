const express = require('express')
const app = express()
const port = 2000

// GET, POST, PUT, PATCH, DELETE
let array = []
//조회
app.get("/array", (req, res) => {
    res.json(array)
    // 꼭 json을 넣지 않아도 된다   (보내는 방식을 send로 해도 된다는 뜻)
    res.json(1)
    res.json("Hello")
})

//주소가 같더라도 메서드가 다르므로 괜찮다
app.post("/array", (req,res) => {
    array.push({content: array.length+1})
    res.json({result: "ok"})
})

app.delete("/array", (req,res)=> {
    array = []
    res.json({result : "delete ok"})
})

app.listen(port, () => {    // 설정했던 포트번호를 읽고 서버에 띄우기 
    console.log('Example app listening on port ${port}')
})