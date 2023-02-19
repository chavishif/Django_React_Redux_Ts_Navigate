import React, { useState } from 'react'
import FirstChild from './Child'


export const Parent:React.FC = () => {

    const [parentName, setParentName] = useState<string>('John Obi')
    
    return (
         <div>
    
           <FirstChild name={parentName} />
           
         </div>
    
      )
    }