import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'


const Login = () => {
  const navigation= useNavigation()

  return (
    <SafeAreaView style={{backgroundColor:'black'}}>
    <View style={{margin:'8%',borderWidth:2,borderRadius:25,height:'82%',marginVertical:'20%',backgroundColor:'white'}}>
        <View>
          <Text style={{alignSelf:'center',fontSize:40,marginTop:'15%'}}>Login</Text>
        </View>

        <View style={{flexDirection:'row',borderWidth:1,borderRadius:10,width:'85%',height:'7%',marginTop:'10%',alignSelf:'center'}}>

          <View style={{alignSelf:'center'}}>
            <Image style={{height:'60%',width:'300%',marginLeft:4,marginRight:5}} source={{uri:'https://cdn-icons-png.flaticon.com/128/3059/3059518.png'}}/>
          </View >
          <View>
          <TextInput style={{height:'100%',width:'100%',paddingLeft:'25%'}} placeholder='Username'/>
          </View>
        </View>


        <View style={{flexDirection:'row',borderWidth:1,borderRadius:10,width:'85%',height:'7%',marginTop:'10%',alignSelf:'center'}}>

          <View style={{alignSelf:'center'}}>
            <Image style={{height:'50%',width:'300%',marginLeft:4,marginRight:5}} source={{uri:'https://cdn-icons-png.flaticon.com/128/12314/12314142.png'}}/>
          </View>
          
          <View>
          <TextInput style={{height:'100%',width:'100%',paddingLeft:'20%'}} placeholder='Password'/>
          </View>
        </View>

        <TouchableOpacity style={{alignItems:'center',paddingTop:'10%'}}>
          <Text style={{color:'purple'}}>Forgot Password?</Text>
        </TouchableOpacity>

        

        <View>
          <TouchableOpacity style={{height:'20%',width:'50%',backgroundColor:'black',alignSelf:'center',marginTop:'25%',borderRadius:15}} onPress={()=>{navigation.navigate('HomeScreen')}}>
            <Text style={{color:'white',textAlign:'center',margin:'4%',fontSize:20}}>Sign in</Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection:'row',marginHorizontal:'25%',marginVertical:'20%'}}>
          <Text>Register now using </Text>

          <TouchableOpacity onPress={()=>{navigation.navigate('Signup')}} >
            <Text  style={{color:'purple'}}>Email</Text>
          </TouchableOpacity>
        </View>

    </View>


    </SafeAreaView>
  )
}

export default Login