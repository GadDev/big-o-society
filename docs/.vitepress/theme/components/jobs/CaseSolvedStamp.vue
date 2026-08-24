<script setup lang="ts">
import { computed } from 'vue'
import { twoPointerJobById } from '../../data/jobs/two-pointers'
import { REVIEW_INTERVALS, useTrainingProgress } from '../../composables/useTrainingProgress'

const props = defineProps<{ jobId: string }>()
const job = computed(() => twoPointerJobById[props.jobId])
const api = useTrainingProgress()
const progress = computed(() => api.ensure(props.jobId))

const nextLabel = computed(() => {
  const r = progress.value
  if (r.masteredAt) return 'MASTERED'
  if (!r.nextReviewAt) return ''
  const day = REVIEW_INTERVALS[Math.min(r.reviewStage, REVIEW_INTERVALS.length - 1)]
  return `+${day}-DAY REVIEW`
})
</script>

<template>
  <section v-if="progress.solvedAt" class="bos-case-solved">
    <div class="bos-case-solved__stamp" :class="{ 'is-mastered': progress.masteredAt }">
      {{ progress.masteredAt ? 'MASTERED' : 'CASE SOLVED' }}
    </div>

    <div class="bos-case-solved__details">
      <span>JOB {{ String(job.day).padStart(2, '0') }} CLOSED</span>
      <strong>{{ job.codename }}</strong>
      <ul>
        <li>Pattern: Two Pointers</li>
        <li v-if="progress.bestSeconds">Best time: {{ Math.floor(progress.bestSeconds / 60) }}m {{ progress.bestSeconds % 60 }}s</li>
        <li>Hints used: {{ progress.hintsUsed }}</li>
        <li v-if="nextLabel">Next: {{ nextLabel }}</li>
      </ul>
    </div>
  </section>
</template>
