
import styled from "styled-components";
import trash from "../../images/trash.svg"
import pen from "../../images/pen.svg"
import sort from "../../images/sort.svg"

type iconsInterface = {
    disabled?: boolean;
};


type textInterface = {
        active?: boolean;
    };


export const Container = styled.div`
        display: flex;
        flex-direction: column;
`;
export const COntrolBox = styled.div`
        position: absolute;
        top: 5px;
        left: 5px;
        display: flex;
        font-size: 16px;
`;

export const Wrapper = styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        margin: 0;
        padding: 0;
`

export const ListNotes = styled.div`
        width: 100%;
        height: 100%;
        max-width: 250px;
        flex: 25%;
        padding-top: 10px;
        overflow: scroll;
`

export const TextArea = styled.textarea`
        width: 100%;
        height: 100%;
        flex: 75%;
        box-sizing: border-box;
        padding: 10px;
        border: none;
        outline: none;
        border-left: 1px solid #ddd;
`


export const TrashIcon = styled.button<iconsInterface>`
        height: 20px;
        width: 20px;
        background: url(${trash});
        background-position: center;
        background-size: cover;
        margin: 4px;
        border: none;
        outline: none;
        cursor:  ${({ disabled }) => disabled? "no-drop" : "pointer"};
        opacity:  ${({ disabled }) => disabled? "0.4" : "1"};
        `;

  export const CreateIcon = styled.button`
        height: 20px;
        width: 20px;
        background: url(${pen});
        background-position: center;
        background-size: cover;
        margin: 4px;
        border: none;
        outline: none;
        cursor:  ${({ disabled }) => disabled? "no-drop" : "pointer"};
        opacity:  ${({ disabled }) => disabled? "0.4" : "1"};

  `;

  export const SortIcon = styled.button`
        height: 20px;
        width: 20px;
        background: url(${sort});
        background-position: center;
        background-size: cover;
        margin: 4px;
        border: none;
        outline: none;
        cursor:  ${({ disabled }) => disabled? "no-drop" : "pointer"};
        opacity:  ${({ disabled }) => disabled? "0.4" : "1"};
`;


export const SearchBox = styled.input`
        width: 150px;
        background: #eee;
        border: 1px solid #eee;
        padding: 4px 7px;
        margin: 5px 20px;
`

export const Text = styled.div<textInterface>`
        width: 100%;
        padding: 5px 10px;
        height: 70px;
        box-sizing: border-box;
        background:  ${({ active }) => active? "#f2eb91" : "#fff"};
        cursor: pointer;
        & >  h5 {
                font-size: 14px;
                font-weight: 700;
                margin: 10px;
                white-space: nowrap; 
                overflow: hidden;
                text-overflow: ellipsis;
        }
        & >  p {
                font-size: 12px;
                font-weight: 400;
                margin: 10px;
        }
`