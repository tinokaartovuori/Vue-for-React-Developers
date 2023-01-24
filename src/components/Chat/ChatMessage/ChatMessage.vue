<script setup>
// A message in the chat.
import { inject } from "vue";
import ChatBubble from "./ChatBubble.vue";
import Timestamp from "../../Timestamp.vue";
import useIcons from "../../../compositionFunctions/useIcons";

const icons = useIcons();
const props = defineProps({
  message: {
    type: Object,
    default: {
      type: null,
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
  <ChatBubble v-if="props.message.type === 'text'" :direction="direction">
    {{ message.content }}
    <Timestamp :date="props.message.timestamp" />
  </ChatBubble>

  <ChatBubble v-if="props.message.type === 'emoji'" :direction="direction">
    <img :src="icons[props.message.content]" :alt="props.message.content" />
    <Timestamp :date="props.message.timestamp" />
  </ChatBubble>
</template>

<style scoped>
.timestamp {
  display: block;
  text-align: right;
}
img {
  width: 24px;
  height: 24px;
}
</style>
