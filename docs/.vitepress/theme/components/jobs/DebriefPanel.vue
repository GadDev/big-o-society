<script setup lang="ts">
import { computed, ref } from 'vue'
import { twoPointerJobById } from '../../data/jobs/two-pointers'
import { useTrainingProgress } from '../../composables/useTrainingProgress'

const props = defineProps<{ jobId: string }>()
const job = computed(() => twoPointerJobById[props.jobId])
const api = useTrainingProgress()
const progress = computed(() => api.ensure(props.jobId))

const reason = ref(progress.value.debrief.reason)
const invariant = ref(progress.value.debrief.invariant)
const time = ref(progress.value.debrief.time)
const space = ref(progress.value.debrief.space)
const justClosed = ref(false)

function sync() {
  api.setDebrief(props.jobId, {
    reason: reason.value,
    invariant: invariant.value,
    time: time.value,
    space: space.value
  })
}

function closeCase() {
  sync()
  justClosed.value = api.closeCase(props.jobId, job.value.targetMinutes)
}
</script>

<template>
  <section class="bos-debrief">
    <div class="bos-panel-label">DEBRIEF</div>
    <p>Green tests are evidence of correctness. The debrief is evidence that you understood why.</p>

    <label>
      <span>Why did you recognize this pattern?</span>
      <textarea v-model="reason" rows="3" @blur="sync" placeholder="I think this is Two Pointers because…"></textarea>
    </label>

    <label>
      <span>State the invariant / why the pointer movement is safe.</span>
      <textarea v-model="invariant" rows="4" @blur="sync" placeholder="At every step…"></textarea>
    </label>

    <div class="bos-field-row">
      <label>
        <span>Time complexity</span>
        <input v-model="time" @blur="sync" placeholder="O(n)" />
      </label>
      <label>
        <span>Space complexity</span>
        <input v-model="space" @blur="sync" placeholder="O(1)" />
      </label>
    </div>

    <div class="bos-debrief__prompts">
      <strong>INTERVIEWER QUESTIONS</strong>
      <ol>
        <li v-for="question in job.debrief" :key="question">{{ question }}</li>
      </ol>
    </div>

    <button
      v-if="!progress.solvedAt"
      class="bos-close-case"
      type="button"
      :disabled="!api.canClose(jobId)"
      @click="closeCase"
    >
      CLOSE THE CASE
    </button>

    <p v-if="!progress.solvedAt && !api.canClose(jobId)" class="bos-feedback">
      To close the case: clear every exhibit and complete all four debrief fields.
    </p>

    <p v-if="justClosed" class="bos-feedback bos-feedback--good">
      Case closed. First review scheduled for +1 day.
    </p>
  </section>
</template>
