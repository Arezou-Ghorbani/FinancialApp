import { StyleSheet } from "react-native";

export default DetailRowStyles = StyleSheet.create({
    container:{ 
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginHorizontal: 'auto',
        padding: 10,

    },
    divider: {
        height: 1, // Height of the line
        backgroundColor: '#ccc', // Color of the line
   
    },
    label: {
        fontWeight: 'bold',
    },
    value: {
color:'green'
    },

})