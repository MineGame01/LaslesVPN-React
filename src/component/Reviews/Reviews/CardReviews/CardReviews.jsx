import React from 'react';
import style from "../Reviews.module.scss";
import starImage from "./img/star_27x27.png";

const CardReviews = props => {
    const {userFullName, userLocation, countRating, userImg, title} = props

    return <div className={style.body__cardFlex__card}>
        <div className={style.body__cardFlex__card__infoFlex}>
            <div className={style.body__cardFlex__card__infoFlex__personeInfo}>
                <div className={style.body__cardFlex__card__infoFlex__personeInfo__userImg}><img
                    src={userImg} alt={userImg}/></div>
                <div>
                    <div className={style.body__cardFlex__card__infoFlex__personeInfo__userFullName}>
                        {userFullName}
                    </div>
                    <div className={style.body__cardFlex__card__infoFlex__personeInfo__userLocation}>
                        {userLocation}
                    </div>
                </div>
            </div>
            <div className={style.body__cardFlex__card__infoFlex__gradeFlex}>
                <div className={style.body__cardFlex__card__infoFlex__gradeFlex__titleRating}>{countRating}</div>
                <div className={style.body__cardFlex__card__infoFlex__gradeFlex__imgRating}>
                    <img src={starImage} alt={'starImage'}/>
                </div>
            </div>
        </div>
        <div className={style.body__cardFlex__card__title}>
            {title}
        </div>
    </div>
}

export default CardReviews