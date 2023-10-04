const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;


const fs = require('fs');
fs.readFile('./lorem.txt', (err, data) => {
if(err) {
return console.log('Error occurred while reading file');
}
  
console.log(data.toString());
});

// app.use((req, res, next) => {
//   console.log('Time : ', Date.now());
//   next;
// })

app.use((err, req, res, next) => {
  res.status(500).send("Something broke!!");
})

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send(
   "<h1>Hello Guy</h1><p>This is a HTML response</p><ol><li>One</li><li>Two</li><li>Three</li></ol>"
  );
});

app.get('/home', (req, res) => {
  res.send("<h1>This is Home page</h1>")
})

app.get('/about', (req, res) => {
  res.send("<h1>This is About page</h1>")
})

app.get('/profile', (req, res) => {
  res.send("<h1>This is Profile page</h1>")
})

app.get('/login', (req, res) => {
  res.send("<h1>This is Login page</h1>")
})

app.get('/logout', (req, res) => {
  res.send("<h1>This is Logout page</h1>")
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
