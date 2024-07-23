import React from "react";
import "./Exploremenu.css";
import { menu_list } from "../../assets/assets";
const Exploremenu = ({ category, setCategory }) => {
  return (
    <div className="exploremenu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="exploremenu-text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
        explicabo ut veniam porro magnam similique obcaecati sit, deserunt
        corporis eos consequuntur omnis perferendis mollitia vero iusto
        accusantium fugit nulla distinctio.
      </p>
      <div className="exploremenu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="exploremenu-list-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default Exploremenu;
