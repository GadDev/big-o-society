<script setup lang="ts">
import { computed, ref } from 'vue'
import { twoPointerJobById } from '../../data/jobs/two-pointers'
import { useTrainingProgress } from '../../composables/useTrainingProgress'

const props = defineProps<{ jobId: string }>()
const job = computed(() => twoPointerJobById[props.jobId])
const api = useTrainingProgress()
const revealed = ref(0)

function reveal() {
  if (revealed.value >= job.value.hints.length) return
  revealed.value += 1
  api.useHint(props.jobId)
}
</script>

<template>
  <section class="bos-hints">
    <div class="bos-panel-label">THE INFORMANT</div>
    <p>Use hints progressively. Each reveal is recorded because struggle is part of the training signal.</p>

    <ol v-if="revealed">
      <li v-for="hint in job.hints.slice(0, revealed)" :key="hint">{{ hint }}</li>
    </ol>

    <button
      v-if="revealed < job.hints.length"
      class="bos-job-button bos-job-button--ghost"
      type="button"
      @click="reveal"
    >
      Reveal hint {{ revealed + 1 }}
    </button>
    <span v-else class="bos-hints__empty">No more information. You're on your own, detective.</span>
  </section>
</template>
