import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import COLORS from '../../constants/colors';

export default function NeedLoginMessage({navigation}){
    return(
        
        <View style={styles.header} >
            <Text style={{ fontSize: 20, fontWeight: '500' }}>You need to login to use this function</Text>
            <View style={styles.button} >
                <Button title='Go to login page' color={COLORS.white} onPress={()=>navigation.navigate('Login')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    button:{
        paddingHorizontal: 5,
        paddingVertical: 3,
        marginTop: 10,
        backgroundColor: COLORS.primary,
        borderRadius: 10,
        justifyContent: 'center'

    }
})