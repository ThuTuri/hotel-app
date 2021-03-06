import React from 'react';
import { ScrollView, View, StyleSheet, ImageBackground, StatusBar, Text, Alert, TouchableOpacity } from 'react-native';
import COLORS from '../../constants/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DetailsScreen = ({ navigation, route }) => {
    const item = route.params;
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                backgroundColor: COLORS.white,
                paddingBottom: 20,
            }}>
            <StatusBar barStyle='light-content' translucent backgroundColor="rgba(0,0,0,0)" />
            <ImageBackground
                style={styles.headerImage}
                source={item.image}>
                <View style={styles.header}>
                    <Icon name='arrow-back-ios' size={28} color={COLORS.white} onPress={navigation.goBack} />
                    <TouchableOpacity style={{ padding: 30 }} onPress={() => {
                            Alert.alert(
                                "You need to login to use feature",
                                "",
                                [
                                    {
                                        text: "Cancel",
                                        onPress: () => console.log("Cancel Pressed"),
                                        style: "cancel"
                                    },
                                    { text: "Login", onPress: () => { navigation.navigate('Login') } }
                                ]
                            );
                        }}>
                        <Icon name='bookmark-border' size={28} color={COLORS.white}  />
                    </TouchableOpacity>



                </View>
            </ImageBackground>
            <View>
                <View style={styles.iconContainer}>
                    <TouchableOpacity style={{ padding: 10 }} onPress={() => navigation.navigate('Map')}>
                         <Icon name='place' color={COLORS.white} size={28} />
                    </TouchableOpacity>
                   
                </View>
                <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.name}</Text>
                    <Text style={{ fontSize: 12, fontWeight: '400', color: COLORS.grey, marginTop: 5 }}>{item.location}</Text>
                    <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon name='star' size={20} color={COLORS.orange} />
                                <Icon name='star' size={20} color={COLORS.orange} />
                                <Icon name='star' size={20} color={COLORS.orange} />
                                <Icon name='star' size={20} color={COLORS.orange} />
                                <Icon name='star' size={20} color={COLORS.grey} />
                            </View>
                            <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 5 }}>4.0</Text>
                        </View>
                        <Text style={{ fontSize: 13, color: COLORS.grey }}>365 reviews</Text>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ lineHeight: 20, color: COLORS.grey }}>{item.details}</Text>
                    </View>
                </View>
                <View style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingLeft: 20,
                    alignItems: 'center'
                }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Price per night</Text>
                    <View style={styles.priceTag}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: COLORS.grey, marginLeft: 5 }}>${item.price}</Text>
                        <Text style={{ fontSize: 12, fontWeight: 'bold', color: COLORS.grey, marginLeft: 5 }}>+breakfast</Text>
                    </View>
                </View>
                <View style={styles.btn}>
                    <Text style={{ color: COLORS.white, fontSize: 18, fontWeight: 'bold' }}>Book now</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    btn: {
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        backgroundColor: COLORS.primary,
        marginHorizontal: 20,
        borderRadius: 10
    },
    priceTag: {
        height: 40,
        alignItems: 'center',
        marginLeft: 40,
        paddingLeft: 20,
        flex: 1,
        backgroundColor: COLORS.secondary,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        flexDirection: 'row'
    },
    iconContainer: {
        position: 'absolute',
        height: 60,
        width: 60,
        backgroundColor: COLORS.primary,
        top: -30,
        right: 20,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerImage: {
        height: 500,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        overflow: 'hidden'
    },
    header: {
        marginTop: 60,
        flexDirection: 'row',
        alignItems: "center",
        marginHorizontal: 20,
        justifyContent: 'space-between'
    },

})
export default DetailsScreen;