import React from 'react'
import{ Stack,Card} from 'react-bootstrap'
import MidSidebar from './MidSidebar'
import FotSiderbar from './FotSiderbar'
import UpSidebar from'./UpSidebar'
export default function Sidebar() {
  return (
    <>
    <div>
     <Stack gap={2}>
       <div className='Up'>
         <Card style={{backgroundColor:'#121212' , border:'none'}} className='ms-2 mt-2'>
         <UpSidebar />
         </Card>
       </div>
       <div className='mid'>
         <Card style={{backgroundColor:'#121212' , border:'none'}} className=' ms-2'>
              <MidSidebar/>
               <div className='fot 'style={{marginTop:'10px'}} >
                 <FotSiderbar/>
               </div>
         </Card>

       </div>
     </Stack>
    </div>
 </>
  )
}
