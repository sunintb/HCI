import React, { useState } from 'react';
import { View, Text, Dimensions, Modal, Image } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
// import styles from './style';

const Connect = (props) => {

    return (
        <View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 36, marginVertical: 30, marginTop: 50, marginHorizontal: 35, fontWeight: '700'}}>Connect</Text>
                <View style={{marginTop: 60, marginRight: 35}}><Image source={require('../../assets/message.png')} /></View>
            </View>
            <View style={{justifyContent: 'center', alignSelf: 'center'}}><Image source={require('../../assets/connect.png')} /></View>
        </View>
    );
};

export default Connect;