const express=require("express");
const path=require("path");
const hbs=require("hbs");



const port=3000;




const app=express();

const static_path=path.join(__dirname,"../public")


app.set("view engine","hbs");
app.get("/",(req,res)=>{
res.render("index.hbs");

})



app.use(express.static(static_path));


// console.log(path.join(__dirname,"./partials"))

hbs.registerPartials(path.join(__dirname,"./partials"))











app.get("/",(req,res)=>{

res.send("Home page")


})







app.get("/about",(req,res)=>{
res.render("about.hbs");

})
app.get("/about",(req,res)=>{

    res.send("About page")
    
    
    })





    app.get("/wheather",(req,res)=>{
        res.render("wheather.hbs");
        
        })
    app.get("/wheather",(req,res)=>{

        res.send("Wheather page")
        
        
        })







        app.get("*",(req,res)=>{
            res.render("404.hbs");
            
            })


        app.get("*",(req,res)=>{

            res.send("Eoor hai bsdk")
            
            
            })



        app.listen(port,"127.0.0.1",()=>{


            console.log(`you are  work ${port} and it is work properly`)
        })
