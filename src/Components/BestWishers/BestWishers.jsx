/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import wisherImg from "../../assets/images/wisher.png";

const BestWishers = () => {
  return (
    <section className="section-bestwish">
      <div className="container mx-auto">
        <h5>We have millions of best wishers</h5>
      </div>

      <div className="swiper-bestwish">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div>
              <p>
                Eleifend fames amet, fames enim. Ullamcorper pellentesque ac
                volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros
                pretium felis massa mauris, aliquam congue.
              </p>
              <ul>
                <li>
                  <img src={wisherImg} alt="Wisher Image" />
                </li>
                <li>
                  Cameron Williamson, <small>CEO</small>
                </li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <p>
                Eleifend fames amet, fames enim. Ullamcorper pellentesque ac
                volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros
                pretium felis massa mauris, aliquam congue.
              </p>
              <ul>
                <li>
                  <img src={wisherImg} alt="Wisher Image" />
                </li>
                <li>
                  Cameron Williamson, <small>CEO</small>
                </li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <p>
                Eleifend fames amet, fames enim. Ullamcorper pellentesque ac
                volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros
                pretium felis massa mauris, aliquam congue.
              </p>
              <ul>
                <li>
                  <img src={wisherImg} alt="Wisher Image" />
                </li>
                <li>
                  Cameron Williamson, <small>CEO</small>
                </li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <p>
                Eleifend fames amet, fames enim. Ullamcorper pellentesque ac
                volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros
                pretium felis massa mauris, aliquam congue.
              </p>
              <ul>
                <li>
                  <img src={wisherImg} alt="Wisher Image" />
                </li>
                <li>
                  Cameron Williamson, <small>CEO</small>
                </li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <p>
                Eleifend fames amet, fames enim. Ullamcorper pellentesque ac
                volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros
                pretium felis massa mauris, aliquam congue.
              </p>
              <ul>
                <li>
                  <img src={wisherImg} alt="Wisher Image" />
                </li>
                <li>
                  Cameron Williamson, <small>CEO</small>
                </li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <p>
                Eleifend fames amet, fames enim. Ullamcorper pellentesque ac
                volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros
                pretium felis massa mauris, aliquam congue.
              </p>
              <ul>
                <li>
                  <img src={wisherImg} alt="Wisher Image" />
                </li>
                <li>
                  Cameron Williamson, <small>CEO</small>
                </li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <p>
                Eleifend fames amet, fames enim. Ullamcorper pellentesque ac
                volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros
                pretium felis massa mauris, aliquam congue.
              </p>
              <ul>
                <li>
                  <img src={wisherImg} alt="Wisher Image" />
                </li>
                <li>
                  Cameron Williamson, <small>CEO</small>
                </li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <p>
                Eleifend fames amet, fames enim. Ullamcorper pellentesque ac
                volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros
                pretium felis massa mauris, aliquam congue.
              </p>
              <ul>
                <li>
                  <img src={wisherImg} alt="Wisher Image" />
                </li>
                <li>
                  Cameron Williamson, <small>CEO</small>
                </li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <p>
                Eleifend fames amet, fames enim. Ullamcorper pellentesque ac
                volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros
                pretium felis massa mauris, aliquam congue.
              </p>
              <ul>
                <li>
                  <img src={wisherImg} alt="Wisher Image" />
                </li>
                <li>
                  Cameron Williamson, <small>CEO</small>
                </li>
              </ul>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default BestWishers;
