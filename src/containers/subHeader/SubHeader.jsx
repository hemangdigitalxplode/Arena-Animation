/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./subHeader.scss";
import { Container } from "react-bootstrap";
// import { Layer, SubHeaderBack } from "../../assets";
import { YellowArrow } from "../../assets";
const SubHeader = ({ bestanimationcms }) => {

  const [isOpen, setIsOpen] = useState(false)
  const [buttonText, setButtonText] = useState('Read More')

  const toggleReadMore = () => {
    setIsOpen(!isOpen)

  }

  return (
    <Container fluid className="subHeadingBackground">
      {/* <img src={SubHeaderBack} alt="image" className="image" /> */}
      {/* <div className="absolute-div container-default"> */}
      <Container className="top-of-absolute">
        <Container className="absolute-div">
          {/* <img src={Layer} alt="Image" className="Layer-Image" /> */}
          {/* <div className="container-default"> */}
          <Container>
            {/* {bestanimationcms && (
              <div dangerouslySetInnerHTML={{ __html: bestanimationcms }} />
            )} */}


            <div className="heading-subheader">
              THE BEST ANIMATION <br /> INSTITUTE <br /> IN DELHI NCR
            </div>
            <div className="paraContainer">
              <div className="paraContainer-left col-lg-7">
                <div className="paraContainer-left-first">
                  Aptech Limited, one of India's biggest non-formal vocational training for over 30 years, created Arena Animation, the Best Animation Institute brand, in 1996. Arena Animation is a pioneer and a worldwide-known institute that provides non-formal academic training programs in animation alongside related topics.
                </div>
                <div className="paraContainer-left-second">
                  Arena Animation, with its strong industry connections and affiliations, has been producing relevant academic courses that impart skills that make students highly employable. Arena students work as Graphic Designers, Web Designers, 2D/3D Animators, 2D/3D Designers, AV Editors, Technical Trainers, 3D Modelers, Multimedia Programmers, Compositors, Visualizers, Content Developers, and Pre and Post Production Executives in major animation studios and entertainment companies.
                  It was the first Animation Institute to commence operations in India, and we can today boast that Arena Animation students are the most preferred professionals in the business.
                </div>
              </div>
              <div className="paraContainer-right">
                <div>
                  The Best Institute for Animation in Delhi proudly maintains an amazing placement history spanning 25 years and continues to raise the standard for more successful professions!
                  We urge students to use their creative skills and make their ideas a reality, particularly when creating fictional characters.

                </div>
                {/* <div className="knowMore">
                  <div className="knowMore-text">KNOW MORE</div>
                  <img src={YellowArrow} className="arrow-knowMore" />
                </div> */}
              </div>

            </div>
            {/* SEO Container */}
            {
              isOpen && <div  className="paraContainer seoContainer">
                <div className="heading-subheader">
                  ANIMATION COURSES  <br /> IN <br /> NOIDA
                </div>
                <div className="paraContainer-left-first">
                  Looking to start a career in animation? Arena Animation offers top-notch Animation Courses in Noida designed to help you master the skills needed for the industry. With expert instructors and hands-on learning, you’ll gain the creative and technical knowledge to bring your ideas to life.

                  These institutes have been the top six Animation Institute in Delhi-NCR over the previous 20 years.
                  Join the Top Institute for Animation Courses in Delhi. We provide an eclectic mix of animation, visual effects, gaming, AR/VR, filmmaking, multimedia, web design, graphic design, and more courses.
                  Learn from industry pros at Animation Institute in Noida with first-hand experience working on feature films and video games.
                  Whether you are just out of college, changing fields, or looking to enhance your skills, our specialized expert-led career programs will help you develop practical professional skills that will serve you well throughout your career.
                </div>
              </div>
            }
            <div className="container seoCont">
              <button className="button-style" onClick={toggleReadMore}>{isOpen ? "Read Less" : "Read More"}</button>
            </div>


            


            {/* </div> */}
            {/* </div> */}
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default SubHeader;
