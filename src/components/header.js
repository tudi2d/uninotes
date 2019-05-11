import { Link } from 'gatsby'
import React from 'react'

const Header = () => (
  <div
    style={{
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        textAlign: 'center',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'black',
            fontFamily: 'Courier, monospace',
            textDecoration: 'none',
          }}
        />
      </h1>
    </div>
  </div>
)

export default Header
