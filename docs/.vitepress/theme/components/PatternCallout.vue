<script setup lang="ts">
withDefaults(
  defineProps<{
    label?: string
    tone?: 'evidence' | 'warning' | 'memory'
  }>(),
  {
    label: 'EVIDENCE',
    tone: 'evidence'
  }
)
</script>

<template>
  <aside class="bos-callout" :class="`bos-callout--${tone}`">
    <span class="bos-callout__label">{{ label }}</span>
    <div class="bos-callout__content"><slot /></div>
  </aside>
</template>
