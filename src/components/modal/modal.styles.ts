
import styled from "styled-components";
import fullscreen from "../../images/fullscreen.png"
import cancel from "../../images/cancel.svg"

type ModalInterfface = {
    show?: boolean;
    fade?: boolean;
};

type ModalMainInterfface = {
    maximize?: boolean;
    fade?: boolean;
    specialPad?: boolean
};


export const ModalContainer = styled.div<ModalInterfface>`
          width:100%;
          height: 100%;
          display: ${({ show }) => show ? "block": "none"};
          opacity: ${({ fade }) => fade ? "0.4": "1"};
  `
  
  export const ModalMain = styled.section<ModalMainInterfface>`
          background: white;
          position: absolute;
          box-sizing: border-box;
          top:  ${({ maximize, fade }) => maximize ? "0": fade? "65%" : "50%" };
          left:  ${({ maximize, fade }) => maximize ? "0": fade? "40%" : "50%" };
          color: #000;
          padding: ${({ specialPad}) => specialPad ? "30px 0": "50px" };
          height: ${({ maximize}) => maximize ? "100%": "500px"};
          width: ${({ maximize }) => maximize ? "100%": "500px"};
          min-width: 50%;
          border-radius: 10px;
          transform: ${({ maximize }) => maximize ? "none": "translate(-50%, -50%)"}; 
          z-index: ${({ fade }) => fade ? "500": "900"}; 
          box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    `
  export const COntrolBox = styled.div`
          position: absolute;
          top: 5px;
          right: 5px;
          display: flex;
          font-size: 16px;
`;

export const MaximizeIcon = styled.span`
          height: 20px;
          width: 20px;
          background: url(${fullscreen});
          background-position: center;
          background-size: cover;
          border-radius: 150%;
          cursor: pointer;
          margin: 3px;
  `;

  export const CancelIcon = styled.span`
          height: 20px;
          width: 20px;
          background: url(${cancel});
          background-position: center;
          background-size: cover;
          border-radius: 150%;
          cursor: pointer;
          margin: 3px;


  `;

