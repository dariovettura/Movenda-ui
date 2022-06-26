import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { cartSelector, setData } from "../store/cart.slice";
import { InView, useInView } from "react-intersection-observer";

interface Props {

  content?: any,

}

const TopSlider: React.FC<Props> = ({ content }) => {
  const dispatch = useAppDispatch()
  const { data, info } = useAppSelector(cartSelector)

  const CK = process.env.NEXT_PUBLIC_CK;
  const CS = process.env.NEXT_PUBLIC_CS;

  const swiperRef = React.useRef<any>(null);
  const [ref, inView, entry] = useInView({
    threshold: 1,
  })

  const [swiper, setSwiper] = useState<any>(null);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [lindex, setLindex] = useState(0);





  const url =
    "https://www.beergardennapoli.it/menu/wp-json/wc/v2/products/categories?orderby=slug&per_page=100&consumer_key=" +
    CK +
    "&consumer_secret=" +
    CS;

  const getData = async () => {
    await fetch(url, { method: 'GET' }).then(async res => { setCategories(await res.json()); }
    )
  }
  // const executeScroll = () => myRef.current.scrollIntoView()    
  //  // run this function from an event handler or an effect to execute scroll 
  useEffect(() => {
    getData()
    // if (swiper) {
    //   setTimeout(() => { swiper.slideTo(5); }, 3000);
    // }

  }, []);

  const gaga = (i: boolean, index: number) => {
    if (i) {
      console.log(index)
      if (swiper)
        swiper.slideTo(index)
    }
  }

  // React.useEffect(() => {

  //   if (inView) { console.log(entry) }

  // }, [inView])

  //   console.log(inView)
  //   console.log(ref)


  return (<>
    <div style={{ height: "100px" }}></div>
    <div className="stiky-wrapp">
      <div className="d-swiper-container">
        <Swiper
          slideToClickedSlide
          onSwiper={(swiper) => setSwiper(swiper)}
          // pagination={true}
          // navigation={true}
          // onSwiper={(swiper) => setSwiper(swiper)}
          slidesPerView={"auto"}
          spaceBetween={30}
          onSlideChange={() => console.log('slide change')}

        >
          {categories.map((item, index) => (
            <>
              <SwiperSlide key={index}>


                {item.name}</SwiperSlide>
            </>
          ))}

<SwiperSlide className="d-shrink">
</SwiperSlide>

        </Swiper>
      </div>
    </div>

    {categories.map((item, index) => (
      <><div ref={ref} style={{ padding: "30px" }} >

        <InView onChange={(inView) => gaga(inView, index)} style={{ height: "300px", backgroundColor: "red" }} key={index}>{item.name}</InView>
      </div>
      </>
    ))}
  </>

  );
}

export default TopSlider;