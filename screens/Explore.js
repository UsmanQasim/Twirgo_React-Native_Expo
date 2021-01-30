import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native'
import { Ionicons, AntDesign } from '@expo/vector-icons';

export default class Explore extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <View style={Styles.header}>
                    <View style={Styles.headerContent}>
                        <Ionicons name="chevron-back-outline" size={30} color="#27ab67" />
                        <Text style={{ fontSize: 28 }}>Explore</Text>
                        <AntDesign name="setting" size={30} color="white" />
                    </View>
                </View>

                <View style={Styles.body}>
                    <ScrollView>
                        <View style={Styles.bodyp1}>
                            <Text style={{ fontSize: 18 }}>Featured Places</Text>
                            <Ionicons name="ios-chevron-forward" size={28} color="#27ab67" />
                        </View>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            <View style={Styles.scrollTop}>
                                <View style={Styles.bodyBox1}>
                                    <Image source={require('../assets/backgroundimage.jpg')} style={{ width: 175, height: 150 }}></Image>
                                    <Text style={{ fontSize: 16, width: 175, paddingLeft: 2 }}>Virgin Active C.so Como</Text>
                                    <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 3, alignItems: 'center' }}>
                                        <AntDesign name="star" size={15} color="gold" />
                                        <Text> 4.5 (418)</Text>
                                    </View>
                                </View>

                                <View style={Styles.bodyBox1}>
                                    <Image source={require('../assets/backgroundimage.jpg')} style={{ width: 175, height: 150 }}></Image>
                                    <Text style={{ fontSize: 16 }}>Virgin Active C.so Como</Text>
                                    <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 3, alignItems: 'center' }}>
                                        <AntDesign name="star" size={15} color="gold" />
                                        <Text> 4.5 (418)</Text>
                                    </View>

                                </View>
                                <View style={Styles.bodyBox1}>
                                    <Image source={require('../assets/backgroundimage.jpg')} style={{ width: 175, height: 150 }}></Image>
                                    <Text style={{ fontSize: 16 }}>Virgin Active C.so Como</Text>
                                    <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 3, alignItems: 'center' }}>
                                        <AntDesign name="star" size={15} color="gold" style={{}} />
                                        <Text> 4.5 (418)</Text>
                                    </View>
                                </View>

                                <View style={Styles.bodyBox1}>
                                    <Image source={require('../assets/backgroundimage.jpg')} style={{ width: 175, height: 150 }}></Image>
                                    <Text style={{ fontSize: 16 }}>Virgin Active C.so Como</Text>
                                    <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 3, alignItems: 'center' }}>
                                        <AntDesign name="star" size={15} color="gold" style={{}} />
                                        <Text> 4.5 (418)</Text>
                                    </View>
                                </View>

                                <View style={Styles.bodyBox1}>
                                    <Image source={require('../assets/backgroundimage.jpg')} style={{ width: 175, height: 150 }}></Image>
                                    <Text style={{ fontSize: 16 }}>Virgin Active C.so Como</Text>
                                    <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 3, alignItems: 'center' }}>
                                        <AntDesign name="star" size={15} color="gold" style={{}} />
                                        <Text> 4.5 (418)</Text>
                                    </View>
                                </View>

                                <View style={Styles.bodyBox1}>
                                    <Image source={require('../assets/backgroundimage.jpg')} style={{ width: 175, height: 150 }}></Image>
                                    <Text style={{ fontSize: 16 }}>Virgin Active C.so Como</Text>
                                    <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 3, alignItems: 'center' }}>
                                        <AntDesign name="star" size={15} color="gold" style={{}} />
                                        <Text> 4.5 (418)</Text>
                                    </View>
                                </View>

                            </View>
                        </ScrollView>
                        <View style={Styles.sliderImage}>
                            <Text>Slider here</Text>
                        </View>

                        {/*SportsSection*/}

                        <View style={Styles.bodyp1}>
                            <Text style={{ fontSize: 18 }}>Featured Places</Text>
                            <Ionicons name="ios-chevron-forward" size={28} color="#27ab67" />
                        </View>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            <View style={Styles.scrollTop}>
                                <View style={Styles.bodyBox1}>
                                    <Image source={require('../assets/backgroundimage.jpg')} style={{ width: 175, height: 150 }}></Image>
                                    <Text style={{ fontSize: 16, width: 175, paddingLeft: 2 }}>Virgin Active C.so Como</Text>
                                    <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 3, alignItems: 'center' }}>
                                        <AntDesign name="star" size={15} color="gold" />
                                        <Text> 4.5 (418)</Text>
                                    </View>
                                </View>

                                <View style={Styles.bodyBox1}>
                                    <Image source={require('../assets/backgroundimage.jpg')} style={{ width: 175, height: 150 }}></Image>
                                    <Text style={{ fontSize: 16 }}>Virgin Active C.so Como</Text>
                                    <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 3, alignItems: 'center' }}>
                                        <AntDesign name="star" size={15} color="gold" />
                                        <Text> 4.5 (418)</Text>
                                    </View>

                                </View>
                                <View style={Styles.bodyBox1}>
                                    <Image source={require('../assets/backgroundimage.jpg')} style={{ width: 175, height: 150 }}></Image>
                                    <Text style={{ fontSize: 16 }}>Virgin Active C.so Como</Text>
                                    <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 3, alignItems: 'center' }}>
                                        <AntDesign name="star" size={15} color="gold" style={{}} />
                                        <Text> 4.5 (418)</Text>
                                    </View>
                                </View>

                                <View style={Styles.bodyBox1}>
                                    <Image source={require('../assets/backgroundimage.jpg')} style={{ width: 175, height: 150 }}></Image>
                                    <Text style={{ fontSize: 16 }}>Virgin Active C.so Como</Text>
                                    <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 3, alignItems: 'center' }}>
                                        <AntDesign name="star" size={15} color="gold" style={{}} />
                                        <Text> 4.5 (418)</Text>
                                    </View>
                                </View>

                                <View style={Styles.bodyBox1}>
                                    <Image source={require('../assets/backgroundimage.jpg')} style={{ width: 175, height: 150 }}></Image>
                                    <Text style={{ fontSize: 16 }}>Virgin Active C.so Como</Text>
                                    <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 3, alignItems: 'center' }}>
                                        <AntDesign name="star" size={15} color="gold" style={{}} />
                                        <Text> 4.5 (418)</Text>
                                    </View>
                                </View>

                                <View style={Styles.bodyBox1}>
                                    <Image source={require('../assets/backgroundimage.jpg')} style={{ width: 175, height: 150 }}></Image>
                                    <Text style={{ fontSize: 16 }}>Virgin Active C.so Como</Text>
                                    <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 3, alignItems: 'center' }}>
                                        <AntDesign name="star" size={15} color="gold" style={{}} />
                                        <Text> 4.5 (418)</Text>
                                    </View>
                                </View>

                            </View>
                        </ScrollView>
                        {/*Activity*/}

                        <View style={Styles.bodyp1}>
                            <Text style={{ fontSize: 18 }}>Featured Places</Text>
                            <Ionicons name="ios-chevron-forward" size={28} color="#27ab67" />
                        </View>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            <View style={Styles.scrollTop}>
                                <View style={Styles.bodyBox1}>
                                    <Image source={require('../assets/backgroundimage.jpg')} style={{ width: 175, height: 150 }}></Image>
                                    <Text style={{ fontSize: 16, width: 175, paddingLeft: 2 }}>Virgin Active C.so Como</Text>
                                    <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 3, alignItems: 'center' }}>
                                        <AntDesign name="star" size={15} color="gold" />
                                        <Text> 4.5 (418)</Text>
                                    </View>
                                </View>

                                <View style={Styles.bodyBox1}>
                                    <Image source={require('../assets/backgroundimage.jpg')} style={{ width: 175, height: 150 }}></Image>
                                    <Text style={{ fontSize: 16 }}>Virgin Active C.so Como</Text>
                                    <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 3, alignItems: 'center' }}>
                                        <AntDesign name="star" size={15} color="gold" />
                                        <Text> 4.5 (418)</Text>
                                    </View>

                                </View>
                                <View style={Styles.bodyBox1}>
                                    <Image source={require('../assets/backgroundimage.jpg')} style={{ width: 175, height: 150 }}></Image>
                                    <Text style={{ fontSize: 16 }}>Virgin Active C.so Como</Text>
                                    <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 3, alignItems: 'center' }}>
                                        <AntDesign name="star" size={15} color="gold" style={{}} />
                                        <Text> 4.5 (418)</Text>
                                    </View>
                                </View>

                                <View style={Styles.bodyBox1}>
                                    <Image source={require('../assets/backgroundimage.jpg')} style={{ width: 175, height: 150 }}></Image>
                                    <Text style={{ fontSize: 16 }}>Virgin Active C.so Como</Text>
                                    <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 3, alignItems: 'center' }}>
                                        <AntDesign name="star" size={15} color="gold" style={{}} />
                                        <Text> 4.5 (418)</Text>
                                    </View>
                                </View>

                                <View style={Styles.bodyBox1}>
                                    <Image source={require('../assets/backgroundimage.jpg')} style={{ width: 175, height: 150 }}></Image>
                                    <Text style={{ fontSize: 16 }}>Virgin Active C.so Como</Text>
                                    <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 3, alignItems: 'center' }}>
                                        <AntDesign name="star" size={15} color="gold" style={{}} />
                                        <Text> 4.5 (418)</Text>
                                    </View>
                                </View>

                                <View style={Styles.bodyBox1}>
                                    <Image source={require('../assets/backgroundimage.jpg')} style={{ width: 175, height: 150 }}></Image>
                                    <Text style={{ fontSize: 16 }}>Virgin Active C.so Como</Text>
                                    <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 3, alignItems: 'center' }}>
                                        <AntDesign name="star" size={15} color="gold" style={{}} />
                                        <Text> 4.5 (418)</Text>
                                    </View>
                                </View>

                            </View>
                        </ScrollView>
                    </ScrollView>
                </View>

            </View >
        )
    }
}


const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gold',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    headerContent: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        //backgroundColor: 'red',
        //alignItems: 'center',
    },

    body: {
        flex: 4,
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        justifyContent: 'space-between',
    },
    bodyp1: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        marginLeft: 5,
        marginBottom: 5,
    },
    scrollTop: {
        flex: 3,
        flexDirection: 'row',
    },
    bodyBox1: {
        height: 200,
        backgroundColor: '#d0d7de',
        marginLeft: 8,
        marginRight: 8,
    },
    sliderImage: {
        flex: 6,
        marginTop: 5,
        backgroundColor: '#d0d7de',
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },

});