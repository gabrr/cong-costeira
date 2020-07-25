import React from 'react'
import styled from 'styled-components'

interface Props {
    text?: string,
    name?: string,
    action: Function
}

export const SaveButton = (props: Props) => {
    return (
        <Div className={props.name || 'button'} onClick={() => props.action()}>
            {props.text}
        </Div>
    )
}

const Div = styled.div`
    min-width: 100px;
    width: max-content;
    margin: 0 auto;
    padding: 10px 15px;
    background: #4a5a8c;
    border-radius: 4px;
    font-size: 13px;
`