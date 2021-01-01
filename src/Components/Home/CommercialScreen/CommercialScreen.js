import React, { useState, useEffect } from 'react';
import Properties from '../../Properties';
import { View } from 'react-native';
import { Consumer } from '../../../Context';


const CommercialScreen = (props) => {

    // props.navigation.addListener('focus', () => {
     //console.log('Focused screen >>', props.route.name);
      const screenType = props.route.name;
       
  //  })
  
    const data = [
      {
        id: '1',
        title: 'Office',
        city:'Karachi',
        area: '100 Sq.',
      },
      {
        id: '2',
        title: 'Shop',
        city:'Lahore',
        area: '200 Sq.',
        
  
      },
      {
        id: '3',
        title: 'Warehouse',
        city:'Islamabad',
        area: '300 Sq.',
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

 export default CommercialScreen;  