import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Landing = ({ navigation }) => {
    return (
        (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('../assets/stocks.png')}>
                    </Image>
                    <View style={styles.informationContainer}>
                        <Text style={styles.landingTitle}>Find today exchange rates</Text>

                        <TouchableOpacity style={styles.landingButton} onPress={() => navigation.navigate('Rates')}>
                            <Text style={styles.textButton} >Let's get started</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View >
        )
    )
}
export default Landing;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20
    },
    imageContainer: {
        flex: 1,
        // justifyContent: 'center',
        marginTop: 126,
        alignItems: 'center',
    },
    image: {
        width: 364,
        height: 350,
        // backgroundColor: 'red'
    },
    informationContainer: {
        // alignItems: 'center',
        alignItems: 'flex-start'
    },
    landingTitle: {
        fontSize: 35,
        width: 250,
        // backgroundColor: 'red'
    },
    landingButton: {
        marginTop: 80,
        backgroundColor: '#0D1B2A',
        width: 294,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textButton: {
        color: 'white',
        fontSize: 18
    }
});