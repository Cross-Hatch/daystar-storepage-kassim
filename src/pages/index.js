import * as React from "react"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import { Container, Row, Col, Card, Image } from "react-bootstrap"


import gingerLine from "../images/gingerLine.png"
import royce from "../images/royce.png" 
import "./index.css"


const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Container>
     
     <Row className="row center">
     <Col md={6}>
        <Card> 
          <Card.Img src={gingerLine}  
            className="card-img"
            alt=" Ginger Line Daystar Enterprise" 
            style={{width: "100px"}}
            fluid
            />

          
        <Card.Body> 
          <Card.Title>  Ginger Line  </Card.Title>
          <Card.Text>  <p>  Pommegranet </p> </Card.Text>
          <Container>  Quantity - <Card.Text className="number">1</Card.Text>+ GHS 3  </Container>
        </Card.Body>
       
   
          
       
       
       
       </Card>
       </Col>

        <Col md={6} >
        <Card  > 
        <Card.Img src={royce} 
            className="card-img" 
            alt=" Royce Daystar Enterprise " 
            style={{width: "100px"}}
            fluid
            />
        <Card.Body>  
        <Card.Title> Royce</Card.Title>
          <Card.Text>  Apple Lemon Vanilla </Card.Text>
          <Container>  Quantity - <Card.Text className="number">1</Card.Text> + GHS 3</Container>
        </Card.Body>
       </Card>
        </Col>

</Row>

    </Container>
  </Layout>
)
export const Head = () => <Seo title="Home" />

export default IndexPage
