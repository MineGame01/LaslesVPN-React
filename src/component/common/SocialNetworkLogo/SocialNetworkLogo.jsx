import React from "react";
import style from "./SocialNetworkLogo.module.scss";
import facebookLogo from "./../../assets/SocialNetwork/facebookLogo_35x35.svg";
import instagramLogo from "./../../assets/SocialNetwork/instagram_35x35.svg";
import twitterLogo from "./../../assets/SocialNetwork/twitterLogo_35x35.svg";

const SocialNetworkLogo = ({type}) => {
    const image = {
        facebook: facebookLogo,
        instagram: instagramLogo,
        twitter: twitterLogo,
    }

    return <div className={style.body}>
        <img src={image[type]} alt={type}/>
        <div className={style.backgroundImage}></div>
    </div>
}

export default SocialNetworkLogo;