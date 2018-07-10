$(document).ready(() => {
	alert('hel in lo');
	$('#searchMovie').on('keyup', function(e){
		let inputs = e.target.value; 
		$.ajax({
	        type: 'GET',
	        dataType: 'json',
	        async: true,
	        url: 'http://www.omdbapi.com/?i=tt3896198&apikey=b9ba0a83',
	        success: (response) => {
	        	if($("#title").is(":checked")){
			        	if(response.Title===inputs){
			        		$('#add-data').html(`
								<div class="movie-details container-fluid ">
							        <div class="row">
								        <div class="col">
								            <h1 class="leadd">${response.Title}</h1> 
								            <img src="https://ia.media-imdb.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg" class="img-fluid">
								        </div>
							          	<div class="col-md-3">
							            	<p>Director:  ${response.Director}</p>
							             	<p>Writer: ${response.Writer}</p>
								            <p>Genre: ${response.Genre}</p>
								            <p>Type: ${response.Type}</p>
								            <p>DVD: ${response.DVD}</p>
								            <p>Response: ${response.Response}</p>
								            <p>Production: ${response.Production}</p>
								            <p>Year : ${response.Year}</p>
								            <p>Rated : ${response.Rated}</p>
							            </div>
								        <div class="col">
								            <h2>Box Office</h2>
								            <p>BoxOffice Collections: ${response.BoxOffice}</p>
								            <h2>Reviews and ratings</h2>
								            <p>Awards: ${response.Awards}</p>
								            <p>Ratings: ${response.Genre}</p>
								            <p>Metascore: ${response.Metascore}</p>
								            <p>IMDb Rating: ${response.imdbRating}</p>
								            <p>IMDb Votes: ${response.imdbVotes}</p>
								            <p>Imdb ID: ${response.imdbID}</p>
								            <h1>Other Reviews</h1>
								            <p id="other-reviews"></p>
								        </div>
							            <div class="col">
							          		<h2>Details</h2>
							                <p>Official Website: ${response.Website}</p>
							                <p>Country: ${response.Country}</p>
							                <p>Language: ${response.Language}</p>
							                <p>Released: ${response.Released}</p>
							                <h2>Technical Specs</h2>
							            	<p>Runtime: ${response.Runtime}</p>
							            </div>         
							        </div>  
							    </div>
							`);
			        		let x;
			        		let otherRatings = response.Ratings;
			        		for(x of otherRatings){
				                let temp = ` 
				                	<p>Sources : ${x.Source}</p>
		                 			<p>Values : ${x.Value}</p>
		                 			`
				                $("#other-reviews").append(temp); 
				            }
			        	}
			        	else
			        	{
			        		$('#add-data').html(`
			    				<h1>Not found</h1>
			        			`);
			        	}
	        	}
	        	else if($("#year").is(":checked")){
			        	if(response.Year===inputs){
			        		$('#add-data').html(`
								<div class="movie-details container-fluid ">
							        <div class="row">
								        <div class="col">
								            <h1 class="leadd">${response.Title}</h1> 
								            <img src="https://ia.media-imdb.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg" class="img-fluid">
								        </div>
							          	<div class="col-md-3">
							            	<p>Director:  ${response.Director}</p>
							             	<p>Writer: ${response.Writer}</p>
								            <p>Genre: ${response.Genre}</p>
								            <p>Type: ${response.Type}</p>
								            <p>DVD: ${response.DVD}</p>
								            <p>Response: ${response.Response}</p>
								            <p>Production: ${response.Production}</p>
								            <p>Year : ${response.Year}</p>
								            <p>Rated : ${response.Rated}</p>
							            </div>
								        <div class="col">
								            <h2>Box Office</h2>
								            <p>BoxOffice Collections: ${response.BoxOffice}</p>
								            <h2>Reviews and ratings</h2>
								            <p>Awards: ${response.Awards}</p>
								            <p>Ratings: ${response.Genre}</p>
								            <p>Metascore: ${response.Metascore}</p>
								            <p>IMDb Rating: ${response.imdbRating}</p>
								            <p>IMDb Votes: ${response.imdbVotes}</p>
								            <p>Imdb ID: ${response.imdbID}</p>
								            <h1>Other Reviews</h1>
								            <p id="other-reviews"></p>
								        </div>
							            <div class="col">
							          		<h2>Details</h2>
							                <p>Official Website: ${response.Website}</p>
							                <p>Country: ${response.Country}</p>
							                <p>Language: ${response.Language}</p>
							                <p>Released: ${response.Released}</p>
							                <h2>Technical Specs</h2>
							            	<p>Runtime: ${response.Runtime}</p>
							            </div>         
							        </div>  
							    </div>
							`);
			        		let x;
			        		let otherRatings = response.Ratings;
			        		for(x of otherRatings){
				                let temp = ` 
				                	<p>Sources : ${x.Source}</p>
		                 			<p>Values : ${x.Value}</p>
		                 			`
				                $("#other-reviews").append(temp); 
				            }
			        	}
			        	else
			        	{
			        		$('#add-data').html(`
			    				<h1>Not found</h1>
			        			`);
			        	}
	        	}
	        	else if($("#imdb").is(":checked")){
	        			if(response.imdbID===inputs){
				        		$('#add-data').html(`
								<div class="movie-details container-fluid ">
							        <div class="row">
								        <div class="col">
								            <h1 class="leadd">${response.Title}</h1> 
								            <img src="https://ia.media-imdb.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg" class="img-fluid">
								        </div>
							          	<div class="col-md-3">
							            	<p>Director:  ${response.Director}</p>
							             	<p>Writer: ${response.Writer}</p>
								            <p>Genre: ${response.Genre}</p>
								            <p>Type: ${response.Type}</p>
								            <p>DVD: ${response.DVD}</p>
								            <p>Response: ${response.Response}</p>
								            <p>Production: ${response.Production}</p>
								            <p>Year : ${response.Year}</p>
								            <p>Rated : ${response.Rated}</p>
							            </div>
								        <div class="col">
								            <h2>Box Office</h2>
								            <p>BoxOffice Collections: ${response.BoxOffice}</p>
								            <h2>Reviews and ratings</h2>
								            <p>Awards: ${response.Awards}</p>
								            <p>Ratings: ${response.Genre}</p>
								            <p>Metascore: ${response.Metascore}</p>
								            <p>IMDb Rating: ${response.imdbRating}</p>
								            <p>IMDb Votes: ${response.imdbVotes}</p>
								            <p>Imdb ID: ${response.imdbID}</p>
								            <h1>Other Reviews</h1>
								            <p id="other-reviews"></p>
								        </div>
							            <div class="col">
							          		<h2>Details</h2>
							                <p>Official Website: ${response.Website}</p>
							                <p>Country: ${response.Country}</p>
							                <p>Language: ${response.Language}</p>
							                <p>Released: ${response.Released}</p>
							                <h2>Technical Specs</h2>
							            	<p>Runtime: ${response.Runtime}</p>
							            </div>         
							        </div>  
							    </div>
							`);
			        		let x;
			        		let otherRatings = response.Ratings;
			        		for(x of otherRatings){
				                let temp = ` 
				                	<p>Sources : ${x.Source}</p>
		                 			<p>Values : ${x.Value}</p>
		                 			`
				                $("#other-reviews").append(temp); 
				            }
			        	}
			        	else
			        	{
			        		$('#add-data').html(`
			    				<h1>Not found</h1>
			        			`);
			        	}
	        	}
	        }, 
	        error: (err) => {

	            console.log(err.responseJSON.error.message);
	            alert(err.responseJSON.error.message)

	        }
	    });
	});






}); // end of document.ready()