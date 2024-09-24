import {Html, useProgress} from '@react-three/drei'

const Loader = () => {
  const {progress} = useProgress();

  return (
    <Html>
      <span className='canvas-load'></span>
      <p
        style={{
          color: '#f1f1f1',
          fontSize: 14,
          fontFamily: 'sans-serif',
          fontWeight: '800',
          marginTop: 40,
        }}
      > {progress.toFixed(2)}%</p>
    </Html>
  )
}

export default Loader