import './About.css';
import { FaShieldAlt, FaStar, FaRocket, FaWrench } from 'react-icons/fa';

const About = () => {
  return (
    <section id='about' className='squircle-xl'>
      <h2>About us</h2>
      <p>We design and build unique robotic companions for everyone. Each robot is crafted with precision and care, combining cutting-edge technology with playful design.</p>

      {/* Key numbers */}
      <div className='about-stats'>
        <div className='stat squircle-xl'>
          <span className='stat-number'>500+</span>
          <span className='stat-label'>Happy Owners</span>
        </div>
        <div className='stat squircle-xl'>
          <span className='stat-number'>9</span>
          <span className='stat-label'>Unique Robots</span>
        </div>
        <div className='stat squircle-xl'>
          <span className='stat-number'>2024</span>
          <span className='stat-label'>Est.</span>
        </div>
      </div>

      {/* Selling points */}
      <div className='about-features'>
        <div className='feature squircle-xl'>
          <span className='feature-icon'><FaRocket /></span>
          <span className='feature-text'>Free Shipping</span>
        </div>
        <div className='feature squircle-xl'>
          <span className='feature-icon'><FaWrench /></span>
          <span className='feature-text'>Custom Builds</span>
        </div>
        <div className='feature squircle-xl'>
          <span className='feature-icon'><FaStar /></span>
          <span className='feature-text'>Premium Quality</span>
        </div>
        <div className='feature squircle-xl'>
          <span className='feature-icon'><FaShieldAlt /></span>
          <span className='feature-text'>1 Year Warranty</span>
        </div>
      </div>
    </section>
  );
};

export default About;