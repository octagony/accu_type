import { Container } from './components/Container/Container';
import { GeneratedWords } from './components/GeneratedWords/GeneratedWords';
import { Header } from './components/Header/Header';
import { TypeWord } from './components/TypeWord/TypeWord';
import { useGameStatus } from './hooks/useGameStatus';

function App() {
  const { state, words, typed } = useGameStatus();

  return (
    <Container>
      <Header />
      <div className="relative max-w-100 mt-3">
        <GeneratedWords words={words} />
        <TypeWord classNames="absolute -top-1" words={words} userInput={typed} />
      </div>
    </Container>
  );
}

export default App;
