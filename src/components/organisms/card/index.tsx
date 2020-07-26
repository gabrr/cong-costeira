import React, { memo } from 'react'

interface Props {
    _id?: string,
    name1: string,
    name2: string,
    name3?: string,
    when: string,
    selected?: string
}


const Card = ({ name1, name2, when, selected }: Props) => {
    return (
        <div className={`card ${selected}`}>
            <div className="row">
                <p className="title">
                    Dirigente
                </p>
                <p className="name">
                    {name1}
                </p>
            </div>
            <div className="row">
                <p className="title">
                    Auxiliar
                </p>
                <p className="name">
                    {name2}
                </p>
            </div>
            <div className="date-display">
                {when}
            </div>
        </div>
    )
}

export default memo(Card)