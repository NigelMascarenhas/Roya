import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import CategoryCard from './CategoryCard'

const Categories = ({title}) => {
  return (
    <ScrollView horizontal style={{marginLeft:5,marginRight:5}} showsHorizontalScrollIndicator={false}>
    <CategoryCard title="Mumbai" link={"https://wallpapers.com/images/hd/mumbai-1024-x-768-background-ao9e6ogqwubcg8mm.jpg"}></CategoryCard>
    <CategoryCard title="Delhi" link={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3eOjSI6p72pQnfFE9MHbukwI43KcyKeo76Q&usqp=CAU"}></CategoryCard>
    <CategoryCard title="Indore" link={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQewYClIrr5ohOq61qPbEKADeKWgxNjykv-NOSDdUMtcLnGM554qaK6Qky43PJXwPR5guA&usqp=CAU"}></CategoryCard>
    <CategoryCard title="Chennai" link={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSHKcF42frc_83NSX85YfIjAvk-pOTSuQH8A&usqp=CAU"}></CategoryCard>
    <CategoryCard title="Bengaluru" link={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKduUxrN5hCxLF_PIiJAtQKHDOFyVRJss9fg&usqp=CAU"}></CategoryCard>
    <CategoryCard title="Kolkata" link={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvxWEh5abvHYK9rU9q1453hsoADXK9KV-3IA&usqp=CAU"}></CategoryCard>
    <CategoryCard title="Hyderabad" link={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSewaXVeRLFF0sC6Jf5r35tXu2JBFpxqlaibg&usqp=CAU"}></CategoryCard>
    <CategoryCard title="Palghar" link={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6U4_soGRYuuwr2VKZ_g3mFJGUl9pySnUsGw&usqp=CAU"}></CategoryCard>
    <CategoryCard title="Pune" link={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfNMSWUxFfzXD5XKTHSpJJRhrDhNTdF5qk8Q&usqp=CAU"}></CategoryCard>
    <CategoryCard title="ahmedabad" link={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZZBSskDffslXHLEuyaaXSyATK_IIesWle2Q&usqp=CAU"}></CategoryCard>
    <CategoryCard title="Jaipur" link={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIsTnU9odZeuWYdP8yiVI9vWY_AzwKOrLYhQ&usqp=CAU"}></CategoryCard>
    <CategoryCard title="Thane" link={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzvbo-R05MQxFl5Xeagw3HVoEU0oZq-nbp1w&usqp=CAU"}></CategoryCard>

    </ScrollView>
  )
}

export default Categories