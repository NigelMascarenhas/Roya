import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const All_Items = () => {
  return (
<View>
            <View style={{height:'20%',width:'100%',marginTop:30}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Image  source={{uri:'https://cdn-icons-png.flaticon.com/128/507/507257.png'}} style={{height:30,width:30,marginLeft:20,marginTop:20}}/>
                    <Text style={{fontSize:25,paddingLeft:10,paddingTop:15,paddingLeft:110}}>All Items</Text>
                </View>
            </View>

            
    </View>
  )
}

export default All_Items