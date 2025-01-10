import "./App.css";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import { Environment, OrbitControls, Stars } from "@react-three/drei";
import { PerspectiveCamera } from "three";
import GalaxyBg from "./component/GalaxyBg";

function App() {
  const cameraRef = useRef(null);

  const canvasStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background:
      "radial-gradient(circle farthest-corner at center top, #071021, #19324a)",
  };

  return (
    <div style={canvasStyle}>
      <Canvas>
        <Suspense fallback={null}>
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0.8}
            fade
          />
          <Stars
            radius={1000}
            depth={100}
            count={1000}
            factor={100}
            saturation={1}
            fade
          />
          {/* <GalaxyBg /> */}
          {/* <Environment preset="dawn" background /> */}

          <ambientLight intensity={0.1} />
          <directionalLight color="white" />
          <OrbitControls
            camera={cameraRef.current}
            enableZoom={true}
            minDistance={7}
            maxDistance={20}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
