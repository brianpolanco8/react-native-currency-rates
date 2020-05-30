import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";


const RatesCard = ({ image, buyValue, sellValue, }) => {

    return (
        <View style={styles.cardsContainer}>
            <Image style={styles.cardImage} source={image} />
            <View>
                <Text style={styles.buyText}>Buy</Text>
                <Text style={styles.buyText}>RD${buyValue}</Text>
            </View>
            <View>
                <Text style={styles.sellText}>Sell</Text>
                <Text style={styles.sellText}>RD${sellValue}</Text>
            </View>
        </View>
    )
}
export default RatesCard;

const styles = StyleSheet.create({
    cardsContainer: {
        marginTop: 63,
        width: 357,
        height: 100,
        shadowOffset: { height: 10, width: 0 },
        paddingBottom: 5,
        borderRadius: 10,
        shadowColor: '#8A959E',
        shadowOpacity: 0.6,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },
    cardImage: {
        height: 35,
        width: 132,
    },
    cards: {
        flexDirection: 'row',
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
        // space
    },
    buyText: {
        fontSize: 16,
        color: '#80A1D4'
    },
    sellText: {
        fontSize: 16,
        color: '#2C1320'
    }
});