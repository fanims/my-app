import React, { Fragment } from 'react'

function BoxCard ({ listitems }) {
  return (
    <Fragment>
      <div className='box-card'>
        <figure>
          <img src={listitems.image} alt="image" />
        </figure>
        <h3>{listitems.title}</h3>
        <p>{listitems.description}</p>
        <button>Submit</button>
      </div>
    </Fragment>
  );
}

export default BoxCard;
