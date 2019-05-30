import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout className='tc'>
    <SEO title="Fola Orokunle Contact info" />
      <div className='bg-blue text-white'>
        <h1 className='tc'>Fola Orokunle</h1>
        <p className='tc'>Email: Fola.Orokunle@gmail.com</p>
        <p className='tc'>Phone: 708-925-6747</p>
      </div>
      
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
