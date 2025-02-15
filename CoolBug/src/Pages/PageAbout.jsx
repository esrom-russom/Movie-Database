import React from "react";
import "./PageAbout.css";

const PageAbout = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About</h1>
        <p>
          Welcome to <span>Cool Bug</span> – Your Ultimate Movie Hub!
        </p>
        <p>
          Discover a world of movies at your fingertips with{" "}
          <span>Cool Bug</span>, the go-to platform for all movie enthusiasts!
          Powered by the extensive <span>TMDB database</span>, we bring you an
          unmatched collection of films, including:
        </p>
        <ul>
          <li>
            <strong>Popular Hits</strong> – Stay updated with what’s trending
            worldwide.
          </li>
          <li>
            <strong>Upcoming Releases</strong> – Be the first to know about the
            most anticipated movies.
          </li>
          <li>
            <strong>Now Playing</strong> – Catch what’s currently lighting up
            the big screen.
          </li>
          <li>
            <strong>Top-Rated Films</strong> – Dive into critically acclaimed
            masterpieces loved by audiences.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PageAbout;
