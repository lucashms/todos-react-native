import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


const TodoCard = () => {


    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.cardText}>Oi</Text>
                <TouchableOpacity style={styles.cardCloseButton}>
                    <Text style={styles.cardCloseButtonText}>x</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        marginTop: 20
    },
    card: {
        padding: 15,
        borderRadius: 8,
        backgroundColor: '#606C38',
        color: '#FEFAE0',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cardText: {
        color: '#FEFAE0',
        fontFamily: 'OpenSans-Bold',
        fontSize: 18
    },
    cardCloseButton: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#FEFAE0',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardCloseButtonText: {
        color: '#606C38',
        fontSize: 18
    }
})

export default TodoCard;