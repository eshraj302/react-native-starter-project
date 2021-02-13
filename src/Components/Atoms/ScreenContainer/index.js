import React from 'react';
import { View } from 'react-native';
import { SharedStyles } from '../../../Shared';
import styles from './styles';

export default ({ children, center = false }) => {

    const style = [
        SharedStyles.fullFlex,
    ];

    if (center) {
        style.push(styles.center);
    }


    return (
        <View style={style}>
            {children}
        </View>
    )
}
