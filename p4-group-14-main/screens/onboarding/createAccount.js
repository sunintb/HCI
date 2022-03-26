import React, { useState, isValidElement } from 'react';
import { View, Text, Dimensions, Modal, Image } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import styles from './style';

const CreateAccount = (props) => {
    const {
        userProfile, setUserProfile
    } = props;

    const [userEmail, setEmail] = useState(userProfile.email);
    const [userName, setUsername] = useState(userProfile.username);
    const [userPassword, setPassword] = useState(userProfile.password);

    const [invalidE, setInvalidEmail] = useState(false);
    const [invalidU, setInvalidUsername] = useState(false);
    const [invalidP, setInvalidPassword] = useState(false);

    const isValid = () => {
        let invalidEmail = false;
        let invalidUsername = false;
        let invalidPassword = false;

        const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!userEmail.match(emailRegexp)) {
            setInvalidEmail(true);
            invalidEmail = true;
        } else {
            setInvalidEmail(false);
        }
        if (userName.length<8) {
            setInvalidUsername(true);
            invalidUsername = true;
        } else {
            setInvalidUsername(false);
        }
        if (userPassword.length<8) {
            setInvalidPassword(true);
            invalidEmail = true;
        } else {
            setInvalidPassword(false);
        }

        if (invalidEmail===true || invalidUsername===true || invalidPassword===true) {
            return false
        } else {
            return true
        }
    } 

    return (
        <View style={{height: '60%', width: '80%', marginTop: 20, alignItems: 'center', justifyContent: 'space-between'}}>
            <View>
                <Text style={styles.onBoardTitle}>Create Your Account</Text>
                <Text style={styles.onBoardSubtitle}>Last step! Fill in the fields below to create your account</Text>
                <View style={{marginVertical: 20, alignItems: 'center'}}>
                    <TextInput
                        editable
                        placeholder="Email Address"
                        value={userEmail}
                        style={styles.textInputContainer}
                        onChangeText={(text) => {
                            setEmail(text);
                        }}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        returnKeyType="done"
                    />
                    {invalidE===true ? 
                        <View style={{width: '80%'}}><Text style={styles.errorMessage}>
                            Please enter a valid email
                        </Text></View> 
                    : null}

                    <TextInput
                        editable
                        placeholder="Username"
                        value={userName}
                        style={styles.textInputContainer}
                        onChangeText={(text) => {
                            setUsername(text);
                        }}
                        autoCapitalize="none"
                        returnKeyType="done"
                    />
                    {invalidU===true ?  
                        <View style={{width: '80%'}}><Text style={styles.errorMessage}>
                            Please enter a valid username
                        </Text></View> 
                    : null}

                    <TextInput
                        editable
                        placeholder="Password"
                        value={userPassword}
                        style={styles.textInputContainer}
                        onChangeText={(text) => {
                            setPassword(text);
                        }}
                        secureTextEntry
                        autoCapitalize="none"
                        returnKeyType="done"
                    />
                    {invalidP===true ?  
                        <View style={{width: '80%'}}><Text style={styles.errorMessage}>
                            Password should be 8-12 characters
                        </Text></View> 
                    : null}
                </View>

                <Text style={styles.accountDetailsInfoText}>
                    • Your username will be visible to others {"\n"}
                    • Username should be at least 8 characters {"\n"}
                    • Password should be 8-12 characters
                </Text>
            </View>

            <View style={{flexDirection: 'row', width: '100%', justifyContent: 'flex-end'}}>
                <TouchableOpacity  style={[styles.nextButton, {flexDirection: 'row'}, userEmail==='' || userName==='' || userPassword==='' ? {backgroundColor: '#F8E1BE'} : null]} onPress={() => {
                    if (userEmail!=='' && userName!=='' && userPassword!=='' && isValid()===true) {
                        setUserProfile({...userProfile, email: userEmail, username: userName, password: userPassword});
                        props.nextStage()
                    }
                }}>
                    <Text style={{color: 'white', fontSize: 18}}>Next</Text>
                    <View style={{marginHorizontal: 15, marginTop: 3}}><Image source={require('../../assets/arrowRight.png')} /></View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CreateAccount;