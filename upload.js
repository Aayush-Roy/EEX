import 'dotenv/config';
import { readFileSync } from "fs";
import { put } from "@vercel/blob";

async function upload() {
  // Read your file
  const data = readFileSync("./public/models/bagan.glb");

  // Upload it
  const { url } = await put("bagan.glb", data, {
    access: "public",
    token: process.env.BLOB_READ_WRITE_TOKEN,
  });

  console.log("Uploaded:", url);
}

upload();
