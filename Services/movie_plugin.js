
// Movie plugin -- 

const moviedata = require('./Movie.json');

function movie(option){

    // Defining pattrens 

    // View all movies 
    this.add({component:'movies',by:'view'},(args,respond)=>{
        respond(null,{movie:moviedata})
    });

    // Filter by release date
    this.add({component:'movies',by:'release_date'},(args,respond)=>{
        let movie_filtered = []
        moviedata.forEach(elem => {
            if(elem.release_date.split('-')[0] === args.release_date){
                movie_filtered.push(elem)
            }
        })

        respond(null,{movie:movie_filtered})
    });

    // Filter by language
    this.add({component:'movies',by:'language'},(args,respond)=>{
        let movie_filtered = moviedata.filter(movie=>{
            return movie.language === args.language
        })
        respond(null,{movie:movie_filtered})
    });

        // Filter by title
        this.add({component:'movies',by:'title'},(args,respond)=>{
            let movie_filtered = moviedata.filter(movie=>{
                return movie.title === args.title
            })
            respond(null,{movie:movie_filtered})
        });

}

module.exports = movie