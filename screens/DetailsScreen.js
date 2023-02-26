import { StyleSheet, Dimensions } from 'react-native';
import { WebView } from "react-native-webview";
import { Themes } from "../assets/Themes";

const windowHeight = Dimensions.get("window").height;

const DetailsScreen = ({ route }) => {
    return (
        <WebView source={{ uri: route.params.url}} />
    )
}

export default DetailsScreen;

const styles = StyleSheet.create({
    Background: {
        backgroundColor: Themes.colors.background
    }
});