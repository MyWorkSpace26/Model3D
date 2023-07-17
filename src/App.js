import React, { Suspense, useRef } from "react";
import "./App.css";
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import { Canvas } from "react-three-fiber";
import { OrbitControls, box } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";

import House from "./House/House";

const App = () => {
  /*   const groupRef = useRef(); // Ссылка на ваш <group> компонент

  // Функция для изменения масштаба модели
  const zoomIn = () => {
    if (groupRef.current) {
      groupRef.current.scale.multiplyScalar(1.1); // Увеличивает масштаб на 10%
    }
  };

  const zoomOut = () => {
    if (groupRef.current) {
      groupRef.current.scale.divideScalar(1.1); // Уменьшает масштаб на 10%
    }
  }; */
  return (
    <div className="app-container">
      <div className="first-component-container">
        {/* Коробочная версия и Видеоверсия */}
        {/* <FirstComponent /> */}

        {/* /////////////черный дом///////////// */}
        <Canvas>
          <ambientLight intensity={0.5} />
          <House />
          <Suspense fallback={null}></Suspense>
        </Canvas>
      </div>
      <div className="second-component-container">
        <SecondComponent />
      </div>
    </div>
  );
};

export default App;
