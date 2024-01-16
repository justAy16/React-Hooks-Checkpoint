import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
// import { movie } from '../Data/Movie'
import { useParams, useNavigate } from 'react-router-dom';

function TrailerPage() {
  const { movieId } = useParams();
    const [trailerKey, setTrailerKey] = useState(null);
    const [trailer, setTrailer] = useState({ original_title: '', description: '' });
    const navi = useNavigate()
    // const overviewLines = data.overview.split('\n')
    // const { title } = useParams()
    // const trailer = movies.find((i) => i.title === title)
    

    useEffect(() => {
      // Fetch the trailer information using the movie ID from the URL
      const fetchTrailer = async () => {
        // const movieId = match.params.movieId;
        const trailerKey = await getTrailerKey(movieId);
        setTrailerKey(trailerKey);
        const trailerDetails = await getTrailerDetails(movieId);
            setTrailer(trailerDetails);
      };
      
      fetchTrailer();
    },[movieId]);


    const getTrailerKey = async (movieId) => {
      // Implement logic to fetch the trailer key from your API
      // Example: Fetch trailer details from TMDb API
      const API = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=be5b5b951aea3a7b6afe09c7d7c947b0`;
      const response = await fetch(API);
      const data = await response.json();
      const trailer = data.results.find((video) => video.type === 'Trailer');
      return trailer ? trailer.key : null;
    };

    const getTrailerDetails = async (movieId) => {
      const API = `https://api.themoviedb.org/3/movie/${movieId}?api_key=be5b5b951aea3a7b6afe09c7d7c947b0`;
      const response = await fetch(API)
      const data = await response.json();
      console.log(data)
      return { original_title:`${data.original_title}`, description: `${data.overview}` };
  };

 
  

    return (
        <Card style={{backgroundColor:'#0F3230', color:'wheat', width:'80%', margin:'auto'}} className="text-center">
            <Card.Header>Trailer</Card.Header>
            <Card.Body>
                <Card.Title>{trailer.original_title}</Card.Title>
                <div>{trailer.description}</div>
                <iframe
                    style={{ margin: 'auto', marginTop: 15 }}
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${trailerKey}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
                <Button
                    onClick={() => {
                        navi('/')
                    }}
                    style={{ marginTop: 13 }}
                    variant="primary"
                >
                    Home
                </Button>
            </Card.Body>
        </Card>
    )
}export default TrailerPage



// function TrailerPage() {
//   const navi = useNavigate()
//   const { title } = useParams()
//   const trailer = movies.find((i) => i.title === title)

//   useEffect(() => {
//     fetch(API)
//         .then((response) => response.json())
//         .then((data) => {
//             console.log(data)
//             // setMovies(data.results)
//             // setFilteredMovies(data.results);
//         })
//         .catch(error => {
//             console.error('Error fetching movie data:', error);
//         });
// }, [API])

//   return (
//       <Card style={{backgroundColor:'#0F3230', color:'wheat', width:'80%', margin:'auto'}} className="text-center">
//           <Card.Header>Trailer</Card.Header>
//           <Card.Body>
//               <Card.Title>{trailer.title}</Card.Title>
//               <div>{trailer.description}</div>
//               <iframe
//                   style={{ margin: 'auto', marginTop: 15 }}
//                   width="560"
//                   height="315"
//                   src={trailer.trailerLink}
//                   title="YouTube video player"
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                   allowFullScreen
//               ></iframe>
//               <Button
//                   onClick={() => {
//                       navi('/')
//                   }}
//                   style={{ marginTop: 13 }}
//                   variant="primary"
//               >
//                   Home
//               </Button>
//           </Card.Body>
//       </Card>
//   )
// }export default TrailerPage


