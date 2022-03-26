import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    welcomeText: {
        color: '#F178B6',
        fontSize: 36,
        marginBottom: 50
    },
    textInputContainer: {
        height: 49,
        width: 290,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#C3C3FB',
        marginVertical: 10,
        paddingHorizontal: 25,
        fontWeight: '400',
        backgroundColor: 'white',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    nextButton: {
        backgroundColor: '#F4B85D',
        paddingVertical: 10,
        paddingLeft: 25,
        paddingRight: 10,
        borderRadius: 50,
    },
    signInContainer: {
        backgroundColor: '#F4B85D',
        alignItems: 'center',
        justifyContent: 'center',
        height: 35,
        width: 120,
        borderRadius: 20,
        marginVertical: 15
    },
    signInText: {
        color: 'white'
    },
    signUpText: {
        fontSize: 15,
        color: '#7879F1',
        marginVertical: 5
    },
    statusBubble: {
        width: 35, 
        height: 35, 
        borderRadius: 100, 
        alignItems: 'center', 
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#A5A6F6',
        backgroundColor: 'white'
    },
    onBoardTitle: {
        fontWeight: 'bold',
        fontSize: 25,
        alignSelf: 'center'
    },
    onBoardSubtitle: {
        fontSize: 15,
        alignSelf: 'center',
        marginVertical: 15,
        textAlign: 'center',
        paddingHorizontal: 10
    },
    challengesContainer: {
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#D6F1F8',
        margin: 5,
        marginBottom: 10,
        paddingVertical: 8,
        paddingHorizontal: 15,
    },
    addButton: {
        width: 50, 
        height: 50, 
        borderRadius: 100, 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderWidth: 3,
        borderColor: '#C3C3FB',
        backgroundColor: 'white',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        marginBottom: 20
    }, 
    accountDetailsInfoText: {
        fontSize: 12,
        color: '#C3C3FB',
        marginLeft: 15
    },
    errorMessage: {
        color: 'red',
        fontSize: 12,
        fontWeight: '200',
        marginTop: -3
    }
});