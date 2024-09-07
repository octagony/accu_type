import { Container } from './components/Container/Container';
import { Countdown } from './components/Countdown/Countdown';
import { GeneratedWords } from './components/GeneratedWords/GeneratedWords';
import { Header } from './components/Header/Header';
import { TypeWord } from './components/TypeWord/TypeWord';
import { useGameStatus } from './hooks/useGameStatus';

function App() {
  const { state, words, typed } = useGameStatus();

  return (
    <Container>
      <Header />
      <div className="grid place-content-center w-100 h-full">
        <Countdown time={100} size={40} stroke="#000" strokeWidth={1} />
        <div className="relative max-w-100 mt-3">
          <GeneratedWords words={words} />
          <TypeWord classNames="absolute -top-0.5 left-0" words={words} userInput={typed} />
        </div>
      </div>
    </Container>
  );
}

export default App;
