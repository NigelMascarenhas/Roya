import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const CategoryCard = ({title,link}) => {
  const navigation=useNavigation();
  return (
    <SafeAreaView>
      <TouchableOpacity style={{padding:2}} onPress={()=>{
          navigation.navigate('LocationScreen',{
              title
          })
      }}>
          <Image style={{height:120,width:120,borderRadius:15,}} source={{uri:link}}
             />
             <Text style={{position:'absolute',fontSize:20,color:'black',alignSelf:'center',fontWeight:'900',paddingTop:50}}>{title}</Text>
          
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default CategoryCard