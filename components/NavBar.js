import { Text, View } from 'react-native';
import { styles } from './Style';
import Ionicons from '@expo/vector-icons/Ionicons'

export default function NavBar(){
    return(
        <View style={styles.navBar}>
            <View style={styles.navItem}>
                <Ionicons name="home" size={26} color="#5c5c5c"></Ionicons>
                <Text style={styles.textoNav}>Inicio</Text>
            </View>
            <View style={styles.navItem}>
                <Ionicons name="phone-portrait" color="#5c5c5c" size={26}></Ionicons>
                <Text style={styles.textoNav}>Carteirinha Digital</Text>
            </View>
            <View style={styles.navItem}>
                <Ionicons name="gift" color="#5c5c5c" size={26}></Ionicons>
                <Text style={styles.textoNav}>Ofertas</Text>
            </View>
            <View style={styles.navItem}>
                <Ionicons name="qr-code" color="#5c5c5c" size={26}></Ionicons>
                <Text style={styles.textoNav}>QRCode</Text>
            </View>
        </View>
    );
};