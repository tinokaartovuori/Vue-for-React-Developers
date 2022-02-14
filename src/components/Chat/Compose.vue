<script setup>
import { ref } from "vue";
import Input from "../generic/form/Input.vue";
import Button from "../generic/form/Button.vue";

// Store the text input value
const text = ref("");

/**
 * Handle changes to the text input value
 * @param {String} newValue New text value
 */
const onChange = (newValue) => {
  text.value = newValue;
};

// Components emit events. Parent components listen to these events. Just like the DOM!
const emit = defineEmits(["send"]);

/**
 * Sends the message.
 */
function send() {
  emit("send", text.value);
  text.value = "";
}
</script>

<template>
  <div class="compose">
    <Input
      :value="text"
      placeholder="Type a message"
      @change="onChange"
      @keydown.enter="send"
    />
    <Button icon="send" @click="send" />
  </div>
</template>

<style lang="sass" scoped>
.compose
  display: flex
  justify-content: space-between
  align-items: center
  gap: 0.5rem
</style>
