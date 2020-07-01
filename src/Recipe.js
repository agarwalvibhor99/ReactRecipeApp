import React from "react"
import style from "./recipe.module.css"

const Recipe = ({url, key, title, calories, image}) =>{
    return(
        <div className={style.recipe}>
            <a href={url}> <h1>{title}</h1> </a>
            <p> {calories.toFixed()} Calories</p>
            <img src={image} alt="/"/>
        </div>
    )
}

export default Recipe