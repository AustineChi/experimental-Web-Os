
import styled from "styled-components";
import Webcam from "react-webcam";

import { ReactComponent as CameraIcon }  from "../../images/camera.svg"


type ContainerInterface = {
    fullscreen?: boolean;
};

type CamBoxInterface = {
    audio?: boolean;
    ref: any;
    screenshotFormat: string
};

type FlexContainerInterface = {
    direction?: string;
};

export const Container = styled.div<ContainerInterface>`
        display: flex;
        flex-direction: column;
`;

export const Camera = styled(CameraIcon)`
        height: 50px;
        width: 70px;
        cursor: pointer;  
`;

export const CameraBOX = styled(Webcam)<CamBoxInterface>`
        width: 100%; 
`;


export const FlexContainer = styled.div<FlexContainerInterface>`
        display: flex;
        flex-direction:  ${({ direction }) => direction || "column"};
`;


export const FlexItem= styled.div`
        flex: 1;
        width: 80%
`;

export const Capture = styled.button`
        background-color: #4ad395;
        border: none;
        border-radius: 3px;
        color: #fff;
        width:  100%;
        padding: 7px;
        height: 47px;
        text-align: center;
        font-weight: 700;
        margin-top: 20px;
        cursor: pointer
`

export const Image = styled.img`
        width: 100%;
        max-width: 150px; 
        height: auto;     
        margin: 10px;
        cursor: pointer;    
`
export const Scroll = styled.div`
        overflow-y: scroll;
        height: 400px
    
`