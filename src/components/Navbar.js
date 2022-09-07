import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Navp = () => {
    return (
        <>
        
        <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Link to ='/'><Nav.Link href="#home">Home</Nav.Link></Link>
            <Link to ='/Users'><Nav.Link href="#features">Users</Nav.Link></Link>
            
          </Nav>
        </Container>
      </Navbar>
      
        
        
        
        
        </>
    )
}
export default Navp