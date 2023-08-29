import FarmLogo from '../../assets/logo.png';
import TopoImg from '../../assets/topo.png';

import tomate from '../../assets/frutas/Tomate.png';
import brocolis from '../../assets/frutas/Brócolis.png';
import batata from '../../assets/frutas/Batata.png';
import pepino from '../../assets/frutas/Pepino.png';
import abobora from '../../assets/frutas/Abóbora.png';

export const basketMock = {
  top: {
    title: 'Detalhe da cesta',
    img: TopoImg,
    imgAlt: 'Imagem de uma verdura cortada',
  },
  details: {
    name: 'Cesta de Verdura',
    farmName: 'Jenny Jack Farm',
    description:
      'Uma cesta de produtos selecionados cuidadosamente da fazenda direto para sua cozinha',
    amount: 'R$ 40,00',
    farmLogo: FarmLogo,
    farmLogoAlt: 'Logo da fazenda',
    btnText: 'Comprar',
  },
  itens: {
    titulo: 'Itens da cesta',
    lista: [
      {
        nome: 'Tomate',
        imagem: tomate,
      },
      {
        nome: 'Brócolis',
        imagem: brocolis,
      },
      {
        nome: 'Batata',
        imagem: batata,
      },
      {
        nome: 'Pepino',
        imagem: pepino,
      },
      {
        nome: 'Abóbora',
        imagem: abobora,
      },
    ],
  },
};
