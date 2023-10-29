import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Bar = () => {
  return (
    <>
      <Navbar className="header__bg-navbar shadow-lg">
        <Container>
          <Navbar.Brand href="#home">
            <p className='text-white fs-3 m-0 fw-light'>Ya<span className='fw-semibold'>Ganaste</span></p>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Bar