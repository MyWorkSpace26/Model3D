/////////////Видеоверсия/////////////
/* import React from "react";

const FirstComponent = () => {
  return (
    <div>
      <iframe
        title="Sketchfab Embed"
        width="100%"
        height="600px"
        src="https://sketchfab.com/models/1f03b08ab4cc4fd0b2e43ce7661c264c/embed"
        frameborder="0"
        allow="autoplay; fullscreen; vr"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
    </div>
  );
};

export default FirstComponent; */

/////////////Коробочная версия/////////////
/* import React, { useRef } from "react";
import { Canvas, extend, useThree, useFrame } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { BoxGeometry } from "three";
import "../src/App.css";

extend({ OrbitControls });

const FirstComponent = () => {
  const Controls = () => {
    const controls = useRef();

    const { camera, gl } = useThree();

    useFrame(() => {
      controls.current.update();
    });

    return (
      <orbitControls
        ref={controls}
        autoRotate
        args={[camera, gl.domElement]}
      ></orbitControls>
    );
  };

  return (
    <div className="divcube">
      <Canvas>
        <mesh>
          <Controls />

          <primitive
            object={new BoxGeometry(1, 1, 1)} // Используем new для создания экземпляра BoxGeometry
            attach="geometry"
          />

          <meshBasicMaterial wireframe attach="material" color="red" />
        </mesh>
      </Canvas>
    </div>
  );
};

export default FirstComponent; */

/////////////не показывает дом/////////////
/* import React, { Suspense, useRef } from "react";
import { Canvas, extend, useThree, useFrame } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useGLTF } from "@react-three/drei";
import "../src/App.css";

extend({ OrbitControls });

const FirstComponent = () => {
  const Controls = () => {
    const controls = useRef();

    const { camera, gl } = useThree();

    useFrame(() => {
      controls.current.update();
    });

    return (
      <orbitControls ref={controls} autoRotate args={[camera, gl.domElement]} />
    );
  };

  const Model = () => {
    const { nodes } = useGLTF("/house/scene.gltf");

    return (
      <group>
        <mesh
          geometry={nodes.Material30.geometry}
          material={nodes.Material30.material}
        />
      </group>
    );
  };

  return (
    <div className="divcube">
      <Canvas>
        <Suspense fallback={null}>
          <Controls />
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default FirstComponent; */
