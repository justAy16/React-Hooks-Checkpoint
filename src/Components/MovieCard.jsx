import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function MovieCard({
    original_title,
    overview,
    vote_average,
    poster_path,
    id,
}) {
    const maxOverviewLength = 180

    // Function to shorten the overview text
    const shortenOverview = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text
        }
        const shortenedText = text.substring(0, maxLength).trim()
        const seeMoreText = (
            <span style={{ color: 'blue', cursor: 'pointer' }}>
                ...See more
            </span>
        )
        return (
            <>
                {shortenedText}
                {seeMoreText}
            </>
        )
    }

    return (
        <div>
            <Link to={`/trailer/${id}`} style={{ textDecoration: 'none' }}>
                <Card
                    className="snap-center ..."
                    style={{
                        width: '16rem',
                        textAlign: 'center',
                        marginRight: 8,
                        backgroundColor: 'wheat',
                        boxShadow:'5px 5px 18px 15px rgba(0, 0, 0, 0.5)'
                    }}
                >
                    <Card.Header style={{height: '4rem',fontFamily: 'cursive',fontWeight: 'bolder',fontSize: 'large',}}>{original_title}</Card.Header>
                    <div
                        style={{
                            width: '13rem',
                            height: '13rem',
                            margin: 'auto',
                            position: 'relative',
                            paddingTop: 8,
                        }}
                    >
                        <Card.Img
                            variant="top"
                            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                            alt={original_title}
                            style={{
                                height: '100%',
                                borderBottomRightRadius: '4%',
                            }}
                        />
                        <span
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                right: 0,
                            }}
                            class="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10"
                        >
                            ⭐️{parseFloat(vote_average).toFixed(2)}
                        </span>
                    </div>
                    <Card.Body style={{ height: '7.5rem' }}>
                        {/* <Card.Title
                            style={{
                                height: '2.7rem',
                                fontFamily: 'cursive',
                                fontWeight: 'bolder',
                                fontSize: 'large',
                            }}
                        >
                            {original_title}{' '}
                        </Card.Title> */}
                        <Card.Text
                            style={{
                                lineHeight: 1.1,
                                fontSize: 'small',
                                fontWeight: 'bold',
                            }}
                        >
                            {' '}
                            {shortenOverview(overview, maxOverviewLength)}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    )
}

export default MovieCard
