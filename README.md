# Vue Chat Application
> Vue for React Developers JS / TS Guild Event

Hi and welcome! This repository contains a chat application created with the Vue 3 Composition API.

## Contents

- [Get started](#getting-started)
  - [IDE setup](#ide-setup)
- [Project structure](#project-structure)
  - [Components](#components)
- [Exercise](#exercise)
  - Complete the chat app  
  - Extend the chat app
- [Resources](#resources)


---

## Getting started

Ensure your Node.js version is `>=12.2.0` with `node --version`. If not, it's time to upgrade for which I recommend [nvm](https://github.com/nvm-sh/nvm).

Run these commands in your command line to get this project up and running.

```bash
# Clone the repository
git clone git@github.com:KnowitJSTSGuild/vue-for-react-developers.git

# Install dependencies
cd vue-for-react-developers
npm install

# Start the app
npm run dev
```

The app should now be running at [localhost:3000](http://localhost:3000])

### IDE Setup

The recommended IDE setup is [VSCode](https://code.visualstudio.com/) and the  [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) extension.

This should allow for precise auto-formatting and most of the good stuff you want when developing.

---

## Project Structure

This application is written in **Javascript**. Vue 3 supports TypeScript but it has not been used here.

This project's structure is roughly the following:

```bash
.
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── compositionFunctions/
│   └── App.vue                # Start here
├── package.json
└── README.md
```

Get started by exploring `App.vue`.

The `src/compositionFunctions` directory contains functions that are very similar to React hooks. A direct parallel between the two can't really be made, but a convention is to name both with a `use` prefix.

### Components

Components have been written as single file components using the `<script setup>` syntax. This means that a component's template, script and style are all contained within a single file. The `<script setup>` syntax replaces Vue's `setup()` function, making the entire component less verbose. Understanding what this means is not required in the scope of this workshop and exercise, but you can read more about it [in the Vue docs.](https://vuejs.org/api/sfc-script-setup.html)

## Exercise

To flesh out your Vue skills, an exercise has been prepared. The first part will task you with wiring the pieces of an existing application together. The second part will have you create a new component for the same application.

### Complete the chat app

Get the user id by injecting it.
Wire the state hooks to the Compose component (value and emit).

### Extend the chat app

Create an emoji selector thingy.


## Resources

The following resources are pretty handy:

- [Composition API Docs](https://vuejs.org/api/#composition-api)
  - Start here for documentation.
- [Directives](https://vuejs.org/api/built-in-directives.html#v-text)
  - `v-for`, `v-if`, `v-model`, etc.
- [Comparing React Hooks with Vue Composition API](https://dev.to/voluntadpear/comparing-react-hooks-with-vue-composition-api-4b32)
  - This is a good read that goes into a fair amount of detail.
