import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddStory = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addStory } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      //id: Math.floor(Math.random() * 100000000),
      text,
      //amount: +amount
    }

    addStory(newTransaction);
  }

  return (
    <>
      <h3>Create A Story:</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Story</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Type Story..." />
        </div>
        {/* <div className="form-control">
          <label htmlFor="amount"
            >Users <br />
            (negative - expense, positive - income)</label
          >
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter ..." />
        </div> */}
        <button className="btn">Add Story</button>
      </form>
    </>
  )
}
