import Header from './components/header';
import Card from './components/card';
import data from './data';

function App() {
  const cardElements = data.map(card => {
    return <Card
        key={`${card.id}`}
        {...card}
    />
})
  return (
    <>
      <Header />
      {cardElements}
    </>
  );
}

export default App;