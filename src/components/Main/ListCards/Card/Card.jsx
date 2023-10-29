/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const CardBank = ({item}) => {
  return (
    <Card className='card_styles'>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          Lorem ipsum Pariatur quaerat voluptatem officiis mollitia laboriosam numquam saepe ullam doloremque sequi.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{item.username}</ListGroup.Item>
        <ListGroup.Item>{item.email}</ListGroup.Item>
        <Card.Link href='#'><ListGroup.Item>{item.website}</ListGroup.Item></Card.Link>
      </ListGroup>
    </Card>
  )
}

export default CardBank