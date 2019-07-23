import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon1 from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/Feather";
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation';

const POLO_BLUE_COLOR = 'rgb(51,60,87)';
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';
const imgData = [
    { id: 1, imgSource: require('../assets/pic1.jpg') },
    { id: 2, imgSource: require('../assets/pic2.jpg') },
    { id: 3, imgSource: require('../assets/pic3.jpg') },
    { id: 4, imgSource: require('../assets/pic4.jpg') },
    { id: 5, imgSource: require('../assets/pic4.jpg') },
    { id: 6, imgSource: require('../assets/pic3.jpg') },
    { id: 7, imgSource: require('../assets/pic2.jpg') },
    { id: 8, imgSource: require('../assets/pic1.jpg') },
];
const centerImgData = Math.floor(imgData.length / 2);

const onPressFollowButton = () => {
    Alert.alert('Followed!');
}
const onPressSendMessButton = () => {
    Alert.alert('Message sended!');
}
class HomeScreen extends React.Component {
    render() {
        var { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <View style={styles.HeaderBar}>
                    <TouchableOpacity style={styles.HeaderBarIcon}>
                        <Icon1
                            name="ios-arrow-back"
                            color="#a8a8a8"
                            size={35}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.HeaderBarIcon}>
                        <Icon
                            name="photo-filter"
                            color="#a8a8a8"
                            size={35}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.HeaderGroup}>
                    <View style={styles.AvatarCol}>
                        <Image style={styles.Avatar}
                            source={require('../assets/avatar1.jpg')}
                        />
                    </View>
                    <View style={styles.InfoCol}>
                        <View style={styles.TextGroup}>
                            <Text style={styles.NameText}>
                                Ngọc Thiện
                  </Text>
                            <Text style={styles.JobText}>
                                Developer
                  </Text>
                        </View>
                        <View style={styles.ButtonGroup}>
                            <TouchableOpacity onPress={onPressFollowButton} style={styles.FollowButton}>
                                <Text style={styles.FollowText}>Follow</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onPressSendMessButton} style={styles.SendMessageButton}>
                                <Icon
                                    name="send"
                                    color="white"
                                    size={25}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.CountGroup}>
                    <View style={styles.CountPhoto}>
                        <Text style={styles.Amount}>
                            210
                </Text>
                        <Text style={styles.CountText}>
                            Photos
                </Text>
                    </View>
                    <View style={styles.CountFollower}>
                        <Text style={styles.Amount}>
                            15k
                </Text>
                        <Text style={styles.CountText}>
                            Followers
                </Text>
                    </View>
                    <View style={styles.CountFollowing}>
                        <Text style={styles.Amount}>
                            605
                </Text>
                        <Text style={styles.CountText}>
                            Following
                </Text>
                    </View>
                </View>
                <ScrollView style={styles.ScrollImages}>
                    <View style={styles.ImageGroup}>
                        <View style={styles.ImgLeftCol}>
                            {imgData.slice(0, centerImgData).map(item => {
                                return <TouchableOpacity
                                    onPress={() => navigate("pictureScreen", { source: item.imgSource })
                                    }>
                                    <Image source={item.imgSource} style={styles.image}></Image>
                                </TouchableOpacity>
                            })}
                        </View>
                        <View style={styles.ImgRightCol}>
                            {imgData.slice(centerImgData).map(item => {
                                return <TouchableOpacity
                                    onPress={() => navigate("pictureScreen", { source: item.imgSource })
                                    }>
                                    <Image source={item.imgSource} style={styles.image}></Image>
                                </TouchableOpacity>
                            })}
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
class Screen2 extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 100 }}>User Screen!</Text>
            </View>
        );
    }
}
class Screen3 extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 100 }}>Add Images Screen!</Text>
            </View>
        );
    }
}
const getTabBarIcon = (navigation, focused, tintColor) => {
    const { routeName } = navigation.state;
    if (routeName === "Home") {
        iconName = 'home';
    }
    else if (routeName === "Screen2") {
        iconName = 'user';
    }
    else if (routeName === "Screen3") {
        iconName = 'plus-circle';
    }
    return <Icon2 name={iconName} size={35} color={tintColor} />;
};

const AppTabs = createBottomTabNavigator(
    {
        Home: HomeScreen,
        Screen3: Screen3,
        Screen2: Screen2,
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                return getTabBarIcon(navigation, focused, tintColor);
            },
            tabBarLabel: () => { },
            tabBarOptions: {
                activeTintColor: FOLLOW_COLOR,
                style: {
                    borderTopColor: 'transparent',
                },
            },
        })
    },
);

const App = createAppContainer(AppTabs);
export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-end",
        fontFamily: 'sans-serif-thin',
    },
    HeaderBar: {
        flex: 0.17,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginLeft: 20,
        marginRight: 20,
    },
    HeaderBarButton: {
        height: 40,
        width: 60,
        alignItems: 'center'
    },
    HeaderGroup: {
        flex: 0.25,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    AvatarCol: {
        flex: 0.4,
        justifyContent: "center",
        alignItems: "center"
    },
    Avatar: {
        height: 130,
        width: 130,
        borderRadius: 65
    },
    InfoCol: {
        flex: 0.5,
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginLeft: 10
    },
    TextGroup: {
    },
    NameText: {
        fontSize: 23,
        fontWeight: "700",
        color: 'black',
    },
    JobText: {
        fontSize: 15,
        fontWeight: "400",
        color: '#bdbdbd'
    },
    ButtonGroup: {
        flexDirection: "row",
    },
    FollowButton: {
        backgroundColor: FOLLOW_COLOR,
        height: 30,
        width: 120,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    FollowText: {
        fontSize: 13,
        color: 'white'
    },
    SendMessageButton: {
        marginLeft: 5,
        backgroundColor: SEND_MESSAGE_COLOR,
        height: 30,
        width: 60,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    CountGroup: {
        flex: 0.15,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
        alignItems: "center",
    },
    Amount: {
        fontSize: 20,
        fontWeight: '400',
        textAlign: "center",
    },
    CountText: {
        fontSize: 13,
        fontWeight: '400',
        color: '#bdbdbd',
        textAlign: "center",
    },
    ScrollImages: {
        flex: 0.35,
    },
    ImageGroup: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    ImgLeftCol: {
        flexDirection: "column",
    },
    ImgRightCol: {
        flexDirection: "column",
    },
    image: {
        marginTop: 20,
        marginBottom: 10,
        height: 180,
        width: 180,
        borderRadius: 30
    },
});
