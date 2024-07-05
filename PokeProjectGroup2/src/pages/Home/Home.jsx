import React, { useContext } from "react";
import styles from "./Home.module.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { MyContext } from "../../context";

import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import slide_pokemon_1 from "../../assets/1.png";
import slide_pokemon_2 from "../../assets/2.png";
import slide_pokemon_3 from "../../assets/3.png";
import slide_pokemon_4 from "../../assets/4.png";
import slide_pokemon_5 from "../../assets/5.png";
import slide_pokemon_6 from "../../assets/6.png";
import slide_pokemon_7 from "../../assets/7.png";
import HomeCards from "../../components/HomeCards";

const Home = () => {
  const { allPokemons } = useContext(MyContext);
//   console.log(allPokemons);
  const pokemonList = [
    { id: 1, name: "Bulbasaur" },
    { id: 2, name: "Ivysaur" },
    { id: 3, name: "Venusaur" },
    { id: 4, name: "Charmander" },
    { id: 5, name: "Charmeleon" },
    { id: 6, name: "Charizard" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <p>wellcome to </p>
        <h1>POKEMON WORLD</h1>
      </div>

      <div className={styles.listContainer}>
        {allPokemons?.map((el, i) => (
          <HomeCards props={el} index={i} key={i} />
        ))}
      </div>
    </div>
    //     <div className={styles.container}>

    //     <h1 className={styles.heading}>Flower Gallery</h1>

    //     {/* <Swiper
    //                 effect={'coverflow'}
    //                 grabCursor={true}
    //                 centeredSlides={true}
    //                 loop={true}
    //                 slidesPerView={'auto'}
    //                 coverflowEffect={{
    //                     rotate: 0,
    //                     stretch: 0,
    //                     depth: 100,
    //                     modifier: 4.5,
    //                 }}
    //                 pagination={{ el: '.swiperPagination', clickable: true }}
    //                 navigation={{
    //                     nextEl: '.swiperButtonNext',
    //                     prevEl: '.swiperButtonPrev',
    //                     clickable: true,
    //                 }}
    //                 modules={[EffectCoverflow, Pagination, Navigation]}
    //                 className={styles.swiperContainer}
    //             >
    //                 <SwiperSlide style={{textAlign:'center',borderRadius: "50%" , width:'50%'}}>
    //                     <img src={slide_pokemon_1} alt="Slide Image 1" />
    //                 </SwiperSlide>
    //                 <SwiperSlide style={{textAlign:'center',borderRadius: "50%" , width:'50%'}}>
    //                     <img src={slide_pokemon_1} alt="Slide Image 1" />
    //                 </SwiperSlide>
    //                 <SwiperSlide style={{textAlign:'center',borderRadius: "50%" , width:'50%'}}>
    //                     <img src={slide_pokemon_1} alt="Slide Image 1" />
    //                 </SwiperSlide>
    //                 <SwiperSlide style={{textAlign:'center',borderRadius: "50%" , width:'50%'}}>
    //                     <img src={slide_pokemon_1} alt="Slide Image 1" />
    //                 </SwiperSlide>

    //                 <div className={styles.sliderControler}>
    //                     <div className={`${styles.swiperButtonPrev} ${styles.sliderArrow}`}>
    //                         <ArrowLeftIcon className={styles.arrowLeft} aria-hidden="true" />
    //                     </div>
    //                     <div className="swiperButtonNext sliderArrow">
    //                         <ArrowRightIcon className={styles.arrowRight} aria-hidden="true" />
    //                     </div>
    //                     <div className={styles.swiperPagination}></div>
    //                 </div>
    //             </Swiper> */}
    //   </div>
  );
};

export default Home;
