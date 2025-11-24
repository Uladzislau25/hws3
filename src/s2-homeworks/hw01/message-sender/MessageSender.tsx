import React, {useEffect, useRef, useState} from 'react'
import { message0 } from '../HW1'
import styled from "styled-components";

// компонента, которая тестирует вашу компоненту (не изменять, any не трогать)
const MessageSender = (props: any) => {
    const M = props.M
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const [messages, setMessages] = useState<any[]>([])
    const [text, setText] = useState<any>('')

    const onChange = (e: any) => {
        setText(e.currentTarget.value)
    }

    useEffect(() => {
        if (textareaRef?.current) {
            textareaRef.current.style.height = '0px'
            textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px'
        }
    }, [text])

    const addMessage = () => {
        setMessages([
            ...messages,
            {
                id: messages.length ? messages.length + 1 : 1,
                user: message0.user,
                message: {
                    text,
                    time: new Date().toTimeString().slice(0, 5),
                },
            },
        ])
        setTimeout(() => setText(''), 4)
    }

    const onKeyDown = (e: any) => {
        e.key === 'Enter' && e.shiftKey && addMessage()
    }

    return (
        <>
            {messages.map((m) => (
                <M key={'message' + m.id} message={m} />
            ))}

            <Sender id={'hw1-send-message-form'}>
                <Textarea
                    id={'hw1-textarea'}
                    ref={textareaRef}

                    title={'Shift+Enter for send'}
                    placeholder={'Type your message'}
                    value={text}

                    onChange={onChange}
                    onKeyDown={onKeyDown}
                />
                <Button
                    id={'hw1-button'}
                    onClick={addMessage}
                >
                    {/*текст кнопки могут изменить студенты*/}
                    Send
                    {/**/}
                </Button>
            </Sender>
        </>
    )
}

export default MessageSender

const Sender = styled.div`
    display: flex;
    gap: 44px;
    margin-top: 56px;
`

const Textarea = styled.textarea`
    border-radius: 20px;
    border: none;
    width: 976px;
    min-height: 40px;
    padding: 12px 24px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #000;
    box-shadow: 0 1px 2px 0 rgba(29, 33, 38, 0.1), 0 5px 20px 0 rgba(29, 33, 38, 0.03);
    background: #f5f7fb;
    resize: none;
    overflow: hidden;
    &::placeholder {
        font-family: 'Montserrat', sans-serif;
        opacity: 0.9;
        font-weight: 400;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.6);
    }
`

const Button = styled.button`
    border-radius: 20px;
    border: 0;
    width: 120px;
    height: 40px;
    background: #06c;
    font-weight: 600;
    font-size: 16px;
    color: #fff;
    font-family: 'Montserrat', sans-serif;
`