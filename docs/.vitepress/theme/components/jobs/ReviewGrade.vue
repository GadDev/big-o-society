<script setup lang="ts">
import { computed, ref } from 'vue'
import { useTrainingProgress } from '../../composables/useTrainingProgress'

const props = defineProps<{ jobId: string }>()
const api = useTrainingProgress()
const progress = computed(() => api.ensure(props.jobId))
const graded = ref(false)

const due = computed(() =>
  !!progress.value.nextReviewAt &&
  new Date(progress.value.nextReviewAt).getTime() <= Date.now()
)

function grade(value: 1 | 2 | 3 | 4 | 5) {
  api.gradeReview(props.jobId, value)
  graded.value = true
}
</script>

<template>
  <section v-if="progress.solvedAt && due && !progress.masteredAt" class="bos-review-grade">
    <div class="bos-panel-label">REVIEW VERDICT</div>
    <h2>The file is due. How automatic was the solution?</h2>
    <p>Grade the recall after you re-solve the Job. Be strict—the schedule depends on it.</p>

    <div v-if="!graded" class="bos-review-grade__buttons">
      <button type="button" @click="grade(1)"><strong>1</strong><span>Blanked</span></button>
      <button type="button" @click="grade(2)"><strong>2</strong><span>Heavy help</span></button>
      <button type="button" @click="grade(3)"><strong>3</strong><span>Shaky</span></button>
      <button type="button" @click="grade(4)"><strong>4</strong><span>Solid</span></button>
      <button type="button" @click="grade(5)"><strong>5</strong><span>Automatic</span></button>
    </div>

    <p v-else class="bos-feedback bos-feedback--good">
      Verdict filed. The review queue has been recalculated.
    </p>
  </section>
</template>
