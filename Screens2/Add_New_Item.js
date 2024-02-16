import { View, Text, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Slider from '@react-native-community/slider';
import SliderPicker from 'react-native-slider-picker'
const Add_New_Item = () => {
  return (
    <View>
        <View style={{height:'20%',width:'100%',marginTop:30}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Image  source={{uri:'https://cdn-icons-png.flaticon.com/128/507/507257.png'}} style={{height:30,width:30,marginLeft:20,marginTop:20}}/>
                <Text style={{fontSize:25,paddingLeft:10,paddingTop:18,paddingLeft:90}}>All New Item</Text>
            </View>

        </View>
        
        <ScrollView>
            <View>
                <View style={{flexDirection:'row',marginTop:1,marginLeft:40}}><Text style={{fontSize:18,color:'grey'}}>Item name </Text><Text style={{color:'red'}}>*</Text></View>
                <View style={{height:40,width:'85%',alignSelf:'center'}} ><TextInput style={{height:40,width:'100%' ,backgroundColor:'white',borderRadius:8}}/></View>
            </View>

            <View>
                    <View style={{flexDirection:'row',marginTop:40,marginLeft:40}}><Text style={{fontSize:18,color:'grey'}}>Category </Text><Text style={{color:'red'}}>*</Text></View>
                    <View style={{height:40,width:'85%',alignSelf:'center'}} ><TextInput style={{height:40,width:'100%' ,backgroundColor:'white',borderRadius:8}}/></View>
            </View>

            <View>
                    <View style={{flexDirection:'row',marginTop:40,marginLeft:40}}><Text style={{fontSize:18,color:'grey'}}>Price </Text></View>
                    <View style={{height:40,width:'85%',alignSelf:'center'}} ><TextInput style={{height:40,width:'100%' ,backgroundColor:'white',borderRadius:8}}/></View>
            </View>

            <View>
                    <View style={{flexDirection:'row',marginTop:40,marginLeft:40}}><Text style={{fontSize:18,color:'grey'}}>Quantity </Text><Text style={{color:'red'}}>*</Text></View>
                    <Slider
                    
                        style={{width: 200, height: 40,alignSelf:'center'}}
                        minimumValue={1}
                        maximumValue={10}
                        minimumTrackTintColor="#FFFFFF"
                        maximumTrackTintColor="#000000" 
                     
                    />
            </View>

            <View>
                    <View style={{flexDirection:'row',marginTop:40,marginLeft:40}}><Text style={{fontSize:18,color:'grey'}}>Expiry(in Days) </Text><Text style={{color:'red'}}>*</Text></View>
                   
            </View>
            
            

            <View>
                    <View style={{flexDirection:'row',marginTop:40,marginLeft:40}}><Text style={{fontSize:18,color:'grey'}}>Image link</Text></View>
                    <View style={{height:40,width:'85%',alignSelf:'center'}} ><TextInput style={{height:40,width:'100%' ,backgroundColor:'white',borderRadius:8}}/></View>
            </View>

            <TouchableOpacity style={{height:65,width:'60%',backgroundColor:'blue',marginTop:40,alignSelf:'center',borderRadius:15,alignItems:'center'}}>
                <Text style={{color:'white',fontSize:30,margin:12}}>Submit</Text>
            </TouchableOpacity>

        </ScrollView>
            
    </View>
  )
}

export default Add_New_Item