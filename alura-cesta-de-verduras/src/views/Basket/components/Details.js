import { Image, StyleSheet, View } from 'react-native';
import { Text } from '../../../components/Text';
import { Button } from '../../../components/Button';
import { Itens } from './Item';

export function Details({ data }) {
  return (
    <>
      <Text style={styles.name}>{data.name}</Text>
      <View style={styles.farmContainer}>
        <Image
          source={data.farmLogo}
          alt={data.farmLogoAlt}
          style={styles.farmImage}
        />
        <Text style={styles.farmName}>{data.farmName}</Text>
      </View>
      <Text style={styles.description}>{data.description}</Text>
      <Text style={styles.amount}>{data.amount}</Text>

      <Button title={data.btnText} />
    </>
  );
}

const styles = StyleSheet.create({
  name: {
    fontSize: 26,
    lineHeight: 42,
    color: '#464646',
    fontWeight: 'bold',
  },
  farmContainer: {
    flexDirection: 'row',
    paddingVertical: 12,
    gap: 12,
  },
  farmImage: {
    width: 32,
    height: 32,
  },
  farmName: {
    fontSize: 16,
    lineHeight: 26,
  },
  description: {
    color: '#A3A3A3',
    fontSize: 16,
    lineHeight: 26,
  },
  amount: {
    color: '#2A9F85',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
});
