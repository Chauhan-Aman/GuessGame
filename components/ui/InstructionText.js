import { Text, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

function InstructionText({ children, style }) {
    return (
        <Text style={[styles.instructionText, style]}>{children}</Text>  // Later declared styles in array can overwrite previous ones
    )
}

export default InstructionText;

const styles = StyleSheet.create({
    instructionText: {
        fontFamily: 'open-sans',
        color: Colors.accent500,
        fontSize: 24,
    },
})