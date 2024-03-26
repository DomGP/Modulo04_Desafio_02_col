import Alerta from "./Alerta"
import Formulario from "./Formulario"
import SocialButton from "./SocialButton"
import Header from "./Header"
import Subtitle from "./Subtitle"

const Registro = () => {
    return (
        <>
        <div className="cardStyle">
            <Header 
                textTitle = 'Crea una cuenta'
                />
            <div className="iconStyle">
                <SocialButton 
                    icon = 'src/assets/imgs/iconFacebook.png'/>
                <SocialButton 
                    icon = 'src/assets/imgs/iconGitHub.png'/>
                <SocialButton 
                    icon = 'src/assets/imgs/iconLinkedIn.png' />
            </div>
            <Subtitle 
                subtitleText = 'o usa tu email para registrarte'
            />
            <Formulario />
            <Alerta 
                colorAlert = 'success'
                textAlert = 'probando'
                />
        </div>
        
        </>
    )
}

export default Registro