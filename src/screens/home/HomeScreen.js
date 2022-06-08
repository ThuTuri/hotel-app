import React, { useRef, useState } from 'react';
import {
    Animated, Dimensions, FlatList, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput,
    TouchableOpacity, View, Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../constants/colors';
import hotels from '../../constants/hotels';
import Card from './card/Card';
import TopHotelCard from './top-hotel-card/TopHotelCard';


const { width } = Dimensions.get('screen');
const cardWidth = width / 1.8;

function HomeScreen({ navigation }) {
    const categories = ['Top Rated','Ha Noi', 'Da Nang', 'Ho Chi Minh'];
    const [selectCategoryIndex, setSelectCategoryIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;

    const [RefFlastList,setRefFlastList]=useState(null)
        const CategoryList = () => {
        return (
            <View style={styles.categoryListContainer}>
                {categories.map((item, index) => (
                    <TouchableOpacity key={index} activeOpacity={0.8} onPress={() =>
                    {
                        setSelectCategoryIndex(index)  
                       RefFlastList.scrollToIndex({animated: true,index:0});
                  
                    } }>
                        <View>
                            <Text style={[styles.categoryListText, { color: selectCategoryIndex == index ? COLORS.primary : COLORS.grey }]}>
                                {item}
                            </Text>
                            {selectCategoryIndex == index && (
                                <View style={{ height: 3, width: 30, backgroundColor: COLORS.primary, marginTop: 2 }} />
                            )}
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        )
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View style={styles.header}>
                <View style={{ paddingBottom: 15 }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
                        Find your hotel
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>in</Text>
                        <Text style={{ fontSize: 30, fontWeight: 'bold', color: COLORS.primary }}> T&T Hotels</Text>
                    </View>
                </View>
                <Icon name='person-outline' size={38} color={COLORS.grey} onPress={() => { 
                                 Alert.alert(
                                    "You need to login to use feature",
                                    "",
                                    [
                                      {
                                        text: "Cancel",
                                        onPress: () => console.log("Cancel Pressed"),
                                        style: "cancel"
                                      },
                                      { text: "Login", onPress: () => {navigation.navigate('Login')} }
                                    ]
                                  );
                             }}  />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.searchInputContainer}>
                    <Icon name='search' size={30} style={{ marginLeft: 20 }} />
                    <TextInput
                        placeholder='Search'
                        style={{ fontSize: 20, paddingLeft: 10, width: '100%' }}
                    />
                </View>
                <CategoryList />
                <View>
                    <Animated.FlatList
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                            { useNativeDriver: true },
                        )}
                        horizontal
                        data={hotels}
                        contentContainerStyle={{
                            paddingVertical: 30,
                            paddingLeft: 20,
                            paddingRight: cardWidth / 2 - 40
                        }}
                        ref={ref => {
                            setRefFlastList(ref)
                          }}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => <Card
                            navigation={navigation}
                            hotel={item}
                            index={index}
                            scrollX={scrollX}
                        />}
                        snapToInterval={cardWidth}
                    />
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 20,
                    marginTop: 15
                }}>
                    <Text style={{ fontWeight: 'bold', color: COLORS.grey }}>All hotels</Text>
                    <Pressable onPress={() => navigation.navigate('Top Hotels')}>
                        <Text style={{ color: COLORS.grey }}>Show all</Text>
                    </Pressable>
                </View>
                <FlatList
                    data={hotels}
                   
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingLeft: 10,
                        marginTop: 20,
                        paddingBottom: 30
                    }}
                    renderItem={({ item }) => <TopHotelCard hotel={item} />}
                />
            </ScrollView>
        </SafeAreaView>
    );
}
export default HomeScreen;

const styles = StyleSheet.create({
    header: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    searchInputContainer: {
        height: 50,
        backgroundColor: COLORS.light,
        marginTop: 15,
        marginLeft: 20,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',

    },
    categoryListContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 30
    },
    categoryListText: {
        fontSize: 17,
        fontWeight: 'bold'
    },


});


