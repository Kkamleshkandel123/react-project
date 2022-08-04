import { ThemeProvider } from 'styled-components';
import Header from './componenets/Header';
import Footer from './componenets/Footer';
import Card from './componenets/Card';
import {Container} from './componenets/styles/Container.styled';
import GlobalStyles from './componenets/styles/Global';
import content from './content'

const theme = {
  colors:{
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333'
  },
  mobile: '768px'
}
function App() {
  return (
   <ThemeProvider theme = {theme}>
   <>
      <GlobalStyles/>
      <Header/>
      <Container>
        {content.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </Container>
      <Footer/>
    </>
    </ThemeProvider>
  );
}

export default App;
