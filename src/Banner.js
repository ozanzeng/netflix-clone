import React, { useEffect, useState } from 'react'
import axios from './axios';
import requests from './request';
import './Banner.css';

function Banner() {
  const [movie, setMovie] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, [])

  function tuncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1)+ '...' : str;
  }

  return (
    <header className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(
          "${base_url}${movie?.backdrop_path}"
        )`,
        backgroundPosition: 'top'
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">
            Play
          </button>
          <button className="banner_button">
            My List
          </button>
        </div>
        <h2 className="banner_description">
          {tuncate(movie?.overview, 160)}
        </h2>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  )
}

export default Banner;
