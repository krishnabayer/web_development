import express from "express";
// import bodyParser from "body-parser";

// import { dirname } from "path";
// import { fileURLToPath } from "url";
// const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    const today = new Date();
    const day = today.getDay();
    if (day===0 || day===6){
        res.render('./index.ejs', {daytype : 'weekend' , advice : 'have fun'});
    }
    else {
        res.render('./index.ejs', {daytype : 'weekday' , advice : 'work hard and laugh'});
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    });
    


