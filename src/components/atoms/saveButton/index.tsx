import React from 'react'
import styled from 'styled-components'

interface Props {
    text?: string,
    name?: string
}

export const SaveButton = (props: Props) => {
    return (
        <Div className={props.name || 'button'} >
            {props.text}
        </Div>
    )
}

const Div = styled.div`
    min-width: 100px;
    width: max-content;
    margin: 0 auto;
    padding: 10px 20px;
    background: #4a5a8c;
    border-radius: 4px;

`