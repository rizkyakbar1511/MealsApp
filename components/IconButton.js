import { StyleSheet, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const IconButton = ({ icon, onPress, color }) => {
  return (
    <Pressable style={({ pressed }) => pressed && styles.pressed} onPress={onPress}>
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
