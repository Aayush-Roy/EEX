import "dotenv/config";
import { readdirSync, readFileSync } from "fs";
import { put } from "@vercel/blob";
import path from "path";

async function uploadAll() {
  const folder = "./public/models";

  const files = readdirSync(folder).filter((f) => f.endsWith(".glb"));

  console.log("Found files:", files);

  for (const file of files) {
    const filePath = path.join(folder, file);
    const data = readFileSync(filePath);

    console.log(`Uploading: ${file} ...`);

    const { url } = await put(file, data, {
      access: "public",
      token: process.env.BLOB_READ_WRITE_TOKEN,
      allowOverwrite: true, // ⭐ KEY FIX
    });

    console.log(`✔ Uploaded ${file}: ${url}\n`);
  }

  console.log("🔥 All uploads completed!");
}

uploadAll();
