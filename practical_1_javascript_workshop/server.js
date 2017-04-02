const express = require('express')
const path = require('path')

const app = express()



// app.get('/main.js', (req, res) => {
//   res.sendFile(path.join(__dirname, 'main.js'))
// })
//
// app.get('/styles.css', (req, res) => {
//   res.sendFile(path.join(__dirname, 'styles.css'))
// })

app.get('*', (req, res, next) => {
  if (/^\/public/.test(req.path)) return next()

  res.sendFile(path.join(__dirname, 'index.html'))
})

app.use('/public', express.static(__dirname + '/public'));


app.listen(3000, 'localhost', (err) => {
  if (err) {
    console.log(err)
    return
  }

  console.log('Listening at localhost:3000')
})
