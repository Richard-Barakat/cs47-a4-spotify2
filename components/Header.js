import { StyleSheet, SafeAreaView, Text, Image, Dimensions } from 'react-native';
import { Images } from "../assets/Themes";

// get screen dimensions
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

// create body component (define content here)
export default function Header() {
    return (
        <SafeAreaView style = {styles.header}>
            <Image source={Images.spotify} style={styles.headerIcons}/>
            <Text style={styles.title}>My Top Tracks</Text>
        </SafeAreaView>
    );
};

// define style (size, position, orienatation, color, etc)
const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        // paddingTop: windowHeight * 0.01,
    },
    headerIcons: {
        height: windowWidth * 0.075,
        width: windowWidth * 0.075,
        margin: windowWidth * 0.04,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "white",
    }
});
