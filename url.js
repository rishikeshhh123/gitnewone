const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    //console.log(req.url,req.method,req.headers)
    const url=req.url;
    const method=req.method;
    if(url==='/'){
        res.write('<html>')
res.write('<head><title>My fenter messg</title></head>')
res.write('<body><form action="/message" method="POST"><input type ="text" name="message"><button type="submit" >add</button></form></body>')
res.write('</html>')
return res.end()
    }
if(url==="/message" && method==="POST"){
    const body=[];
    req.on('data',(chunk)=>{
        body.push(chunk )
    })
    req.on('end',()=>{
        const parseBody=Buffer.concat(body).toString();
        const messg=parseBody.split("=")[1];
        fs.writeFile('message.text',messg,err=>{
            res.statusCode=302;
            res.setHeader("Location",'/');
            return res.end();
        });
        
    })
    node
   
}

res.setHeader('Content-Type', 'text/html');
res.write('<html>')
res.write('<head><title>My first response</title></head>')
res.write('<body><h1>Welcome to my Node Js project</h1></body>')
res.write('</html>')
res.end()
});
server.listen(3000, () => {
    console.log('Server is listening on port 4000');
});