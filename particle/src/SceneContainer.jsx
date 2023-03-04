import {Environment, OrbitControls, PerspectiveCamera} from "@react-three/drei";
import {Suspense} from "react";
import {FloatingIsland} from "./FloatingIsland";
import {Portal} from "./Portal";
import {Rocks} from "./Rocks";
import {FloatingRocks} from "./FloatingRocks";

export function SceneContainer() {
    return (
        <Suspense fallback={null}>
            <Environment
                background={"only"}
                files={process.env.PUBLIC_URL + "textures/bg.hdr"}
            ></Environment>
            <Environment
                background={false}
                files={process.env.PUBLIC_URL + "textures/envmap.hdr"}
            ></Environment>

            <PerspectiveCamera makeDefault fov={50} position={[-1.75, 10.85, 20.86]}></PerspectiveCamera>
            <OrbitControls target={[1, 5, 0]} maxPolarAngle={Math.PI * 0.5}></OrbitControls>


            <Portal/>
            <FloatingIsland></FloatingIsland>
            <Rocks/>
            <FloatingRocks/>
        </Suspense>
    );
}
