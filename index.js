import express from "express";
import bodyparser from "body-parser";

const app = express(); //setting up the server
const port = 3000;

app.use(bodyparser.urlencoded({extended : true})); //setting up the middleware to handle the POST req from the ui
app.use(express.static("public")); //to make use of the css and javascript from the static pages 
app.set("view engine","ejs"); //setting template for rendering dynamic
app.get("/",(req,res) =>{
    res.render("home.ejs") //getting the main page from index.ejs 
});

app.post("/start",(req,res)=>{
    res.render("index.ejs");
});
app.post("/submit",(req,res)=>{
    var fullName = req.body["fullName"];
    var profession = req.body["profession"];
    var phoneNumber = req.body["phoneNumber"];
    var email = req.body["email"];
    var socialLink1 = req.body["socialLink1"];
    var socialLink2 = req.body["socialLink2"];
    var professionalSummary = req.body["professionalSummary"];
    var educationDate1 = req.body["educationDate1"];
    var educationPlace1 = req.body["educationPlace1"];
    var educationDate2 = req.body["educationDate2"];
    var educationPlace2 = req.body["educationPlace2"];
    var project1name = req.body["project1name"];
    var project1 = req.body["project1"];
    var project2name = req.body["project2name"];
    var project2 = req.body["project2"];
    var skill1 = req.body["skill1"];
    var skill2 = req.body["skill2"];
    var skill3 = req.body["skill3"];
    res.render("resume.ejs",{fullName : fullName,profession: profession,phoneNumber: phoneNumber,email: email,socialLink1: socialLink1,
                                socialLink2: socialLink2,professionalSummary: professionalSummary,educationDate1: educationDate1,educationPlace1: educationPlace1,
                                educationDate2: educationDate2,educationPlace2: educationPlace2,project1name: project1name,project1: project1,project2name: project2name,
                                project2: project2,skill1: skill1,skill2: skill2,skill3: skill3});
});


app.listen(port,() => {
    console.log(`server is running on ${port}`); 
});