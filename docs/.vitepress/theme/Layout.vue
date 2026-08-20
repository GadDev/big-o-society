<script setup lang="ts">
import DefaultTheme from 'vitepress/theme-without-fonts'
import { useData } from 'vitepress'
import PatternHero from './components/PatternHero.vue'
import SocietySeal from './components/SocietySeal.vue'

const { Layout } = DefaultTheme
const { frontmatter } = useData()
</script>

<template>
  <Layout>
    <template #nav-bar-title-before>
      <SocietySeal />
    </template>

    <template #doc-before>
      <PatternHero
        v-if="frontmatter.pattern"
        :slug="frontmatter.pattern"
        :chapter="frontmatter.chapter"
        :tagline="frontmatter.tagline"
      />
    </template>

    <template #aside-outline-before>
      <div v-if="frontmatter.pattern" class="bos-case-file">
        <span>BIG O SOCIETY</span>
        <strong>CASE {{ String(frontmatter.chapter ?? '').padStart(2, '0') }}</strong>
      </div>
    </template>
  </Layout>
</template>
