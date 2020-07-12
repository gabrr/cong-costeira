import React from 'react'
import styled from 'styled-components'

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


export const CustomDateInput = (props: Props) => (
    <Div>
        <label>{props.text || ''}</label>
        <input className={props.name} type="date"/>
    </Div>
)
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
        -webkit-appearance: none;
        color: #444;
    }

    input::placeholder {
        color: #444;
    }
    

    

`