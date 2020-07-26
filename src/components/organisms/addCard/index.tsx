import React, { useState, memo, useCallback } from 'react'
import styled from 'styled-components'
import { CustomInput, CustomDateInput } from '../../atoms/inputs'
import { SaveButton } from '../../atoms/saveButton'
import { api } from '../../../api'
import { useDispatch } from 'react-redux'
import { addAppointment } from '../../../redux/actions/appointments'

export const AddCard = memo(({showCard, handleShowCard, clicked, setclicked}: any) => {
    const dispatch = useDispatch()
    const [addCardData, setaddCardData] = useState({})

    const handleAddAppointment = useCallback((data: any) => {

        setaddCardData({
            ...addCardData,
            ...data
        })
    }, [setaddCardData, addCardData])

    const saveData = () => {
        Object.entries(addCardData).map(index => index).length === 3 ? (
            api.post('appointments/', addCardData)
                .then(({ data }) => {
                    dispatch(addAppointment([data]))
                    handleShowCard()
                    setclicked(!clicked)
                })
        ) : (
            window.alert('Escreva nos campos e defina uma data.')
        )
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
})

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