import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './ImageSlider.css';

const slideImages = [
  'https://www.asus.com/media/IN/banners/7miqusxwkb9vfqzf/7miqusxwkb9vfqzf-0_0_desktop.jpg',
  'https://www.asus.com/media/IN/banners/i7ijdheqazaw68fx/i7ijdheqazaw68fx-0_0_desktop.jpg',
  'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/graphic-cards/20-series/gtc-2020/geforce-rtx-laptops-banner-background-image-spec2-bb580_440-l@2x.jpg',
  'https://resource.logitechg.com/w_1800,c_limit,f_auto,q_auto:best,f_auto,dpr_auto/content/dam/gaming/en/plp-keyboards/plp-keyboard-hero-desktop.png?v=1',
  'https://storage-asset.msi.com/global/picture/banner/banner_15990400935f4f6a5dd36d4.jpg'
];

const properties = {
  duration: 5000,
  transitionDuration: 1000,
  infinite: true,
  indicators: true,
  arrows: true,
  autoplay: true
}

const Slideshow = () => {

  return (
    <div className="slide-container">
      <Slide {...properties} >
        <div className="each-slide">
          <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>

          </div>
        </div>
        <div className="each-slide">
          <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>

          </div>
        </div>
        <div className="each-slide">
          <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
            <div className="text__block2">
              <h4 className="right__text__h">
                GEFORCE RTX 20 SERIES
              </h4>
              <br></br>
              <span className="right__text__mid">
                RTX. IT’S ON.
               </span>
              <p className="ban__foot">
                GeForce RTX laptops are the ultimate gaming powerhouses with the fastest performance and most realistic graphics, packed into thin designs. Unleash the power of AI and real-time ray tracing on the most demanding games and creative projects.
               </p>
              <br></br>
              <button className="right__block__btn">LEARN MORE</button>
            </div>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ 'backgroundImage': `url(${slideImages[3]})` }}>
            <div className="text__block">
              <h4 className="ban__mid">
                GAMING KEYBOARDS
                        </h4>
              <br></br>
              <div className="line" />
              <br></br>
              <p className="ban__foot">
                Speed. Accuracy. Durability. Logitech G gaming keyboards are designed with the technology and materials required for high performance gaming.
              </p>
            </div>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ 'backgroundImage': `url(${slideImages[4]})` }}>

          </div>
        </div>
      </Slide>
    </div>
  )
}

export default Slideshow