import styled from "styled-components";
import trash from "../../images/trash.svg"


export const Container = styled.section`
    width: 100%;
    max-width: 600px;
    margin: 50px 20px;
    max-height: 700px;
`;

export const NewsItem = styled.div`
      background-color: #e4731f;
      border-color: #e4731f;
      padding: 15px;
      margin-top: 0;
      margin-bottom: 5px;
      border: 1px solid transparent;
      border-radius: 4px;
      position: relative;
      & >  h5 {
         font-size: 14px;
         font-weight: 700;
         margin: 10px;
      }
      & >  p {
               font-size: 12px;
               font-weight: 400;
               margin: 10px;
      }
  `;

  export const TrashIcon = styled.button`
        height: 20px;
        width: 20px;
        background: url(${trash});
        background-position: center;
        background-size: cover;
        margin: 4px;
        border: none;
        outline: none;
        cursor:  pointer;
        position:absolute;
        top: 5px;
        right: 5px;
        `;

