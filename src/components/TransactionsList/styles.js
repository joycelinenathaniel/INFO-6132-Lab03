import { StyleSheet,  Platform } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        paddingBottom: 20,
    },
    titleContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: 16,
    },
    title: {
        fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto',
        fontWeight: '700',
        fontSize: 32,
    },
});