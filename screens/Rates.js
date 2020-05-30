import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RatesCard } from "../components";
import { TouchableOpacity } from "react-native-gesture-handler";

const Rates = ({ navigation }) => (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
            <View styles={styles.header}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Image style={styles.header} source={require('../assets/drawer.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Exchange rates of the day</Text>
            </View>
            <RatesCard image={require('../assets/bpd.png')} buyValue={58} sellValue={60} />

        </View>
    </SafeAreaView>
)
export default Rates;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        backgroundColor: '#F2F2F2'
    },
    header: {
        marginTop: 46,
        justifyContent: 'center',
    },
    drawerButton: {
    },
    titleContainer: {
        marginTop: 110,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },


});