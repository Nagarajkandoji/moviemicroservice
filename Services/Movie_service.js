// Movie service 

//Importing Modules  
const seneca = require('seneca')();

seneca.quiet();
seneca.use('movie_plugin');

// Initilaizing movie service 

seneca.ready((err)=>{
    console.log('Movie service is ready on port #9000')
});

seneca.listen(9000);

//----

// Calling view function 
// seneca.act({component:'movies',by:'view'},(err,response)=>{
//     if(err)
//         console.log(err) 
//     else
//         console.log(response.movie)
// });

// Calling filter by release date 
// seneca.act({component:'movies',by:'release_date',release_date:'2022-04-06'},(err,response)=>{
//     if(err)
//         console.log(err) 
//     else
//         console.log(response.movie)
// });


////////////////////////////////////
//language Filter option

// seneca.add({component:'movies',by:'language'},(args,respond)=>{
//     //logic
//     let movie_filtered = moviedata.filter(movie=>{
//         return movie.language === args.language
//     })
    
// });

// //call function 
// seneca.act({component:'movies',by:'language',language:'en'},(err,response)=>{
//     if(err)
//         console.log(err) 
//     else
//         console.log(response.movie_filtered)
// });