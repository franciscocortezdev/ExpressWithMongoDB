import { Router } from "express";
import { readdirSync } from "fs";

const router = Router();
const PATH_ROUTER = `${__dirname}`;

const removeExtension = (file: string) => {
  const fileClean = file.split(".").shift();
  return fileClean;
};

const filesRoutes = readdirSync(PATH_ROUTER)
  .filter((fileName) => fileName !== "index.ts")
  .map((filesRoute) => removeExtension(filesRoute));

filesRoutes.forEach((file) => {
  import(`./${file}`).then((moduleRoute) => {
    router.use(`/${file}`, moduleRoute.router);
  });
});

export { router };
