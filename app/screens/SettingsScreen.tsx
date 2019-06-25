/**
 * SettingsScreen.tsx
 * Copyright Jan-Willem Spuij. All rights reserved.
 */
import { StyleSheet, Text, View } from "react-native";
import { NavigationStackScreenOptions, NavigationScreenProp } from 'react-navigation';
import ReactNativeSettingsPage, { 
    SectionRow, 
    SwitchRow,
	NavigateRow,
} from 'react-native-settings-page';
import React from "react";

/**
 * Interface with the properties for the settings screen.
 */
export interface ISettingsScreenProps {
    navigation: NavigationScreenProp<any,any>
  };

/**
 * Class with state for the settings screen.
 */
 class SettingsScreenState {
    taskKillerEnabled: boolean = true;
    telephoneMuteEnabled: boolean= true;
    brightnessIntentsEnabled: boolean = true;
}

/**
 * Component for the settings screen.
 */
export class SettingsScreen extends React.PureComponent<ISettingsScreenProps, SettingsScreenState> {
    static readonly navigationOptions: NavigationStackScreenOptions = {
        title: 'Settings',
      }

    /**
     * State for this component.
     */
    readonly state = new SettingsScreenState();

    /**
     * Handles task killer value change.
     */
    readonly taskKillerValueChange = (value: boolean) => {
        this.setState({
            taskKillerEnabled: value,
        });
    }

    /**
     * Handles Telephone mute value change.
     */
    readonly telephoneMuteValueChange = (value: boolean) => {
        this.setState({
            telephoneMuteEnabled: value,
        });
    }

    /**
     * Handles Brightness intents value change.
     */
    readonly brightnessIntentsValueChange = (value: boolean) => {
        this.setState({
            brightnessIntentsEnabled: value,
        });
    }

  render() {
    return (
        <ReactNativeSettingsPage>
        <SectionRow text='Task killer'>
            <SwitchRow 
                text='Enable the task killer' 
                iconName='hand-stop-o'
                _value={this.state.taskKillerEnabled}
                _onValueChange={this.taskKillerValueChange} />            
        </SectionRow>
        <SectionRow text='Navigation'>
            <SwitchRow 
                text='Enable telephone mute for navigation' 
                iconName='volume-off'
                _value={this.state.telephoneMuteEnabled}
                _onValueChange={this.telephoneMuteValueChange} />
            <NavigateRow
                text='Select navigation apps'
                iconName={'map'}
                onPressCallback={() => { this.props.navigation.navigate("NavigationApps") }} />
        </SectionRow>
        <SectionRow text='Backlight'>
            <SwitchRow 
                text='Enable intents for controlling backlight' 
                iconName='comments-o'
                _value={this.state.brightnessIntentsEnabled}
                _onValueChange={this.brightnessIntentsValueChange} />          
        </SectionRow>
    </ReactNativeSettingsPage>
    );
  }
}