import { View, Text, SafeAreaView, ScrollView, Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

const RestaurantScreen = () => {
    const navigation=useNavigation();

    const {
        params: {
            imgUrl,
            id,
            name,
            rating,
            place,
            type,
            price
        },
    }=useRoute();
      return (
    <View>
        <ScrollView height={'100%'}>
            <Image style={{height:225,width:'100%'}} source={{uri:imgUrl}}/>

            <TouchableOpacity style={{position:'absolute',marginTop:50,marginLeft:10,backgroundColor:'white',borderRadius:20}} onPress={()=>{
                navigation.navigate('HomeScreen')
            }}>
                <Image style={{height:25,width:25,margin:5}} source={{uri:'https://cdn-icons-png.flaticon.com/128/507/507257.png'}}/>
            </TouchableOpacity>

            <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={{textAlign:'center',fontSize:25,fontWeight:'bold',flex:'1'}}>{name}</Text>
            </View>

            <View style={{flexDirection:'row',alignItems:'center',marginLeft:5,marginTop:10}}>
                <View style={{flexDirection:'row',alignItems:'center',marginLeft:5}}>
                    <Text style={{fontSize:25,fontWeight:'bold'}}>{rating}</Text>
                    <Image style={{height:25,width:25}}source={{uri:'https://cdn-icons-png.flaticon.com/128/1828/1828884.png'}}/>
                    <Text style={{paddingLeft:5,paddingTop:5}}>{type}</Text>

                </View>
                <View style={{flexDirection:'row',alignItems:'center',marginLeft:10}}>
                    <Image style={{height:25,width:25}} source={{uri:'https://cdn-icons-png.flaticon.com/128/535/535239.png'}}/>
                    <Text style={{fontSize:25,fontWeight:'400'}}>{place}</Text> 
                </View>

                <View><Text style={{fontSize:25,fontWeight:'500',paddingLeft:25}}>Rs.{price}</Text></View> 

            </View>


            


        </ScrollView>
    </View>
  )
}

export default RestaurantScreen