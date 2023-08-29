import { Dimensions, Image, StyleSheet } from 'react-native';
import { Text } from '../../../components/Text';
import TopoImg from '../../../../assets/topo.png';
import { basketMock } from '../../../mocks/basket';

const width = Dimensions.get('screen').width;

export function Top({ data }) {
  return (
    <>
      <Image source={data.img} style={styles.top} alt={data.imgAlt} />
      <Text style={styles.title}>{data.title}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  top: {
    width: '100%',
    height: (578 / 768) * width,
  },
  title: {
    width: '100%',
    position: 'absolute',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 26,
    color: 'white',
    padding: 16,
    fontWeight: 'bold',
  },
});
