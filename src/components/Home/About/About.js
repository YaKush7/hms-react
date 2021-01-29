import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import p1 from "./images/Rishav.jpeg";
import p2 from "./images/Aditya.jpg";
import p3 from "./images/Yash.jpg";
import p4 from "./images/Saurabh.jpeg";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="fix">
      <Container>
        <Row>
          <Col size="12" className="text-center title pt-4">
            <h1>About Us</h1>
            <hr></hr>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col sm="12" lg="6">
            <ID img={p1} init="R" name="ishav Bhardwaj" sap="1000010909" roll="180178012" mail="mailto: bhardwajrishav89@gmail.com" tel="tel: 06205109117" />
          </Col>
          <Col sm="12" lg="6">
            <ID img={p2} init="A" name="ditya Singh" sap="1000010801" roll="180178011" mail="mailto: adiusingh127@gmail.com" tel="tel: 08941847380" />
          </Col>
        </Row>
        <Row className="mb-4">
          <Col sm="12" lg="6">
            <ID img={p3} init="Y" name="ash Kushwaha" sap="1000010515" roll="180178045" mail="mailto: yashkushwaha227@gmail.com" tel="tel: 08630087043" />
          </Col>
          <Col sm="12" lg="6">
            <ID img={p4} init="S" name="aurabh Bhandari" sap="1000010636" roll="180178004" mail="mailto: saurabh20bhandari@gmail.com" tel="tel: 08192992759" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;

//helper

const ID = (props) => {
  return (
    <Card className="mb-3" id="cid">
      <Row className="no-gutters">
        <Col xs="5" className="my-auto">
          <img src={props.img} className="card-img img-fluid rounded-circle p-3" alt="profile-pic" />
        </Col>
        <Col xs="7" className="text-center my-auto">
          <CardBody>
            <CardTitle className="h4 title">
              <span className="text-danger font-weight-bold">{props.init}</span>
              {props.name}
            </CardTitle>
            <CardText className="text-center ctext">
              <b>SAP ID:</b> {props.sap}
              <br />
              <b>Roll No:</b> {props.roll}
            </CardText>
            <div className="text-muted ctext">
              <CardText>
                <a href={props.mail}>
                  <FontAwesomeIcon icon={["fas", "envelope"]} /> Email{" . "}
                </a>{" "}
                <a href={props.tel}>
                  <FontAwesomeIcon icon={["fas", "phone-alt"]} /> Call
                </a>
              </CardText>
            </div>
          </CardBody>
        </Col>
      </Row>
    </Card>
  );
};
