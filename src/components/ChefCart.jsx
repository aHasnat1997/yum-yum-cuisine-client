// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";


const ChefCart = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch('https://chef-recipe-hunter-server-beta.vercel.app/chef')
      .then(res => res.json())
      .then(data => setChefs(data))
  }, [])

  console.log(chefs);

  return (
    <div className='max-w my-16'>
      <h1 className='my-8 text-center text-6xl font-extrabold'>Our Talented Chefs</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          }
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          chefs.map((chef) =>
            <SwiperSlide key={chef.chef_id}>
              <div className="card glass bg-teal-500 shadow-xl pt-8 hover:bg-teal-400">
                <img className='w-1/2 rounded-full mx-auto' src={chef.chef_img} alt="" />
                <div className="card-body">
                  <h2 className="card-title text-4xl font-bold mx-auto">{chef.chef_name}</h2>
                  <p className='text-justify'>{chef.chef_description}</p>
                  <div className="card-actions mx-auto mt-4">
                    <button className="btn btn-primary">More About Chef</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        }
      </Swiper>
    </div>
  );
};

export default ChefCart;
