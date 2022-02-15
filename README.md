# Vue Chat Application
> Vue for React Developers JS / TS Guild Event

Hi and welcome! This repository contains a chat application created with the Vue 3 Composition API.

## Contents

- [Get started](#getting-started)
  - [IDE Setup](#ide-setup)
- [Project Structure](#project-structure)
  - [Components](#components)
- [Exercise](#exercise)
  - [Complete the Chat App](#complete-the-chat-app)
  - [Extend the Chat App](#extend-the-chat-app)
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

---

## Exercise

To flesh out your Vue skills, an exercise has been prepared. The first part will task you with wiring the pieces of an existing application together. The second part will have you create a new component for the same application.

### Complete the chat app

Get the user id by injecting it.
Wire the state hooks to the Compose component (value and emit).

### Extend the Chat App

The second part of the exercise is to extend the chat app with an "emoji picker".

![Extended chat app](/docs/exercise-2-result.png)

To start, switch to the correct branch:

```bash
git switch exercise-2
```

Basic messaging functionality has already been implemented in this branch. Your job is to accomplish the following three goals.

If you get stuck at any point, search the project for the string _"Hint:"_. These point to critical points where functionality could be added.

#### **1. Create an emoji picker component.**

Create a set of buttons that can be clicked to send the respective emoji to the chat.

To start, take a look at the `Button.vue` component. You can use its `icon` prop to pass in the name of an emoji you want to display. `useIcons.js` will provide a list of available emojis.

#### **2. Send emoji messages**

Figure out how to send messages from your emoji picker to the message list in `Chat.vue`. Give these messages a different `type` value so you can render them in a different way than normal text messages in the following step.

Start from the `Compose.vue` component and see how it does things, though you're probably already familiar with it from the last exercise.

#### **3. Render emoji messages**

Finally, render emoji messages in the chat. They should now have a different `type` value than regular chat messages.

Head to `ChatMessage.vue` and look into conditional rendering. Don't worry if things don't look perfect - the main point of this exercise isn't CSS.

---

## Resources

You'll find the workshop slides [here.](https://xd.adobe.com/view/4a2bc58a-b5cf-45b3-ab5d-771d7ec9dd83-1f78/)

The following resources are pretty handy:

- [Composition API Docs](https://vuejs.org/api/#composition-api)
  - Start here for documentation.
- [Directives](https://vuejs.org/api/built-in-directives.html#v-text)
  - `v-for`, `v-if`, `v-model`, etc.
- [Comparing React Hooks with Vue Composition API](https://dev.to/voluntadpear/comparing-react-hooks-with-vue-composition-api-4b32)
  - This is a good read that goes into a fair amount of detail.
