import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "7eb09071-d10b-49ed-b49c-a4cac7ea8c1a", // Get this from tina.io
  token: "7c9f39fbfc7259d181b7b7bfdfef0249327a26a5", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        label: "Pages",
        name: "pages",
        path: "content/en",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "title",
          },
          {
            type: "string",
            name: "description",
            label: "description",
          },
          {
            type: "number",
            name: "position",
            label: "position",
          },
          {
            type: "string",
            name: "category",
            label: "category",
          },
        ],
      },
    ],
  },
});
