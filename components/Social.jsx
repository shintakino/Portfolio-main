import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook} from "react-icons/fa";

const socials = [
  {icon: <FaGithub />, path: 'https://github.com/shintakino'},
  {icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/joshua-jay-n-javier-250710172/'},
  {icon: <FaFacebook />, path: 'https://www.facebook.com/profile.php?id=100082579008391'},
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item,index)=>{
        return (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>  
      );
      })}
    </div>
  );
};

export default Social;