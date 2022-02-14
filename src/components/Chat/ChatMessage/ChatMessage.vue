<script setup>
// A message in the chat.
import { inject } from "vue";
import ChatBubble from "./ChatBubble.vue";
import Timestamp from "../../Timestamp.vue";

const props = defineProps({
  message: {
    type: Object,
    default: {
      userId: null,
      direction: null,
      timestamp: null,
    },
  },
});

// Inject the provided userId value into this component
const userId = inject("userId");

// Which direction is the bubble originating from?
const direction = props.message.senderId === userId ? "right" : "left";
</script>

<template>
  <ChatBubble :direction="direction">
    {{ message.content }}
    <Timestamp :date="props.message.timestamp" />
  </ChatBubble>
</template>

<style scoped>
.timestamp {
  display: block;
  text-align: right;
}
</style>
