import React from 'react'

function MemoDemo({name}) {
    console.log("Rendering memo components")
  return (
    <div>
        MemoDemo
        {name}
        </div>
  )
}

export default React.memo(MemoDemo)