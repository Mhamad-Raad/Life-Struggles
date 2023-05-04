import { ScrollControls, Scroll } from '@react-three/drei';
import './App.scss';

const App = () => {
  return (
    <>
      <ScrollControls pages={6} damping={0.25}>
        <Scroll></Scroll>
        <Scroll html style={{ width: '100%' }}>
          test
        </Scroll>
      </ScrollControls>
    </>
  );
};

export default App;
