import React from 'react';
import {
    StyleSheet,
    View,
    StatusBar,
    TextInput,
    TouchableOpacity,
    Text,
} from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'black'} />
            <View style={styles.header}>
                <View style={styles.headerForm}>
                    <TextInput style={styles.headerTextInput} />
                    <TouchableOpacity style={styles.headerButton}>
                        <Text style={styles.headerButtonText}>Postar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
    header: {
        backgroundColor: '#606c38',
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerForm: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 350,
    },
    headerTextInput: {
        height: 50,
        backgroundColor: '#fefae0',
        flex: 2,
        fontSize: 24,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    headerButton: {
        height: 50,
        backgroundColor: '#283618',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,

    },
    headerButtonText: {
        color: '#fefae0',
        fontSize: 24,
        fontFamily: 'OpenSans-Regular',
    },
});

export default Header;