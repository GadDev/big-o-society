<script setup lang="ts">
import { withBase } from 'vitepress'
import PatternGrid from './PatternGrid.vue'
</script>

<template>
  <main class="bos-home">
    <section class="bos-home-hero">
      <div class="bos-home-hero__noise" aria-hidden="true"></div>
      <div class="bos-home-hero__content">
        <p class="bos-home-hero__eyebrow">THE ALGORITHM UNDERWORLD PRESENTS</p>
        <h1>
          <span>BIG O</span>
          <strong>SOCIETY</strong>
        </h1>
        <p class="bos-home-hero__tagline">Recognize the pattern. Crack the problem.</p>
        <div class="bos-home-hero__rule"></div>
        <p class="bos-home-hero__intro">
          Fourteen case files. One daily ritual. No random grinding.
          Learn the move, understand why it works, then prove you can use it under pressure.
        </p>
        <div class="bos-home-hero__actions">
          <a class="bos-button bos-button--primary" :href="withBase('/patterns/')">Open the case files</a>
          <a class="bos-button bos-button--ghost" :href="withBase('/curriculum')">See the curriculum</a>
        </div>
      </div>
    </section>

    <section class="bos-home-section">
      <div class="bos-section-heading">
        <span>THE CASE FILES</span>
        <h2>Fourteen patterns. Learn the tells.</h2>
      </div>
      <PatternGrid />
    </section>

    <section class="bos-ritual">
      <div class="bos-ritual__number">30–45</div>
      <div>
        <span class="bos-ritual__label">MINUTES A DAY</span>
        <h2>The Society ritual</h2>
        <ol>
          <li><strong>Recall.</strong> Explain yesterday’s pattern without looking.</li>
          <li><strong>Recognize.</strong> Name today’s pattern before you code.</li>
          <li><strong>Implement.</strong> Build it from scratch.</li>
          <li><strong>Test.</strong> Make Vitest green and attack edge cases.</li>
          <li><strong>Explain.</strong> State the invariant and complexity.</li>
          <li><strong>Remember.</strong> Keep one trigger phrase.</li>
        </ol>
      </div>
    </section>
  </main>
</template>
