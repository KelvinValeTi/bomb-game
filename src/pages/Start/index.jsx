import React from 'react';
import { Container, Logo, Rules, SubTitle, Title } from './styles';
import ButtonComponent from '../../components/Buttons';
import { useNavigation } from '@react-navigation/native';

export default function Start(){
    
    const navigation = useNavigation();

    const handleNavToPlayAlone =()=>{
        navigation.navigate("PlayAlone");
    }
    
    const handleNavToPlayTogether =()=>{
        console.log("Teste de play Together");
    }

    const handleNavToRules =()=>{
        navigation.navigate("Rules");
    }
    
    return <Container>
        <Logo
            source={require("../../assets/logoDark.png")}
            style={{resizeMode:"contain"}}
        />
        <Title>Bem vindo ao {"\n"}Bomb-game</Title>
        <SubTitle>Escolha um modo de jogo.</SubTitle>
        <ButtonComponent 
            buttonText={"Jogar Solo"}
            handlePress={handleNavToPlayAlone}
        />
        <ButtonComponent 
            buttonText={"Jogar em Dupla"}
            handlePress={handleNavToPlayTogether}
        />

        <Rules onPress={handleNavToRules}>Ver as regras do jogo</Rules>
    </Container>
}