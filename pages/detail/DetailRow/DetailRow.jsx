import React from "react";
import { View, Text } from "react-native";
import styles from "./DetailRowStyles";


const DetailRow = ({label, value}) => {
    return(
        <View>
        <View style={styles.container}>
            <Text style={styles.label}>
                {label}
            </Text>
            <Text style={styles.value}>
                {value}
            </Text>
            </View>
            <View style={styles.divider}/>

        </View>

    )
}
export default DetailRow