import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import DetailRow from "./DetailRow/DetailRow";
import styles from "./TransactionDetailStyles";


const TransactionDetail = () => {

    const route = useRoute()
    const transaction = route.params.data

    const date = transaction.date.split("T")[0]
    const time = transaction.date.split("T")[1].split(".")[0]

    return(
        <View style={styles.container}>
            <View style={styles.receipt}>
                <DetailRow label={"Type"} value={transaction.desc} />
                <DetailRow label={"Payment Type"} value={transaction.paymentMethod} />
                <DetailRow label={"Transaction Date"} value={`  ${time}   ${date}`} />

                <DetailRow label={"Category"} value={transaction.category} />
                <DetailRow label={"Amount"} value={`$ ${transaction.amount.toFixed(2)}`} />
            
        <DetailRow label={"location"} value={transaction.location} />
        <DetailRow label={"transactionId"} value={transaction.transactionId} />
        <DetailRow label={"currency"} value={transaction.currency} />
        <DetailRow label={"notes"} value={transaction.notes} />
        <DetailRow label={"status"} value={transaction.status} />

            </View>
        </View>
        
    )
}

export default TransactionDetail