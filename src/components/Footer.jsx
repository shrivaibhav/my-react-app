import React from 'react'
import styled from 'styled-components'

const FooterGroup = styled.div`
  background: #e8eaf6;
  padding: 50px 0;
  display: grid;
  grid-gap: 20px;
`

const Text = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #311b92;
  max-width: 500px;
  margin: 0 auto;
`

const Button = styled.button`
  background: linear-gradient(102.24deg, #1a237e, #4fc3f7);
  border: none;
  box-shadow: 0 10px 50px rgba(101, 41, 255, 0.3);
  border-radius: 30px;
  padding: 15px 40px;
  color: white;
  font-weight: 700;
  font-size: 20px;
  justify-self: center;
  cursor: pointer;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  outline: none;

  &:hover {
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.35);
    transform: translateY(-5px);
  }
  & .but {
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
  &:hover .but {
    transform: translateX(-15px);
  }
`

const LinkGroup = styled.div`
  width: 500px;
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
const CopyRight = styled.div`
  color: #616161;
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
`

const Footer = ({ data, children }) => (
  <div>
    <FooterGroup>
      <Text>This is where you put text</Text>
      <Button>
        <div className="but">Click me to Tweet</div>
      </Button>
      <LinkGroup>
        {data.allContentfulLink.edges.map(edge => (
          <a href={edge.node.url}>{edge.node.title}</a>
        ))}
      </LinkGroup>
      <CopyRight>{children}</CopyRight>
    </FooterGroup>
  </div>
)

export default Footer
