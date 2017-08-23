export const PALERMO = 'ChIJiTabBY61vJURyvr1fOj68WU';
export const SANTELMO = 'ChIJm5zm0DLLvJURp2pwlXBEoRg';
export const BELGRANO = 'ChIJGcZJeSu0vJURfHKl44zJXQI';
export const COLEGIALES = 'ChIJKwu6i9y1vJURbspzEV9crJ8';
export const RETIRO = 'ChIJmQSLIbbKvJUR0B-_v3tzFuY';
export const BOEDO = 'ChIJvXSJzFPKvJURICLju3J4jyo';

const API_KEY = process.env.GM_KEY;

export const URLS = [
  `https://maps.googleapis.com/maps/api/place/details/json?placeid=${PALERMO}&key=%${API_KEY}`,
  `https://maps.googleapis.com/maps/api/place/details/json?placeid=${SANTELMO}&key=%${API_KEY}`,
  `https://maps.googleapis.com/maps/api/place/details/json?placeid=${BELGRANO}&key=%${API_KEY}`,
  `https://maps.googleapis.com/maps/api/place/details/json?placeid=${COLEGIALES}&key=%${API_KEY}`,
  `https://maps.googleapis.com/maps/api/place/details/json?placeid=${RETIRO}&key=%${API_KEY}`,
  `https://maps.googleapis.com/maps/api/place/details/json?placeid=${BOEDO}&key=%${API_KEY}`
];

export function globallyOpen(venues) {
  if (venues === 0) {
    return 'No';
  } else if (venues <= 3) {
    return 'Quizas';
  }
  return 'Si';
}
