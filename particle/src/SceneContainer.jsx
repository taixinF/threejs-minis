import {Environment, Float, OrbitControls, PerspectiveCamera} from "@react-three/drei";
import {Suspense} from "react";
import {FloatingIsland} from "./FloatingIsland";
import {Portal} from "./Portal";
import {Rocks} from "./Rocks";
import {FloatingRocks} from "./FloatingRocks";
import {Trees} from "./Trees";
import {Words} from "./Words";
import {Grass} from "./Grass";

export function SceneContainer() {
    return (
        <Suspense fallback={null}>
            <Environment
                background={"only"}
                files={process.env.PUBLIC_URL + "/textures/bg.hdr"}
            ></Environment>
            <Environment
                background={false}
                files={process.env.PUBLIC_URL + "/textures/envmap.hdr"}
            ></Environment>

            <PerspectiveCamera makeDefault fov={50} position={[-1.75, 10.85, 20.86]}></PerspectiveCamera>
            <OrbitControls target={[1, 5, 0]} maxPolarAngle={Math.PI * 0.5}></OrbitControls>

            {/*可以让你想定义的子组件满足你想要的运动*/}
            <Float
                speed={0.5}
                rotationIntensity={0.6}
                floatIntensity={0.6}
            >
                <Portal/>
                <FloatingIsland></FloatingIsland>
                <Rocks/>
                <FloatingRocks/>
                <Trees></Trees>
                <Words></Words>
                <Grass></Grass>
            </Float>
        </Suspense>
    );
}
