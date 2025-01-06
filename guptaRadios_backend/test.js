let fs = require('fs')
console.log("heyy")
let {readFile,writeFile}=fs
readFile('./file/first.txt','utf8',(err,result)=>{
    let firstFile=result
    readFile('./file/second.txt','utf8',(err,result)=>{
        let secondFile=result
        console.log(`Final tetx is  ${firstFile+secondFile}`)
    })
})

