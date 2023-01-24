<template>
  <div>
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
