import React from 'react';

import igLogo from 'assets/ig.png';
import fbLogo from 'assets/fb.webp';

const imgLinks = [
  {
    link: 'https://www.instagram.com',
    image: igLogo,
  },
  {
    link: 'https://www.facebook.com',
    image: fbLogo,
  },
];

const Footer = () => {
  return (
    <footer className="footer flex-row">
      <p>&copy; Made by: Harvey Charles Pioquinto, 2022</p>
      {imgLinks.map((imgLink) => (
        <a key={imgLink.link} href={imgLink.link}>
          <img src={imgLink.image} alt={imgLink.link} />
        </a>
      ))}
    </footer>
  );
};

export default Footer;
