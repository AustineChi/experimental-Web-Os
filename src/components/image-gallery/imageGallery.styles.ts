
import styled from "styled-components";


export const Container = styled.div`
        display: flex;
        flex-direction: column;
`;



export const ImageWrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-gap: 16px;
    margin: 24px 0;
    max-height: 300px;
    height: auto;
    width: 100%;
    overflow: scroll;
`;

export const ImageBox = styled.div`
        width: 100%;
        max-width: 150px;
        height: auto;
        cursor: pointer
`
