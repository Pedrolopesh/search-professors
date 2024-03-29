import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8257E5',
        justifyContent: 'center',
        padding: 40
    },

    content: {
        flex: 1,
        justifyContent: 'center',
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        fontSize: 32,
        lineHeight: 37,
        maxWidth: 210
    },
    description: {
        marginTop: 24,
        color: '#d4c2ff',
        fontSize: 16,
        lineHeight: 22,
        fontFamily: 'Poppins_400Regular',
        maxWidth: 240
    },

    okButton: {
        marginVertical: 40,
        backgroundColor: '#fff',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginTop: 40,
    },

    okButtonText: {
        color: '#000',
        fontSize: 16,
        fontFamily: 'Archivo_700Bold'
    }
})

export default styles