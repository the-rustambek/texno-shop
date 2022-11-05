import React from "react";
import { Link } from "react-router-dom";
import "./ProductsAboutPage.css";
import "swiper/css/bundle";
import SwiperProduct from "./components/SwiperProduct";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import refresh from "../../../src/Assets/Svg/refresh.svg"
import price from "../../../src/Assets/Svg/price.svg"
import Buy from "../../../src/Assets/Svg/Buy.svg"
import skidka from "../../../src/Assets/Svg/skidka.svg"
import skidkagreen from "../../../src/Assets/Svg/skidkagreen.svg"
import Checkbox from "@mui/material/Checkbox";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function ProductsAboutPage() {
  return (
    <div className="productspage">
      <div className="products-top">
        <Link to="/" className="products-toplink">
          Заявки
        </Link>
        <span>{">"}</span>
        <Link to="/products" className="products-toplink">
          Оформить заказ
        </Link>
        <span>{">"}</span>
        <p className="productspage-text">
          Смартфон Apple iPhone 11 128 Gb Slim Box черный
        </p>
      </div>
      <div className="productspage-box">
        <h2 className="productspage-title">
          Смартфон Apple iPhone 11 128 Gb Slim Box черный
        </h2>
        <button className="korzinka-btn">
          <img src={Buy} alt="" className="korzinka-icon" />
        </button>
        <form    className="productspage-form">
          <div className="products-about">
            <SwiperProduct />
            <div className="products-info">
              <div className="products-sena">
                <p className="products-subtext">Цена телефона</p>
                <span className="products-sum">6 000 000 сум</span>
              </div>

              <div className="products-sena-obshaya">
                <p className="products-subtext">Общая цена (с наценкой) </p>
                <span className="products-sum">
                  <p>7 300 000 сум </p><div> <span>2 433 333 сум</span> <p>х3</p></div> 
                </span>
              </div>
              <div className="products-month">
                <button className="products-btn">3 мес</button>
                <button className="products-btn">6 мес</button>
                <button className="products-btn">9 мес</button>
                <button className="products-btn">12 мес</button>
              </div>
              <div className="products-natsenka">Наценка: <b> 5% </b></div>
              <div className="products-xarakteristika">
                <p className="products-subtext">Общие характеристики </p>
                <span className="products-subinfo">
                  <p>Tип:</p> <p>  моноблок (классический)</p>
                </span>
                <span className="products-subinfo">
                  <p>Стандарт:</p> <p>2G, 3G, 4G (LTE), 5G</p>
                </span>
                <span className="products-subinfo">
                  <p>Операционная система:</p> <p> iOS 14</p>
                </span>
              </div>
              <div className="products-accordion">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Показать все</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
    
            </div>
            </div>       
          </div>
          <div className="productspage-content">
            <h3 className="productspage-subtitle">
            Акции
            </h3>
            <div className="productspage-section">
              <ul className="productspage-list">
                <li className="productspage-item">
                  <div className="productspage-left">
                    <div className="productspage-imags">
                    <img src={refresh} alt="" className="productspage-pic" />
                    </div><div className="productspage-info">
                    <h3 className="productspage-subname">
                    Обменяй свой старый айфон и получи скидку на новый
                    </h3>
                    <p className="productspage-subtext">
                      - 400 000 сум
                    </p>
                  </div>
                  </div>
                  <div className="productspage-right checkboxes">
                  <Checkbox {...label}   color="success" />
 </div>
                </li> 
                <li className="productspage-item">
                  <div className="productspage-left">
                    <div className="productspage-imags productspage-price">
                    <img src={price} alt="" className="productspage-pic" />
                    </div><div className="productspage-info">
                    <h3 className="productspage-subname">
                    Наушники в подарок                    </h3>
                    <p className="productspage-subtext">
                    Apple EarPods                    </p>
                  </div>
                  </div>
                  <div className="productspage-right checkboxes">
                  <Checkbox {...label}   color="success" />
 </div>
                </li> 
                <li className="productspage-item">
                  <div className="productspage-left">
                    <div className="productspage-imags productspage-skidka">
                    <img src={skidka} alt="" className="productspage-pic" />
                    </div><div className="productspage-info">
                    <h3 className="productspage-subname">
                    Скидка 20% на смартфоны                </h3>
                    <p className="productspage-subtext">
                -10 000 сум                  </p>
                  </div>
                  </div>
                  <div className="productspage-right checkboxes">
                  <Checkbox {...label}   color="success" />
 </div>
                </li> 
                <li className="productspage-item">
                  <div className="productspage-left">
                    <div className="productspage-imags productspage-skidkagreen">
                    <img src={skidkagreen} alt="" className="productspage-pic" />
                    </div><div className="productspage-info">
                    <h3 className="productspage-subname">
                    Скидка на айфоны             </h3>
                    <span>IMEI 012345678901234</span>
                    <p className="productspage-subtext">
                -10 000 сум                  </p>
                  </div>
                  </div>
                  <div className="productspage-right checkboxes">
                  <Checkbox {...label}   color="success" />
 </div>
                </li> 
              </ul>
              <button type="button" className="productspage-zakaz">
              Добавить в корзину
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
