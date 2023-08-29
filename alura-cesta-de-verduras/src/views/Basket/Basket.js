import { StyleSheet, View, FlatList } from 'react-native';
import { Top } from './components/Top';
import { Details } from './components/Details';
import { Item } from './components/Item';
import { Text } from '../../components/Text';

export function Basket({ top, details, itens }) {
  return (
    <>
      <FlatList
        data={itens.lista}
        renderItem={Item}
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={() => {
          return (
            <>
              <Top data={top} />
              <View style={styles.container}>
                <Details data={details} />
                <Text style={styles.title}>{itens.titulo}</Text>
              </View>
            </>
          );
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  title: {
    color: '#464646',
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
});
