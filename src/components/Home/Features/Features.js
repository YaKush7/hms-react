import { Container, Row, Col, CardBody, CardTitle, Card, CardImg } from "reactstrap";
import fitems from "./fitems";
import "./Features.css";

const Features = () => {
  return (
    <section id="features" className="fix">
      <Container className="feat">
        <Row className="mb-5">
          <Col size="12" className="text-center title pt-5">
            <h1>Features</h1>
            <hr />
          </Col>
        </Row>
        <Row>
          {fitems.map((item) => {
            return (
              <Col xs="12" lg="4" className="px-4 pb-4" key={item.id}>
                <Cardflip img={item.img} ftext={item.ftext} but={item.but} btext={item.btext} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Features;

//helper

const CardFront = (props) => {
  return (
    <Card id="card-side-front" className="text-center">
      <CardBody>
        <CardTitle className="h4 font-weight-bold">{props.text}</CardTitle>
        <CardImg bottom src={props.img} alt="Card image cap" className="cimg mx-auto" />
      </CardBody>
    </Card>
  );
};

const CardBack = (props) => {
  return (
    <Card id="card-side-back" className="text-center">
      <CardBody className="my-5">
        <CardTitle className="ctext">{props.text}</CardTitle>
        {props.but}
      </CardBody>
    </Card>
  );
};

const Cardflip = (props) => {
  return (
    <div id="card-cont" className="unselect">
      <div id="cbody">
        <CardFront img={props.img} text={props.ftext} />
        <CardBack but={props.but} text={props.btext} />
      </div>
    </div>
  );
};
