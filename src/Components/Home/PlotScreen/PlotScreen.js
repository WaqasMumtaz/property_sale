import React, { useState, useEffect } from 'react';
import Properties from '../../Properties';
import { View } from 'react-native';
import { Consumer } from '../../../Context';


const PlotsScreen = (props) => {
    //props.navigation.addListener('focus', () => {
     // console.log('Focused screen >>', props.route.name);
      const screenType = props.route.name;
       
   //})
  
    const data = [
      {
        id: '1',
        title: 'Residential',
        city:'Karachi',
        area: '250 Sq. Yd.',
        areaSizeValue:250,
        areaSizeUnit:'Sq. Yd.',
      },
      {
        id: '2',
        title: 'Commercial',
        city:'Lahore',
        area: '120 Sq. Yd.',
        areaSizeValue:120,
        areaSizeUnit:'Sq. Yd.',
  
      },
      {
        id: '3',
        title: 'Agricultural',
        city:'Islamabad',
        area: '80 Sq. Yd.',
        areaSizeValue:80,
        areaSizeUnit:'Sq. Yd.',
      },
      {
        id: '4',
        title:'',
        city: 'Rawalpindi',
        area:'',
        areaSizeValue:80,
        areaSizeUnit:'Sq. Yd.',
      },
      {
        id: '5',
        title:'',
        city: 'Sakhar',
        area:'',
        areaSizeValue:80,
        areaSizeUnit:'Sq. Yd.',
  
      },
      {
        id: '6',
        title:'',
        city: 'Multan',
        area:'',
        areaSizeValue:80,
        areaSizeUnit:'Sq. Yd.',
  
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

export default PlotsScreen;