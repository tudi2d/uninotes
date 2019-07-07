import { Link } from "gatsby";
import React, { useRef, useEffect } from "react";
import "./sidebarItem.css";

const SidebarItem = ({ headings, isShown }) => {
  const itemList = useRef(null);
  useEffect(() => {
    itemList.current.style.marginTop = isShown
      ? "0"
      : `-${itemList.current.clientHeight}px`;
    return () => {
      itemList.current.style.transition = "margin 0.25s ease-in-out";
    };
  });

  return (
    <div className="sidebar-item">
      <ul ref={itemList} className="sidebar-item-list">
        {headings.map(({ value, depth, route }) => (
          <Link to={route} className="link" key={route}>
            <li
              className={`sidebar-item-list-headings depth-${depth}`}
              key={route + depth}
            >
              {value}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SidebarItem;
