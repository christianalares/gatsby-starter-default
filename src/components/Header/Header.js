/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
// import { useStaticQuery, graphql } from 'gatsby'

import styles from './Header.module.scss'

const Header = () => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <header className={styles.header}>
      <h1>Logo</h1>
      <button type="button">Kontakt</button>
    </header>
  )
}

export default Header
