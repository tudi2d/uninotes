import { Link } from "gatsby";
import React, { useState } from "react";
import "./sidebar.css";
import { Scrollbars } from "react-custom-scrollbars";

let articles = [];
let subjects = [];

const addSubjects = function(edges) {
  articles = [];
  subjects = [];
  edges.forEach(({ node }) => {
    let { frontmatter, fields, headings } = node;
    const route = fields.slug;
    const topics = fields.slug.split("/").filter(el => el !== "");
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
        if (topics[0]) {
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
          <svg
            className={shown ? "sidebar-icon-open" : "sidebar-icon-closed"}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g>
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fill="#fff"
                d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
              />
            </g>
          </svg>
        </div>
      </div>
      <nav>
        <Scrollbars autoHide>
          {articles.map(({ title, route, headings }) => (
            <ul className="sidebar-article" key={title + route}>
              <li className="sidebar-post-list">
                <Link to={route} className="link">
                  {title}
                </Link>
              </li>
              <ul className="sidebar-anker">
                {headings.map(({ value, depth, route }) => (
                  <Link to={route} className="link" key={route}>
                    <li className="sidebar-post-headings" key={title + value}>
                      {value}
                    </li>
                  </Link>
                ))}
              </ul>
            </ul>
          ))}
          {subjects.map(({ title, pages }, i) => (
            <ul className="sidebar-topic" key={title ? title : i}>
              <li>
                <h4>{title ? title.toUpperCase() : ""}</h4>
              </li>
              {pages.map(({ title, route, headings }) => (
                <ul className="sidebar-topic-article" key={title + route}>
                  <li className="sidebar-topic-post-list">
                    <Link to={route} className="link">
                      {title}
                    </Link>
                  </li>
                  <ul className="sidebar-anker">
                    {headings.map(({ value, depth, route }) => (
                      <Link to={route} className="link" key={route}>
                        <li
                          className={`sidebar-topic-post-headings depth-${depth}`}
                          key={title + value}
                        >
                          {value}
                        </li>
                      </Link>
                    ))}
                  </ul>
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
