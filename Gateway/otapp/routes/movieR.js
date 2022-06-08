const express = require('express');
const router = express.Router();
const seneca = require('seneca')();

seneca.client(9000);

// Define the routes

// url - http://localhost:3000/movies/view
router.get("/",(req,res,next)=>{
    // Logic
    seneca.act({component:'movies',by:'view'},(err,response)=>{
        if(err)
            console.log(err) 
        else
            console.log('Search view is sucessfull')
            res.json(response.movie)
    });

});


router.get("/lang",(req,res,next)=>{
    // Logic
    seneca.act({component:'movies',by:'language',language:req.query.lang},(err,response)=>{
        if(err)
            console.log(err) 
        else
            res.json(response.movie)
    });
});

router.get("/title",(req,res,next)=>{
    // Logic
    seneca.act({component:'movies',by:'title',title:req.query.title},(err,response)=>{
        if(err)
            console.log(err) 
        else
           
            res.json(response.movie)
    });

});

router.get("/date",(req,res,next)=>{
    // Logic
    seneca.act({component:'movies',by:'release_date',release_date:req.query.date},(err,response)=>{
        if(err)
            console.log(err) 
        else
            res.json(response.movie)
    });
});

module.exports = router;