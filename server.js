var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleone = {
    title : 'home',
    containers : `
    	
		<div class="cont2">
		<h3 style="color:	rgb(255, 255, 255);">vision</h3>
		</div>
<div class="cont2">
<h3 style="color:	rgb(255, 255, 255); ">mission</h3>
</div>
<div class="cont2">
<h3 style="color:	rgb(255, 255, 255);">institution</h3>
</div>
<div class="cont2">
<h3 style="color:	rgb(255, 255, 255);">departments</h3>
</div>
<div class="cont2">
<h3 style="color:	rgb(255, 255, 255);">courses offered</h3>
</div>
<div class="cont2">
<h3 style="color:	rgb(255, 255, 255);">student login</h3>
</div>
<div class="cont2">
<h3 style="color:	rgb(255, 255, 255);">results</h3>
</div>
<div class="cont2">
<h3 style="color:	rgb(255, 255, 255);">fee payment</h3>
</div> `
,

    article :`  
    <h1 style="color:	rgb(26, 0, 0);" class="schoolname">Modern School</h1>
    <p style="font-size:2em; color: 	rgb(26, 0, 0);">Dreamstrack is all about follwing your path towards your dreams.</p>
    <p style="font-size:2em;color: 	rgb(26, 0, 0);">We provide education assistance to willing students.
    </p>`
};


function createtemplate (data) {
    var title=data.title;
    var article=data.article;
    var containers=data.containers;
var htmltemplate = `
<html>

<head >
<title>${title}</title>
<link href="https://fonts.googleapis.com/css?family=Chewy" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Montez" rel="stylesheet"> 
 <link href="/ui/style.css" rel="stylesheet" />


<style>

 
</style>
</head>
<body>

 <header>
        <ul style="background-color:black;">
        <li style="font-size: 3em;">Hassan</li>
        <li style="float:right; font-size:3em;">contact</li>
        <li style="float:right; font-size:3em;">management</li>
        <li style="float:right; font-size:3em;">admission</li>
        <li style="float:right ;font-size:3em;"><a href="/article-one" >Home</a></li>
        </ul>
        </header>
        <nav>
  <ul>
    <li style="float:left ; font-size:3em; color:black;">help</li>
    <li style="float:left ; font-size:3em; color:black;">feedback</li>
    <li style="float:left ; font-size:3em; color:black;">events</li>
  </ul>
</nav>
<article>
    ${article}
  
</article>

<div class="container">
	${containers}
		
</div>
<footer>Copyright © dreamstrack.com</footer>

</body>

</html>`
;

return htmltemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one',function (req,res) { 
  res.send(createtemplate(article-one));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/transient.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'transient.jpg'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
