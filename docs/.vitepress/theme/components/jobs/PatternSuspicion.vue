<script setup lang="ts">
import { computed, ref } from 'vue'
import { useTrainingProgress } from '../../composables/useTrainingProgress'

const props = defineProps<{ jobId: string }>()
const api = useTrainingProgress()
const progress = computed(() => api.ensure(props.jobId))
const guess = ref('')
const reason = ref('')
const result = ref<'correct' | 'wrong' | null>(null)

function submit() {
  if (!guess.value) return
  const normalized = guess.value.toLowerCase().replace(/[^a-z]/g, '')
  const correct = normalized.includes('twopointer')
  api.recordPatternGuess(props.jobId, correct)
  result.value = correct ? 'correct' : 'wrong'
}
</script>

<template>
  <section class="bos-suspicion">
    <div class="bos-panel-label">PATTERN SUSPICION</div>

    <template v-if="!progress.patternGuessCorrect">
      <p>Before touching the code, name the pattern you suspect and explain the tell.</p>

      <div class="bos-field-row">
        <label>
          <span>I think this is…</span>
          <input v-model="guess" placeholder="Pattern name" @keyup.enter="submit" />
        </label>
        <label class="bos-field-row__wide">
          <span>…because</span>
          <input v-model="reason" placeholder="What clue in the problem gave it away?" @keyup.enter="submit" />
        </label>
      </div>

      <button class="bos-job-button" type="button" @click="submit">File suspicion</button>

      <p v-if="result === 'wrong'" class="bos-feedback bos-feedback--bad">
        Not confirmed. Re-read the constraints and ask what information lets you eliminate work.
      </p>
    </template>

    <div v-else class="bos-confirmed">
      <span>✓ PATTERN CONFIRMED</span>
      <strong>TWO POINTERS</strong>
      <p>{{ reason || 'You identified the move before writing the solution.' }}</p>
    </div>
  </section>
</template>
