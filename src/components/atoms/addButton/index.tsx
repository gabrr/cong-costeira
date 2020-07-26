import React from 'react'
import styled from 'styled-components'

export const AddButton = ({ handleShowCard, clicked }: any ) => {

    const handleClick = () => {
        handleShowCard()
    }

    return (
        <Div onClick={handleClick}>
            <div className={`vertical ${clicked}`}></div>
            <div className={`horizontal  ${clicked}`}></div>
        </Div>
    )
}

const Div = styled.div`
    background-color: #46a96d;
    border-radius: 100%;
    height: 55px;
    width: 55px;
    position: fixed;
    bottom: 25px;
    right: 4vw;
    box-shadow: 0px 0px 23px -9px rgba(2, 95, 4, 0.7);
    cursor: pointer;

    .vertical, .horizontal {
        height: 20px;
        width: 3.6px;
        position: absolute;
        background-color: rgba(255, 255, 255, 0.6);
        left: 50%;
        top: 50%;
        transition: 300ms ease;
    }
    .vertical {
        transform: translate(-50%, -50%) rotate(90deg);
    }

    .horizontal {
        transform: translate(-50%, -50%);
    }

    .vertical.true {
        transform: translate(-50%, -50%) rotate(270deg);
    }

    .horizontal.true {
        transform: translate(-50%, -50%) rotate(90deg);
    }
`