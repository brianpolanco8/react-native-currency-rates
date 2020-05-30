import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    RefreshControl
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RatesCard } from "../components";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import { CurrencyService } from '../services'


const Rates = ({ navigation }) => {
    const [rates, setRates] = useState();
    const [refreshing, setRefreshing] = React.useState(false);
    const getRates = async () => {
        const rates = CurrencyService.getRates()
            .then(({ data }) => {
                setRefreshing(true)
                setRates(data.data.getUsdRates)
                setRefreshing(false)
            })
            .catch(error => {
                console.log('error', error)
            })
        return rates;
    }
    useEffect(() => {
        getRates();
    }, [])
    return (
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
                <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => getRates()} />}>
                    {rates && (
                        <RatesCard image={require('../assets/bpd.png')} buyValue={rates.buy.popularDollarBuy} sellValue={rates.sell.popularDollarSell} />
                    )}
                </ScrollView>


            </View>
        </SafeAreaView>
    )
}
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