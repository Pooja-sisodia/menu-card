import React from "react";
import "./style.css";

const MenuCard = ({ menuData }) => {
  console.log(menuData);
  return (
    <>
      <section className="main-card-container">
        {menuData.map((currEle, index) => {
          const {id, name, image, category, description}  = currEle;
          return (
            <>
              <div className="card_container " key={index}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">
                      {id}
                    </span>
                    <span className="card-author subtle">
                      {category}
                    </span>
                    <h1 className="card-title">{name}</h1>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <div className="card-read">Read</div>
                    <div>
                      <img
                        src={image}
                        alt="picture"
                        className="card-media"
                      />
                      <span className="card-tag subtle">Orde Now</span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
        ;
      </section>
    </>
  );
};

export default MenuCard;
