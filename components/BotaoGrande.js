import { Text, View } from 'react-native';
import { styles } from './Style';
import Ionicons from '@expo/vector-icons/Ionicons'


export default function BotaoGrande({title, type}){
    return(
        <View style={styles.botaoGrande}>
            <Ionicons name={type} color="white" size={26}></Ionicons>
            <Text style={styles.texto}>{title}</Text>   
        </View>
    );
};