var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articleone = {
    title : 'admission',
    container : `
    	<h2></h2>
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
                <h2>
                <strong>Admission</strong>
                </h2>
				
				<p style="text-align: justify;">
					<strong>Admission through KEA:</strong> It is for candidates of
					Karnataka domicile only. A candidate who has passed the Qualifying
					Exam (Q.E.) (12th Exam) with Physics and Mathematics as compulsory
					subjects along with Chemistry / Bio-Technology / Biology /
					Electronics / Computer Science as optional subjects with English as
					one of the languages of study and obtained an aggregate minimum of
					45% marks in the optional subjects in the Q. E. is eligible for
					Engineering / Technology courses. 40% of marks in Q.E. in case of
					SC, ST, Category-I and OBC Category candidates is considered.
					Physics and Mathematics are compulsory subjects along with
					Chemistry or Biotechnology or Biology. Based on the performance of
					the candidates in Physics, Chemistry and Mathematics subjects in
					both Common Entrance Test and the Qualifying Examination by taking
					the marks in equal proportions, the Engineering rank list will be
					prepared<br>and published. Based on their Rank student are
					selected for admission.
				</p>
				<p style="text-align: justify;">
					<strong>Admission through COMED-K:</strong> Both Karnataka and
					non-Karnataka candidates can write COMED-K exam. The qualifying
					examination prescribed for admission to B.E. is 2nd PUC or 10+2
					higher secondary or equivalent Examination recognized by State /
					Central Government. The last two years of study shall comprise of
					Physics, Chemistry and Mathematics (PCM) with<br>English as a
					compulsory subject. The General Merit Candidates should have passed
					with a minimum aggregate of 45% marks (40% in respect of SC, ST and
					OBC Candidates of Karnataka state) in Physics, Chemistry and
					Mathematics (PCM) and should have passed these subjects
					individually. Physics and Mathematics are compulsory subjects along
					with Chemistry or Biotechnology or Biology or any other Technical
					vocational courses as one of the optional<br>subjects.
				</p> `

};
var htmltemplate = `
<html>

<head >
<title>
${title}
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
	${container}
		
</div>
<footer>Copyright � dreamstrack.com</footer>

</body>

</html>`

;


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one',function (req,res) { 
     res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});
app.get('/article-two',function (req,res) { 
    res.send('article-two url is served here');
});
app.get('/article-three',function (req,res) { 
    res.send('article-three url is served here');
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
