import React, { useContext } from 'react';
import { Story } from './Story';

import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>Stories</h3>
      <ul className="list">
        {transactions.map(story => (<Story key={story.id} story={story} />))}
      </ul>
    </>
  )
}
