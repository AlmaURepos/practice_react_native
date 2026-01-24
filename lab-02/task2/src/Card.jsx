import React from 'react';

const Card = ({ title, children, ClassName }) => {
    const cardClassName = ClassName ? `card ${ClassName}` : '';

    return(
        <article>
            <h3>{title}</h3>
            {children}
        </article>
    )
}

export default Card;