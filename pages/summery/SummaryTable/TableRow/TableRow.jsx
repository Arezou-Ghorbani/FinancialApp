import React from "react";
import { View, Text } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import getCategoryIcon from "../../../../constants/Icons";
import styles from "./TableRowStyles";


const TableRow = ({category, amount, color}) => {

    const icon = getCategoryIcon(category)

    return(
        <View style={{...styles.container, borderColor: color}}>
            <Ionicons style={styles.icon} name={icon} size={30} />
            <View style={styles.textContainer}>
                <Text style={styles.category}>{category}</Text>
                <Text style={styles.amount}>$ {amount.toFixed(2)}</Text>
            </View>
        </View>
    )
}

export default TableRow