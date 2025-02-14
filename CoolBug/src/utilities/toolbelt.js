import React from 'react';

function formatReleaseDate(dateObj) {
  return dateObj.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function formatRating(rating) {
  return rating.toFixed(1);
}

function generateStarRating(rating) {
  const stars = [];
  const fullStars = Math.floor(rating / 2);
  const hasHalfStar = rating % 2 >= 0.5;

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(React.createElement('span', { key: i, className: 'star full' }, '★'));
    } else if (i === fullStars && hasHalfStar) {
      stars.push(React.createElement('span', { key: i, className: 'star half' }, '★'));
    } else {
      stars.push(React.createElement('span', { key: i, className: 'star empty' }, '★'));
    }
  }

  return stars;
}

export { formatReleaseDate, formatRating, generateStarRating };