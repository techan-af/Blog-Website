const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const ejs = require("ejs")
var _ = require("lodash")

app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'ejs')
app.use(express.static("public"))


const homeStartingContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit pariatur amet quidem quam ducimus veniam! Nulla quo, commodi dolore laboriosam id possimus velit earum dicta voluptates impedit, voluptatibus ex? Sed officiis perferendis, nemo sequi quibusdam quae. Animi pariatur veniam dicta illo sunt, rerum facilis voluptates eum tempore cum molestias. Libero?"
const aboutContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque voluptates repellendus, excepturi accusantium, saepe nam iste qui consequatur error sed et magni laboriosam molestias commodi!"
const contactContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, eius! hasfdhfgadfsdfyodsaiufdiorueri hdafhsahl dshfashfas ajdfadsjkfhal dsnfkjadhfaehrebf dsbfjkahfahr"

let posts = []

app.get("/", function(req, res){
    res.render('home', {
        homeContent: homeStartingContent,
        posts: posts
    })

})


app.get("/about", function(req, res){
    res.render('about', {aboutContent: aboutContent})

})
app.get("/contact", function(req, res){
    res.render('contact', {contactContent: contactContent})

})
app.get("/compose", function(req, res){
    res.render('compose')
})
app.post("/compose", function(req, res){
    const post = {
        title: req.body.postTitle,
        content: req.body.postText
    }
    posts.push(post)
    res.redirect("/")
    
})

app.get("/posts/:postName", function(req, res){
    const requestedTitle = _.lowerCase(req.params.postName)
    posts.forEach(function(post){
        const storedTitle = _.lowerCase(post.title)

        if(storedTitle === requestedTitle){
            res.render('post', {title: post.title, content: post.content})

        }



    })
  



})
app.listen(3000, function(){
    console.log("server is up and running")
})

















