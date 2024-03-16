import styled from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";

export const Button = styled.TouchableOpacity`
    width: ${RFValue(200)}px;
    background-color: white;
    height: ${RFValue(60)}px;
    margin: ${RFValue(20)}px auto;
    margin-bottom: 0;
    border: 1px solid black;
    border-radius: ${RFValue(10)}px;
    justify-content: center;
    align-items: center;
`;

export const ButtonContent = styled.Text`
    font-size:20px;
    color:black;
    font-family:sans-serif;
    font-weight:bold;
`;