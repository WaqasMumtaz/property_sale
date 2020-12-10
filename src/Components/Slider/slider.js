import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native';
// import RangeSlider from '@jesster2k10/react-native-range-slider';
import RangeSlider from 'rn-range-slider';

// const onChange = (333, 555)=>{
//     console.log('Max: ', max);
//     console.log('Min: ', min);
//   };
import Thumb from './Sliders/Thumb';
import Rail from './Sliders/Thumb';
import RailSelected from './Sliders/Thumb';
import Label from './Sliders/Thumb';
import Notch from './Sliders/Thumb';
import styles from './styles';





const SliderRange = () => {

    const [rangeDisabled, setRangeDisabled] = useState(false);
    const [low, setLow] = useState(0);
    const [high, setHigh] = useState(100);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(100);
    const [floatingLabel, setFloatingLabel] = useState(false);
    const renderThumb = useCallback(() => <Thumb />, []);
    const renderRail = useCallback(() => <Rail />, []);
    const renderRailSelected = useCallback(() => <RailSelected />, []);
    const renderLabel = useCallback(value => <Label text={value} />, []);
    const renderNotch = useCallback(() => <Notch />, []);

    const handleValueChange = useCallback((low, high) => {
        setLow(low);
        setHigh(high);
        // console.log('VAlue of slider >>', high)
    }, []);
    return (
        <View>
            <RangeSlider
                style={styles.slider}
                min={min}
                max={max}
                step={1}
                disableRange={rangeDisabled}
                //floatingLabel={floatingLabel}
                renderThumb={renderThumb}
                renderRail={renderRail}
                renderRailSelected={renderRailSelected}
               // renderLabel={renderLabel}
               // renderNotch={renderNotch}
                onValueChanged={handleValueChange}
            />


        </View>
    )
}

export default SliderRange;