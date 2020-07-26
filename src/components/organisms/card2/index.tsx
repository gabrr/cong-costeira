import React, { memo } from 'react'

interface Props {
    _id?: string,
    Indicador: string,
    Video: string,
    name3?: string,
    data: string,
    selected?: string
}


const Card2 = ({ Indicador, Video, data, selected }: Props) => {
    return (
        <div className={`card ${selected}`}>
            <div className="row">
                <p className="title">
                    Indicador
                </p>
                <p className="name">
                    {Indicador}
                </p>
            </div>
            <div className="row">
                <p className="title">
                    Video
                </p>
                <p className="name">
                    {Video}
                </p>
            </div>
            <div className="date-display">
                {data}
            </div>
        </div>
    )
}

export default memo(Card2)
