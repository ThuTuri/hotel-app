import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { AntDesign, Ionicons, Feather } from '@expo/vector-icons';

import HomeScreen from '../../screens/home/HomeScreen';
import COLORS from '../../constants/colors';
import BookmarkScreen from '../../screens/bookmark/BookmarkScreen';
import GiftScreen from '../../screens/gift/GiftScreen';
import NotifyScreen from '../../screens/notify/NotifyScreen';

const Tab = createMaterialBottomTabNavigator();

function BottomTab() {
    return(
        <Tab.Navigator activeColor='white' inactiveColor={COLORS.white} barStyle={{backgroundColor:COLORS.primary}}>
            <Tab.Screen name='Index' component={HomeScreen}  options={{tabBarIcon: ({color}) =>( <AntDesign name='home' color={color} size= {24}/>), }}/>
            <Tab.Screen name='Save' component={BookmarkScreen}  options={{tabBarIcon: ({color}) =>( <Feather name='bookmark' color={color} size= {24}/>),}}/>
            <Tab.Screen name='Gift' component={GiftScreen}  options={{tabBarIcon: ({color}) =>( <AntDesign name='gift' color={color} size= {24}/>),}}/>
            <Tab.Screen name='Notify' component={NotifyScreen} options={{tabBarIcon: ({color}) =>( <Ionicons name='notifications-outline' color={color} size= {24}/>),}}/>
        </Tab.Navigator>
    );
}

export default BottomTab;
