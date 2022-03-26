import React, { useState } from 'react';
import { View, Text, Dimensions, Modal, Image } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import OnBoarding from './onboarding';
import styles from './style';

const Welcome = (props) => {
    const [signUpModal, setSignUpModal] = useState(false);

    return (
        <View>
            <View style={{height: '100%'}}>
                <View style={{position: 'absolute', marginTop: -100, height: 370, width: 410, backgroundColor: '#FFF8F0', alignItems: 'center'}}>
                    <View style={[styles.welcomeText, {marginTop: 140, marginRight: 230}]}><Image source={require('../../assets/img2.png')}/></View>
                    <Text style={[styles.welcomeText, {marginTop: -30}]}>Being the bridge</Text>
                    <View style={[styles.welcomeText, {marginTop: -30, marginRight: 290}]}><Image source={require('../../assets/img3.png')}/></View>
                    <View style={[styles.welcomeText, {marginTop: -170, marginRight: -280}]}><Image source={require('../../assets/img1.png')}/></View>
                </View>
                <View style={{height: '100%', justifyContent: 'center'}}>
                    <View style={{height: '55%', marginTop: 30, flexDirection: 'column', justifyContent: 'space-between'}}>
                        <View style={{alignItems: 'center'}}>
                            <TextInput
                                editable
                                placeholder="Email Address"
                                style={[styles.textInputContainer, {marginTop: 120}]}
                            />
                            <TextInput
                                editable
                                placeholder="Password"
                                style={styles.textInputContainer}
                                secureTextEntrysd
                            />
                            <TouchableOpacity style={[styles.signInContainer]}>
                                <Text style={styles.signInText}>Sign in</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{alignItems: 'center'}}>
                            <Text style={styles.signUpText}>Don't have an account?</Text>
                            <TouchableOpacity onPress={() => setSignUpModal(true)}>
                                <Text style={styles.signUpText}>Sign up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>

            <Modal animationType='slide' transparent={false} visible={signUpModal}>
                <OnBoarding exitOnboarding={() => setSignUpModal(false)} userProfile={props.userProfile} setUserProfile={props.setUserProfile} toggleOnboard={props.toggleOnboard} />
            </Modal>
        </View>
    );
};

export default Welcome;