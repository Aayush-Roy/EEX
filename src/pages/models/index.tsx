import { models } from "../../data/model";
import ModelCard from "../../components/ModelCard";
import Navbar from "@/components/Navbar";

export default function ModelsGallery() {
  return (
    
    <div className="min-h-screen bg-black p-10">
        {/* <Navbar />    */}
      <h1 className="text-4xl text-white font-bold mb-8">3D Temple Models</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {models.map((m) => (
          <ModelCard key={m.id} model={m} />
        ))}
      </div>
    </div>
  );
}
