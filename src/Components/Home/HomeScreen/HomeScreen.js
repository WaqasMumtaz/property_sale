import React, { useState, useEffect } from 'react';
import Properties from '../../Properties';
import { Consumer } from '../../../Context';

//Import all required component
import { View } from 'react-native';

const HomeScreen = (props) => {
    const [screenType , setScreenType]= useState('Home')
   //props.navigation.addListener('focus', () => {
    //console.log('Focused screen >>', props.route.name);
     
 //})
 useEffect(()=>{
   setScreenType(props.route.name)
 },[])
 
   const data = [
     {
       id: '1',
       title: 'Houses',
       city:'Karachi',
       area: '250 Sq. Yd',
     },
     {
       id: '2',
       title: 'Flats',
       city:'Lahore',
       area: '120 Sq. Yd',
       
 
     },
     {
       id: '3',
       title: 'Uper Portion',
       city:'Islamabad',
       area: '80 Sq. Yd',
     },
     {
       id: '4',
       title:'',
       city: 'Rawalpindi',
       area:''
     },
     {
       id: '5',
       title:'',
       city: 'Sakhar',
       area:''
 
     },
     {
       id: '6',
       title:'',
       city: 'Multan',
       area:''
 
     },
 
   ]
 
   return (
     <View style={{ flex: 1, paddingVertical: 15, backgroundColor: '#fff' }}>
         <Consumer>
             {(value)=>(
            <Properties 
                getDataProperties={value}
                data={data} 
                screenType={screenType}/>
             )
            }
         </Consumer>
      
     </View>
   );
 }

 export default HomeScreen;