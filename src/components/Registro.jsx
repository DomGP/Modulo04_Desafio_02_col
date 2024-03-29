import Formulario from "./Formulario";
import SocialButton from "./SocialButton";
import Header from "./Header";
import Subtitle from "./Subtitle";

const Registro = () => {
  return (
    <>
      <div className='cardStyle border-0'>
        <Header textTitle='Crea una cuenta' />
        <div className='iconStyle'>
          <SocialButton button={"fa-facebook"} />
          <SocialButton button={"fa-github"} />
          <SocialButton button={"fa-linkedin"} />
        </div>
        <Subtitle subtitleText='o usa tu email para registrarte' />
        <Formulario />
      </div>
    </>
  );
};

export default Registro;
