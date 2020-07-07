var express               = require("express"),
    bodyParser            = require("body-parser"),
    methodOverride  = require("method-override")
   

var flash = require("connect-flash");


var app = express();
app.use(methodOverride("_method"));//using method-override + what to look for in url *the parentheses as above*

app.use(flash())
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true})); //required for forms that post data via request
app.use(require("express-session")({ //require inline exp session
    secret: "be rich forever", //used to encode and decode data during session (it's encrypted)
    resave: false,          // required
    saveUninitialized: false   //required
}));

app.use(express.static("public"));


app.get("/", function(req, res){
    res.render("home");
});





// app.listen(3000,function(err){
// 	if(err){
// 		console.log("server connection error!!")
// 		console.log("Reconnecting . . . ")
// 	}else{
// 		console.log("connecting . . . ")
// 		console.log("connected successfully")
// 	}
// })

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server started...")
});
		