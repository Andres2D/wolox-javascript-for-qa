'use strict'
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

describe('DOM Elements' ,() => {
  let document;
  beforeEach(async() => {
    const dom = new JSDOM(`
    <div class="container">
      <div class="titles">
        <h2 id="title">This is a title</h2>
        <h4 class="subtitle">This is a subtitle</h4>
      </div>
      <div class="iterables">
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ul>
      </div>
    </div>
    `);
    document = dom.window.document;
  });

  test('Should render the titles', () => {
    // Getting element by tag
    const title = document.querySelector('h2');

    // Getting element by class
    const subtitle = document.querySelector('.subtitle');
    
    // Getting element by Id
    const titleById = document.querySelector('#title');
    
    expect(title.textContent).toBe('This is a title');
    expect(subtitle.textContent).toBe('This is a subtitle');
    expect(titleById.textContent).toBe('This is a title');
  });

  test('Should render the list items', () => {
    // Getting a lost of nodes
    const listItems = document.querySelectorAll('li');
    
    // Getting the first element of a list
    const firstElement = listItems[0];
    // or
    const firstElementQuery = document.querySelector('li');
    
    expect(firstElement.textContent).toBe('Item 1');
    expect(firstElementQuery.textContent).toBe('Item 1');
    expect(listItems).toHaveLength(4);
  });
  
  test('Should render the full items', () => {
    // A note of optimization in iterables    
    const listItems = document.querySelectorAll('li');

    listItems.forEach((item, i) => {
      expect(item.textContent).toBe(`Item ${i+1}`);
    });
  });

});
