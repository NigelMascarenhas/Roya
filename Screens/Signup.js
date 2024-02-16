import { View, Text, Touchable, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Signup = () => {
    const navigation= useNavigation()
  return (
    <SafeAreaView style ={{backgroundColor:'black'}} >
      <View style={{margin:'8%',borderWidth:2,borderRadius:25,height:'82%',marginVertical:'20%',color:'blue', backgroundColor:'white',Image}}>
        <View>
          <Text style={{alignSelf:'center',fontSize:40,marginTop:'15%'}}>Sign Up</Text>
        </View>

        <View style={{flexDirection:'row',borderWidth:1,borderRadius:10,width:'85%',height:'7%',marginTop:'10%',alignSelf:'center'}}>

          <View style={{alignSelf:'center'}}>
            <Image style={{height:'50%',width:'300%',marginLeft:4,marginRight:4}} source={{uri:'https://cdn-icons-png.flaticon.com/128/3059/3059518.png'}}/>
          </View >
          <View>
          <Text style={{marginLeft:'20%',fontSize:10}}>   Username:</Text>
          <TextInput style={{height:'100%',width:'100%',paddingBottom:'15%',paddingLeft:'20%'}} placeholder='Username'/>
          </View>
        </View>

        <View style={{flexDirection:'row',borderWidth:1,borderRadius:10,width:'85%',height:'7%',marginTop:'10%',alignSelf:'center'}}>

          <View style={{alignSelf:'center'}}>
            <Image style={{height:'50%',width:'300%',marginLeft:4,marginRight:4}} source={{uri:'https://cdn-icons-png.flaticon.com/128/2099/2099199.png'}}/>
          </View>
          
          <View>
          <Text style={{marginLeft:'20%',fontSize:10}}>     Email:</Text>
          <TextInput style={{height:'100%',width:'100%',paddingBottom:'15%',paddingLeft:'20%'}} placeholder='Email' />          
          </View>
        </View>

        <View style={{flexDirection:'row',borderWidth:1,borderRadius:10,width:'85%',height:'7%',marginTop:'10%',alignSelf:'center'}}>

          <View style={{alignSelf:'center'}}>
            <Image style={{height:'50%',width:'300%',marginLeft:4,marginRight:4}} source={{uri:'https://cdn-icons-png.flaticon.com/128/12314/12314142.png'}}/>
          </View>
          
          <View>
          <Text style={{marginLeft:'20%',fontSize:10}}>   Password:</Text>
          <TextInput style={{height:'100%',width:'100%',paddingBottom:'15%',paddingLeft:'20%'}} placeholder='password'/>
          </View>
        </View>

        <View style={{flexDirection:'row',borderWidth:1,borderRadius:10,width:'85%',height:'7%',marginTop:'10%',alignSelf:'center'}}>

          <View style={{alignSelf:'center'}}>
            <Image style={{height:'50%',width:'300%',marginLeft:4,marginRight:4}} source={{uri:'https://cdn-icons-png.flaticon.com/128/12314/12314142.png'}}/>
          </View>
          
          <View>
          <Text style={{marginLeft:'20%',fontSize:10}}>Confirm Password:</Text>
          <TextInput style={{height:'100%',width:'100%',paddingBottom:'15%',paddingLeft:'20%'}} placeholder='confirm password'/>
          </View>
        </View>


        

        <View>
          <TouchableOpacity style={{height:'20%',width:'50%',backgroundColor:'black',alignSelf:'center',marginTop:'25%',borderRadius:15}} onPress={()=>{navigation.navigate('Log')}}>
            <Text style={{color:'white',textAlign:'center',margin:8,fontSize:20}}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection:'row',marginHorizontal:'16%',marginVertical:'1%'}}>
          <Text>Already have an account? </Text>

          <TouchableOpacity onPress={()=>{navigation.navigate('Log')}} >
            <Text  style={{color:'purple'}}>Sign In</Text>
          </TouchableOpacity>
        </View>

    </View>
  </SafeAreaView>
  )
}

export default Signup