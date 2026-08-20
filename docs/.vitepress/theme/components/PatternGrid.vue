<script setup lang="ts">
import { withBase } from 'vitepress'
import { patterns } from '../data/patterns'
</script>

<template>
  <div class="bos-pattern-grid">
    <a
      v-for="pattern in patterns"
      :key="pattern.slug"
      class="bos-pattern-card"
      :href="withBase(pattern.href)"
    >
      <div class="bos-pattern-card__image">
        <img :src="withBase(pattern.image)" :alt="`${pattern.title} poster`" loading="lazy" />
        <span class="bos-pattern-card__chapter">
          {{ String(pattern.chapter).padStart(2, '0') }}
        </span>
      </div>

      <div class="bos-pattern-card__body">
        <span class="bos-pattern-card__label">CASE FILE</span>
        <h2>{{ pattern.title }}</h2>
        <p>{{ pattern.tagline }}</p>
      </div>
    </a>
  </div>
</template>
