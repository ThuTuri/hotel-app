import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, FlatList, Button, Alert,Checkbox } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../constants/colors';
import hotels from '../../constants/hotels';


export default function ShowRoomScreen({ navigation }) {
    // const Selectionbox = () => {
    //     const [isSelected, setSelection] = useState(false);
    //     return (
    //         <View >
    //             <View style={styles.checkboxContainer}>
    //                 <Checkbox
    //                     value={isSelected}
    //                     onValueChange={setSelection}
    //                     style={styles.checkbox}
    //                 />
    //                 <Text style={styles.label}>Room type</Text>
    //             </View>
    //         </View>
    //     );
    // };

    const Card = ({ hotel }) => {
        return (
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => navigation.navigate('DetailsScreen', hotel)}>
                <View style={styles.card}>
                    <View style={styles.priceTag}>
                        <Text style={{ color: COLORS.white, fontSize: 20, fontWeight: 'bold' }}>${hotel.price}</Text>
                    </View>
                    <Image source={hotel.image} style={styles.cardImage} />
                    <View style={styles.cardDetails}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View>
                                <Text style={{ fontWeight: 'bold', fontSize: 17, paddingTop: 10, }}>{hotel.name}</Text>
                                <Text style={{ color: COLORS.grey, fontSize: 12 }}>{hotel.location}</Text>
                            </View>

                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon name='star' size={15} color={COLORS.orange} />
                                <Icon name='star' size={15} color={COLORS.orange} />
                                <Icon name='star' size={15} color={COLORS.orange} />
                                <Icon name='star' size={15} color={COLORS.orange} />
                                <Icon name='star' size={15} color={COLORS.grey} />
                                <Text style={{ fontSize: 10, color: COLORS.grey, paddingLeft: 10, paddingTop: 3 }}>365 reviews</Text>
                            </View>
                            <View style={styles.button}>
                                <Button title='Book now' color={COLORS.white} onPress={() => {
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
                                }} />
                            </View>

                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={{paddingBottom: 30}}>
            {/* <Selectionbox/> */}
            <FlatList
                data={hotels}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <Card
                    hotel={item}
                />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        marginTop: 60,
        marginHorizontal: 20,

    },
    card: {
        height: 280,
        width: 400,
        marginRight: 20,
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 15,
        borderRadius: 15,
        backgroundColor: COLORS.white,
        marginTop: 20,
        marginLeft: 7,
        marginBottom: 5
    },
    cardImage: {
        height: 200,
        width: '100%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,

    },
    priceTag: {
        height: 60,
        width: 80,
        backgroundColor: COLORS.primary,
        position: 'absolute',
        zIndex: 1,
        left: 0,
        borderTopLeftRadius: 15,
        borderBottomRightRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',

    },
    cardDetails: {
        height: 80,
        borderRadius: 15,
        backgroundColor: COLORS.white,
        position: 'absolute',
        bottom: 0,
        paddingLeft: 10,
        width: '100%',
    },
    cardOverLay: {
        height: 280,
        backgroundColor: COLORS.white,
        position: 'absolute',
        zIndex: 100,

        borderRadius: 15,
    },
    button: {
        marginRight: 7,
        paddingHorizontal: 1,
        marginTop: -30,
        backgroundColor: COLORS.primary,
        borderRadius: 10,
        justifyContent: 'center'
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "center",
    },
})