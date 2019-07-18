import { Link } from "gatsby";
import React, { useState } from "react";
import "./sidebar.css";
import { Scrollbars } from "react-custom-scrollbars";
import SidebarItem from "./SidebarItem";
import ArrowIcon from "../ArrowIcon";

let articles = [];
let subjects = [];

const addSubjects = function(edges) {
  articles = [];
  subjects = [];
  edges.forEach(({ node }) => {
    let { frontmatter, fields, headings } = node;
    const route = fields.slug;
    const topics = fields.slug.split("/").filter(el => el !== "");
    // Format link to anker
    headings = headings.map(heading => {
      return {
        ...heading,
        route: `${route}#${heading.value
          .toLowerCase()
          .split(" ")
          .join("-")
          .split("'")
          .join("")}`,
      };
    });
    if (route !== "/404/" && route !== "/") {
      const page = {
        title: frontmatter.title
          ? frontmatter.title
          : topics[topics.length - 1],
        headings,
        route,
      };
      let subjectExists = false;
      subjects.forEach(({ title, pages }) => {
        if (title === topics[0]) {
          pages.push(page);
          subjectExists = true;
        }
      });
      if (!subjectExists) {
        // route has no overtopic is added to artivles
        if (topics[0] && topics[1]) {
          subjects.push({ title: topics[0], pages: [page] });
        } else {
          articles.push(page);
        }
      }
    }
  });
};

const Sidebar = props => {
  const { edges } = props.data.allMarkdownRemark;
  addSubjects(edges);

  const defaultSidebarShown = true;
  const [shown, toggleSidebar] = useState(defaultSidebarShown);
  const [isOpen, toggleAccordion] = useState(true);

  return (
    <div className={shown ? "sidebar sidebar-open" : "sidebar sidebar-closed"}>
      <div className="sidebar-header">
        <Link to="/" className="link">
          <h1>uninotes.</h1>
        </Link>
        <div
          className="sidebar-icon-wrapper"
          onClick={() => toggleSidebar(isShown => !isShown)}
        >
          <div className={shown ? "sidebar-icon-open" : "sidebar-icon-closed"}>
            <ArrowIcon color="#fff" />
          </div>
        </div>
      </div>
      <nav>
        <Scrollbars autoHide universal>
          {articles.map(({ title, route, headings }) => (
            <ul className="sidebar-article" key={title + route}>
              <li className="sidebar-post-list">
                <Link to={route} className="link">
                  {title}
                </Link>
              </li>
              <SidebarItem headings={headings} />
            </ul>
          ))}
          {subjects.map(({ title, pages }, i) => (
            <ul className="sidebar-topic" key={title ? title : i}>
              <li>
                <h4>{title ? title.toUpperCase() : ""}</h4>
              </li>
              {pages.map(({ title, route, headings }) => (
                <ul className="sidebar-topic-article" key={title + route}>
                  <div
                    className={`sidebar-topic-post-icon ${
                      route === props.location.pathname && isOpen
                        ? "active"
                        : ""
                    }`}
                  >
                    <ArrowIcon />
                  </div>
                  <li
                    className="sidebar-topic-post-list"
                    onClick={() =>
                      toggleAccordion(
                        route !== props.location.pathname || !isOpen
                      )
                    }
                  >
                    <Link to={route} className="link">
                      {title}
                    </Link>
                  </li>
                  <SidebarItem
                    headings={headings}
                    isShown={route === props.location.pathname && isOpen}
                    onClick={() => toggleSidebar(isShown => !isShown)}
                  />
                </ul>
              ))}
            </ul>
          ))}
        </Scrollbars>
      </nav>
      <div className="sidebar-footer">
        <a href="https://www.github.com/tudi2d/uni-notes" className="github">
          contribute.
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
