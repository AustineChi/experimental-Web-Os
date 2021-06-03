
import styled from "styled-components";
import backgroundImage from '../images/day.jpg';
import { ReactComponent as NextIcon }  from "../images/forward-arrow.svg"
import { ReactComponent as PrevIcon }  from "../images/previous.svg"


export const MainContainer = styled.div`
        background: url(${backgroundImage});
        background-position: center;
        height: 100%;
        background-size: cover;
`;


export const ControlContainer = styled.div`
        width: 100%;
        margin: 10px 0;
        display: flex;
        justify-content: center;
`;


export const NextButton = styled(NextIcon)`
        cursor: pointer;
        width: 25px;
        height:25px;
        margin: 5px

`;
export const PrevButton = styled(PrevIcon)`
        cursor: pointer;
        width: 25px;
        height:25px;
        margin: 5px
`;


export const LightboxTarget = styled.div`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.7);
        width: 100%;
        opacity: 1;
        z-index: 9000;
        -webkit-transition: opacity .5s ease-in-out;
        -moz-transition: opacity .5s ease-in-out;
        -o-transition: opacity .5s ease-in-out;
        transition: opacity .5s ease-in-out;
        overflow: hidden;
        & > img {
                margin: auto;
                position: absolute;
                top: 0;
                left:0;
                right:0;
                bottom: 0;
                max-height: 100%;
                max-width: 100%;
                border: 3px solid white;
                box-shadow: 0px 0px 8px rgba(0,0,0,.3);
                box-sizing: border-box;
                -webkit-transition: .5s ease-in-out;
                -moz-transition: .5s ease-in-out;
                -o-transition: .5s ease-in-out;
                transition: .5s ease-in-out;
            }
        `

export const LightboxClose = styled.span`
        display: block;
        width:50px;
        height:50px;
        box-sizing: border-box;
        background: white;
        color: black;
        text-decoration: none;
        position: absolute;
        cursor: pointer;
        right: 0;
        -webkit-transition: .5s ease-in-out;
        -moz-transition: .5s ease-in-out;
        -o-transition: .5s ease-in-out;
        transition: .5s ease-in-out;
        &:before {
                content: "";
                display: block;
                height: 30px;
                width: 1px;
                background: black;
                position: absolute;
                left: 26px;
                top:10px;
                -webkit-transform:rotate(45deg);
                -moz-transform:rotate(45deg);
                -o-transform:rotate(45deg);
                transform:rotate(45deg);
        }
        &:after {
                content: "";
                display: block;
                height: 30px;
                width: 1px;
                background: black;
                position: absolute;
                left: 26px;
                top:10px;
                -webkit-transform:rotate(-45deg);
                -moz-transform:rotate(-45deg);
                -o-transform:rotate(-45deg);
                transform:rotate(-45deg);
         }  
        `