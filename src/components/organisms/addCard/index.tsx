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
    .addCard.false {
        position: fixed;
        left: 50%;
        top: 0;
        padding: 50px 30px;
        transition: 400ms ease; 
        transform: translate(-50%, -350px);
        opacity: 0;
        pointer-events: all;
        border-radius: 8px;
        box-shadow: 0 0 31px -9px rgba(0,0,0,0.5);
    }

    .addCard.true {
        position: fixed;
        left: 50%;
        top: 0;
        padding: 50px 30px;
        background-color: #27314e;
        transition: all 1s cubic-bezier(.6,.31,0,1.21); 
        transform: translate(-50%, 80px);
        opacity: 1;
        border-radius: 8px;
        box-shadow: 0 0 31px -9px rgba(0,0,0,0.5);
    }
    .inputDiv {
        margin: 10px 0;
        min-width: 200px;
    }

    .button {
        margin-top: 30px
    }

    @media (min-width: 780px) {
        .addCard.true {
            transform: translateY(150px) translateX(-50%) !important;
        }
    }
`