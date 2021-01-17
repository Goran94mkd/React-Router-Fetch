import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'
import logo from '../images/routerLogo.png'
import '../styles/Home.css'


const Home = () => {
  return (
    <div 
      style={{
        backgroundColor: 'rgb(25, 135, 84)',
        height: '625px'
      }}
    >
      <div>
        <img alt='placeholderImage' src={logo}  
          style={{marginLeft: '42%', maxWidth: '250px', marginTop: '2rem'}} 
        />
      </div>
      <Card border='success'
        style={{ 
          width: '40rem',
          marginLeft: '23.5rem',
          marginTop: '5rem'
        }}
      >
        <Card.Header className="Header">          
          <h1>React Routing</h1>
        </Card.Header>
        <Card.Body>
          <Card.Text className="Text">
          <Button variant="success" className="Button">
            <Link to='/todos' className="Link">
              ToDo List
            </Link>
          </Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Home