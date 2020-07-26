import React, { useState } from 'react'
import styled from 'styled-components'
import { SaveButton } from '../../atoms/saveButton'
import { setUser } from '../../../redux/actions/user'
import { useDispatch } from 'react-redux'


const brothers = [
    'Sadi',
    'Milton',
    'Israel',
    'Aluisio',
    'Richard',
    'Alexandre',
    'Paulo',
    'Patrick',
    'Vitor',
    'Gabriel',
]


const WhoAreU = () => {
    const [selectValue, setselectValue] = useState("")
    const [show, setshow] = useState(false)
    const dispatch = useDispatch()
    
    const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setselectValue(event.target.value)
    }

    const saveName = () => {
        const save = () => {
            window.localStorage.setItem('myName', selectValue)
            dispatch(setUser(selectValue))
            setshow(true)
        }
        return !!selectValue ? save() : false
    }

    return (
        <Div>
            <div className={`${show}`}>
                <h3>Qual seu nome?</h3>
                <select name="select" id="select" value={selectValue} onChange={handleOnChange}>
                    <option value="Toque pra ver seu nome">Toque pra ver seu nome</option>
                    {
                        brothers.map((brother, index) => (
                            <option key={index} value={brother}>{brother}</option>
                        ))
                    }
                </select>
                <SaveButton text="Salvar" name="saveButton" action={saveName} />
            </div>
        </Div>
    )
}

export default WhoAreU

const Div = styled.div`
    div {
        transition: 300ms ease-in-out;
    }

    .false {
        position: fixed;
        left: 50%;
        top: 0;
        min-width: 200px;
        padding: 30px 25px;
        background-color: #27314e;
        transition: all 1s cubic-bezier(.6,.31,0,1.21); 
        transform: translate(-50%, 80px);
        opacity: 1;
        border-radius: 8px;
        box-shadow: 0 0 31px 1000px rgba(0,0,0,0.6);
        color: rgba(255,255,255,0.7);
    }

    .true {
        opacity: 0;
    }
    
    select {
        margin: 16px auto;
        height: 40px;
        width: 100%;
        border-radius: 4px;
        outline: none;
        font-size: 14px;
        color: #444;
        padding: 0 10px;
        background-color: rgba(255,255,255,0.8);
        -webkit-appearance: none;
    }

    .saveButton {
        text-align: center;
        width: 50%;
        margin-top: 16px;
        padding: 10px 0;
    }

    .saveButton:hover {
        text-decoration: underline
    }`