import { ScrollControls, Scroll } from '@react-three/drei';
import './App.scss';

function App() {
  return (
    <>
      <ScrollControls pages={6} damping={0.25}>
        <Scroll>

        </Scroll>
        <Scroll html>
          
        </Scroll>
      </ScrollControls>
    </>
  );
}

export default App;
