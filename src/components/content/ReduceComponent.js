import React, { useState } from "react";
import Footer from "../ui/Footer";
import Marquee from "react-fast-marquee";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import "../../styles/components/ReduceComponent.css";

const Reduce = (props) => {
  const product = props.products;
  const [index, setIndex] = useState(0);
  const { title, price, src, site, description } = product[index];

  const checkNumber = (number) => {
    if (number > product.length - 1) {
      return 0;
    }
    if (number < 0) {
      return product.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <React.Fragment>
      <div className="reduce-container">
        <div className="reduce__products-container">
          <div className="reduce__products-title">
            <h3>Goods the encourage longevity</h3>
          </div>
          <div className="reduce__products-list-container">
            <a href={site} target="_blank" rel="noreferrer">
              <div className="reduce__card-img">
              <img src={src} alt="nada" />
            </div>
            <div className="reduce__products-body">
              <div className="reduce__body-title">{title}</div>
              <div className="reduce__body-description">{description}</div>
              <div className="reduce__body-price">{price}</div>
            </div>
            </a>

        </div>
        <div className="reduce__btn-container">
            <button className="reduce__prev-btn" onClick={prevPerson}><FaChevronLeft /></button>
            <button className="reduce__next-btn" onClick={nextPerson}><FaChevronRight /></button>
            </div>
          </div>
        <div className="reduce__waste-marquee">
          <div className="reduce__waste-marquee-title">
            Waste and Recycling Services
          </div>
          <Marquee>
            {" "}
            {props.waste.map((waste) => {
              return (
                <div className="reduce__waste-card" key={waste.id}>
                  <a href={waste.site} target="_blank" rel="noreferrer">
                    <div className="reduce-waste-card-body">
                      <div className="reduce__waste-card-header">
                        {waste.title}
                      </div>
                      <div className="reduce__waste-card-body">
                        {waste.subtitle}
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
          </Marquee>
        </div>
        <div className="reduce__tips-marquee">
          <div className="reduce__tips-marquee-title">Tips</div>
          <Marquee>
            {props.tips.map((tip) => {
              return (
                <div className="reduce__tips-card" key={tip.id}>
                  <div className="reduce__tips-cardtext">{tip.title}</div>
                </div>
              );
            })}
          </Marquee>
        </div>
        {/* <div className="reduce__title-btn">
          <p className="reduce__title">minimize carbon output and waste</p>
          <div className="reduce__btn">
            <button
              className="modal-button"
              color="success"
              outline
              id="suggestButton"
            >
              Suggest any additions to this page!
            </button>
          </div>
        </div> */}
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Reduce;
