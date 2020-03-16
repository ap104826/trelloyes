import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

it('renders without crashing', () =>{
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Card name="Card" unread={4}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });