import React, { useEffect } from "react";
import { Container, Logo, SuccessImg, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";

import ButtonComponent from "../../components/Buttons";
import logoImg from "../../assets/logoLightRed.png";
import successImg from "../../assets/bomba_explodiu.png"
import { Vibration } from "react-native";

export default function Exploded(){
    const navigation = useNavigation();
    
    function handleNavToStart(){
        navigation.navigate("Start");
    }

    useEffect(()=>{
        Vibration.vibrate(5000);
    }, []);
    
    return(
        <Container>
            <Logo source={logoImg} style={{resizeMode:'contain'}} />
            <Title>Você falhou!!{"\n"}Bomba explodiu!</Title>
            <SuccessImg source={successImg} style={{resizeMode:'contain'}}/>

            <ButtonComponent buttonText="Página Inicial" handlePress={handleNavToStart} /> 
        </Container>
    );
}