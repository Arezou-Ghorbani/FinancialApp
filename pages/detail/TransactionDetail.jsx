import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import DetailItems from "./Items/DetailRow";
import styles from "./TransactionDetailStyles";


const TransactionDetail = () => {

    const route = useRoute()
    const transaction = route.params.data

    const date = transaction.date.split("T")[0]
    const time = transaction.date.split("T")[1].split(".")[0]

    return(
        <View style={styles.container}>
            <View style={styles.receipt}>
                <DetailItems label={"Type"} value={transaction.desc} />
                <DetailItems label={"Payment Type"} value={transaction.paymentMethod} />
                <DetailItems label={"Transaction Date"} value={`  ${time}   ${date}`} />

                <DetailItems label={"Category"} value={transaction.category} />
                <DetailItems label={"Amount"} value={`$ ${transaction.amount.toFixed(2)}`} />
            
        <DetailItems label={"location"} value={transaction.location} />
        <DetailItems label={"transactionId"} value={transaction.transactionId} />
        <DetailItems label={"currency"} value={transaction.currency} />
        <DetailItems label={"notes"} value={transaction.notes} />
        <DetailItems label={"status"} value={transaction.status} />

            </View>
        </View>
        
    )
}

export default TransactionDetail