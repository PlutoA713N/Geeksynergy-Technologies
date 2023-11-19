// MovieCard.js

import React, {useState} from 'react';
import './MovieCard.css';

const MovieCard = ({
  upVoted,
  poster ,
  title,
  genre,
  director,
  stars,
  runtime ,
  language ,
  releasedDate ,
  pageViews,
  totalVoted,
}) => {

  const [votes, setVotes] = useState(upVoted ? upVoted.length : 0);

  const handleUpvote = () => {
    setVotes((prevVotes) => prevVotes + 1);
    console.log('Upvoted!');
  };

  const handleDownvote = () => {
    setVotes((prevVotes) => prevVotes - 1);
    console.log('Downvoted!');
  };


  const releaseDate = (date) => {
   const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
   ];
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const monthName = monthNames[monthIndex];
    return `${day} ${monthName}`;  
  };

  return (    
  <div>

    <div className='movie-card'>
      <div className="leftside">
        <label htmlFor='upvote' className="label-upvote" onClick={handleUpvote}></label>
        <button className="hide" name='upvote' onClick={handleUpvote}></button>
        <p>{votes}</p>
        <label htmlFor='downvote' className='label-downvote' onClick={handleDownvote}></label>
        <button className="hide"></button>
        <p className='votes'>Votes</p>
      </div>


      <div className='middle'>
        <img src={poster} alt="none" />
      </div>

      <div className='rightside'>
        <h2>{title}</h2>
        <p>Genre: {genre}</p>
        <p>Director: {director}</p>
        <p>Starring: {stars}</p>
        <span>{runtime} Mins</span> | <span>{language}</span> | <span>{releaseDate(new Date(releasedDate * 1000))}</span>
        <br />
        <span class="gap">{pageViews} views </span> | <span className='gap'>Voted by {totalVoted} People</span>
      </div>

    </div>

    <div>
    <button class="trailer">Watch Trailer</button>
    </div>

</div>
  );
};

export default MovieCard;