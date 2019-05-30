import React from "react"
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'tachyons';
import Layout from "../components/layout"
import Card from "../components/card"
import Header from "../components/header";
import BodyCard from "../components/body";
import Tech from '../components/tech';

const IndexPage = () => (
  <Layout>
    <Header />
    <Card/>
    <Tech />
    <BodyCard />
   </Layout>
)

export default IndexPage
