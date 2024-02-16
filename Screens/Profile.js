import { View, Text, Image } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View style={{paddingTop:40}}>
        <View style={{flexDirection:'row',marginTop:2}}>
            <View><Image style={{height:30,width:30,}} source={{uri:'https://cdn-icons-png.flaticon.com/128/10562/10562047.png'}}/></View>
            <Text style={{fontSize:18,color:'blue'}}>Back</Text>
            <Text style={{fontSize:18,marginLeft:120,fontWeight:'700'}}>Profile</Text>
        </View>

        <View style={{height:'0.5%',width:'100%',backgroundColor:'grey',marginTop:10}}></View>

        <View style={{flexDirection:'row',alignItems:'center'}}>
            <View style={{paddingLeft:25,paddingTop:25}}>
                <View style={{height:80,width:80,backgroundColor:'blue',borderRadius:100,alignItems:'center'}}>
                    <Text style={{color:'white',fontSize:50,margin:10}}>V</Text>
                </View>
            </View>

            <View style={{paddingTop:20,paddingLeft:20}}>
                <Text style={{fontWeight:'900',fontSize:20}}>Vishesh</Text>
                <Text style={{fontWeight:'400',fontSize:15}}>User since: 4 jan 2024</Text>
            </View>
        </View>

        <View style={{height:'0.5%',width:'100%',backgroundColor:'grey',marginTop:20}}></View>

        <View style={{paddingTop:20,paddingLeft:30,height:60}}>
                <Text style={{fontWeight:'700',fontSize:18}}>Services</Text>
        </View>

        <View style={{height:'0.5%',width:'100%',backgroundColor:'grey',marginTop:20}}></View>

        <View style={{paddingTop:20,paddingLeft:30,height:60}}>
                <Text style={{fontWeight:'700',fontSize:18}}>Call Us:</Text>
                <Text style={{fontWeight:'400',fontSize:12,paddingTop:5}}>Mon-Fri 9:00 AM - 7:00 PM (Toll Free):</Text>
        </View>
        
        <View style={{height:'0.5%',width:'100%',backgroundColor:'grey',marginTop:20}}></View>

        <View style={{paddingTop:20,paddingLeft:30,height:60}}>

                <Text style={{fontWeight:'700',fontSize:18}}>Notifications:</Text>
                <Text style={{fontWeight:'400',fontSize:12,paddingTop:5}}>To set Notifications</Text>
        </View>
                
        <View style={{height:'0.5%',width:'100%',backgroundColor:'grey',marginTop:20}}></View>

        <View style={{paddingTop:20,paddingLeft:30,height:60}}>

                <Text style={{fontWeight:'700',fontSize:18}}>Send Mail</Text>
        </View>

        <View style={{height:'0.5%',width:'100%',backgroundColor:'grey',marginTop:20}}></View>

        <View style={{paddingTop:20,paddingLeft:30,height:60}}>

                <Text style={{fontWeight:'700',fontSize:18}}>Chat with us</Text>
        </View>

        <View style={{height:'0.5%',width:'100%',backgroundColor:'grey',marginTop:20}}></View>

        <View style={{paddingTop:20,paddingLeft:30,height:60}}>

                <Text style={{fontWeight:'700',fontSize:18}}>Vendor credits</Text>
        </View>

        <View style={{height:'0.5%',width:'100%',backgroundColor:'grey',marginTop:20}}></View>

        <View style={{paddingTop:20,paddingLeft:30,height:60}}>

                <Text style={{fontWeight:'700',fontSize:18,color:'red'}}>Log Out</Text>
        </View>

        <View style={{height:'0.5%',width:'100%',backgroundColor:'grey',marginTop:20}}></View>


    </View>
  )
}

export default Profile