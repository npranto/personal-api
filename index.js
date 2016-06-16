const express = require('express');
const {json} = require('body-parser');
const mainRoutes = require("./server/controllers/middleware.js")
const mainCtrl = require("./server/controllers/mainCtrl.js")

const app = express();
const port = 8080;

app.use(json());
app.use(mainCtrl.addHeaders)

////////////////


mainRoutes(app);















////////////////
app.listen(port, ()=>{
	console.log(`Express running on ${port}`);
})
