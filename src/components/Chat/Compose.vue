<script setup>
import { ref } from "vue";
import Input from "../generic/form/Input.vue";
import Button from "../generic/form/Button.vue";

// Store the text input value. This is a reactive 'state' variable.
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
 * Sends a text message.
 */
function send() {
  // Hint: Call 'emit' with the correct arguments.
  //       Finally, clear the text input.
}
</script>

<template>
  <div class="compose">
    <div class="message-row">
      <!-- Hint: See if you could send the message by pressing the enter key in the text field.
                 https://vuejs.org/guide/essentials/event-handling.html#key-modifiers
      -->
      <Input :value="text" placeholder="Type a message" @change="onChange" />

      <!-- Hint: Call the 'send()' function when the button emits a 'click' event. -->
      <Button icon="send" />
    </div>
  </div>
</template>

<style scoped>
.message-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
}
/* This targets a nested component with scoped styles*/
.compose >>> .emoji-selector {
  margin-bottom: 0.5rem;
}
</style>
