import React from 'react'
import {MessageType} from "../HW1";
import styled from "styled-components";

// создать тип вместо any и отобразить приходящие данные

type FriendMessagePropsType = {
    message: MessageType;
}
const FriendMessage = (props: FriendMessagePropsType) => {
    return (
        <FriendMessageWrapper
            id={'hw1-friend-message-' + props.message.id}
        >
            <FriendImageAndText>
                <Avatar
                    id={'hw1-friend-avatar-' + props.message.id}
                    // создаёт студент
                    src={props.message.user.avatar}
                    //
                />
                <FriendText>
                    <FriendName
                        id={'hw1-friend-name-' + props.message.id}
                    >
                        {/*создаёт студент*/}
                        {props.message.user.name}
                        {/**/}
                    </FriendName>
                    <FriendMessageText
                        id={'hw1-friend-text-' + props.message.id}
                    >
                        {/*создаёт студент*/}
                        {props.message.message.text}
                        {/**/}
                    </FriendMessageText>
                </FriendText>
            </FriendImageAndText>
            <FriendTime
                id={'hw1-friend-time-' + props.message.id}
            >
                {/*создаёт студент*/}
                {props.message.message.time}
                {/**/}
            </FriendTime>
        </FriendMessageWrapper>
    )
}

export default FriendMessage

export const FriendMessageWrapper = styled.div`
    width: 462px;
    margin: 40px 0;
    position: relative;
`

export const FriendImageAndText = styled.div`
    display: flex;
    align-items: flex-end;
`

export const Avatar = styled.img`
    width: 48px;
    height: 48px;
`

export const FriendText = styled.div`
    font-size: 16px;
    font-weight: 400;
    color: #000;
    font-family: 'Montserrat', sans-serif;
    border-radius: 10px 10px 10px 0;
    width: 527px;
    background: #f5f7fb;
    box-shadow: 0 1px 2px 0 rgba(29, 33, 38, 0.1), 0 5px 20px 0 rgba(29, 33, 38, 0.03);
    position: relative;
    padding: 7px 13px;
    margin-left: 10px;
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: -12px;
        width: 0;
        height: 0;
        border-style: solid;
        border-bottom-width:  0;
        border-left-width:  12px;
        border-top-width:  12px;
        border-right-width:  0;
        rotate: 90deg;
        border-color: #f5f7fb transparent transparent transparent;
        box-shadow: 1px 0 0 rgba(29, 33, 38, 0.1);
    }
`

export const FriendName = styled.div`
    font-size: 16px;
    font-weight: 600;
    //color: #000;
    font-family: 'Montserrat', sans-serif;
`

export const FriendMessageText = styled.pre`
    font-size: 16px;
    font-weight: 400;
    //color: #000;
    font-family: 'Montserrat', sans-serif;
`

export const FriendTime = styled.div`
    font-size: 10px;
    font-weight: 600;
    color: #000;
    font-family: 'Montserrat', sans-serif;
    position: absolute;
    left: 11px;
    bottom: -15px;
`