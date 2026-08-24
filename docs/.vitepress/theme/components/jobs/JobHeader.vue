<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'
import { twoPointerJobById } from '../../data/jobs/two-pointers'
import twoPointerJobHeaderImages from '../../data/jobs/two-pointer-job-header-images'
import { useTrainingProgress } from '../../composables/useTrainingProgress'

const props = defineProps<{ jobId: string }>()

const job = computed(() => twoPointerJobById[props.jobId])
const progressApi = useTrainingProgress()
const progress = computed(() => progressApi.ensure(props.jobId))

const status = computed(() => {
  const r = progress.value
  if (r.masteredAt) return 'MASTERED'
  if (r.nextReviewAt && new Date(r.nextReviewAt).getTime() <= Date.now()) return 'REVIEW DUE'
  if (r.solvedAt) return 'CASE CLOSED'
  return 'OPEN'
})

const posterUrl = computed(() => {
  const path = twoPointerJobHeaderImages[props.jobId]
  return path ? withBase(path) : ''
})
</script>

<template>
  <header v-if="job" class="bos-job-header">
    <figure v-if="posterUrl" class="bos-job-header__poster">
      <img
        class="bos-job-header__poster-img"
        :src="posterUrl"
        :alt="`${job.codename} poster`"
        loading="lazy"
      />
    </figure>

    <div class="bos-job-header__panel">
      <div class="bos-job-header__meta">
        <span>BIG O SOCIETY</span>
        <span>CASE 01 · JOB {{ String(job.day).padStart(2, '0') }}</span>
      </div>

      <div class="bos-job-header__title">
        <div class="bos-job-header__title-copy">
          <span class="bos-job-header__eyebrow">THE JOB</span>
          <h1>{{ job.codename }}</h1>
          <p>{{ job.technicalTitle }}</p>
        </div>

        <div class="bos-job-status" :data-status="status">
          <span>STATUS</span>
          <strong>{{ status }}</strong>
        </div>
      </div>

      <div class="bos-job-header__facts">
        <div>
          <span>HEAT</span>
          <strong>{{ job.heat }}</strong>
          <small>{{ job.difficulty }}</small>
        </div>
        <div>
          <span>TARGET WINDOW</span>
          <strong>{{ job.targetMinutes }} MIN</strong>
          <small>Going overtime is allowed.</small>
        </div>
        <div>
          <span>PATTERN</span>
          <strong>{{ progress.patternGuessCorrect ? 'TWO POINTERS' : '???' }}</strong>
          <small>Identify it before coding.</small>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.bos-job-header {
  margin: 8px 0 24px;
  overflow: hidden;
  border: 1px solid rgba(231, 213, 173, 0.18);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.36);
}

.bos-job-header__poster {
  margin: 0;
  overflow: hidden;
}

.bos-job-header__poster-img {
  display: block;
  width: 100%;
  height: 360px;
  object-fit: cover;
  object-position: center center;
}

.bos-job-header__panel {
  position: relative;
  width: 100%;
  padding: 28px 30px 24px;
  background-color: #14110d;
}

.bos-job-header__panel::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  background:
    radial-gradient(circle at 82% 16%, rgba(194, 58, 41, 0.28), transparent 18rem),
    radial-gradient(circle at 20% 85%, rgba(216, 154, 43, 0.14), transparent 16rem);
  pointer-events: none;
}

.bos-job-header__meta,
.bos-job-header__title,
.bos-job-header__facts {
  position: relative;
  z-index: 1;
}

.bos-job-header__meta {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  color: #b29b74;
  font-family: 'Arial Narrow', Arial, sans-serif;
  font-size: 10px;
  font-weight: 900;
  letter-spacing: .18em;
}

.bos-job-header__title {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 24px;
  margin-top: 28px;
}

.bos-job-header__title-copy {
  max-width: min(800px, 76%);
}

.bos-job-header__eyebrow {
  color: #ef6f46;
  font-family: 'Arial Narrow', Arial, sans-serif;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: .2em;
}

.bos-job-header h1 {
  margin: 4px 0 3px !important;
  color: #f0c26a !important;
  text-shadow: 0 4px 18px rgba(0, 0, 0, 0.55);
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif !important;
  font-size: clamp(48px, 7vw, 82px) !important;
  line-height: .9 !important;
  letter-spacing: .01em !important;
  text-transform: uppercase;
}

.bos-job-header__title p {
  margin: 0;
  color: #eadcc1;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.55);
  font-family: 'Arial Narrow', Arial, sans-serif;
  font-size: 16px;
  letter-spacing: .04em;
}

.bos-job-status {
  min-width: 144px;
  padding: 12px 14px;
  text-align: right;
  border: 1px solid rgba(216, 154, 43, 0.24);
  background: rgba(8, 7, 6, 0.54);
  transform: rotate(1deg);
  backdrop-filter: blur(3px);
}

.bos-job-status span,
.bos-job-status strong {
  display: block;
  font-family: 'Arial Narrow', Arial, sans-serif;
}

.bos-job-status span {
  color: #9c8970;
  font-size: 9px;
  letter-spacing: .17em;
}

.bos-job-status strong {
  margin-top: 2px;
  color: #f0c26a;
  font-size: 16px;
  letter-spacing: .08em;
}

.bos-job-status[data-status="REVIEW DUE"] strong { color: #f06b54; }
.bos-job-status[data-status="MASTERED"] strong { color: #8dc491; }

.bos-job-header__facts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 28px;
  border-top: 1px solid rgba(231, 213, 173, 0.18);
  background: linear-gradient(180deg, rgba(8, 7, 6, 0.18), rgba(8, 7, 6, 0.48));
}

.bos-job-header__facts > div {
  padding: 16px 16px 0 0;
}

.bos-job-header__facts span,
.bos-job-header__facts strong,
.bos-job-header__facts small {
  display: block;
}

.bos-job-header__facts span {
  color: #a49278;
  font-family: 'Arial Narrow', Arial, sans-serif;
  font-size: 9px;
  font-weight: 900;
  letter-spacing: .17em;
}

.bos-job-header__facts strong {
  margin-top: 2px;
  color: #f4ead2;
  text-shadow: 0 2px 8px rgba(0,0,0,.45);
  font-family: 'Arial Narrow', Arial, sans-serif;
  font-size: 15px;
}

.bos-job-header__facts small {
  margin-top: 2px;
  color: #c0b193;
  font-family: 'Arial Narrow', Arial, sans-serif;
}

@media (max-width: 760px) {
  .bos-job-header__poster-img {
    height: 220px;
  }

  .bos-job-header__title {
    align-items: start;
    flex-direction: column;
  }

  .bos-job-header__title-copy {
    max-width: 100%;
  }

  .bos-job-status {
    text-align: left;
  }

  .bos-job-header__facts {
    grid-template-columns: 1fr;
  }
}
</style>
