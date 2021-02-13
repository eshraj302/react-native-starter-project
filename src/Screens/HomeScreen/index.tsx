import React, { Component } from 'react';
import { ScreenContainer, StyledText } from '../../Components/Atoms';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParamList } from '../../Navigation/StackNavigator';

type ProfileScreenNavigationProp = StackNavigationProp<
    HomeStackParamList,
    "Home"
>;

type Props = {
    navigation: ProfileScreenNavigationProp;
};


class HomeScreen extends Component<Props> {
    render() {
        return (
            <ScreenContainer center>
                <StyledText>
                    Home Screen
                </StyledText>
            </ScreenContainer>
        )
    }
};

export default HomeScreen;
