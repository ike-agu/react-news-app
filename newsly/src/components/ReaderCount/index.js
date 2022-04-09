import React, { useState } from 'react';

export const ReaderCount = () => {
  const [readsCount, setReadsCount] = useState(0);

  const increaseReadsCount = () => setReadsCount(previousCount => previousCount + 1);

  return (
    <>
      <p>
        There have been <span role="figure" id="reads">{readsCount}</span> reader(s)
      </p>
      <p>click if you have read</p>
      <button arial-label="Read story" onClick={increaseReadsCount}> click!</button>
    </>
  )
}
