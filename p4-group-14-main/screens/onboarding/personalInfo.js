import React, { useState } from 'react';
import { View, Text, Dimensions, Modal, Alert, Image } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select';
import styles from './style';
import pickerStyles from './pickerStyle';

const PersonalInformation = (props) => {
    const {
        userProfile, setUserProfile
    } = props;

    const [userInfo, setUserInfo] = useState({name: userProfile.name, gender: userProfile.gender, year: userProfile.year, major: userProfile.major});

    const yearOptions = [
        { label: '2025', value: '2025' },
        { label: '2024', value: '2024' },
        { label: '2023', value: '2023' },
        { label: '2022', value: '2022' },
        { label: '2021', value: '2021' },
        { label: 'Other', value: 'Other' },
    ];
    const genderOptions = [
        { label: 'Woman', value: 'Woman' },
        { label: 'Man', value: 'Man' },
        { label: 'Non-binary', value: 'Non-binary' },
        { label: 'Other', value: 'Other' },
    ];

    return (
        <View style={{height: '60%', width: '80%', marginTop: 20, alignItems: 'center', justifyContent: 'space-between'}}>
            <View>
                <Text style={styles.onBoardTitle}>Personal Information</Text>
                <Text style={styles.onBoardSubtitle}>Fill in all fields below</Text>
                <View style={{marginVertical: 20}}>
                    <TextInput
                        editable
                        placeholder={"Name"}
                        value={userInfo.name}
                        style={styles.textInputContainer}
                        onChangeText={(text) => {
                            setUserInfo({...userInfo, name: text});
                        }}
                    />
                    <View style={[styles.textInputContainer, {flexDirection: 'row', justifyContent: 'space-between'}]}>
                        <RNPickerSelect
                            style={pickerStyles}
                            placeholder={{ label: 'Gender', value: null }}
                            value={userInfo.gender}
                            onValueChange={(value) => {
                                setUserInfo({...userInfo, gender: value});
                            }}
                            items={genderOptions}
                        />
                        <View style={{justifyContent: 'center'}}><Image source={require('../../assets/expand.png')} /></View>
                    </View>
                    <View style={[styles.textInputContainer, {flexDirection: 'row', justifyContent: 'space-between'}]}>
                        <RNPickerSelect
                            style={pickerStyles}
                            placeholder={{ label: 'Year', value: null }}
                            value={userInfo.year}
                            onValueChange={(value) => {
                                setUserInfo({...userInfo, year: value});
                            }}
                            items={yearOptions}
                        />
                        <View style={{justifyContent: 'center'}}><Image source={require('../../assets/expand.png')} /></View>
                    </View>
                    <TextInput
                        editable
                        placeholder={"Major"}
                        value={userInfo.major}
                        style={styles.textInputContainer}
                        onChangeText={(text) => {
                            setUserInfo({...userInfo, major: text});
                        }}
                    />
                </View>
            </View>

            <View style={{flexDirection: 'row', width: '100%', justifyContent: 'flex-end'}}>
                <TouchableOpacity  style={[styles.nextButton, {flexDirection: 'row'}, userInfo.name==='' || userInfo.gender==='' || userInfo.year==='' || userInfo.major==='' ? {backgroundColor: '#F8E1BE'} : null]} onPress={() => {
                    if (userInfo.name!=='' && userInfo.gender!=='' && userInfo.year!=='' && userInfo.major!=='') {
                        props.nextStage()
                        setUserProfile({...userProfile, name: userInfo.name, gender: userInfo.gender, year: userInfo.year, major: userInfo.major})
                    }
                }}>
                    <Text style={{color: 'white', fontSize: 18}}>Next</Text>
                    <View style={{marginHorizontal: 15, marginTop: 3}}><Image source={require('../../assets/arrowRight.png')} /></View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default PersonalInformation;