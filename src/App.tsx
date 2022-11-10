import AboutMe, { Person } from './components/AboutMe';
import Counter from './components/Counter';
import Greeting from './components/Greeting';
import PhotoCard, { PhotoCardType } from './components/PhotoCard';
import './App.css';

const me: Person = {
  name: 'Emily LaBelle',
  age: 19,
  awesome: true,
}

const card: PhotoCardType = {
  photo: 'https://lh3.googleusercontent.com/ogw/AOh-ky34t5fd0w9ldRPKMVEIsV_xbcSYNHplZ9kVirThwQ=s32-c-mo',
  mainPhoto: 'https://images.unsplash.com/photo-1665876702126-12c052834d42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2ODExNjc0Ng&ixlib=rb-1.2.1&q=80&w=1080',
  description: 'red and white strakes of defined color and shapes',
  likeCount: 99,
  user: 'Todd albert',
}

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h1>Hello Typescript</h1>
        <AboutMe person={me}/>
        <Counter />
        <Greeting firstName='Emily' lastName='LaBelle' />
        <PhotoCard card={card} />
      </header>
    </div>
  );
}

export default App;
