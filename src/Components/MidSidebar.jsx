import React from 'react'
import Style from '../CSS/Home.module.css'
import{Col,CardTitle,Row,Button,Stack,Card} from 'react-bootstrap'
export default function MidSidebar() {
  return (
    
    <div>
    <Row>
            <Col xs={8}  className={`m-3 ${Style.list}` }>
               <a href="/" className={`text-decoration-none text-white ${Style.icon}`}> 
                 <svg  data-encore-id="icon" className={Style.icon} width="24" height="24" fill='white'
                          role="img" aria-hidden="true" viewBox="0 0 24 24"
                          class="Svg-sc-ytk21e-0 bneLcE">
                          <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 
                          0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0
                          0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path></svg>
                           <span className={`ms-3 m-2 fs-6 fw-semibold ${Style.text}`}>You Library</span>
                 </a>
            </Col>
            <Col xs={2} className={`mt-3 ${Style.list}`} >
                          <svg  data-encore-id="icon"className={Style.icon} width="20" height="24" fill='white'  role="img" aria-hidden="true" viewBox="0 0 16 16" >
                          <path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"></path></svg>
                      </Col>
          </Row>
      
          <div >
          <div className={`  ${Style.yourlibrary}`}>
                <Card className='mx-2 my-2 mb-4' style={{marginTop:'5px',background:'#242424'}} >
                  <CardTitle style={{fontSize:'18px',color:'white'}} className='mt-3 mx-3 mb-2'>Create your first playlist</CardTitle>
                  <Card.Text className='mx-3' style={{fontSize:'12px', color:'white'}}>It's easy ,we'll help you</Card.Text>
                  <Button style={{color:'black', width:'130px',background:'white',border:'none',fontSize:'14px',
                  borderRadius:'20px'}} className={`ms-3 mb-3 fw-bold ${Style.button}`}>Create playlist</Button>
               </Card>
               <Card className='mx-2 my-2 mb-4' style={{background:'#242424',marginTop:'5px'}}>
                  <CardTitle style={{fontSize:'18px',color:'white'}} className='mt-3 mx-3 mb-2'>Let's find some podcasts to follow </CardTitle>
                  <Card.Text className='mx-3' style={{fontSize:'12px', color:'white'}}>We'll Keep you updated on new episodes</Card.Text>
                  <Button style={{color:'black',width:'150px',background:'white',border:'none',fontSize:'14px',
                  borderRadius:'20px'}} className={`ms-3 mb-3 fw-bold ${Style.button}`}>Browse podcasts</Button>
               </Card>
          </div>
          </div>
</div>

  )
}
