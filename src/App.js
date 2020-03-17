import React from 'react';
import './App.css';
import List from './List'


function App(props) {

  const getCardsForAList = (listIndex) =>
    props.store.lists[listIndex].cardIds.map(id => props.store.allCards[id])

  const lists = props.store.lists
    .map((list, index) => <List key={list.id} header={list.header} cards={getCardsForAList(index)}></List>)
  
  return (
    <main className='App'>
      <header className='App-header'>
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {lists}
      </div>

    </main>
  );
}

export default App;

