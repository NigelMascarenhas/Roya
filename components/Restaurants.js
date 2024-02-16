import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import Restaurantcard from './Restaurantcard'

const Restaurants = ({id}) => {
  return (
    
    
    <ScrollView horizontal showsHorizontalScrollIndicator='false' style={{marginLeft:3,marginRight:5}}> 
        
        <Restaurantcard imgUrl ="https://ventra7.com/wp-content/uploads/2019/12/modern-mansion-11.jpeg" id={id} type={"Mansion"} place={"Thane"} name={"Nigel's House"} rating={5.0} price={20000}/> 
        
        <Restaurantcard imgUrl ="https://designscad.com/wp-content/uploads/edd/2018/12/B01-01-1000x750.jpg" id={id} type={"Bunglow"} place={"Virar"} name={"Mitali's House"} rating={4.8} price={16000}/> 

        <Restaurantcard imgUrl ="https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_487/at%2Fhouse%20tours%2F2021-04%2FErin%20K%2FKERR-130-CLARKSON-2R-01-020577-EDIT-WEB" id={id} type={"Flat"} place={"Dahanu"} name={"Chetan's House"} rating={4.2} price={12000}/> 

        <Restaurantcard imgUrl ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM4mR8elrC-k0xSmcKWxBhx8cdb8Ug6Dz9rkSTtB27R8wCrGb7TmonuWYW82ZtshT_BY8&usqp=CAU" id={id} type={"Dometry"} place={"Vasai"} name={"Daivesh's House"} rating={3.6} price={8000}/> 

        <Restaurantcard imgUrl ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFPFfXcYQYo0wzNTrvL8YcbyWnpyN8ISMEyRn0aBH-vpalCJ4tIJESBf3-qzCmilsh_NE&usqp=CAU" id={id} type={"Villa"} place={"Boisar"} name={"Rahul's House"} rating={4.6} price={10000}/> 
        
        <Restaurantcard imgUrl ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM4mR8elrC-k0xSmcKWxBhx8cdb8Ug6Dz9rkSTtB27R8wCrGb7TmonuWYW82ZtshT_BY8&usqp=CAU" id={id} type={"Dometry"} place={"Vasai"} name={"Daivesh's House"} rating={3.6} price={8000}/> 
        
        <Restaurantcard imgUrl ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM4mR8elrC-k0xSmcKWxBhx8cdb8Ug6Dz9rkSTtB27R8wCrGb7TmonuWYW82ZtshT_BY8&usqp=CAU" id={id} type={"Dometry"} place={"Vasai"} name={"Daivesh's House"} rating={3.6} price={8000}/>

        <Restaurantcard imgUrl ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTuxgYLDXK8_DssHIcvfAhfwxGvF4G_u9oWA&usqp=CAU" id={id} type={"Dometry"} place={"Vasai"} name={"Varun's House"} rating={3.6} price={8000}/>


        
    </ScrollView>
  )
}

export default Restaurants