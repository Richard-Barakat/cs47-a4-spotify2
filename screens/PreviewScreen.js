import { StyleSheet } from 'react-native';
import { WebView } from "react-native-webview";
import { Themes } from "../assets/Themes";


const PreviewScreen = ({ route }) => {
    return (
            <WebView style={styles.Background} source={{ uri: route.params.url}} />
    )
}

export default PreviewScreen;

const styles = StyleSheet.create({
    Background: {
        backgroundColor: Themes.colors.background
    }
});