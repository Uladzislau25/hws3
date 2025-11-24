import React from 'react'
import {MessageType} from "../HW1";
import styled from "styled-components";

// нужно создать правильный тип вместо any
export type MessagePropsType = {
    message: MessageType;
}

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    return (
        <MessageWrapper id={'hw1-message-' + props.message.id} >
            <ImageAndText >
                <Avatar
                    id={'hw1-avatar-' + props.message.id}
                    // создаёт студент
                    src={props.message.user.avatar}
                    //
                />
                <Text>
                    <Name id={'hw1-name-' + props.message.id}>
                        {/*создаёт студент*/}
                        {props.message.user.name}
                        {/**/}
                    </Name>
                    <MessageText id={'hw1-text-' + props.message.id}>
                        {/*создаёт студент*/}
                        {props.message.message.text}
                        {/**/}
                    </MessageText>
                </Text>
            </ImageAndText>
            <Time id={'hw1-time-' + props.message.id}>
                {/*создаёт студент*/}
                {props.message.message.time}
                {/**/}
            </Time>
        </MessageWrapper>
    )
}

export default Message

export const MessageWrapper = styled.div`
    margin-bottom: 40px;
    position: relative;
`

export const ImageAndText = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;
`

export const Avatar = styled.img`
    width: 48px;
    height: 48px;
`

export const Text = styled.div`
    font-size: 16px;
    font-weight: 400;
    color: #fff;
    font-family: 'Montserrat', sans-serif;
    border-radius: 10px 10px 0 10px;
    width: 527px;
    background: #06c;
    box-shadow: 0 1px 2px 0 rgba(29, 33, 38, 0.1), 0 5px 20px 0 rgba(29, 33, 38, 0.03);
    position: relative;
    padding: 7px 13px;
    margin-right: 10px;
    &::after {
        content: '';
        position: absolute;
        bottom: 0; 
        right: -11px; 
        width: 0;
        height: 0;
        border-style: solid;
        border-bottom-width: 0;
        border-left-width: 0;
        border-top-width: 12px;
        border-right-width: 12px;
        rotate: 270deg;
        border-color: #06c transparent transparent transparent;
    }
    
`

export const Name = styled.div`
    font-size: 18px;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
`

export const MessageText = styled.pre`
    font-size: 16px;
    font-weight: 400;
    font-family: 'Montserrat', sans-serif;
`

export const Time = styled.div`
    font-size: 10px;
    font-weight: 600;
    color: #000;
    font-family: 'Montserrat', sans-serif;
    align-self: flex-end;
    position: absolute;
    right: 11px;
    bottom: -15px;
`