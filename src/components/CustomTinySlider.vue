<template>
  <component :is="is ?? 'div'" :id="id" v-bind="$attrs">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { type TinySliderSettings } from 'tiny-slider'
import { tns } from 'tiny-slider/src/tiny-slider'

type CustomTinySliderPropType = {
  is?: string
  id: string
  settings?: TinySliderSettings
}

const props = defineProps<CustomTinySliderPropType>()

const slider = ref()

onMounted(() => {
  slider.value = tns({
    container: `#${props.id}`,
    controlsText: [
      '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"></path></svg>',
      '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path></svg>'
    ],
    ...props.settings
  })
})
</script>
