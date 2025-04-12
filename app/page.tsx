import Image from "next/image";
import IsometricMaze from "@/app/_components/IsometricMaze";

export default function Home() {
    return (
        <div>
            <div className={"h-50vh"}>
                <IsometricMaze height={600}/>
            </div>
        </div>
    );
}
