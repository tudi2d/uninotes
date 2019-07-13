import { graphql, StaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Helmet from "react-helmet";
import "./layout.css";
import Sidebar from "../components/sidebar";

const Layout = props => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="layout">
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: "description", content: "Uni notes" },
            {
              name: "keywords",
              content:
                "uninotes, rwth, aachen, computer, science, computer science, web mining, fosap",
            },
          ]}
        >
          <html lang="de" />
        </Helmet>
        <Sidebar {...props} />
        {props.children}
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
