var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articlething = {
 'home' : {
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
 },
 'admission' : {
      title : 'admission',
    containers : 'hi ' ,
    
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

 }
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
        <li style="float:right; font-size:3em;"><a href="/admission" >admission</li>
        <li style="float:right ;font-size:3em;"><a href="/home" >Home</a></li>
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
app.get('/:articlename',function (req,res) { 
    var articlename=req.params.articlename;
  res.send(createtemplate(articlething[articlename]));
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
