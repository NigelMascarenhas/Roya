

import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Screens/HomeScreen';
import Signup from './Screens/Signup';
import Login from './Screens/Login';
import All_Items from './Screens2/All_Items';
import Add_New_Item from './Screens2/Add_New_Item';
import Profile from './Screens/Profile';
import Categories from './components/Categories';
import CategoryCard from './components/CategoryCard';
import Restaurants from './components/Restaurants';
import Restaurantcard from './components/Restaurantcard';
import glass from './Screens2/glass';
import RestaurantScreen from './Screens/RestaurantScreen';
import LocationScreen from './Screens/LocationScreen';
import Api from './Screens3/Api';
import list from './Screens3/list';
import tab_navigator from './Screens2/tab_navigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>

    <Stack.Navigator

      initialRouteName='HomeScreen' 
     
    screenOptions={{
      headerShown:false
    }}
    >

        <Stack.Screen name="Add_New_Item" component={Add_New_Item} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="All_Items" component={All_Items} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Categories" component={Categories}/>
        <Stack.Screen name="CategoryCard" component={CategoryCard}/>
        <Stack.Screen name="Restaurants" component={Restaurants}/>
        <Stack.Screen name="Restaurantcard" component={Restaurantcard}/>
        <Stack.Screen name="glass" component={glass}/>
        <Stack.Screen name="RestaurantScreen" component={RestaurantScreen}/>
        <Stack.Screen name="LocationScreen" component={LocationScreen}/>
        <Stack.Screen name="Api" component={Api}/>
        <Stack.Screen name="list" component={list}/>
        
        {/* <Stack.Screen name="tab_navigator" component={tab_navigator}/> */}









     </Stack.Navigator>

    </NavigationContainer>
  );
}