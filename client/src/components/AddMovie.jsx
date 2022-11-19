import React from 'react';


const AddMovie = ({ addMovie }) => {

  return (
    <div>
      <input id='movieField' placeholder='Add movie title here' type='text'></input>
      <button id='movieButton' onClick={addMovie}>Add Movie!</button>
    </div>
  );

};

export default AddMovie;