import React from "react";
//Styles
import { Content, LogoImg, TMDBLogo, Wrapper } from "./Header.styles";
//Image Resources
import RMLogo from '../../images/react-movie-logo.svg'; 
import TMDBLogoImage from '../../images/tmdb_logo.svg';


const Header = () => (
    <Wrapper>
        <Content>
            <LogoImg  src={RMLogo}/>
            <TMDBLogo src={TMDBLogoImage}/>
        </Content>
    </Wrapper>
); 

export default Header; 
