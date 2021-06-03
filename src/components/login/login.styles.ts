
import styled from "styled-components";
import penguin from "../../images/penguin.jpeg"
import forwardArrowIcon from "../../images/right-arrow.svg"

type InputBoxWrapperInterface = {
        direction?: string;
    };

export const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 150px;
        height: 100%
`;

export const InputBoxWrapper = styled.form<InputBoxWrapperInterface>`
           display: flex;
           align-items: center;
           flex-direction:  ${({ direction }) => direction || "row"};

`;
export const SubmitButton = styled.button`
            height: 30px;
            width: 30px;
            background: url(${forwardArrowIcon});
            background-position: center;
            background-size: cover;
            border-radius: 150%;
            margin: 10px 0 0 10px;
            margin-top: auto;
            background-color: rgba(127,116,101,0.76);
            cursor: pointer;
            outline: none;
            border: none;

`;

export const ErrorMessage = styled.div`
        color: red;
        margin: 4px 0;
        font-style: oblique;
        font-size: 10px;
        font-weight: 400;
`;

export const LoginPic = styled.div`
        height: 100px;
        width: 100px;
        background: url(${penguin});
        background-position: center;
        background-size: cover;
        border-radius: 150%;
        margin-bottom: 5px;

  `;

export const Input = styled.input`
        font-size: 14px;
        line-height: 200px;
        outline: none;
        border: none;
        border-radius: 4px;
        background-color: rgba(127, 116, 101, 0.76);
        height: 30px;
        width: 160px;
        padding: 6px;
        color: #ffffff69;
        margin-top: 3px;
        box-sizing: border-box;
        &::placeholder {
            color: #ddd;
            font-weight: 500;
        }
`;

export const EmailInput = styled(Input).attrs(() => ({ type: "email", placeholder: "Enter email" }))`
        font-weight: 400;
        &::placeholder {
        color: #848d95;
    }
`

export const PasswordInput = styled(Input).attrs(() => ({ type: "password", placeholder: "Enter Password" }))`
    backdrop-filter: blur(.5rem);
    font-weight: 900;
    &::placeholder {
      color: #ffffff69;
  }
`

export const Text = styled.p`
        margin: 3px;
        text-align: center
        
  `;



