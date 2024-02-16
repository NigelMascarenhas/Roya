// import { View, Text, Image } from 'react-native'
// import React from 'react'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from './Home';
// import Todo from './Todo';
// import Design1 from './Design1';

// const Tab = createBottomTabNavigator();

// const TabNavigator = () => {
//     const RenderTabIcon = (props) => {
//         const { activeIcon, inActiveIcon, title, isFocused } = props;
//         return (
//             <View >
//                 <Image
//                     source={{uri:activeIcon}}
//                     style={ { tintColor: isFocused ? "red":'grey', height:20, width:20}} />
//                 <Text style={ { color: isFocused ? 'red' : 'grey', }}>{title}</Text>
//             </View>
//         );
//     }
//   return (
//     <Tab.Navigator>
//     <Tab.Screen
//     options={
// {
//         tabBarIcon: ({ focused }) => {
//             return (
//                 <RenderTabIcon
//                     title="Home"
//                     isFocused={focused}
//                     activeIcon="https://cdn-icons-png.flaticon.com/512/1946/1946488.png"
//                 // inActiveIcon={ImagesPath.Tabbar.bottom_k}
//                 // title={"Katlego"}
//                 />
//             )
//                }
// }
//     }
//     name="Home" component={Home} />
//     <Tab.Screen
//     options={{
//         tabBarIcon: ({ focused }) => {
//             return (
//                 <RenderTabIcon
//                     title="Setting"
//                     isFocused={focused}
//                     activeIcon="https://cdn-icons-png.flaticon.com/512/1946/1946488.png"
//                 // inActiveIcon={ImagesPath.Tabbar.bottom_k}
//                 // title={"Katlego"}
//                 />
//             )
//                }
// }}
    
//     name="Design1" component={Design1} />
//   </Tab.Navigator>
//   )
// }

// export default TabNavigator