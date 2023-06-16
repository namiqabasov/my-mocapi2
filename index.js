const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use("/static", express.static("public"));
app.use(cors());

const port = 3000;
let data = [
  {
    name: "Evelyn",
    lastname: "Pratt",
    mail: "jufutawo@mailinator.com",
    password: "Pa$$w0rd!",
    id: 1,
  },
  {
    name: "namiq",
    lastname: "Everett",
    mail: "namiq200218@gmaill.com",
    password: "1234",
    id: 2,
  },
];

let id_count = 8;

app.get("/", (req, res) => {
  res.send(data);
});

app.get("/:id", (req, res) => {
  res.send(data.find((x) => x.id === +req.params.id));
});

app.post("/", (req, res) => {
  id_count++;
  data.push({ ...req.body, id: id_count });
  console.log(req.body);
  res.send("men post sorgusuyam");
});

app.delete("/:id", (req, res) => {
  data = data.filter((x) => x.id !== +req.params.id);
  res.send("men delete sorgususyam");
});

app.put("/:id", (req, res) => {
  data = data.filter((x) => x.id !== +req.params.id);
  id_count++;
  data.push({ ...req.body, id: id_count });
  res.send("men put sorgususyam");
});

app.listen(1000, () => {
  console.log(`Example app listening on port ${port}`);
});
