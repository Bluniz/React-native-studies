import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from './Text';

export function Button({ title, containerStyle, textStyle, ...rest }) {
  return (
    <TouchableOpacity style={[styles.container, containerStyle]} {...rest}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    backgroundColor: '#2A9F85',
    paddingVertical: 16,
    borderRadius: 6,
  },
  text: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 'bold',
  },
});
