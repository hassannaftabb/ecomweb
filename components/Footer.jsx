import React from 'react';
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from 'react-icons/ai';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Hassan Aftab ECom - Demo. All Rights Reserverd.</p>
      <p className="icons">
        <Link href="" passHref>
          <a>
            <AiFillInstagram />
          </a>
        </Link>
        <Link href="" passHref>
          <a>
            <AiOutlineTwitter />
          </a>
        </Link>
        <Link href="" passHref>
          <a>
            <AiOutlineGithub />
          </a>
        </Link>
        <Link href="" passHref>
          <a>
            <AiOutlineLinkedin />
          </a>
        </Link>
      </p>
    </div>
  );
};

export default Footer;
