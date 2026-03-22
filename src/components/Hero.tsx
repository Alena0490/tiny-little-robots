import './Hero.css';
import Model from './Model';
import { LuChevronsDown } from 'react-icons/lu';

interface HeroProps {
  scrollTo: (id: string) => void;
}

const Hero = ({ scrollTo }: HeroProps) => {
  return (
    <section id='home' className='hero'>

      {/* Headings and subtitle */}
      <div className='hero-headings'>
        <h1>Tiny Little Robots</h1>
        <p className='hero-text'>Get your own Robot Friend. Original Robots for everyone.</p>
        <p className='secondary'>Click to the Robot for zooming.</p>
      </div>

      {/* Interactive 3D model */}
      <Model />

      {/* Call to action buttons */}
      <div className='cta'>
        <button className='squircle-xl primary-button' onClick={() => scrollTo('shop')}>Get a Robot</button>
        <button className='squircle-xl secondary-button' onClick={() => scrollTo('contacts')}>Contact Us</button>
      </div>

      {/* Scroll indicator */}
      <button
        className='scroll-btn'
        aria-label='Scroll to about section'
        onClick={() => scrollTo('about')}
      >
        <LuChevronsDown className='arrow' />
      </button>

    </section>
  );
};

export default Hero;