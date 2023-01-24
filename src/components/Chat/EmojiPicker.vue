<template>
  <div class="emoji-picker">
    <Button
      v-for="(path, emoji) in icons"
      :icon="emoji"
      :alt="emoji"
      @click="buttonPressed(emoji)"
    >
    </Button>
  </div>
</template>

<script setup>
import Button from "../generic/form/Button.vue";
import useIcons from "../../compositionFunctions/useIcons.js";

const icons = useIcons();
// Delete the send icon
delete icons.send;

// Components emit events. Parent components listen to these events. Just like the DOM!
const emit = defineEmits(["send"]);

function buttonPressed(emoji) {
  emit("send", { type: "emoji", content: emoji });
}
</script>

<style lang="sass" scoped>
.emoji-picker
  background-color: #fbfaf8
  width: fit-content
  border-radius: 99rem
  padding: 0 0.5rem
  .button
    box-shadow: none
</style>
