import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './Style';
import Ionicons from '@expo/vector-icons/Ionicons'


export default function BotaoGrande({title, type, style}){
    return(
        <TouchableOpacity activeOpacity={0.5}>
            <View style={[styles.botaoGrande, style]}>
                <Ionicons name={type} color="white" size={35}></Ionicons>
                <Text style={styles.texto}>{title}</Text>   
            </View>
        </TouchableOpacity>
    );
};