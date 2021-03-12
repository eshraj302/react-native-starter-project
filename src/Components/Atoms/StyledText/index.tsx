import React from 'react';
import { Text, StyleProp, TextStyle } from 'react-native';
import {Colors, Fonts, FontsType} from '../../../Constants';

interface StyleTextProps {
    children: React.ReactNode,
    variant ?: keyof FontsType,
    size ?: number,
    color ?: string,
    textStyle ?: StyleProp<TextStyle>
};

export default ({children, variant, size, color, textStyle}: StyleTextProps) => {

    const style = {
        fontFamily: Fonts[variant],
        color: Colors[color],
        fontSize: size,
    };

    return (
        <Text style={[style, textStyle]}>
            {children}
        </Text>
    )
}
