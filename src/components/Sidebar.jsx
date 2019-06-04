import { Link } from "gatsby";
import Slugger from "github-slugger";
import React, { useEffect } from "react";

import "./sidebar.css";

const slug = new Slugger();
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
        route: `${route}#${slug.slug(heading.value.toLowerCase(), true)}`,
      };
    });
    const page = {
      title: frontmatter.title ? frontmatter.title : topics[topics.length - 1],
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
  });
};

const Sidebar = props => {
  const { edges } = props.data.allMarkdownRemark;
  addSubjects(edges);

  useEffect(() => {
    return () => {
      slug.reset();
    };
  }, [props.location.href]);

  return (
    <nav className="sidebar toc">
      {articles.map(({ title, route, headings }) => (
        <ul className="sidebar-article" key={title + route}>
          <li className="sidebar-post-list">
            <Link to={route} className="link">
              {title}
            </Link>
          </li>
          <ul className="sidbar-anker">
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
          <li>{title ? title.toUpperCase() : ""}</li>
          {pages.map(({ title, route, headings }) => (
            <ul className="sidebar-article" key={title + route}>
              <li className="sidebar-post-list">
                <Link to={route} className="link">
                  {title}
                </Link>
              </li>
              <ul className="sidbar-anker">
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
        </ul>
      ))}
    </nav>
  );
};

export default Sidebar;
