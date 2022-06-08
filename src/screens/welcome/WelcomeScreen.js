import { Image, TouchableOpacity, Text } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import COLORS from '../../constants/colors';

function WelcomeScreen({ navigation }) {


    const Done =({...props}) => (
        <TouchableOpacity style={{right: 20}} {...props}>
            <Text style={{fontSize: 16}}>Done</Text>
        </TouchableOpacity>
    );

    return (
        <Onboarding
        DoneButtonComponent={Done}
        onSkip={() => navigation.navigate('Home')}
        onDone={() => navigation.navigate('Home')}
            pages={[
                {
                    backgroundColor: '#fff',
                    image: <Image style={{height: 400, width: 420}} source={require('../../../assets/images/hotel1.jpg')} />,
                    title: 'Cheaper',
                    subtitle: 'Price cheaper than market',
                    titleStyles:{color: COLORS.primary, fontWeight: 'bold'},
                    subTitleStyles: {color: COLORS.grey,fontStyle:'italic'}
                }, 
                {
                    backgroundColor: '#fff',
                    image: <Image style={{height: 400, width: 420}} source={require('../../../assets/images/hotel2.jpg')} />,
                    title: 'Good Services',
                    subtitle: 'Including breakfast service, restaurant, gym,....',
                    titleStyles:{color: COLORS.primary, fontWeight: 'bold'},
                    subTitleStyles: {color: COLORS.grey,fontStyle:'italic'}
                }, 
                {
                    backgroundColor: '#fff',
                    image: <Image style={{height: 400, width: 420}} source={require('../../../assets/images/hotel3.jpg')} />,
                    title: 'Save Time',
                    subtitle: 'You can make a reservation anytime, anywhere',
                    titleStyles:{color: COLORS.primary, fontWeight: 'bold'},
                    subTitleStyles: {color: COLORS.grey,fontStyle:'italic'}
                }, 
            ]}
        />
    );
}

export default WelcomeScreen;