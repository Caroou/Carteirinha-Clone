import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { styles } from "./components/Style"
import BotaoGrande from './components/BotaoGrande';
import BotaoPequeno from './components/BotaoPequeno'
// <Image source={require('./components/img/logo.jpg')} style={styles.logoCruzeiro}></Image>
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.divGrande}>
        <BotaoGrande title="Carteirinha Digital" type="phone-portrait-outline"></BotaoGrande>
        <BotaoGrande title="QRCode [Acesso]" type="qr-code-outline"></BotaoGrande>
        <BotaoGrande title="Carteirinha Física" type="id-card-outline"></BotaoGrande>
        <BotaoGrande title="Ofertas" type="gift-outline"></BotaoGrande>
      </View>
      <View style={styles.divPequena}>
        <BotaoPequeno title="Cadastro" type="person-outline"></BotaoPequeno>
        <BotaoPequeno title="Minha Foto" type="camera-outline"></BotaoPequeno>
        <BotaoPequeno title="Notificações" type="notifications-outline"></BotaoPequeno>
      </View>

    </View>
  );
}

