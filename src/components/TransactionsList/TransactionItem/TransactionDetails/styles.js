import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 20,
        flex: 1,
    },
    header: {
        borderBottomWidth: 2,
        paddingBottom: 10,
        marginBottom: 10,
        width: '100%'
    },
    text: {
        title: {
            fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto',
            fontWeight: '700',
            fontSize: 24,
        },
        subtitle: {
            fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto',
            fontWeight: '300',
            fontSize: 16,
            color: 'gray'
        },
        cost: {
            fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto',
            fontWeight: '500',
            fontSize: 32,
        }
    },
});