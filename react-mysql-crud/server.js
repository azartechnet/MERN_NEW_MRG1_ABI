const express=require('express')
const mysql=require('mysql')
const bodyparse=require('body-parser')
const cors=require('cors')

const app=express()
const port=3001;

//Middleware

app.use(cors())
app.use(bodyparse.json())

//MySQL
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'dharanyadb'
})
db.connect((err)=>{
    if(!err)
        console.log('DB Connected..')
    else
        console.log('DB not connected..')
})
//create table
app.get("/createtable",(req,res)=>{

    let sql='create table posts(id int auto_increment,title varchar(100),body text,primary key(id))';
    db.query(sql,(err,results)=>{
        if(!err)
            console.log('Table created')
        res.send('Table Created')
    })

})
// Insert post
app.post('/addpost', (req, res) => {
    let post = { title: req.body.title, body: req.body.body };
    let sql = 'INSERT INTO posts SET ?';
    db.query(sql, post, (err, result) => {
        if (err) throw err;
        res.send('Post added...');
    });
});
//getPosts
app.get("/getposts",(req,res)=>{
    let sql="select * from posts";
    db.query(sql,(err,result)=>{
        if(err)
            throw err;
        res.send(result)
    })
})
//get post by id

app.get('/getpost/:id',(req,res)=>{
    let sql=`select * from posts where id=${req.params.id}`;
    db.query(sql,(err,result)=>{
        if(err)throw err;
        res.json(result);
    })
})
//update post
app.put('/updatepost/:id',(req,res)=>{
    const {id}=req.params;
    const {title,body}=req.body;
    const sql=`update posts set title=?,body=? where id=?`;
    db.query(sql,[title,body,id],(err,result)=>{
        if(err)throw err;
        res.send('post updated..')
    })
})
//delete post
app.delete('/deletepost/:id',(req,res)=>{
    const {id}=req.params;
    const sql=`delete from posts where id=?`;
    db.query(sql,[id],(err,result)=>{
          if(err)throw err;
          res.send('posted deleted')
    })
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});