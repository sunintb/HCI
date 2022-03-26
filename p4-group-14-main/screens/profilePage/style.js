import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    signOutButton: {
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#E18888',
        width: 120,
        height: 35,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
    profileName: {
        alignSelf: 'flex-start',
        fontSize: 30,
        fontWeight: '700',
        marginLeft: 30,
        marginBottom: 10
    },
    username: {
        alignSelf: 'flex-start',
        fontSize: 14,
        marginLeft: 30
    },
    divider: {
        width: '100%',
        height: 1,
        backgroundColor: 'rgba(0,0,0,0.2)',
        marginVertical: 15
    },
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