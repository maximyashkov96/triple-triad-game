import Header from './components/Header';
import Slider from './components/Slider';
import Footer from './components/Footer';
import Container from './components/Container';
import Text from './components/Text/Text';

const styleRoot = {
  background: '#f7f7f7'
}

const App = () => {
  return (
    <>
      <Header />
      <Slider />
      <div style={styleRoot}>
        <Container>
          <Text element='div' strong italic>
            Это созданный div-элемент
          </Text>
          <Text element='span' strong italic>
            Это созданный span-элемент
          </Text>
          <Text element='p' strong disabled>
            Это созданный p-элемент
          </Text>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default App;
