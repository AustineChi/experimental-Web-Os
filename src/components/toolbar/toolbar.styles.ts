
import styled from "styled-components";



type IconProcessorInterface = {
    src?: string;
};

type ContainerInterface = {
        direction?: string;
        left?: boolean;

    };
export const Container = styled.div<ContainerInterface>`
        display: flex;
        flex-direction:  ${({ direction }) => direction};
        margin-left:  ${({ left }) => left? "auto": ""};
`;


export const IconProcessor = styled.div<IconProcessorInterface>`
        background: url(${({ src }) => src });
        height: 50px;
        width: 50px;
        cursor: pointer;
        margin: 10px;
        background-size: contain;
        background-repeat:no-repeat;
`;


