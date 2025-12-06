// import { useRouter } from "next/router";
// import { models } from "../../data/model";
// import ModelViewer from "../../components/ModelViewer";

// export default function ModelDetail() {
//   const router = useRouter();
//   const { id } = router.query;

//   const model = models.find((m) => m.id === id);

//   if (!model) return <h1 className="text-white p-10">Model Not Found</h1>;

//   return (
//     <div className="min-h-screen bg-black p-10">
//       <h1 className="text-4xl font-bold text-white mb-4">{model.name}</h1>
//       <p className="text-gray-400 mb-10 max-w-xl">{model.description}</p>

//       <ModelViewer src={model.glb} />
//     </div>
//   );
// }
"use client";

import { useRouter } from "next/router";
import { models } from "../../data/model";
import dynamic from "next/dynamic";

// Load ModelViewer only on client
const ModelViewer = dynamic(
  () => import("../../components/ModelViewer"),
  { ssr: false }
);

export default function ModelDetail() {
  const router = useRouter();
  const { id } = router.query;

  const model = models.find((m) => m.id === id);

  if (!model) return <h1 className="text-white p-10">Model Not Found</h1>;

  return (
    <div className="min-h-screen bg-black p-10">
      <h1 className="text-4xl font-bold text-white mb-4">{model.name}</h1>
      <p className="text-gray-400 mb-10 max-w-xl">{model.description}</p>

      <ModelViewer src={model.glb} />
    </div>
  );
}
