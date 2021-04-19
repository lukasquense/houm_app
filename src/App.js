import AllPokemon from './components/AllPokemons';
import Header from './components/Header';
import Footer from './components/Footer';
import { Layout } from 'antd';

const { Content } = Layout;

const App = () => {
  return (
    <Layout>
        <Header />
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <AllPokemon />
        </Content>
       <Footer/>
    </Layout>
  );
};

export default App;
