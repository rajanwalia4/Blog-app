const express =  require('express');
const path = require('path')
const ejs = require('ejs')

const app = express()

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))  // To use templates

app.use(express.urlencoded({extended:true})); // Use for request body
app.use(express.static("assets")) // Use the static files

// Dummy posts
post1 = {
	title:"Express Intro",
	description :"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
}

post2 = {
	title:"JavaScript Intro",
	description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
}

let posts = [post1,post2]

// Get the home page
app.get("/",(req,res)=>{
	res.render('home',{
		posts:posts
	})
})

// get the publish page
app.get("/publish",(req,res)=>{
	res.render("publish")
})


// Publish the post
app.post('/publish',(req,res)=>{
	posts.push(req.body)
	res.redirect("/")
})


// Route using Params 
app.get("/post/:postTitle",(req,res)=>{
	for(post of posts){
		if(post.title === req.params.postTitle){
			res.render("post",{
				title : post.title,
				description: post.description
			})
			return ;
		}
	}
})


// Route using query 
app.get("/post",(req,res)=>{
	for(post of posts){
		if(post.title === req.query.title){
			res.render("post",{
				title : post.title,
				description: post.description
			})
			return;
		}
	}
})


// Start The server
app.listen("3000",(err)=>{
	console.log("App is running on port 3000");
})