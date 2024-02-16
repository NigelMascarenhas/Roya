import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const glass = () => {
    const[data,setdata]=useState(0)
  return (
    <SafeAreaView>
      <View style={{alignItems:'center',marginTop:300}}>
            <View style={{flexDirection:'row'}}>  
                <TouchableOpacity style={{alignSelf:'center',paddingRight:20}} onPress={()=>{
                    if(data>0)
                    setdata(data-1)
                    else
                    setdata(15)
                }}>
                    <Image style={{height:40,width:40}} source={{uri:'https://cdn-icons-png.flaticon.com/128/1828/1828899.png'}}/>
                </TouchableOpacity>

                <View style={{height:80,width:80,borderRadius:50,backgroundColor:'yellow',alignItems:'center',paddingTop:15}}>
                        <Image style={{height:50,width:50}} source={{uri:'https://cdn-icons-png.flaticon.com/128/427/427112.png'}}/>
                </View>

                <TouchableOpacity style={{alignSelf:'center',paddingLeft:20}} onPress={()=>{
                    if(data<15)
                    setdata(data+1)
                    else
                    setdata('bus kar')

                }}>
                    <Image style={{height:40,width:40}} source={{uri:'https://cdn-icons-png.flaticon.com/128/1828/1828919.png'}}/>
                </TouchableOpacity>

            </View>
            <Text style={{fontSize:30}}>Intake:{data}</Text>

      </View>
    </SafeAreaView>
  )
}

export default glass