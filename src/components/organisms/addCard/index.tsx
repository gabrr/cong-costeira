import React, { useState } from 'react'
import styled from 'styled-components'
import { CustomInput, CustomDateInput } from '../../atoms/inputs'
import { SaveButton } from '../../atoms/saveButton'
import { api } from '../../../api'

export const AddCard = ({showCard}: any) => {
    const [addCardData, setaddCardData] = useState({})

    const handleAddAppointment = (data: any) => {
        setaddCardData({
            ...addCardData,
            ...data
        })
    }

    const saveData = () => {
        api.post('appointments/', addCardData)
            .then(data => console.log(data, 'data sent'))
    }

    return (
        <Div>
            <div className={`addCard ${showCard}`}>
                <h3 className="title">Adicionar Designação</h3>
                <CustomInput action={handleAddAppointment} name="name1" placeholder={'Nome do Dirigente'} />
                <CustomInput action={handleAddAppointment} name="name2" placeholder={'Nome do Auxiliar'} />
                <CustomDateInput action={handleAddAppointment} name="inputDiv" />
                <SaveButton name={'button'} text={'Salvar'} action={saveData} />
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

    .title {
        margin-bottom: 20px
    }

    @media (min-width: 780px) {
        .addCard.true {
            transform: translateY(150px) translateX(-50%) !important;
        }
    }
`