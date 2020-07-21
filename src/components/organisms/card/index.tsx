import React, { memo } from 'react'
import { AppointmentsType } from '../../../types/appoitments'

const Card = (card: AppointmentsType) => {
    return (
        <div className="card">
            <div className="row">
                <p className="title">
                    Dirigente
                </p>
                <p className="name">
                    {card.name1}
                </p>
            </div>
            <div className="row">
                <p className="title">
                    Auxiliar
                </p>
                <p className="name">
                    {card.name2}
                </p>
            </div>
            <div className="date-display">
                {card.when}
            </div>
        </div>
    )
}

export default memo(Card)