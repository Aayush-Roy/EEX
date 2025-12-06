// import Link from "next/link";
// import { ModelItem } from "../data/model";

// export default function ModelCard({ model }: { model: ModelItem }) {
//   return (
//     <Link href={`/models/${model.id}`}>
//       <div className="bg-zinc-900 rounded-xl p-4 cursor-pointer hover:scale-105 transition">
//         <img src={model.thumbnail} className="w-full h-48 object-cover rounded-lg" />
//         <h2 className="text-xl font-bold mt-3 text-white">{model.name}</h2>
//       </div>
//     </Link>
//   );
// }
import Link from "next/link";
import { ModelItem } from "../data/model";
// import { Eye, Cube } from "lucide-react";
import { Eye, Box } from "lucide-react";


export default function ModelCard({ model }: { model: ModelItem }) {
  return (
    <Link href={`/models/${model.id}`}>
      <div className="
        group 
        bg-zinc-900/60 
        backdrop-blur-md 
        rounded-xl 
        p-4 
        cursor-pointer 
        hover:scale-105 
        hover:shadow-2xl 
        hover:shadow-[#c6b08f50] 
        transition-all 
        border 
        border-zinc-800
      ">
        
        {/* Thumbnail */}
        <div className="overflow-hidden rounded-lg">
          <img 
            src={model.thumbnail} 
            className="
              w-full 
              h-48 
              object-cover 
              rounded-lg 
              group-hover:scale-110 
              transition 
              duration-500
            " 
          />
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold mt-4 text-white">
          {model.name}
        </h2>

        {/* CTA SECTION */}
        <div className="
          mt-3 
          flex 
          items-center 
          justify-between 
          text-[#d1c3a8] 
          font-medium
        ">
          <span className="flex items-center gap-2">
            <Eye size={18} /> 
            View Details
          </span>

          <span className="flex items-center gap-2">
            <Box size={18} /> 
            3D View
          </span>
        </div>

      </div>
    </Link>
  );
}
