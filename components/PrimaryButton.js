import { View, Text, Pressable, StyleSheet } from 'react-native'

function PrimaryButton({ children }) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable style={
                ({ pressed }) => pressed ? [styles.buttonInnerContainer, styles.Pressed] : styles.buttonInnerContainer}
                android_ripple={{ color: '#640233' }}>

                <Text style={buttonText}>{children}</Text>

            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    Pressed: {
        opacity: 0.75
    }
});

export default PrimaryButton;

// {pressed} in Pressable is default parameter which it return on press operation and using ternary operator we can perform different stylings and by using [] we can perform two styling objects on single tag 