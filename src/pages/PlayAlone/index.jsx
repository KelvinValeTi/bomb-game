import React, {useEffect, useState} from "react";
import { Alert } from "react-native";
import { Container, TextTimer, Timer, TipContainer, TipText, TipTitle, Title } from "./styles";
import { ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

import bombImg from "../../assets/bomba.png";
import PasswordInput from "../../components/PasswordInput";
import ButtonComponent from "../../components/Buttons/index"
import BombService from "../../services/BombApp/index"
import api from "../../services/api/api"

export default function PlayAlone(){
    const navigation = useNavigation();

    const [started, setStarted] = useState(false);
    const [pin, setPin] = useState(["","",""]);

    const [hours, setHours] = useState("00");
    const [minutes, setMinutes] = useState("03");
    const [seconds, setSeconds] = useState("00");
    
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [intervalId, setIntervalId] = useState();

    function handleStartGame(){
        BombService.bombStartGame({setStarted, hours, minutes, seconds});
    }

    async function fetchQuestion(){
        const randomNumber = Math.floor(Math.random()* 6 + 1);

        const {data} = await api.get(`questions/${randomNumber}`);

        setQuestion(data?.pergunta);
        setAnswer(data?.resp);
    }
    useEffect(()=>{
        fetchQuestion();
    },[]);

   

    function handleStartBomb(){
        const diffTime = BombService.getDiffTime({hours, minutes, seconds});

        BombService.startCountDown({
            setSeconds,
            setMinutes,
            setHours,
            setStarted,
            diffTime,
            setIntervalId,
            intervalId,
            navigation
        });
    }

    function handleDisarmBomb(){
        BombService.disarmBomb({
            setStarted, 
            answer, 
            navigation, 
            pin, 
            setPin, 
            intervalId
        });
    }
    function handleGiveUp(){
        BombService.giveUpGame({intervalId, navigation});
    }

    function handleNavToStart(){
        navigation.navigate("Start");
    }

    useEffect(()=>{
        if(started){
            handleStartBomb();
        }
    },[started]);
    
    return(
        <Container>
            <Title>Bomb Game Solo</Title>
            <ImageBackground 
            source={bombImg} 
            resizeMode="cover" 
            style={{
                minHeight:130, 
                marginTop:50, 
                alignItems:"center",
                justifyContent:"center",
                }}
            >
                <Timer>
                    <TextTimer>{hours}:{minutes}:{seconds}</TextTimer>
                </Timer>
            </ImageBackground>

            {!started ? null : (
                <TipContainer>
                    <TipTitle>Sua dica:</TipTitle>
                    <TipText>{question}</TipText>
                    <TipText>{answer}</TipText>
                </TipContainer>
            )}
            

            <PasswordInput pin={pin} setPin={setPin} started={started}/>

            {!started ? (
                <>
                    <ButtonComponent buttonText="Iniciar" handlePress={handleStartGame} />
                    <ButtonComponent buttonText="Página Inicial" handlePress={handleNavToStart} />
                </>
            ) : (
                <>
                    <ButtonComponent buttonText="Desarmar" handlePress={handleDisarmBomb} />
                    <ButtonComponent buttonText="Desistir" handlePress={handleGiveUp} /> 
                </>
            )}
        </Container>
    );
}