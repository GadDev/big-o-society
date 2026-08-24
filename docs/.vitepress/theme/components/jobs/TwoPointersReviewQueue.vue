<script setup lang="ts">
import { computed, ref } from 'vue'
import { withBase } from 'vitepress'
import { twoPointerJobs } from '../../data/jobs/two-pointers'
import { REVIEW_INTERVALS, useTrainingProgress } from '../../composables/useTrainingProgress'

const api = useTrainingProgress()
const now = ref(Date.now())

const rows = computed(() => twoPointerJobs.map((job) => {
  const r = api.ensure(job.id)
  const due = !!r.nextReviewAt && new Date(r.nextReviewAt).getTime() <= now.value
  const stageDays = REVIEW_INTERVALS[Math.min(r.reviewStage, REVIEW_INTERVALS.length - 1)]

  let status = 'OPEN'
  if (r.masteredAt) status = 'MASTERED'
  else if (due && r.weakness >= 30) status = 'WEAK · REVIEW DUE'
  else if (due) status = 'REVIEW DUE'
  else if (r.weakness >= 30 && r.solvedAt) status = 'WEAK'
  else if (r.solvedAt) status = 'LEARNING'

  return { job, progress: r, due, stageDays, status }
}))

const dueRows = computed(() => rows.value.filter((x) => x.due))
const weakRows = computed(() => rows.value.filter((x) => x.progress.weakness >= 30 && !x.progress.masteredAt))
const mastered = computed(() => rows.value.filter((x) => x.progress.masteredAt).length)

function dateLabel(iso: string | null) {
  if (!iso) return '—'
  const date = new Date(iso)
  const diffDays = Math.ceil((date.getTime() - now.value) / (24 * 60 * 60 * 1000))
  if (diffDays <= 0) return 'DUE NOW'
  if (diffDays === 1) return 'tomorrow'
  return `in ${diffDays} days`
}
</script>

<template>
  <div class="bos-progress">
    <section class="bos-progress-summary">
      <div><span>DUE NOW</span><strong>{{ dueRows.length }}</strong></div>
      <div><span>WEAK FILES</span><strong>{{ weakRows.length }}</strong></div>
      <div><span>MASTERED</span><strong>{{ mastered }}/10</strong></div>
    </section>

    <section v-if="dueRows.length" class="bos-review-queue">
      <div class="bos-panel-label">TODAY'S REVIEW QUEUE</div>
      <a v-for="{ job, stageDays, progress } in dueRows" :key="job.id" :href="withBase(job.href)">
        <div>
          <span>JOB {{ String(job.day).padStart(2, '0') }}</span>
          <strong>{{ job.codename }}</strong>
        </div>
        <div>
          <span>REVIEW</span>
          <strong>+{{ stageDays }} DAY</strong>
          <small v-if="progress.weakness >= 30">weakness {{ progress.weakness }}</small>
        </div>
      </a>
    </section>

    <section class="bos-progress-table">
      <div class="bos-panel-label">TWO POINTERS DOSSIER</div>

      <a v-for="{ job, progress, status } in rows" :key="job.id" :href="withBase(job.href)" class="bos-progress-row">
        <span>{{ String(job.day).padStart(2, '0') }}</span>
        <div>
          <strong>{{ job.codename }}</strong>
          <small>{{ job.technicalTitle }}</small>
        </div>
        <em :data-status="status">{{ status }}</em>
        <div>
          <span>NEXT</span>
          <strong>{{ dateLabel(progress.nextReviewAt) }}</strong>
        </div>
        <div>
          <span>WEAKNESS</span>
          <strong>{{ progress.weakness }}</strong>
        </div>
      </a>
    </section>
  </div>
</template>
