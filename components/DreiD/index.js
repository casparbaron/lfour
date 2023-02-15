import {Canvas} from "@react-three/fiber";
import {useGLTF, Stage, PresentationControls} from "@react-three/drei";

function Model(props){
  const { scene } = useGLTF("/cologne_cathedral.glb");
  return <primitive object={ scene } {...props} />
}

function DreiD() {
  return (
    <Canvas dpr={[1,2]} shadow camera={{ fov: 45 }} style={{"position": "absolute"}}>
      <color attach="background" args={["#101010"]} />
      <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI / 4]}>
        <Stage environment={null}>
          <Model scale={0.0009} />
        </Stage>
      </PresentationControls>
    </Canvas>
  );
};

export default DreiD;
