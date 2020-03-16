import React from 'react';
import './App.css';
import List from './List'
import store from './store'


function App(props) {

  const getCardsForAList = (listIndex) =>
    props.store.lists[listIndex - 1].cardIds.map(id => props.store.allCards[id])

  debugger
  const lists = props.store.lists
    .map((list) => <List key={list.id} header={list.header} cards={getCardsForAList(list.id)}></List>)
  
  return (
    <main className='App'>
      <header className='App-header'>
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
      {store.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
            />
          ))}
      </div>

    </main>
  );
}

export default App;

