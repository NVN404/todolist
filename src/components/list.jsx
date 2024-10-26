import React, { useState } from 'react';

const List = ({ content, onDelete }) => {
  const [done, setDone] = useState(false);

  const handleCheckboxChange = () => {
    setDone(!done);
  };

  return (
    <div className="flex flex-row justify-around w-96 border-2 border-black rounded-lg p-5 mb-2 text-2xl">
      <input 
        type="checkbox" 
        name="list" 
        checked={done} 
        onChange={handleCheckboxChange} 
      />
      <span className={done ? "line-through" : ""}>
        {content}
      </span>
      <button 
        className="border-2 border-black rounded-lg bg-[#F82C00] text-white p-2" 
        onClick={onDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default List;
