// server.js
// where your node app starts

// init project
const express = require('express')
const app = express()
const path = require('path')

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

app.set('view engine' , 'pug')

app.set('views',path.join(__dirname,'views'))

// http://expressjs.com/en/starter/basic-routing.html

app.get("/",function(req,res){
res.render("index")
})

app.get("/api/whoami", (request, response) => {
  var ip =request.headers['x-forwarded-for'];
  var lang = request.headers["accept-language"];
  var soft = request.headers["user-agent"]
  lang = lang.substring(0,lang.indexOf(','))
  ip = ip.substring(0,ip.indexOf(','))
  soft = soft.substring(soft.indexOf('(')+1,soft.indexOf(')'))
  var result ={
  "ip-address" : ip,
  "language" : lang,
  "software" : soft
  
  }  
  response.send(result)
  
})


// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
