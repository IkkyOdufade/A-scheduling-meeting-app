import React from 'react';
import './App.css';
import Meeting from '../src/components/meetings/meeting'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Customform from './components/customform/customform';
import Duration from './components/duration/duration';
import Time from './components/time/time';
import Schedules from './components/schedules/schedules';
import Submitbtn from './components/submitbtn/submitbtn';





export default function App() {

  return (
    <div className="App-header">
      <Container>
        <Row>
          <Col className="user" xs={5}>
            <img alt="me"  className="image" src="https://media.licdn.com/dms/image/C4D03AQGXTMZW2l140g/profile-displayphoto-shrink_100_100/0?e=1568851200&v=beta&t=VW2CYzl3vo7icGgK8NS54PEEwVYOcxpfvV9vGeAxB6k"></img>
            <h4 className="name">Rafiki</h4>
            <h5 className="appo">Upcoming Appointments</h5>
            <div className="woes"><Schedules></Schedules></div>
          </Col>

          <Col className="schedule" xs={7}>
              <Meeting></Meeting>
              <Customform></Customform>
              <Duration></Duration>
              <Time></Time>
              <Submitbtn></Submitbtn>
          </Col>
        </Row>
      </Container>
     
    </div>
  )
}


