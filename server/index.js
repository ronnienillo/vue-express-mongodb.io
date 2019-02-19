const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

const posts = require('./routes/api/posts');

app.use('/api/posts', posts);

//handle production
if(process.env.NODE_ENV === 'production') {
	//static folder
	app.use(express.static(__dirname + '/public/'));

	//Handle SPA
	app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

// const port = process.env.PORT || 5000;

// app.listen(port, () => console.log(`server started on port ${port}`));

var server = app.listen(process.env.PORT || 5000, function () {
  var port = server.address().port;
  console.log("Express is working on port " + port);
});