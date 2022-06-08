import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import NeedLoginMessage from '../../shared/need-login-message/NeedLoginMessage';

export default function NotifyScreen({ navigation }) {
    return (

        <NeedLoginMessage navigation={navigation}/>
    );
}

const styles = StyleSheet.create({
   
})