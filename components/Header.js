import { Text, View } from 'react-native';
import { styles } from './Style';
import Ionicons from '@expo/vector-icons/Ionicons'

export default function Header(){
    return(
        <View style={styles.menu}>
            <Ionicons name="menu" size={26}></Ionicons>
            <Text style={styles.textoLogo}>Carteirinha</Text>
            <Ionicons name="notifications" size={26}></Ionicons>
        </View>
    );
};