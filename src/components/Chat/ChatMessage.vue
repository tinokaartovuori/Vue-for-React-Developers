<script setup>
import { inject } from "vue";
import ChatBubble from "./ChatBubble.vue";
import Timestamp from "./Timestamp.vue";

const props = defineProps({
  message: Object,
});

// Inject the provided userId value into this component
const userId = inject("userId");

// Which direction is the bubble originating from?
const direction = props.message.senderId === userId ? "right" : "left";
</script>

<template>
  <ChatBubble :direction="direction">
    <slot />
    <Timestamp :date="props.message.timestamp" />
  </ChatBubble>
</template>

<style scoped>
.timestamp {
  display: block;
  text-align: right;
}
</style>
