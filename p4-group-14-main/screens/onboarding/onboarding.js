import React, { useState } from 'react';
import { View, Text, Dimensions, Modal, Image } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import PersonalInformation from './personalInfo';
import LearningChallenges from './learningChallenges';
import CreateAccount from './createAccount';
import styles from './style';

const OnBoarding = (props) => {
    const [stage, setStage] = useState(1);

    const nextStage = () => {
        if (stage < 3) {
            setStage(stage + 1);
        } else {
            props.toggleOnboard(false);
        }
    }

    const previousStage = () => {
        if (stage > 1) {
            setStage(stage - 1);
        } else {
            props.exitOnboarding();
        }
    }

    return (
        <View style={{height: '100%', alignItems: 'center'}}>
            <View style={{marginTop: '18%', width: '85%'}}>
                <TouchableOpacity style={{alignItems: 'flex-start'}} onPress={() => {previousStage()}}>
                    <Image source={require('../../assets/arrowLeft.png')} />
                </TouchableOpacity>
            </View>
            <View style={{height: 40, width: '100%', marginTop: '10%', alignItems: 'center'}}>
                <View style={{position: 'absolute', flexDirection: 'row', width: 210, justifyContent: 'space-between'}}>
                    <View style={[{backgroundColor: '#F8E1BE', width: 60, height: 3, left: 0}, stage===1 ? {backgroundColor: '#F4B85D', height: 4} : null ]} />
                    <View style={[{backgroundColor: '#F8E1BE', width: 60, height: 3}, stage===2 ? {backgroundColor: '#F4B85D', height: 4} : null ]} />
                    <View style={[{backgroundColor: '#F8E1BE', width: 60, height: 3, right: 0}, stage===3 ? {backgroundColor: '#F4B85D', height: 4} : null ]} />
                </View>
            </View>

            {stage === 1 ? (<PersonalInformation previousStage={previousStage} nextStage={nextStage} userProfile={props.userProfile} setUserProfile={props.setUserProfile} />) : null}
            {stage === 2 ? (<LearningChallenges previousStage={previousStage} nextStage={nextStage} userProfile={props.userProfile} setUserProfile={props.setUserProfile} />) : null}
            {stage === 3 ? (<CreateAccount previousStage={previousStage} nextStage={nextStage} userProfile={props.userProfile} setUserProfile={props.setUserProfile} />) : null}
        </View>
    );
};

export default OnBoarding;