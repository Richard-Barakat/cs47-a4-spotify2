import { SafeAreaView, StyleSheet, View } from "react-native";
import { useSpotifyAuth } from "../utils";
import { Themes } from "../assets/Themes";
import SongList from "../components/SongList";
import Header from "../components/Header";
import SpotifyAuthButton from "../components/SpotifyAuthButton";

export default function HomeScreen({ navigation }) {
    // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
    const { token, tracks, getSpotifyAuth } = useSpotifyAuth(true);
  
    console.log("tracks", tracks);

    let contentDisplayed = null;
    if (token) {
      contentDisplayed = (
        <View> 
          <Header/>
          <SongList tracks={tracks} navigation={navigation}/>
        </View>
      );
    } else {
      contentDisplayed = (
        <SpotifyAuthButton authenticationFunction={getSpotifyAuth} />
      );
    }
  
    return (
      <SafeAreaView style={styles.container}>
        {contentDisplayed}
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: Themes.colors.background,
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
    }
  });