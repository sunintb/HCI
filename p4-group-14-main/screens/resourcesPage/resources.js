import React, { useState } from 'react';
import { View, Text, Dimensions, Modal, Image } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import styles from './style';

const Resources = (props) => {

    return (
        <View>
            <Text style={{fontSize: 36, marginVertical: 30, marginTop: 50, marginHorizontal: 35, fontWeight: '700'}}>Resources</Text>
            <View style={{flexDirection: 'column',  width:'80%', alignSelf: 'center',}}>
                <TouchableOpacity style={[styles.clickableContainer, {backgroundColor: '#FDF5DB'}]}>
                    <Image source={require('../../assets/resource4.png')} />
                    <Text style={{marginLeft: 15, fontSize: 19}}>About SAS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.clickableContainer, {backgroundColor: '#D6F1F8'}]}>
                    <Image source={require('../../assets/resource5.png')} />
                    <Text style={{marginLeft: 15, fontSize: 19}}>Apply for Services</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.clickableContainer, {backgroundColor: '#E2E2F9'}]}>
                    <Image source={require('../../assets/resource3.png')} />
                    <Text style={{marginLeft: 15, fontSize: 19}}>Book an Appointment</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.clickableContainer, {backgroundColor: '#FDF5DB'}]}>
                    <Image source={require('../../assets/resource4.png')} />
                    <Text style={{marginLeft: 15, fontSize: 19}}>Notetaking</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.clickableContainer, {backgroundColor: '#D6F1F8'}]}>
                    <Image source={require('../../assets/resource5.png')} />
                    <Text style={{marginLeft: 15, fontSize: 19}}>Get Accommodations</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Resources;