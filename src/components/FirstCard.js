import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import {Button} from 'react-bootstrap';
import { NavLink, Link as NLink } from 'react-router-dom';


class SingleCard extends Component {
  state = {
    img: [],
    post: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
}


  render() {
    const { title, a, link, img, post } = this.state;

    return (
      <Card className="cmb-4 card-lift">
        <Card.Img variant="right" src={require("../assets/img.jpg")} style={{ height: '150px', color: "green"}} />

        <Card.Body>
          <Card.Title>First Name</Card.Title>
          <Card.Text>
           <p>Last name</p>
          <p>Office location</p>
          </Card.Text>
          <Button variant="primary" handleSubmit={this.handleSubmit}>Rotate 
          </Button>
        </Card.Body>
      </Card>   
    );
  }
}

export default SingleCard;