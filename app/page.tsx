import Cursor from "./components/cursor/cursor";
import Graph from "./components/graph";

export default function Home() {
  return (
    <div className="min-h-screen w-screen bg-black">
      <h1 className="text-center text-white text-2xl">:O</h1>
      <Graph />
      <Cursor />
    </div>
  );
}
