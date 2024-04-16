import React from 'react'
import style from './GlobalNetwork.module.scss'
import WorldMapIcon from './../../assets/WorldMap/WorldMap_2120x1067.png'
import NetflixIcon from './img/Netflix_380x121.png'
import RedditIcon from './img/Reddit_313x103.png'
import AmazonIcon from './img/Amazon_380x121.png'
import DiscordIcon from './img/Discord_375x121.png'
import SpotifyIcon from './img/Spotify_343x104.png'

const GlobalNetwork = props => {
    const {titleAndText} = props
    return <div className={style.body}>
        <div className={style.body__text}>
            <div className={style.body__text__title}>{titleAndText.title}</div>
            <div className={style.body__text__text}>{titleAndText.text}</div>
        </div>
        <div className={style.body__worldmap}>
            <img src={WorldMapIcon} alt={WorldMapIcon}/>
        </div>
        <div className={style.body__cardFlex}>
            <img src={NetflixIcon} alt={'Netflix'}/>
            <img src={RedditIcon} alt={'Reddit'}/>
            <img src={AmazonIcon} alt={'Amazon'}/>
            <img src={DiscordIcon} alt={'Discord'}/>
            <img src={SpotifyIcon} alt={'Spotify'}/>
        </div>
    </div>
}

export default GlobalNetwork;