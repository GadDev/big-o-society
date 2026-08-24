<script setup lang="ts">
import { computed, ref } from 'vue'
import { useTrainingProgress } from '../../composables/useTrainingProgress'
import { twoPointerJobById } from '../../data/jobs/two-pointers'

const props = defineProps<{ jobId: string; command?: string }>()
const job = computed(() => twoPointerJobById[props.jobId])
const api = useTrainingProgress()
const checked = ref<boolean[]>(job.value.tests.map(() => false))

const allCleared = computed(() => checked.value.every(Boolean))

function toggle(index: number) {
  checked.value[index] = !checked.value[index]
  checked.value = [...checked.value]
  api.setTestsCleared(props.jobId, allCleared.value)
}
</script>

<template>
  <section class="bos-evidence">
    <div class="bos-evidence__head">
      <div>
        <span class="bos-panel-label">EVIDENCE BOARD</span>
        <p>Run the actual Vitest suite in your terminal, then clear each exhibit it proves.</p>
      </div>
      <code>{{ command ?? `npm test -- ${job.slug}` }}</code>
    </div>

    <div class="bos-evidence__list">
      <button
        v-for="(test, index) in job.tests"
        :key="test"
        type="button"
        class="bos-evidence-row"
        :class="{ 'is-cleared': checked[index] }"
        @click="toggle(index)"
      >
        <span class="bos-evidence-row__mark">{{ checked[index] ? '✓' : '×' }}</span>
        <span>EXHIBIT {{ String.fromCharCode(65 + index) }} — {{ test }}</span>
        <strong>{{ checked[index] ? 'CLEARED' : 'UNRESOLVED' }}</strong>
      </button>
    </div>

    <div class="bos-evidence__meter">
      <span>{{ checked.filter(Boolean).length }} / {{ checked.length }} CLEARED</span>
      <div><i :style="{ width: `${(checked.filter(Boolean).length / checked.length) * 100}%` }"></i></div>
    </div>
  </section>
</template>
