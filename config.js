const express = require('express')
const app = express()
const port = 2000

app.listen(port, () => {    // 설정했던 포트번호를 읽고 서버에 띄우기 
    console.log('Example app listening on port ${port}')
})

