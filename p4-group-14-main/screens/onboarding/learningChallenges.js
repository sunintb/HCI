import React, { useState } from 'react';
import { View, Text, Dimensions, Modal, Image, Alert } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Overlay from 'react-native-modal-overlay';
import styles from './style';

const LearningChallenges = (props) => {
    const {
        userProfile, setUserProfile
    } = props;

    const [userChallenges, setUserChallenges] = useState(userProfile.challenges);
    const [newChallenge, setNewChallenge] = useState('');
    const [newChallengeModal, setNewChallengeModal] = useState(false);

    // let challenges = ['ADHD', 'Slow Processing', 'Dyslexia', 'Non-Verbal', 'Dyscalculia', 'Dysgraphia']

    return (
        <View style={{height: '60%', width: '80%', marginTop: 20, alignItems: 'center', justifyContent: 'space-between'}}>
            <View style={{width: '100%'}}>
                <Text style={styles.onBoardTitle}>Learning Challenges</Text>
                <Text style={styles.onBoardSubtitle}>Select all the challenges you face</Text>
                <View style={{marginVertical: 20, width: '100%', flexDirection: 'row', flexWrap: 'wrap'}}>
                    <View style={{alignItems: 'center', width: '100%'}}>
                        <TouchableOpacity 
                            style={styles.addButton}
                            onPress={() => {
                                setNewChallengeModal(true);
                        }}>
                            <Text style={{color: '#A5A6F6', fontSize: 35, marginBottom: 10, marginLeft: 2}}>+</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{width: '100%', flexDirection: 'row', flexWrap: 'wrap'}}>
                    {userChallenges.map((challenge) => {
                        return (
                            <TouchableOpacity 
                                style={[styles.challengesContainer, challenge.clicked ? {backgroundColor: '#68CCE5'} : null]}
                                onPress={() => {
                                    const newList = [...userChallenges]
                                    const index = userChallenges.find(c => c===challenge);
                                    index.clicked = !index.clicked;
                                    setUserProfile({...userProfile, challenges: newList});
                            }}>
                                <Text style={[challenge.clicked ? {color: 'white'} : null]}>{challenge.name}</Text>
                            </TouchableOpacity>
                        );
                    })}
                    </View>
                </View>

                <Overlay containerStyle={{backgroundColor: 'rgba(0, 0, 10, 0.5)'}} visible={newChallengeModal} onClose={()=>setNewChallengeModal(false)} closeOnTouchOutside>
                    <View style={{width: '95%'}}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <TouchableOpacity onPress={() => {
                                setNewChallenge('');
                                setNewChallengeModal(false);
                            }}>
                                <Text style={{color: 'gray'}}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                const challenge = {name: newChallenge, clicked: false};
                                const newList = [...userProfile.challenges];
                                if (newChallenge!=='') {
                                    newList.push(challenge);
                                    setUserChallenges(newList);
                                    setUserProfile({...userProfile, challenges: newList});
                                }
                                setNewChallenge('');
                                setNewChallengeModal(false);
                            }}>
                                <Text style={{color: 'blue'}}>Save</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{alignSelf: 'center', marginVertical: 5, fontSize: 18}}>New Challenge</Text>
                        <TextInput
                            editable
                            placeholder={"ex. ADHD"}
                            value={newChallenge}
                            style={[styles.textInputContainer, {alignSelf: 'center'}]}
                            onChangeText={(text) => {
                                setNewChallenge(text);
                            }}
                        />
                    </View>
                </Overlay>
            </View>

            <View style={{flexDirection: 'row', width: '100%', justifyContent: 'flex-end'}}>
                <TouchableOpacity  style={[styles.nextButton, {flexDirection: 'row'}]} onPress={() => {
                    props.nextStage()
                }}>
                    <Text style={{color: 'white', fontSize: 18}}>Next</Text>
                    <View style={{marginHorizontal: 15, marginTop: 3}}><Image source={require('../../assets/arrowRight.png')} /></View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default LearningChallenges;