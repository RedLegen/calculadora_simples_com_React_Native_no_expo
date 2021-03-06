// importação do StyleSheet do react native para ser possivel fazer a estilização dos componentes

import { StyleSheet } from 'react-native';

// variavel que é usada para fazer a estilização dos componentes

const stylesButton = StyleSheet.create({
    button: {
        width: 200,
        height: 50,
        
        borderRadius: 8,

        marginTop: 20,

        padding: 16
    },

    buttonText: {  
        color: '#F5F5F5',
        fontWeight: 'bold',
        fontSize: 12
    },

    button1: {
        backgroundColor: '#00cc00',
    },

    button2: {
        backgroundColor: '#b7b814',
    },

    button3: {
        backgroundColor: '#FFA500',
    },

    button4: {
        backgroundColor: '#FF0000',
    },

    buttomSomar: {
        backgroundColor: '#6fbbd3',
    },

    buttomZerar: {
        backgroundColor:  '#e05a00',
        marginBottom: 10,
    },
});

// exportar o arquivo para ser usado no arquivo raiz (App.tsx)

export default stylesButton;