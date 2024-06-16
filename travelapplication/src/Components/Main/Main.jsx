import React, {useEffect} from "react";
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from "react-icons/hi";
import img from '../../Assets/imgg.jpg';
import img2 from '../../Assets/imgg2.jpg';
import img3 from '../../Assets/imgg3.jpg';
import img4 from '../../Assets/imgg4.jpg';
import img5 from '../../Assets/imgg5.jpg';
import img6 from '../../Assets/imgg6.jpg';
import img7 from '../../Assets/imgg7.jpg';
import img8 from '../../Assets/imgg8.jpg';
import img9 from '../../Assets/imgg9.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

import './Main.css';


const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'New zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventures.'
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Orchard Road',
    location: 'Sinagapore',
    grade: 'CULTURAL RELAX',
    fees: '$500',
    description: 'Singapore is home to the world’s most Instagrammable hotel, an exciting mix of cultures and state-of-the-art restaurants.'
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Burj Khalifa',
    location: 'Dubai',
    grade: 'Skyscraper',
    fees: '$400',
    description: 'The Burj Khalifa, located in Dubai, United Arab Emirates, is currently the tallest building and freestanding structure in the world. Standing at a height of 828 meters (2,722 feet), it dominates the skyline of Dubai and is a symbol of the citys ambition and modernity.'
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Effiel Tower',
    location: 'Paris',
    grade: 'Skyscraper',
    fees: '$900',
    description: 'The Eiffel Tower, one of the most iconic landmarks in the world, stands proudly in the heart of Paris, France. Designed by Gustave Eiffel and his team of engineers, it was completed in 1889 as the centerpiece of the Exposition Universelle (Worlds Fair) to celebrate the 100th anniversary of the French Revolution.'
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: 'Taj Mahal',
    location: 'India',
    grade: 'Historical Place',
    fees: '$350',
    description: 'The Taj Mahal, a UNESCO World Heritage Site located in Agra, India, is one of the most exquisite architectural masterpieces in the world. Commissioned by the Mughal Emperor Shah Jahan in memory of his beloved wife, Mumtaz Mahal, the Taj Mahal is a timeless symbol of love, beauty, and devotion.'
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: 'India Gate',
    location: 'India',
    grade: 'Historical Place',
    fees: '$300',
    description: 'The India Gate, situated in the heart of New Delhi, India, is a majestic war memorial that stands as a tribute to the soldiers of the Indian Army who sacrificed their lives during World War I and the Third Anglo-Afghan War. Designed by Sir Edwin Lutyens, the monument was completed in 1931 and has since become an enduring symbol of Indias valor, sacrifice, and national pride.'
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: 'London Breeze',
    location: 'London',
    grade: 'Historical Place',
    fees: '$1000',
    description: 'Londons weather is often characterized by its variability, with breezes being a common feature, particularly in the spring and summer months. These breezes can offer a welcome relief from the sometimes stifling heat of the city, providing a refreshing sensation as they rustle through the trees and along the streets.'
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: 'Jammu Kashmir',
    location: 'India',
    grade: 'Cultural Relax',
    fees: '$150',
    description: 'Kashmir, often referred to as "Paradise on Earth," is renowned for its breathtaking natural beauty, captivating landscapes, and serene atmosphere. Nestled in the northernmost region of India, Kashmir is surrounded by the majestic Himalayan mountain range, which provides a stunning backdrop to its scenic splendor.'
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: 'Manali',
    location: 'India',
    grade: 'Cultural Relax',
    fees: '$100',
    description: 'Manali, nestled in the scenic Kullu Valley of Himachal Pradesh, India, is a charming hill station renowned for its natural beauty, picturesque landscapes, and adventure activities. Surrounded by snow-capped mountains, lush valleys, and gushing rivers, Manali offers a perfect retreat for nature lovers and adventure enthusiasts alike.'
  }
]


const Main = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle}></img>
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="content flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>
                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}
export default Main