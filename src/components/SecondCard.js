
import React from 'react'
import { Card } from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'


function SecondCard({ title, content, a, img, link, onClick }) {

    return (
        <Card className="card-container1" onClick={onClick} >

            <Card.Img variant="top" src={require(`../assets/img.jpg`).default} style={{ height: '150px', width: '150px' }} />
            <Card.Body>
                <Card.Title className="text-bold">{title}</Card.Title>
                <Card.Text>
                  
                    <input type="text"  required placeholder="Enter your first name" />
                   <br/>
                   <input type="text"  required placeholder="Enter your last name" />
                   
                   <br/>
                   <input type="text"  required placeholder="Enter your office" />
                   
                   
                </Card.Text>
               <Button variant='Secondary' >Cancel</Button>
               <Button variant="light">Save</Button>
               <br/>
               <Link to='/FirstCard'>FirstCard</Link>

            </Card.Body>
        </Card>



    )
}
export default SecondCard