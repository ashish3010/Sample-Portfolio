import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { motion } from 'framer-motion'
const Intro = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const transition =  {duration : 2, type:'spring'}
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={darkMode? {color:"white"}:{color:'var(--black)'}}>Hi! I Am</span>
                <span>Andrew Thomas</span>
                <span>Frontend Developer with high level of experience in web designing and development, producting the Quality work.</span>
            </div>
            <button className="i-button button">Hire Me</button>
            <div className="i-icons">
                <a href="http://github.com"><img src={Github}/></a>
                <a href="http://linkedin.com"><img src={LinkedIn}/></a>
                <a href="http://instagram.com"> <img src={Instagram}/></a>
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} />
            <img src={Vector2} />
            <img src={boy} />

            <motion.img
            initial={{left:'-36%'}}
            whileInView={{left:'-24%'}} 
            transition={transition}
            src={glassesimoji}/>

            <motion.div
             initial={{ top: "-4%", left: "74%" }}
             whileInView={{ left: "68%" }}
             transition={transition}
            style={{top:'3%', left:'65%'}}
            className='floating-div'>
                <FloatingDiv image={crown} txt1="Web" txt2="Developer"/>
            </motion.div>

            <motion.div
             initial={{ left: "9rem", top: "18rem" }}
             whileInView={{ left: "0rem" }}
             transition={transition}
            style={{top:'19.7rem', left:'-12%'}} className='floating-div'>
                <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'/>
            </motion.div>
            <div className="blur" style={{background: "rgb(238 210 255)"}}></div>
            <div className="blur" style={{background: "#c1f5ff", top:'17rem', width:'21rem', height:'11rem',left:'-9rem'}}></div>
        </div>
    </div>
  )
}

export default Intro