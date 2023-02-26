import { FlatList, StyleSheet, Text, View, Dimensions, Image } from "react-native" 
import Song from "./Song";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SongList = ({ tracks }) => {
    return (
        <FlatList style={styles.List}
          data={tracks}
          renderItem={({ item, index }) => {
            return  <Song item={item} index={index}/>
          }}
          keyExtractor={(item) => item.id}
        />
    );
};

const styles = StyleSheet.create({
    List: {
        paddingTop: windowHeight * 0.0075,
    }
  });

export default SongList