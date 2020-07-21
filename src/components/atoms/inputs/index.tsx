import React, { useState } from 'react'
import styled from 'styled-components'
import { zeroAtLeft } from '../../../utils/numbers'

interface Props {
    type?: string,
    placeholder?: string,
    text?: string,
    name?: string
}

export const CustomInput = (props: Props) => (
    <Div>
        <label>{props.text || ''}</label>
        <input className={props.name} type={props.type || 'text'} placeholder={props.placeholder || 'Nome'} />
    </Div>
)


export const CustomDateInput = (props: Props) => {
    const day = zeroAtLeft(new Date().getUTCDate()) 
    const month = zeroAtLeft(new Date().getUTCMonth() + 1) 
    const year = zeroAtLeft(new Date().getFullYear()) 

    const [today, settoday] = useState(`${year}-${month}-${day}`)


    return (
        <Div>
            <label>{props.text || ''}</label>
            <input className={props.name} onChange={(x) => settoday(x.target.value)} value={today} type="date"/>
        </Div>
    )
}
const Div = styled.div`
    text-align: left;

    input {
        width: calc(100% - 16px);
        height: 35px;
        background-color: rgba(255, 255, 255, 0.7);
        border-radius: 4px;
        outline: none;
        border: none;
        padding: 0 8px;
        color: #444;
        -webkit-appearance: none;
    }

    input::placeholder {
        color: #444;
    }
    


    

`