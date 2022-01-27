<script setup>
import { ref, provide } from "vue";
import CenterOnPage from "../generic/containers/CenterOnPage.vue";
import ChatMessage from "./ChatMessage.vue";

const userId = 1111;
const messages = ref([
  {
    content: "Hello this is tech support",
    senderId: 1234,
    timestamp: new Date("2022-01-26T11:37:22.947Z"),
  },
  {
    content: "I have sent my password to you",
    senderId: 1111,
    timestamp: new Date("2022-01-26T11:37:42.947Z"),
  },
  {
    content: "It is hunter2",
    senderId: 1111,
    timestamp: new Date("2022-01-26T11:37:47.947Z"),
  },
  {
    content: "Sir I only see *******",
    senderId: 1234,
    timestamp: new Date("2022-01-26T11:38:22.947Z"),
  },
]);

// Provide the userId value to all components in this tree
provide("userId", userId);
</script>

<template>
  <CenterOnPage>
    <div class="chat shadow-2">
      <ChatMessage v-for="message in messages" :message="message">
        {{ message.content }}
      </ChatMessage>
    </div>
  </CenterOnPage>
</template>

<style scoped>
.chat {
  width: 100%;
  max-width: 500px;
  min-height: 50vh;
  margin: 3rem 1rem;
  padding: 2rem;
  border-radius: 7px;
  background: radial-gradient(
      ellipse farthest-side at 76% 77%,
      rgba(245, 228, 212, 0.25) 4%,
      rgba(255, 255, 255, 0) calc(4% + 1px)
    ),
    radial-gradient(circle at 76% 40%, #fef6ec 4%, rgba(255, 255, 255, 0) 4.18%),
    linear-gradient(135deg, #ff0000 0%, #000036 100%),
    radial-gradient(ellipse at 28% 0%, #ffcfac 0%, rgba(98, 149, 144, 0.5) 100%),
    linear-gradient(180deg, #cd6e8a 0%, #f5eab0 69%, #d6c8a2 70%, #a2758d 100%);
  background-blend-mode: normal, normal, screen, overlay, normal;

  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
