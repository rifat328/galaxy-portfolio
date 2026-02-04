import React from 'react'
import './cat_model.css'
const CatModelCSS = () => {
    return (
        <>
            <figure role="img" aria-labelledby="alt">
                <figcaption id="alt">
                    Illustration of a cat sitting on the moon looking at the stars
                </figcaption>

                <div className="moon"></div>
                <article className="cat" role="img" aria-labelledby="alt">
                    <div id="alt">Cartoon of a black cat drawn in cute/kawaii style</div>
                    <div className="tail"></div>
                    <div className="backpack"></div>
                    <div className="body">
                        <div className="leg"></div>
                        <div className="leg"></div>
                        <div className="paw"></div>
                        <div className="paw"></div>
                    </div>
                    <div className="ear"></div>
                    <div className="ear"></div>
                    <div className="head">
                        <div className="whisker"></div>
                        <div className="whisker"></div>
                        <div className="whisker"></div>
                        <div className="whisker"></div>
                        <div className="eye"></div>
                        <div className="eye"></div>
                        <div className="nose"></div>
                    </div>
                    <div className="bubble"></div>
                </article>
            </figure>

        </>
    )
}

export default CatModelCSS