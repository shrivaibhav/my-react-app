import React from 'react'
import { Link } from 'gatsby'
import staticdata from '../../staticdata.json'
import Layout from '../components/layout'
//import Image from '../components/image'
import Card from '../components/Card.jsx'
import Section from '../components/Section'
import Wave from '../components/Wave'
import Cell from '../components/Cell.jsx'
import styled from 'styled-components'
const SectionCaption = styled.div`
  font-weight: 700;
  text-align: center;
  font-size: 18px;
  text-transform: uppercase;
  color: #006064;
`
const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 20px auto 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
  padding: 0 0 0 15px;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    padding: 0 0 0 35px;
  }
`
const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Hello everyone!!</h1>
        <p>
          Let's begin !!!!!!!!!!!!!!!!!!!!!!!! <br /> Here is the description
          for 'react for designers'
        </p>
        <Link to="/page-2/">Go to page 2</Link>
        <div className="Logos">
          <img src={require('../images/logo-react.png')} width="50" />
          <img src={require('../images/logo-figma.png')} width="50" />
          <img src={require('../images/logo-framer.png')} width="50" />
          <img src={require('../images/logo-invision.png')} width="50" />
        </div>
        <Wave />
      </div>
    </div>
    <div className="Cards">
      <h2>more courses coming..</h2>
      <div className="CardsGroup">
        <Card
          title="Design System"
          text="10 sections"
          image={require('../images/wallpaper.jpg')}
        />
        <Card
          title="React for designers"
          text="12 sections"
          image={require('../images/wallpaper2.jpg')}
        />
        <Card
          title="Sound Design"
          text="12 sections"
          image={require('../images/wallpaper3.jpg')}
        />
        <Card
          title="React for designers"
          text="12 sections"
          image={require('../images/wallpaper4.jpg')}
        />
      </div>
    </div>
    <Section
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-react.png')}
      title="REACT React"
      text="blah blah blah blah blah blah blah blah blah blah blah .........."
    />
    <SectionCaption>12 sections - 6 hours</SectionCaption>
    <SectionCellGroup>
      {staticdata.cells.map(cell => {
        return <Cell {...cell} />
      })}
    </SectionCellGroup>
  </Layout>
)

export default IndexPage
