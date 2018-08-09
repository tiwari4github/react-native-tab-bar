import React ,{Component} from 'react';
import {AsyncStorage, Image, StyleSheet,View} from 'react-native';
import {Route, Router, Scene} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import ScreenOne from "./src/ScreenOne";
import ScreenTwo from "./src/ScreenTwo";
import ScreenThree from "./src/ScreenThree";
import ScreenFour from "./src/ScreenFour";


const TabIcon = ({focused, title}) => {
    switch (title) {
        case "Instagram":
            color = focused ? 'black' : 'grey';
            return (
                <Icon name="ios-home" size={30} color={color} />
            );
        case "tab2":
            color = focused ? 'black' : 'grey';
            return (
                <Icon name="ios-search" size={30} color={color} />
            );
        case "add":
            color = focused ? 'black' : 'grey';
            return (
                <Icon name="ios-heart" size={30}color={color} />
            );
        case "tab4":
            color = focused ? 'black' : 'grey';
            return (
                <Icon name="md-person" size={30} color={color}/>
            );
    }

};




export  default class  RouterEntryPoint extends Component{

    render() {

        return (

            <Router>
                <Scene key="root" hideNavBar>


                    <Scene key="main" tabs={true} initial swipeEnabled={false} tabBarPosition={'bottom'}
                           tabBarStyle={styles.tabBar} activeBackgroundColor={'yellow'}
                           showLabel={false} default="tab1">
                        <Scene
                            key="tab1"
                            title="Instagram"
                            icon={TabIcon}
                            hideNavBar={true}
                            initial
                            component={ScreenOne}/>
                        <Scene
                            key="tab2"
                            title="tab2"
                            icon={TabIcon}
                            hideNavBar={true}
                            component={ScreenTwo}/>
                        <Scene
                            key="post"
                            title="add"
                            icon={TabIcon}
                            hideNavBar={true}
                            component={ScreenThree}/>


                        <Scene
                            key="tab4"
                            title="tab4"
                            icon={TabIcon}
                            hideNavBar={true}
                            component={ScreenFour}/>
                    </Scene>


                </Scene>

            </Router>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabBar: {

        backgroundColor: 'white',
    },
    navigationBarStyle: {
        backgroundColor: 'red',
    },
    navigationBarTitleStyle: {
        color: 'white',
    },
    icon: {

        width: 18,
        height: 22,
        padding: 5
    },
});

