import React from 'react'
import MidPlaylist from './MidPlaylist'
import PlaylistNavbar from './PlaylistNavbar'
import {Card} from'react-bootstrap'


    const playlistitems=[{
        img:'https://i.scdn.co/image/ab67706f00000002b55b6074da1d43715fc16d6d',
        name:"daily mix1",
        desc:'Amrinder gill, Nivair Pannu, Love Sivia and more'
          },
          {
          img:'https://i.scdn.co/image/ab67706f00000002d8fe1c03afc22a01d5109233',
        name:"daily mix2 ",
        desc:'Amrinder gill, Nivair Pannu, Love Sivia and more'
          },
          {
              img:'https://i.scdn.co/image/ab67706f000000024ef13e1996f09ed4dc86eba3',
        name:"daily mix 3",
        desc:'Amrinder gill, Nivair Pannu, Love Sivia and more'
          },
          {
              img:'https://i.scdn.co/image/ab67706f0000000263ef641f3fa47592fe798e91',
        name:"daily mix 4",
        desc:'Amrinder gill, Nivair Pannu, Love Sivia and more'
          }
        ]
        export default function Playlist() {
  return (
    <div className='mx-1 py-2'>
    <Card  style={{backgroundColor:'#121212',border:'none'}}>
     <PlaylistNavbar/>
    
    <div>
      <MidPlaylist items={playlistitems}/>
    </div>
    </Card>
    </div>
    

  )
}
