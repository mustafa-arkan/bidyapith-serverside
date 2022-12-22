const express=require('express')
const app=express()

const cors=require('cors')

const port=process.env.PORT||5000

app.use(cors())
const categories=require('./data/courselist.json')


app.get('/',(req,res)=>{

res.send('This is bidyapith server...yay yay')

})

app.get('/news-categories',(req,res)=>{


res.send(categories)



})

app.get('/category/:id',(req,res)=>{

const id=req.params.id

const category_news=categories.filter(n=>n.category_id===id)
res.send(category_news)



})



app.get('/checkout/:id',(req,res)=>{

    const id=req.params.id
    
    const checkout_compo=categories.filter(c=>c.category_id===id)
    res.send(checkout_compo)
    //console.log(req.params.id)
    
    
    })





app.listen(port,()=>{


console.log(`server running on port: ${port}`)

})