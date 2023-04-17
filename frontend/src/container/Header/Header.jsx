import React from 'react';
import {motion} from 'framer-motion';
import {images} from '../../constants';

import './Header.scss';

const scaleVariants ={
  whileInView:{
    scale:[0,1],
    opacity:[0,1],
    transition:{
      duration:1,
      ease: 'easeInOut',
    },
  },
};
const Header = () => {
  return (
    <div id="home" className='app__header app-flex'>
      <motion.div
        whileInView={{x:[-100,0], opacity: [0,1]}}
        transition={{duration: 1}}
        className="app__header-info"
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>
              👋
            </span>
            <div style={{marginLeft:20}}>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'><span>Sandesh</span></h1>
            </div>
          </div>
          <div className='tag-cmp app__flex'>
          <p className='p-text'>Graduate Student at CSU, Chico (Ms in Computer Science)</p>
          <p className='p-text'>Web Developer</p>
          </div>
        </div>
        

      </motion.div>

      <motion.div
      whileInView={{opacity: [0,1]}}
        transition={{duration: 1, delayChildren: 0.5}}
        className="app__header-img">
          <img src={images.sandesh} alt='profle_bg'></img>
          <motion.img
            whileInView={{scale: [0,1]}}
            transition={{duration: 1, ease: 'easeInOut'}}
            src={images.circle}
            alt='profile_circle'
            className="overlay_circle">
          </motion.img>
      </motion.div>
      <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className='app__header-circles'
      >
        {[ images.react, images.javascript, images.flutter, images.sass, images.python].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`cicle-${index}`}>
            <img src={circle} alt='profile_bg'/>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Header