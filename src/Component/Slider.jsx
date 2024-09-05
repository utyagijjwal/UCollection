import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = () => {
  const images = [
    { src: 'https://images-eu.ssl-images-amazon.com/images/G/31/OHL_HSS/PC_hero_1500x600-1uberseptunrec._CB564441518_.jpg', alt: 'Ujjwal Collection 1' },
    { src: 'https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_2x_1._CB582889946_.jpg', alt: 'Ujjwal Collection 2' },
    { src: 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200_V3._CB558389732_.jpg', alt: 'Ujjwal Collection 3' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  return (
    <div className="w-full bg-gray-900 ">
      <div className="w-full mx-auto">
        
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="w-full h-50 md:h-[500px] lg:h-[600px]">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderComponent;
