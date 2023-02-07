import React, { Fragment, useEffect } from 'react';
import { CgMouse } from 'react-icons/cg';
import './Home.css';
import Disea from './Disea.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'bootstrap/dist/css/bootstrap.min.css';
import Articlecard from './Articlecard.js';
import MetaData from '../layout/metaData';
import { getDisea } from '../../actions/diseaAction';
import { useSelector, useDispatch } from 'react-redux';

// import images

import malaria from '../../images/malaria.jpg';
import cough from '../../images/cough.jpg';
import genital from '../../images/genital.jpg';
import jaundice from '../../images/jaundice.jpg';
import typhoid from '../../images/typhoid.jpg';
import transgender from '../../images/transgender.jpg';

const disea = [
  {
    name: 'Malaria',
    photo: malaria,
    description:
      'Malaria is a life, threatening diseases primarily ,found in tropical countries.',
    _id: '1',
  },
  {
    name: 'Jaundice',
    photo: jaundice,
    description:
      'Jaundice is a life, threatening diseases primarily ,found in tropical countries.',
    _id: '2',
  },
  {
    name: 'typhoid',
    photo: typhoid,
    description:
      'typhoid is a life, threatening diseases primarily ,found in tropical countries.',
    _id: '3',
  },
  {
    name: 'cough',
    photo: cough,
    description:
      'coughcold is a life, threatening diseases primarily ,found in tropical countries.',
    _id: '4',
  },
  {
    name: 'genital',
    photo: genital,
    description:
      'genital is a life, threatening diseases primarily ,found in tropical countries.',
    _id: '5',
  },
  {
    name: 'transgender',
    photo: transgender,
    description:
      'transgender is a life, threatening diseases primarily ,found in tropical countries.',
    _id: '6',
  },
  {
    name: 'transgender',
    photo: transgender,
    description:
      'transgender is a life, threatening diseases primarily ,found in tropical countries.',
    _id: '7',
  },
  {
    name: 'transgender',
    photo: transgender,
    description:
      'transgender is a life, threatening diseases primarily ,found in tropical countries.',
    _id: '8',
  },
];

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDisea());
  }, [dispatch]);

  return (
    <Fragment>
      <MetaData title="HealWeb" />
      <div className="banner">
        <p>Welcome To HealWeb</p>
        <h1>FIND DISEA BELOW</h1>

        <a href="#container">
          <button>
            Scroll <CgMouse />
          </button>
        </a>
      </div>

      <h2 className="heading"> Featured Disea </h2>
      <div className="container" id="container">
        {disea.map(({ photo, name, id, description }, index) => (
          <Disea
            key={index + name}
            photo={photo}
            name={name}
            id={id}
            description={description}
          />
        ))}
      </div>

      <h2 className="homeheading">Articles</h2>

      <div className="container py-4 px-4 justify-content-center ">
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1480: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
        >
          <SwiperSlide>
            <Articlecard
              data={{
                imgSrc: malaria,
                description:
                  'Malaria is a life, threatening diseases primarily ,found in tropical countries.',
                title: 'Malaria',
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Articlecard
              data={{
                imgSrc: jaundice,
                description:
                  'Jaundice is a life, threatening diseases primarily ,found in tropical countries.',
                title: 'Jaundice',
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Articlecard
              data={{
                imgSrc: typhoid,
                description:
                  'Typhoid is a life, threatening diseases primarily ,found in tropical countries.',
                title: 'Typhoid',
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Articlecard
              data={{
                imgSrc: genital,
                description:
                  'Genital Disease is a life, threatening diseases primarily ,found in tropical countries.',
                title: 'Genital Disease',
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Articlecard
              data={{
                imgSrc: cough,
                description:
                  'Cough cold is a life, threatening diseases primarily ,found in tropical countries.',
                title: 'Cough and Cold',
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Articlecard
              data={{
                imgSrc: transgender,
                description:
                  'transgender Diseases is a life, threatening diseases primarily ,found in tropical countries.',
                title: 'Transgender',
              }}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </Fragment>
  );
};

export default Home;
