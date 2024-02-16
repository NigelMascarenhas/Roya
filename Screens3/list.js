import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Add = () => {
    const[title,settitle] = useState("")
    const[subtitle,setsubtitle] = useState("")
    const[desc,setdesc] = useState("")


    const postdata = ()=>{
       
        var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw =JSON.stringify( {
  "title": title,
  "subtitle": subtitle,
  "desc":desc
})

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://1bba-103-196-78-205.ngrok-free.app/createblog", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));












    }
  return (
    <View style={{marginHorizontal:30, marginTop:30}}>
      <View>
        <TextInput

        style={{borderWidth:1 , height:40}}
        placeholder='Enter title'
        value={title}
        onChangeText={(text)=>{settitle(text)}}
/>
      </View>

      <View style={{marginTop:20}}>
        <TextInput

        style={{borderWidth:1 , height:40}}
        placeholder='Enter subtitle'
        value={subtitle}
        onChangeText={(text)=>{setsubtitle(text)}}
/>
      </View>

      <View style={{marginTop:20}}>
        <TextInput

        style={{borderWidth:1 , height:40}}
        placeholder='Enter desc'
        value={desc}
        onChangeText={(text)=>{setdesc(text)}}
/>
      </View>

      <TouchableOpacity 
        onPress={()=>{postdata()}}
        style={{marginHorizontal:20,marginTop:200, borderWidth:1, height:80, backgroundColor:'green'}}>
        
</TouchableOpacity>

      

    </View>
  )
}

export default Add