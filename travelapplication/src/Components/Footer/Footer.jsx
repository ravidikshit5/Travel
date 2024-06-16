import React, {useEffect} from "react";
import './Footer.css';
import video2 from '../../Assets/video2.mp4'
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore} from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import Aos from 'aos';
import 'aos/dist/aos.css'
const Footer = ()=>{
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>
      <div className="secContent container">
        <div  className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder="Enter email address"/>
            <button data-aos="fade-up" className="btn flex" type="submit">
            Send <FiSend className="icon" />
            </button>
          </div>

        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex"> <MdOutlineTravelExplore className="icon" />Travel</a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore et id fugiat quibusdam magnam laborum labore dolorum eaque dolor, culpa excepturi eius sunt repudiandae impedit doloremque enim pariatur nihil. Fugiat.</div>

            <div data-aos="fade-up" className="footerSocials flex">
            <FaXTwitter className="icon"/>
            <FaYoutube className="icon"/>
            <FaInstagram className="icon"/>
            <FaTripadvisor className="icon"/>
            </div>
          </div>

          <div className="footerLinks grid">
            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroups">
              <span className="groupTitle">
                OUR AGENCY
              </span>
              <li className="footerList flex">
              <FaChevronRight className="icon" />
              Services
              </li>
              <li className="footerList flex">
              <FaChevronRight className="icon" />
              Insurance
              </li>
              <li className="footerList flex">
              <FaChevronRight className="icon" />
              Agency
              </li>
              <li className="footerList flex">
              <FaChevronRight className="icon" />
              Tourism
              </li>
              <li className="footerList flex">
              <FaChevronRight className="icon" />
              Payment
              </li>
            </div>
{/* Second Group */}
            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroups">
              <span className="groupTitle">
                Partners
              </span>
              <li className="footerList flex">
              <FaChevronRight className="icon" />
              Bookings
              </li>
              <li className="footerList flex">
              <FaChevronRight className="icon" />
              Rentcars
              </li>
              <li className="footerList flex">
              <FaChevronRight className="icon" />
              HostelWorld
              </li>
              <li className="footerList flex">
              <FaChevronRight className="icon" />
              Trivago
              </li>
              <li className="footerList flex">
              <FaChevronRight className="icon" />
              TripAdvisor
              </li>
            </div>

            {/* Group 3 */}

            <div data-aos="fade-up" data-aos-duration="5000" className="linkGroups">
              <span className="groupTitle">
                LAST MINUTE
              </span>
              <li className="footerList flex">
              <FaChevronRight className="icon" />
              London
              </li>
              <li className="footerList flex">
              <FaChevronRight className="icon" />
              California
              </li>
              <li className="footerList flex">
              <FaChevronRight className="icon" />
              Indonesia
              </li>
              <li className="footerList flex">
              <FaChevronRight className="icon" />
              Europe
              </li>
              <li className="footerList flex">
              <FaChevronRight className="icon" />
              Oceania
              </li>
            </div>

          </div>
          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHT RESERVED - 2024</small>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Footer