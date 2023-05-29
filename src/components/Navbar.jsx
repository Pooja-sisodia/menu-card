import React from "react";

const Navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((currEle, index) => {
            return (
              <button
                key={index}
                className="btn-group-items"
                onClick={() => filterItem(currEle)}
              >
                {currEle}
              </button>
            );
          })}
          ;
        </div>
      </nav>
    </>
  );
};

export default Navbar;
