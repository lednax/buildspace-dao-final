import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x665C8e1306322C65f942C5E937d1D08599226a44",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Masked Up",
        description: "This NFT will give you access to MasksDAO!",
        image: readFileSync("scripts/assets/mask.gif"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()