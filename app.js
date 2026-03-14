// create server...................................

// const express =require ('express')
// const app = express()
// const port = 3200;

// app.get('/',(req,res)=>{
//     res.send('hello Express.js')
// })

// app.listen(port,()=>{
//     console.log('servre start');    
// })

// const express = require('express')
// const app = express()
// const port = 3000;

// create Routes.................................
// app.get('/',(req,res)=>{
//     res.send('home page')
// })
// app.get('/about',(req,res)=>{
//     res.send('about page')
// })
// app.get('/product',(req,res)=>{
//     res.send('product page')
// })

// app.listen(port,()=>{
// console.log('server is running');
// })

// import module........................................

// const express = require('express')
// const app = express()
// const port = 2000;
// const {homePage , aboutPage , sectionPage} = require('./home')

// app.get('/',( req,res)=>{
//     res.send(homePage())
// })

// app.get('/about',( req,res)=>{
//     res.send(aboutPage())
// })
// app.get('/section',( req,res)=>{
//     res.send(sectionPage())
// })

// app.listen(port,()=>{
// console.log('server is running');
// })

//

// Render HTML Elements............................................
// const express = require('express')
// const app = express();
// const port =  3200;

// app.get('/',(req,res)=>{
//     res.send('<h1>Home Page</h1>')
// })
// app.get('/login',(req,res)=>{
//     res.send(`<form action="/submit" method='post'>
//         <input type="text"placeholder='usernme'name='name'>
//         <input type="text"placeholder='usernme'name='password'>
//         <button> submit </button>  </form>`)
// })
// app.post('/submit',(req,res)=>{
//     res.send(`<h1> submit data</h1>
//         <a href='/'>go to home page</a>`)
// })

// app.listen(port,()=>{
// console.log('server is running');
// })

// Rander HTML and get data.................................................

// const express = require('express')
// const app = express()
// const path = require('path')
// const port = 3000;

// app.get('/',(req,res)=>{
//     const filePath = path.join(__dirname, 'view', 'index.html')
//     res.sendFile(filePath)
// })
// app.get('/about',(req,res)=>{
//     const filePath = path.join(__dirname, 'view', 'about.html')
//     res.sendFile(filePath)
// })

// app.listen(port,()=>{
// console.log('server is running');
// })
// .........................................................

// const express = require('express')
// const app = express()
// const port = 3000;

// app.get('/',(req,res)=>{

//     res.sendFile(__dirname + '/view/index.html')
// })
// app.get('/about',(req,res)=>{  
//     res.sendFile(__dirname +'/view/about.html')
// })

// app.listen(port,()=>{
// console.log('server is running');
// })
// ....................................................

// const express = require('express')
// const app = express()
// const path = require('path')
// const port = 3000;

// const filePath = path.join(__dirname, '/view')

// app.get('/',(req,res)=>{

//     res.sendFile(filePath + '/index.html')
// })
// app.get('/about',(req,res)=>{  
//     res.sendFile(filePath + '/about.html')
// })
// app.use((req,res)=>{
//     // res.status(404).send('404 page not found')
//     res.status(404).sendFile(filePath + '/404.html')
// })

// app.listen(port,()=>{
// console.log('server is running');
// })


// ...................................................................................

// const express = require('express')
// const app = express()
// const port = 3000;
// const path = require('path')

// const filePath = path.resolve('view')

// app.get('/',(req,res)=>{
//     res.sendFile(filePath+'/index.html')    

// })
// app.get('/about',(req,res)=>{
//     res.sendFile(filePath+'/about.html')
// })

// app.use((req,res)=>{
//     res.status(404).sendFile(filePath+'/404.html')
// })

// app.listen(port,()=>{
//     console.log(`server is running on port ${port}`)
// })

// rander css file......................................

const express = require('express')
const app = express()
const path = require('path')
const port = 3000;

const filePath = path.resolve('view')

const publicPath = path.resolve('public')
app.use(express.static(publicPath))


app.get('/',(req, res)=>{
    res.sendFile(filePath+'/index.html')
})

app.get('/about',(req, res)=>{
    res.sendFile(filePath+'/about.html')
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})