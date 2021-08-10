import React from 'react'
import { Card } from 'react-bootstrap'

import { Link } from 'react-router-dom'


function SecondCard({ title, content, a, img, link, onClick }) {

    return (
        <Card className="mb-4 card-lift justify-content-center" onClick={onClick} >

            <Card.Img variant="top" src={require(`../assets/img.jpg`)} style={{ height: '350px' }} />
            <Card.Body>
                <Card.Title className="text-bold">{title}</Card.Title>
                <Card.Text>
                    <label htmlFor="Enter your first name">Enter your first name</label>
                    <input type="placeholder"  required/>
                   <br/>
                   <label htmlFor="Last name">Enter your last name</label>
                   <input type="placeholder"  />
                   <br/>
                   <label htmlFor="Office location">Enter your office location</label>
                   
                </Card.Text>
               <button>Cansel</button>
               <button>Save</button>

            </Card.Body>
        </Card>



    )
}
export default SecondCard