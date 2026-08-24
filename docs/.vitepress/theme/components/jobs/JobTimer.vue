<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from 'vue'
import { twoPointerJobById } from '../../data/jobs/two-pointers'
import { useTrainingProgress } from '../../composables/useTrainingProgress'

const props = defineProps<{ jobId: string }>()
const job = computed(() => twoPointerJobById[props.jobId])
const api = useTrainingProgress()

const seconds = ref(api.ensure(props.jobId).elapsedSeconds ?? 0)
const running = ref(false)
let timer: number | null = null

const formatted = computed(() => {
  const mins = Math.floor(seconds.value / 60)
  const secs = seconds.value % 60
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
})
const overtime = computed(() => seconds.value > job.value.targetMinutes * 60)

function start() {
  if (running.value || typeof window === 'undefined') return
  running.value = true
  api.recordAttempt(props.jobId)
  timer = window.setInterval(() => {
    seconds.value += 1
    if (seconds.value % 5 === 0) api.setElapsed(props.jobId, seconds.value)
  }, 1000)
}
function pause() {
  running.value = false
  if (timer !== null) window.clearInterval(timer)
  timer = null
  api.setElapsed(props.jobId, seconds.value)
}
function reset() {
  pause()
  seconds.value = 0
  api.setElapsed(props.jobId, 0)
}
onBeforeUnmount(pause)
</script>

<template>
  <section class="bos-job-timer" :class="{ 'is-overtime': overtime }">
    <div>
      <span class="bos-panel-label">JOB CLOCK</span>
      <strong>{{ formatted }}</strong>
      <small v-if="!overtime">TARGET {{ job.targetMinutes }}:00</small>
      <small v-else>TARGET WINDOW CLOSED — KEEP WORKING</small>
    </div>
    <div class="bos-job-timer__actions">
      <button v-if="!running" type="button" @click="start">{{ seconds ? 'Resume' : 'Start job' }}</button>
      <button v-else type="button" @click="pause">Pause</button>
      <button type="button" @click="reset">Reset</button>
    </div>
  </section>
</template>
