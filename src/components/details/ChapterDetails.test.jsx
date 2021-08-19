/* eslint-disable max-len */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import ChapterDetails from './ChapterDetails';
import { MemoryRouter } from 'react-router-dom';


const server = setupServer(
  rest.get(
    'https://ac-vill.herokuapp.com/villagers/:id',
    (req, res, ctx) => {
      return res(
        ctx.json(
          {
            'name':'Admiral',
            'species':'bird',
            'quote': 'Only quitters give up.',
            'phrase':'aye aye',
            'skill': 'Writing about pickles',
            'image':'https://vignette.wikia.nocookie.net/animalcrossing/images/e/ed/Admiral_NH.png/revision/latest?cb=20200802081138',
            
            
          }        
        )
      );
            
    }
  )
);

describe('Chapter Details', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('displays a list of chapter details', async () => {
    render(<MemoryRouter initialEntries={['/:id']}><ChapterDetails /></MemoryRouter>);

    screen.getByText('Loading...');
    
    const ul = await screen.findByTestId('1');
    
    expect(ul.children.length).toEqual(2);
  
  });
});
