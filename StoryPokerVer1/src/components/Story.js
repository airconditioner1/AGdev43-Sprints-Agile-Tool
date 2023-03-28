import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';


export const Story = ({ story }) => {
  const { deleteStory } = useContext(GlobalContext);

  return (
    <li className={story.amount < 0 ? 'minus' : 'plus'}>
      {story.text} <button onClick={() => deleteStory(story.id)} className="delete-btn">x</button>
    </li>
  )
}
