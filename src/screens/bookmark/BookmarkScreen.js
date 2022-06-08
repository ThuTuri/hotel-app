import React from 'react';
import { StyleSheet } from 'react-native';
import NeedLoginMessage from '../../shared/need-login-message/NeedLoginMessage';

export default function BookmarkScreen({ navigation }) {
    return (

        <NeedLoginMessage navigation={navigation}/>
    );
}

const styles = StyleSheet.create({
  
})