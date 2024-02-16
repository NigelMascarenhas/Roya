import { View, Text, SafeAreaView, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import Restaurants from '../components/Restaurants';

const LocationScreen = () => {
    const navigation = useNavigation();
    const {
        params: {
           title
        },
    }=useRoute();
  return (
    <View backgroundColor={'#888181'}>
        <SafeAreaView>
        <View backgroundColor={'#D0CBCB'}>

            <View style={{backgroundColor:'#888181',height:40,flexDirection:'row',alignItems:'center'}}>
                
                <TouchableOpacity style={{marginLeft:10}} onPress={()=>{
                    navigation.navigate('HomeScreen')
                }}>
                    <Image style={{height:25,width:25}} source={{uri:'https://cdn-icons-png.flaticon.com/128/507/507257.png'}}/>

                </TouchableOpacity>



                <Text style={{textAlign:'center',fontSize:25,fontWeight:'900',marginLeft:100}}>{title}</Text>


            </View>
            

            <ScrollView >
            

            <View style={{marginTop:10}}>
            <View style={{flexDirection:'row',paddingLeft:10}}>
                <Text style={{fontSize:15,fontWeight:'700',flex:'1'}}>Top Rated!</Text>
                <Image style={{height:20,width:20,marginRight:10}} source={{uri:'https://cdn-icons-png.flaticon.com/128/271/271226.png'}}/>
            </View>
            
                <Restaurants id={1}/>
            
          </View>

          <View style={{marginTop:10}}>
            <View style={{flexDirection:'row',paddingLeft:10}}>
                <Text style={{fontSize:15,fontWeight:'700',flex:'1'}}>Properties near you!</Text>
                <Image style={{height:20,width:20,marginRight:10}} source={{uri:'https://cdn-icons-png.flaticon.com/128/271/271226.png'}}/>
            </View>
            
                <Restaurants id={1}/>
            
          </View>

          <View style={{marginTop:10}}>
            <View style={{flexDirection:'row',paddingLeft:10}}>
                <Text style={{fontSize:15,fontWeight:'700',flex:'1'}}>Properties for Rent!</Text>
                <Image style={{height:20,width:20,marginRight:10}} source={{uri:'https://cdn-icons-png.flaticon.com/128/271/271226.png'}}/>
            </View>
            
                <Restaurants id={1}/>
            
          </View>
          <View height={100}>

          </View>

          </ScrollView>
        
        </View>
        </SafeAreaView>
    </View>
  )
}

export default LocationScreen