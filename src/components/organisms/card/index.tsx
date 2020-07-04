import React from 'react'

export const Card = (card: any) => {
    return (
        <div className="card">
            <div className="row">
                <p className="title">
                    Dirigente
                    {console.log(card)}
                </p>
                <p className="name">
                    {card.dirigente}
                </p>
            </div>
            <div className="row">
                <p className="title">
                    Auxiliar
                </p>
                <p className="name">
                    {card.auxiliar}
                </p>
            </div>
            <div className="date-display">
                {card.data}
            </div>
        </div>
    )
}
