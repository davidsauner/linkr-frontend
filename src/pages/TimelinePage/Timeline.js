import { } from './style'
import Delete from './Delete/Delete'
import { useState } from 'react'
export default function Time() {
    const [showdelete , setShowDelete] = useState(false)


    return (
        <div>
            
            <button onClick={()=>setShowDelete(!showdelete)} >
                lixeirinha linda
            </button>
            {showdelete && <Delete setShowDelete={setShowDelete}/>}
            
            </div>
    )
}