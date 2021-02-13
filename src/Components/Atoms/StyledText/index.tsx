import React from 'react';
import { Text, StyleProp, TextStyle } from 'react-native';
import {Colors, ColorsType, FontsType} from '../../../Constants';

interface StyleTextProps {
    children: React.ReactNode,
    variant ?: keyof FontsType,
    size ?: number,
    color ?: keyof ColorsType,
    textStyle ?: StyleProp<TextStyle>
};

export default ({children, variant, size, color, textStyle}: StyleTextProps) => {

    const style = {
        fontFamily: variant,
        color: Colors[color],
        fontSize: size,
    };

    return (
        <Text style={[style, textStyle]}>
            {children}
        </Text>
    )
}
