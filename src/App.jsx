import Card from './image-card.jsx'
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
import img4 from './assets/img4.jpg'
import {foods} from './list.jsx'


function App(props) {
  return (
    <>
      <Card
        img={img1}
        title={foods[0].dish && foods[0].dish.trim() !== "" ? foods[0].dish : "Food"}
        paragraph={
          <>
            {foods[0].serving && foods[0].serving.trim() !== "" ? foods[0].serving : "Serving"}
            <br />
            {foods[0].cal !== undefined && foods[0].cal !== null ? foods[0].cal + " cal/s" : ""}
          </>
        }
      />
      <Card
        img = {img2}
        title = {foods[1].dish && foods[1].dish.trim() !=="" ? foods[1].dish : "Food"}
        paragraph={
          <>
          {foods[1].serving && foods[1].serving.trim() !=="" ? foods[1].serving: "Serving"}
          <br />
          {foods[1].cal !== undefined && foods[1].cal !== null ? foods[1].cal +" cals/s" : "cal/s"}
          </>
        }
      />
      <Card
        img={img3}
        title={foods[2].dish && foods[2].dish.trim() !== "" ? foods[2].dish : "Food"}
        paragraph={
          <>
            {foods[2].serving && foods[2].serving.trim() !=="" ? foods[2].serving: "Serving"}
          <br />
            {foods[2].cal !== undefined && foods[2].cal !== null ? foods[2].cal + " cal/s": "cal/s"}  
          </>
        }
      />

      <Card
        img={img4}
        title={foods[3].dish && foods[3].dish.trim() !== "" ? foods[3].dish : "Food"}
        paragraph={
          <>
            {foods[3].serving && foods[3].serving.trim() !=="" ? foods[3].serving: "Serving"}
          <br />
            {foods[3].cal !== undefined && foods[3].cal !== null ? foods[3].cal + " cal/s": "cal/s"}  
          </>
        }
      />
    </>
  );
}


export default App
