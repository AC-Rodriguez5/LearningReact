import Card from './image-card.jsx'
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
import img4 from './assets/img4.jpg'
import {foods} from './list.jsx'


function App(props) {
  return(
    <>
      <Card img={img1} title={foods[0].dish} paragraph={<>{foods[0].serving} <br /> {foods[0].cal}cal/s </>} />
      <Card img={img2} title={foods[1].dish} paragraph={<>{foods[1].serving} <br /> {foods[1].cal}cal/s</>} />
      <Card img={img3} title={foods[2].dish} paragraph={<>{foods[2].serving} <br /> {foods[2].cal}cal/s</>} />
      <Card img ={img4} title={foods[3].dish} paragraph={<>{foods[3].serving} <br /> {foods[3].cal}cal/s </>}/>
    </>
  );
}

export default App
