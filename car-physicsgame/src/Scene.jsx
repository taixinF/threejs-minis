import { OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei";

import { Suspense } from "react";
import {Track} from "./Track";


export function Scene() {
    return (
        <Suspense fallback={null}>
            <Environment background={"both"} files={process.env.PUBLIC_URL + "/textures/bg.hdr"} />

            <PerspectiveCamera makeDefault fov={50} position={[-1.75, 10.85, 20.35]} />
            <OrbitControls target={[1, 5, 0]} maxPolarAngle={Math.PI * 0.5}/>

            <Track></Track>
        </Suspense>
    );
}

