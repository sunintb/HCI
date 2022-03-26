import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    clickableContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'pink',
        padding: 20,
        borderRadius: 30,
        marginVertical: 10,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    }
});