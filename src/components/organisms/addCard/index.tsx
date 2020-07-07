import React from 'react'
import styled from 'styled-components'
import { CustomInput, CustomDateInput } from '../../atoms/inputs'
import { SaveButton } from '../../atoms/saveButton'

export const AddCard = ({showCard}: any) => {
    return (
        <Div>
            <div className={`addCard ${showCard}`}>
                <CustomInput name="inputDiv" placeholder={'Nome do Dirigente'} />
                <CustomInput name="inputDiv" placeholder={'Nome do Auxiliar'} />
                <CustomDateInput name="inputDiv" />
                <SaveButton name={'button'} text={'Salvar'} />
            </div>
        </Div>
    )
}

const Div = styled.div`
    .addCard {
        position: fixed;
        left: 50%;
        transition: 1000ms cubic-bezier(.6,.31,0,1.21); 
        -moz-transition: 1000ms cubic-bezier(.6,.31,0,1.21); 
        -webkit-transition: 1000ms cubic-bezier(.6,.31,0,1.21); 
        -webkit-transform: translateX(-50%) translateY(70px) !important;
        -moz-transform: translateX(-50%) translateY(70px) !important;
        transform: translateX(-50%) translateY(70px) !important;
        opacity: 0;
    }
    .addCard.true {
        position: fixed;
        height: auto;
        /* min-height: 100px; */
        /* width: calc(90% - 80px); */
        /* max-width: 300px; */
        left: 50%;
        top: 0;
        padding: 75px 40px;
        background-color: #27314e;
        transition: 1000ms cubic-bezier(.6,.31,0,1.21); 
        -moz-transition: 1000ms cubic-bezier(.6,.31,0,1.21); 
        -webkit-transition: 1000ms cubic-bezier(.6,.31,0,1.21); 
        -webkit-transform: translateX(-50%) translateY(70px) !important;
        -moz-transform: translateX(-50%) translateY(70px) !important;
        transform: translateX(-50%) translateY(70px) !important;
        opacity: 1;
        pointer-events: all;
        border-radius: 8px;
        box-shadow: 0 0 31px -9px rgba(0,0,0,0.5);
    }
    .addCard.false {
        height: auto;
        min-height: 100px;
        width: 90%;
        max-width: 300px;
        left: 50%;
        top: 0;
        padding: 75px 40px;
        position: fixed;
        transition: 400ms cubic-bezier(.6,.31,.08,1.45); 
        transform: translateY(-350px) translateX(-50%) !important;
        opacity: 1;
        pointer-events: all;
    }

    .inputDiv {
        margin: 10px 0;
        min-width: 200px;
    }

    .button {
        margin-top: 20px
    }

    @media (min-width: 780px) {
        .addCard.true {
            transform: translateY(150px) translateX(-50%) !important;
        }
    }
`