import React, { Component } from 'react'
import styled from 'styled-components'
import Wave from './Wave'

const SectionGroup = styled.div`
  background: url(${props => props.image});
  height: 720px;
  background-size: cover;
  display: grid;
  grid-template-rows: 370px auto;
  grid-gap: 20px;
  position: relative;
  @media (max-width: 720px) {
    height: 780px;
  }
`
const SectionLogo = styled.img`
  align-self: end;
  width: 128px;
  margin: 0 auto;
`
const SectionTitleGroup = styled.div`
  display: grid;
  margin: 20px auto;
  text-align: center;
  grid-template-columns: auto 400px;
  grid-gap: 40px;
  grid-template-rows: auto 100%;
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    grid-gap: 15px;
  }
`

const SectionTitle = styled.h3`
  color: white;
  font-size: 50px;
  margin: 0;
  line-height: 1.2;
  @media (max-width: 920px) {
    margin: 0 0 0 30px;
  }
  @media (max-width: 720px) {
    margin: 0 0 0 30px;
    font-size: 30px;
  }
`
const SectionText = styled.p`
  color: white;
  font-size: 25px;
  line-height: 1.2;
  margin: 5px 0 0 0;
  @media (max-width: 920px) {
    margin: 10px 20px 0 0;
  }
  @media (max-width: 720px) {
    margin: 10px 20px 0 15px;
    font-size: 20px;
  }
`
const WaveBottom = styled.div`
  position: absolute;
  width: 100%;
  bottom: -8px;
`
const WaveTop = styled.div`
  position: absolute;
  transform: rotate(180deg);
  top: 0px;
  height: 152px;
  width: 100%;
`
const Section = props => (
  <SectionGroup image={props.image}>
    <WaveTop>
      <Wave />
    </WaveTop>
    <WaveBottom>
      <Wave />
    </WaveBottom>
    <SectionLogo src={props.logo} />
    <SectionTitleGroup>
      <SectionTitle>{props.title}</SectionTitle>
      <SectionText> {props.text} </SectionText>
    </SectionTitleGroup>
  </SectionGroup>
)

export default Section
