import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import TodoCard from '../TodoCard';

const Content = () => {

    return (
        <ScrollView style={styles.container}>
            <TodoCard />
        </ScrollView>
    )

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fefae0',
    }
})

export default Content; 