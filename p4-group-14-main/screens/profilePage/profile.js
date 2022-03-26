import React, { useState } from 'react';
import { View, Text, Dimensions, Modal, Image } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import TempProfilePic from '../../assets/tempProfile'
import style from '../onboarding/style';
import styles from './style';

const Profile = (props) => {
    const {
        userProfile,
    } = props;

    return (
        <View style={{marginTop: 70}}>
            <View style={{flexDirection: 'row', width:'80%', alignSelf: 'center'}}>
                <TempProfilePic />
                <View style={{flexDirection: 'column', justifyContent: 'center'}}>
                    <Text style={styles.profileName}>{userProfile.name}</Text>
                    <Text style={styles.username}>Username: {userProfile.username}</Text>
                </View>
            </View>

            <View style={{flexDirection: 'column', width:'80%', alignSelf: 'center', marginVertical: 30}}>
                <TouchableOpacity style={[styles.clickableContainer, {backgroundColor: '#D6F1F8'}]}>
                    <Image source={require('../../assets/info.png')} />
                    <Text style={{marginLeft: 15, fontSize: 19}}>Update Information</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.clickableContainer, {backgroundColor: '#FDF5DB'}]}>
                    <Image source={require('../../assets/notifications.png')} />
                    <Text style={{marginLeft: 15, fontSize: 19}}>Notifications</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.clickableContainer, {backgroundColor: '#E2E2F9'}]}>
                    <Image source={require('../../assets/help.png')} />
                    <Text style={{marginLeft: 15, fontSize: 19}}>Get Help</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.signOutButton} onPress={() => props.toggleOnboard(true)}>
                <Text style={{color: '#E18888'}}>Sign out</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Profile;