import { View, Text, TouchableHighlight } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from "./TransactionCardStyles";
import providedIcons from "../../../constants/Icons";
import { useNavigation } from "@react-navigation/native";


const TransactionCard = ({data}) => {

    let recordIcon = providedIcons(data.category)

    const navigation = useNavigation()

    const onTap = () => {
        navigation.navigate(" Detail Page", {data})
    }

    return(
        <TouchableHighlight 
        style={styles.wrapper}
        underlayColor={"lightblue"}
        onPress={onTap}
        >
            <>
            <View style={styles.image}>
                <Ionicons 
                    name={recordIcon}
                    size={24}
                    color={'green'}
                    />
            </View>
            <View style={styles.container}>
                <View style={styles.mainRow}>
                    <Text style={styles.title}>
                        {data.desc}
                    </Text>
                    <Text style={{...styles.amount, color: data.category == "Income" ? "green" : "red"}}>
                        $ {data.amount}
                    </Text>
                </View>
                <View style={styles.detailsRow}>
                    <Text style={styles.date}>
                        {data.date.split("T")[0]}
                    </Text>
                    <Text style={styles.method}>
                        {data.paymentMethod}
                    </Text>
                </View>
            </View>
            </>
        </TouchableHighlight>
    )
}
export default TransactionCard