import React, { useState } from 'react'

export default function Test() {
  const [isShown, setIsShown] = useState(true);

  const handleClick = event => {
    // 👇️ toggle visibility
    setIsShown(current => !current);
  };
  return (
    <div>
      <button onClick={handleClick}>Toggle visibility</button>

      <div style={{ display: isShown ? 'block' : 'none' }}>
        <h2>Some content here</h2>
      </div>
    </div>
  )
}
