// import modules
import { students } from "./data/students-data.js"
import express from 'express'

// create Express app

const app = express()

// configure the app (app.set)
app.set('view engine', 'ejs')


// mount Middleware (app.use)



// Mount routes
// app.get('/', function(req, res) {
//   res.send('<h1>Hello Express</h1>')
// })

app.get('/home', function(req, res) {
  res.render('home')
})

app.get("/students", function(req, res) {
  res.render("students/index", {
    students: students
  })
})

app.get('/', function(req, res) {
  res.redirect('/home')
})




// tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})