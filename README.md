# Astro Appwrite Starter
This was created as a basic setup for adding appwrite to an Astro Application
## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
└── components/
    └── Card.astro
    └── Header.astro
    └── Footer.astro
└── layout/
     └── MainLayout.astro
     └── SideLayout.astro
└── pages/
│       └── index.astro
        └── create.astro
        └── dashboard.astro
        └── login.astro

└── package.json
```
For styling tailwind css and flowbite was used.

Create your backed in appwrite and add the ids in a .env file, the example file will show you want you need.

The appwrite backend used for this project is a basic notes application with image upload
The collection takes in a note that contains the title, content and the image id
The dashboard show all the notes and looks for the image id and compares it with what is uploaded in the storage bucket.

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.
There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.
Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
