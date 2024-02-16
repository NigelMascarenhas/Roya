import { View, Text, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Restaurantcard = ({
  imgUrl,
  id,
  name,
  rating,
  place,
  type,
  price
}) => {
  const navigation= useNavigation();
  

  return (
    <TouchableOpacity
    onPress={() =>{
      navigation.navigate('RestaurantScreen',{
        imgUrl,
        id,
        name,
        rating,
        place,
        type,
        price
      })
    }}
    style={{padding:1}}>
      <View style={{padding:5,borderRadius:10,backgroundColor:'white'}}>
          <Image style={{height:200,width:250,borderRadius:10}}  source={{uri:imgUrl}}/>
              <ScrollView><Text style={{fontSize:20,fontWeight:'600',flex:'1'}}>{name} </Text></ScrollView>

          <View style={{flexDirection:'row',alignItems:'center'}}>
              <Image style={{height:15,width:15}}source={{uri:'https://cdn-icons-png.flaticon.com/128/1828/1828884.png'}}/>
              <Text style={{fontSize:15,fontWeight:'600',paddingLeft:5}}>{rating}<Text style={{fontWeight:'300',fontSize:12}}> . {type}</Text></Text>
          </View>
          
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Image style={{height:15,width:15}} source={{uri:'https://cdn-icons-png.flaticon.com/128/535/535239.png'}}/>
              <Text style={{fontSize:15,fontWeight:'600',paddingLeft:5}}>{place}</Text> 
          </View>

          <View style={{ }}><Text style={{fontSize:25,fontWeight:'bold'}}>Rs.{price}</Text></View> 
      </View>

          
          
    </TouchableOpacity>
  )
}

export default Restaurantcard