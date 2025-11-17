import styled from "styled-components";

const HwWrapper = styled.div`
    max-width: 1140px;
    margin: 0 auto;
    padding: 40px 0;

    &::before,
    &::after {
        content: "";
        position: absolute;
        margin-top: 30px;
        left: 0;
        right: 0;
        height: 1px;
        background-color: #d9d9d9;
    }
`

const Title = styled.div`
    font-size: 22px;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    color: #000000;
`

type ContentWrapperProps = { width?: string; }

const ContentWrapper = styled.div<ContentWrapperProps>`
    padding-top: 24px;
    width: ${({width}) => width || 'auto'}; // Если пропс width передан, используем его, иначе ставим 'auto'
    position: relative;
`;

export const S = {
    HwWrapper,
    Title,
    ContentWrapper
}