
import styled from "styled-components";
import wifiIcon from "../../images/wifi-icon.svg"

export const Container = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 270px;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    padding: 3px;
    font-size: 16px;
`;

export const ImageIcon = styled.img`
    height: auto;
    width: 25px;
    margin-left: 5px;
  `;


  export const WifiIcon = styled(ImageIcon).attrs(() => ({src: wifiIcon}))`
     transform: translateY(-2px);
  `;


  export const BatteryContainer = styled.div`
  display: flex
  `;

  export const BatteryLevel = styled.div`
  padding: 0 4px;

  `;

  export const Date = styled.div`
     padding: 0 4px;
  `;

  