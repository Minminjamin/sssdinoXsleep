import "./App.css";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import { OrbitControls, Stars } from "@react-three/drei";
import Intro from "./page/Intro";

function App() {
  const cameraRef = useRef(null);

  const container = {
    position: "relative",
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
    background:
      "radial-gradient(circle farthest-corner at center top, #071021, #19324a)",
  };

  const canvasStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    zIndex: 1,
  };

  const introStyle = {
    position: "absolute",
    height: "100%",
    width: "100%",
    zIndex: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    pointerEvents: "none",
  };

  return (
    <div style={container}>
      <div style={introStyle}>
        <Intro />
      </div>
      <div style={canvasStyle}>
        <Canvas>
          <OrbitControls
            camera={cameraRef.current}
            enableZoom={true}
            minDistance={7}
            maxDistance={20}
          />
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
            <ambientLight intensity={0.1} />
            <directionalLight color="white" />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

export default App;
