import './Footer.css';
import { FaLinkedin, FaGithubSquare, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      {/* Social media links */}
      <div className='socials'>
        <a 
          href='https://www.linkedin.com/in/alena-pumprova/' 
          target='_blank'
          rel='noopener noreferrer'
        >
          <span className='social'>
            <FaLinkedin className='linkedin'/>
            LinkedIn
          </span>
        </a>

        <a 
          href='https://www.facebook.com/alena.pumprova/' 
          target='_blank'
          rel='noopener noreferrer'
        >
          <span className='social'>
            <FaFacebook/>
            Facebook
          </span>
        </a>

        <a 
          href='https://github.com/Alena0490' 
          target='_blank'
          rel='noopener noreferrer'
        >
          <span className='social'>
            <FaGithubSquare />
            GitHub
          </span>
        </a>
      </div>
      {/* Copyright */}
      <p className='copyright'>Copyright Alena Pumprová 2026</p>
    </footer>
  )
}

export default Footer;
