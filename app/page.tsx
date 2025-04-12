import Image from "next/image";
import IsometricMaze from "@/app/_components/IsometricMaze";
import HeroBanner from "@/app/_components/HeroBanner";
import BodyBackground from "@/app/_components/BodyBackground";

export default function Home() {
    return (
        <div>
            <HeroBanner heightPercent={50}/>
            <div>
                <BodyBackground className={""}>
                    a
                </BodyBackground>
            </div>
        </div>
    );
}
