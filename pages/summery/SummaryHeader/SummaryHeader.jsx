import React from 'react'
import { Text, View } from 'react-native'
import styles from './SummaryHeaderStyles'

const SummaryHeader = ({incomeAmount, outcomeAmount}) => {
    return(
        <View style={styles.headerContainer}>
            <Text style={styles.title}>Last month</Text>
            <View style={styles.cardsRow}>
        
            </View>
        </View>
    )
}
export default SummaryHeader