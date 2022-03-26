import React, { useState } from 'react';
import { View, Text, Dimensions, Modal, Image } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Profile from '../assets/profile'
import Social from '../assets/social'
import Grid from '../assets/grid'
import ProfilePage from './profilePage/profile'
import ResourcePage from './resourcesPage/resources'
import ConnectPage from './socialPage/connect'
// import styles from './style';

const Dashboard = (props) => {
    const [selected, setSelected] = useState('profile');

    return (
        <View style={{width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'space-between'}}>
            {selected === 'social' ? (<ConnectPage />) : null}
            {selected === 'resources' ? (<ResourcePage />) : null}
            {selected === 'profile' ? (<ProfilePage userProfile={props.userProfile} toggleOnboard={props.toggleOnboard} />) : null}
            
            <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '70%', alignSelf: 'center'}}>
                <TouchableOpacity onPress={() => setSelected('social')}>
                    <Social selected={selected==='social' ? true : false} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelected('resources')}>
                    <Grid selected={selected==='resources' ? true : false} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelected('profile')}>
                    <Profile selected={selected==='profile' ? true : false} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Dashboard;