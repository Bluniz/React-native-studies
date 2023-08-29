import { Text as RnText, StyleSheet } from 'react-native';

export function Text({ children, style, ...rest }) {
  const textStyle =
    style?.fontWeight === 'bold' ? styles.textBold : styles.text;

  return (
    <RnText {...rest} style={[style, textStyle]}>
      {children}
    </RnText>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'MonteserratRegular',
  },
  textBold: {
    fontFamily: 'MonteserratBold',
  },
});
