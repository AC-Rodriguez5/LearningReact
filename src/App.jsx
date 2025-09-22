import Card from './image-card.jsx'
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'


function App(props) {
  return(
    <>
      <Card img={img1} title='The Horizon' paragraph='lorem Ipsum.' />
      <Card img={img2} title='Starry Night' paragraph='lorem Ipsum.' />
      <Card img={img3} title='Pakyu Ka' paragraph='lorem Ipsum.' />
    </>
  );
}

export default App
