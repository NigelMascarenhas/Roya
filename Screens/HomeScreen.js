import { View, Text, SafeAreaView, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Categories from '../components/Categories'
import Restaurants from '../components/Restaurants'

const HomeScreen = () => {
  return (
<SafeAreaView style={{backgroundColor:'#888181'}}>

  <View style={{backgroundColor:'#D0CBCB'}}>

    <View style={{borderBottomRightRadius:20,borderBottomLeftRadius:20,backgroundColor:'#888181'}}>
      <View style={{flexDirection:'row',alignItems:'center'}}>
            <Image source={{uri:'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyamin-mellish-106399.jpg&fm=jpg'}}
                style={{height:50,width:50,margin:10,borderRadius:30}}
            />    
            <View style={{flex:1}}>
                <Text style={{fontWeight:'300',fontSize:12}}>Explore Properties!</Text>
                <Text style={{fontWeight:'700'}}>Current Location <Image style={{height:15,width:15,alignSelf:'center'}} source={{uri:'https://cdn-icons-png.flaticon.com/128/2985/2985150.png'}}/></Text>
            </View>

            <Image style={{height:25,width:25,marginRight:10}} source={{uri:'https://cdn-icons-png.flaticon.com/128/1828/1828970.png'}}/>


            <Image style={{height:25,width:25,marginRight:10}} source={{uri:'https://cdn-icons-png.flaticon.com/128/456/456212.png'}}/>
      </View>

      {/* search */}
      <View style={{flexDirection:'row',marginBottom:20}}>

        <View style={{flex:1,height:40,backgroundColor:'white',flexDirection:'row',marginLeft:10,alignItems:'center',borderRadius:10,marginRight:15}}> 
          <Image style={{height:25,width:25,marginLeft:10}} source={{uri:'https://cdn-icons-png.flaticon.com/128/149/149852.png'}}/>
          <TextInput style={{fontSize:16,paddingLeft:15,flex:'1'}} placeholder='Search'/>
        </View>
            <Image style={{height:25,width:25,marginRight:10,alignSelf:'center'}} source={{uri:'https://cdn-icons-png.flaticon.com/128/876/876195.png'}}/>
      
      </View>
      
    </View>
      
       {/* Body */}
      <ScrollView style={{marginTop:5}}>

          <View>
            {/* Categories */}
            <Categories/>
          </View>


          {/* Properties near you! */}

          <View style={{marginTop:10}}>
            <View style={{flexDirection:'row',paddingLeft:10}}>
                <Text style={{fontSize:15,fontWeight:'700',flex:'1'}}>Properties near you!</Text>
                <Image style={{height:20,width:20,marginRight:10}} source={{uri:'https://cdn-icons-png.flaticon.com/128/271/271226.png'}}/>
            </View>
            
                <Restaurants id={1}/>
            
          </View>


          {/* Explore More! */}
          <View style={{marginTop:10}}>
            <View style={{flexDirection:'row',paddingLeft:10,}}>
                <Text style={{fontSize:15,fontWeight:'700',flex:'1'}}>Explore More!</Text>
                <Image style={{height:20,width:20,marginRight:10}} source={{uri:'https://cdn-icons-png.flaticon.com/128/271/271226.png'}}/>
            </View>
            <Restaurants id={2}/>
          </View>

          {/* Explore Properties for Rent!  */}

          <View style={{marginTop:10}}>
            <View style={{flexDirection:'row',paddingLeft:10,}}>
                <Text style={{fontSize:15,fontWeight:'700',flex:'1'}}>Explore Properties for Rent!</Text>
                <Image style={{height:20,width:20,marginRight:10}} source={{uri:'https://cdn-icons-png.flaticon.com/128/271/271226.png'}}/>
            </View>
            <Restaurants id={2}/>
          </View>


          <View style={{backgroundColor:'#CAC7C7',height:250}}></View>

      </ScrollView>

      

  </View>
</SafeAreaView>
  )
}

export default HomeScreen


