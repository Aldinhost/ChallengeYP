import { BiLogoFacebookCircle, BiLogoInstagramAlt, BiLogoLinkedinSquare } from "react-icons/bi";

const Footer = () => {
  return (
    <>
      <div className="footer_nav">
        <nav>
          <a href="">Herramientas</a>
          <a href="">Terminales</a>
          <a href="">Nosotros</a>
        </nav>
        <div className="footer_siguenos">
          <h4>Síguenos en:</h4>
          <div>
            <a href="#"><BiLogoFacebookCircle className="footer_icon"/></a>
            <a href="#"><BiLogoInstagramAlt className="footer_icon"/></a>
            <a href="#"><BiLogoLinkedinSquare className="footer_icon"/></a>
          </div>
        </div>
      </div>
      <hr/>
      <div className="footer_copyright">
        <div>
          <h5 className='fs-3 m-0 fw-light'>Ya<span className='fw-semibold'>Ganaste</span></h5>
        </div>
        <p>Copyright &copy; 2023 Ya Ganaste. Todos los derechos reservados.</p>
      </div>
    </>
  )
}

export default Footer