/* eslint-disable react/prop-types */
import './Header.scss'

export default function Header(props) {
  return (
    <header className="header-bg">
        <div className="container header">
            <div className="header-textos">
                <h2 className="greetings">{props.title}</h2>
                <p>{props.subtitle}</p>
            </div>
            
            <img className="foto-perfil" src="/img/ebe551fd04f7bc87fd710644a1dbfd83.jpg" width="50px" height="50px" alt="foto de perfil"/>
        </div>
        
    </header>
  )
}
