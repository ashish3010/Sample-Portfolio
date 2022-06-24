import React from 'react'
import './Services.css'
import Card from '../Card/Card'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Resume from "../../img/sampleResume.pdf"
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { motion } from "framer-motion";

const Services = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const transition = {duration: 1,type: "spring"};
  return (
      <div className="services" id='Services'>
          <div className="awesome">
              <span style={darkMode? {color:"white"}:{color:'var(--black)'}}>My Awesome</span>
              <span>services</span>
              <span>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  <br/> At quae maxime atque harum saepe iusto?
              </span>
                <a href={Resume} download>
              <button className="button s-button">Download CV</button></a>
              <div className="blur s-blur1" style={{background: '#abf1ff94'}}></div>

          </div>
          <div className="cards">

            <motion.div
            initial={{ left: "25rem" }}
            whileInView={{ left: "14rem" }}
            transition={transition}
            style={{left:'20rem'}}>
                <Card emoji={HeartEmoji} heading={'Design'} detail={'Figma, Sketch, Photoshop, Adobe XD'}/>
            </motion.div>

            <motion.div
            initial={{ left: "-11rem", top: "12rem" }}
            whileInView={{ left: "-4rem" }}
            transition={transition}
            style={{top:'10rem',left:'0rem'}}>
                <Card emoji={Glasses} heading={'Developer'} detail={'HTML, CSS, JavaScript, React JS'}/>
            </motion.div>

            <motion.div
            initial={{ top: "19rem", left: "25rem" }}
            whileInView={{ left: "12rem" }}
            transition={transition}
            style={{top:'19rem',left:'17rem'}}>
                <Card emoji={Humble} heading={'UI/UX'} detail={'Lorem ispum dummy text are use in the section'}/>
            </motion.div>
            <div className="blur s-blur2" style={{background: 'var(--purple)'}}></div>
          </div>
      </div>
  )
}

export default Services 