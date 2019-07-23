import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon1 from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/Feather";
import Icon3 from "react-native-vector-icons/Entypo";
const POLO_BLUE_COLOR = 'rgb(51,60,87)';
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';

export default class PictureScreen extends React.Component {
    render() {
        var { params } = this.props.navigation.state;
        var { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.HeaderGroup}>
                    <ImageBackground source={params.source}
                        style={{ width: '100%', height: '100%', opacity: 0.85, borderRadius: 45 }}
                        imageStyle={{ borderBottomLeftRadius: 45, borderBottomRightRadius: 45 }}
                    >
                        <View style={styles.Headerbar}>
                            <TouchableOpacity style={styles.HeaderBarIcon}>
                                <Icon1
                                    name="ios-arrow-back"
                                    color="black"
                                    size={35}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.HeaderBarIcon}>
                                <Icon
                                    name="photo-filter"
                                    color="black"
                                    size={35}
                                />
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.ContentGroup}>
                    <View style={styles.NameGroup}>
                        <View style={styles.TextGroup}>
                            <Text style={{ fontSize: 35, fontWeight: '700' }}>Something Cool</Text>
                            <Text style={{ fontSize: 18, fontWeight: '400', color: '#bdbdbd' }}>
                                <Icon3
                                    name="location-pin"
                                    color="#bdbdbd"
                                    size={18}
                                />
                                Location
                                </Text>
                        </View>
                        <View style={styles.ButtonGroup}>
                            <TouchableOpacity style={styles.downloadButton}>
                                <Icon2
                                    name="download-cloud"
                                    color="white"
                                    size={30}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.Description}>
                        <Text style={styles.DescriptionText}> Em đã cố gắng google dịch mấy cái dòng mẫu của</Text>
                        <Text style={styles.DescriptionText}> anh Siêu nhưng bó tay.</Text>
                    </View>
                    <View style={styles.Tag}>
                        <TouchableOpacity style={styles.touchTag}>
                            <Text style={styles.textTag}>#photograhpy</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchTag} >
                            <Text style={styles.textTag}>#nothing</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.customIcon}>
                        <View style={styles.LeftIcon}>
                            <Icon3
                                name="heart"
                                color="#bdbdbd"
                                size={30}
                                marginRight={8}
                            />
                            <Icon3
                                name="chat"
                                color="#bdbdbd"
                                size={30}
                            />
                        </View>
                        <View style={styles.LeftIcon}>
                            <Icon1
                                name="md-bookmark"
                                color="#bdbdbd"
                                size={30}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.FooterBar}>
                    <TouchableOpacity onPress={() => navigate("Home")} style={styles.HeaderBarIcon}>
                        <Icon2
                            name="home"
                            color="black"
                            size={35}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.HeaderBarIcon}>
                        <Icon2
                            name="plus-circle"
                            color="black"
                            size={35}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.HeaderBarIcon}>
                        <Icon2
                            name="user"
                            color="black"
                            size={35}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        fontFamily: 'sans-serif-thin',
    },
    HeaderGroup: {
        flex: 0.45,
        borderBottomEndRadius: 100,
    },
    Headerbar: {
        marginTop: 35,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    HeaderBarButton: {
        height: 40,
        width: 60,
        alignItems: 'center'
    },
    ContentGroup: {
        flex: 0.48,
        flexDirection: 'column',
    },
    NameGroup: {
        flex: 0.4,
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: 'center',
    },
    downloadButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        width: 60,
        backgroundColor: FOLLOW_COLOR,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4.65,

        elevation: 8,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 20,
    },
    Description: {
        flex: 0.2,
        marginLeft: 30,
        marginRight: 30,
    },
    DescriptionText: {
        fontSize: 15
    },
    Tag: {
        flex: 0.15,
        flexDirection: 'row',
        marginLeft: 30,
    },
    touchTag: { backgroundColor: '#f6f6f6', height: 24, borderRadius: 8, justifyContent: "space-around", marginRight: 10 },
    textTag: {
        fontSize: 18,
        color: '#bdbdbd',
    },
    customIcon: {
        flex: 0.25,
        flexDirection:'row',
        justifyContent:"space-between",
        marginLeft:30,
        marginRight:30,
    },
    LeftIcon:{
        flexDirection:'row',
    },
    FooterBar: {
        flex: 0.07,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    }
});