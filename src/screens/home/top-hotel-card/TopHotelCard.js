import {
    Image, Text,
    View,StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../../constants/colors';


const TopHotelCard = ({ hotel }) => {
    return (
        <View style={styles.topHotelCard}>
            <View style={{ position: 'absolute', top: 5, right: 5, zIndex: 1, flexDirection: 'row' }}>
                <Icon name='star' size={15} color={COLORS.orange} />
                <Text style={{ color: COLORS.white, fontWeight: 'bold', fontSize: 15 }}>5.0</Text>
            </View>
            <Image style={styles.topHotelCardImage} source={hotel.image} />
            <View style={{ paddingVertical: 5, paddingHorizontal: 10 }}>
                <Text style={{ fontSize: 10, fontWeight: 'bold' }}>{hotel.name}</Text>
                <Text style={{ fontSize: 7, fontWeight: 'bold', color: COLORS.grey }}>{hotel.name}</Text>
            </View>
        </View>
    )
}
export default TopHotelCard;

const styles =  StyleSheet.create({
    topHotelCard: {
        //height: 115,
        width: 120,
        backgroundColor: COLORS.white,
        elevation: 15,
        marginHorizontal: 10,
        borderRadius: 10,
        shadowOpacity: 0.3,
        shadowRadius: 10,
        borderRadius: 10,
    },
    topHotelCardImage: {
        height: 80,
        width: '100%',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    }
})