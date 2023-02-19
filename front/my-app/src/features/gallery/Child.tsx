import React, { useState } from 'react'

interface IfirstChildProps {
    name: string
  
  }

  const FirstChild: React.FC<IfirstChildProps> = (props:any) => {
  
  const [firstChildName, setFirstChildName] = useState<string>(props.name)
  
  return (
  
  <section>
    <h1> {firstChildName} </h1>
   <button> first child </button>
  </section>
  
  )
  
  }

export default FirstChild