import { StyleSheet, Text, View, Dimensions, Image } from "react-native" 

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Song({ item, index }) {
    return (
        <View style={styles.SongBox}>
            <View style={styles.IndexBox}><Text style={styles.SongIndex}>{index + 1}</Text></View>
            <Image style={styles.AlbumImage} source={{uri: item.imageUrl}} />
            <View style={styles.SongTitleArtistBox}>
                <Text numberOfLines={1} style={styles.SongTitle}>{item.songTitle}</Text>
                <Text numberOfLines={1} style={styles.SongArtist}>{item.songArtists[0].name}</Text>
            </View>
            <View style={styles.AlbumNameBox}><Text numberOfLines={1} style={styles.SongAlbum}>{item.albumName}</Text></View>
            <View style={styles.DurationBox}><Text style={styles.SongDuration}>{convertMillisToTime(item.duration)}</Text></View>
        </View>
    );
};

const convertMillisToTime = (millis) => {
    let time = (millis/1000) / 60
    let minutes = Math.floor(time)
    let seconds = Math.round((time - minutes) * 60)
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return `${minutes}:${seconds}`
}

const styles = StyleSheet.create({
    SongBox: {
        flexDirection: "row",
        paddingBottom: windowHeight * 0.025,
        width: windowWidth,
        paddingRight: windowWidth * 0.01
    },
    SongTitleArtistBox: {
        flexDirection: "column",
        justifyContent: "center",
        width: windowWidth * 0.375,
        paddingLeft: windowWidth * 0.02,
        paddingRight: windowWidth * 0.025
    },
    IndexBox: {
        flexDirection: "column",
        justifyContent: "center",
        paddingLeft: windowWidth * 0.015,
        paddingRight: windowWidth * 0.02
    },
    AlbumNameBox: {
        flexDirection: "column",
        justifyContent: "center",
        width: windowWidth * 0.29,
        paddingRight: windowWidth * 0.015
    },
    DurationBox: {
        flexDirection: "column",
        justifyContent: "center",
    },
    SongIndex: {
        color: "white",
        alignItems: "center"
    },
    AlbumImage: {
        height: windowWidth * 0.15,
        width: windowWidth * 0.15,
        
    },
    SongTitle: {
        color: "white",
        fontWeight: "bold",
    },
    SongArtist: {
        color: "white",
    },
    SongAlbum: {
        color: "white",
    },
    SongDuration: {
        color: "white",
    }
  });
