import React from 'react';
import style from './recipe.module.css';

export default function Recipe({ title, image, url, ingredients }) {
  return (
    <div className={style.recipe}>
      <h1 >{title}</h1>
      <img src={image} alt="food" />
      <p>{url}</p>
      <ol>
        {ingredients.map((ingredient, i) =>(
          <li key={i}>
            {ingredient.text}
          </li>
          )
        )}

      </ol>
    </div>
  )
}
