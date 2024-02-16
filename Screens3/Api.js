
import { View, Text, TextInput, TouchableOpacity, TouchableOpacityBase, SafeAreaView, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const Api = () => {
    const navigation=useNavigation();
    const [text,settext]= useState("");
    const [list,setlist] = useState([]);

    const fetchdata = async() =>{
        // alert("Button Pressed");
        const url = `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${text}`;
        const options = {
	        method: 'GET',
	        headers: {
		    'X-RapidAPI-Key': '5997cdf1f5msh30a07bbdef613ecp1bd405jsn4608dbec4928',
		    'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	 response.json().then((result)=>{setlist(result.list)});
    // setlist(result?.list)
	console.log(list);
} catch (error) {
	console.error(error);
}
    }
    
  return (
    <SafeAreaView>
      <TextInput style={{height:50,width:'80',backgroundColor:'yellow',marginTop:100}}
      value={text}
      placeholder='Enter text'
      onChangeText={(text)=>{
        settext(text)
      }}
      ></TextInput>
      <TouchableOpacity onPress={()=>{fetchdata()}} >
            <Text  style={{color:'purple',paddingTop:50,textAlign:'center'}}>Submit</Text>
          </TouchableOpacity>
          <Text>{text}</Text>

          <FlatList
          data={list}
          renderItem={({item})=>{
            return(
                <ScrollView>
                <View style={{borderWidth:1, marginVertical:5}}>
                    <Text>{item?.defid}</Text>
                    <Text>{item?.example}</Text>
                </View>
                </ScrollView>
            )
          }}
          
          />



        
    </SafeAreaView>
  )
}

export default Api