<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'
import { patternBySlug } from '../data/patterns'

const props = defineProps<{
  slug: string
  chapter?: number
  tagline?: string
}>()

const pattern = computed(() => patternBySlug[props.slug])
const chapter = computed(() => props.chapter ?? pattern.value?.chapter ?? 0)
const tagline = computed(() => props.tagline ?? pattern.value?.tagline ?? '')
const poster = computed(() => (pattern.value ? withBase(pattern.value.image) : ''))
</script>

<template>
  <section v-if="pattern" class="bos-pattern-hero" :style="{ '--poster': `url(${poster})` }">
    <div class="bos-pattern-hero__poster" aria-hidden="true">
      <img :src="poster" alt="" />
    </div>

    <div class="bos-pattern-hero__copy">
      <div class="bos-kicker">
        <span>BIG O SOCIETY</span>
        <span class="bos-kicker__line"></span>
        <span>CASE {{ String(chapter).padStart(2, '0') }}</span>
      </div>

      <h1>{{ pattern.title }}</h1>
      <p class="bos-tagline">{{ tagline }}</p>
      <p class="bos-description">{{ pattern.description }}</p>

      <div class="bos-evidence-strip" aria-hidden="true">
        <span>RECOGNIZE</span>
        <i></i>
        <span>REASON</span>
        <i></i>
        <span>SOLVE</span>
      </div>
    </div>
  </section>
</template>
