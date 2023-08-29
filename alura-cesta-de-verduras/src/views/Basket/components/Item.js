import { Image, StyleSheet, View } from 'react-native';
import { Text } from '../../../components/Text';

export function Item({ item: { nome, imagem } }) {
  return (
    <View style={styles.item}>
      <Image source={imagem} style={styles.itemImg} />
      <Text style={styles.itemText}>{nome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
    marginHorizontal: 16,
    padding: 16,
    gap: 11,
  },
  itemImg: {
    width: 46,
    height: 46,
  },
  itemText: {
    fontSize: 16,
    lineHeight: 26,
    color: '#464646',
  },
});
