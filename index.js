const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json())
const port = 5000
//  app.get('/', (req, res)=>{
//     res.send("nodemon is working properly");
//  })

  const users  = [
  {
     name : "tanbir",
     id : 0,
     class : "ten",
     hobby : "Football"
    } ,
  {
     name : "sakib",
     id : 1,
     class : "ten",
     hobby : "handball"
    } ,
  {
     name : "younus",
     id : 2,
     class : "ten",
     hobby : "badminton"
    } ,
  {
     name : "tuhin",
     id : 3,
     class : "ten",
     hobby : "basketball"
    } 
] 
/* const users = [
  { id: 0, name: 'Shabana', email: 'Shabana@gmail.com', phone: '01788888888' },
  { id: 1, name: 'Shabnoor', email: 'Shabnoor@gmail.com', phone: '01788888888' },
  { id: 2, name: 'Shrabonti', email: 'Shrabonti@gmail.com', phone: '01788888888' },
  { id: 3, name: 'Suchorita', email: 'Suchorita@gmail.com', phone: '01788888888' },
  { id: 4, name: 'Soniya', email: 'Soniya@gmail.com', phone: '01788888888' },
  { id: 5, name: 'Susmita', email: 'Susmita@gmail.com', phone: '01788888888' },
] */

app.get('/users', (req, res) => {
  const search = req.query.search;
  // use query parameter
  if (search) {
      const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
      res.send(searchResult);
  }
  else {
      res.send(users)
  }
});

// app.METHOD
app.post("/users", (req, res) =>{
  console.log("hitting the post", req.body)
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  res.json(newUser);
})


 app.get("/students/:id", (req, res)=>{
     const id = req.params.id;
     const student = students[id];
     console.log(id);
     res.send(student)
 })
app.get("/users",(req,res)=>{
  res.send(students);
})
 app.listen(port, ()=>{
     console.log("listening to port babe.......", port);
 })
 