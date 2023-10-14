import { Text, StyleSheet, Platform } from 'react-native';


function Title({ children }) {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        // borderWidth: Platform.OS === 'android' ? 2 : 0,
        borderWidth: Platform.select({ ios: 0, android: 2 }),
        borderColor: 'white',
        padding: 12,
        maxWidth: '80%',
    },
})

// You may also create two files Title.android.js and Title.ios.js for android and ios specific and import Title(only) and react-native uses files accordingly