<script setup lang="ts">
import { computed } from 'vue'
import { twoPointerJobById } from '../../data/jobs/two-pointers'
const props = defineProps<{ jobId: string }>()
const job = computed(() => twoPointerJobById[props.jobId])
</script>

<template>
  <section v-if="job" class="bos-briefing">
    <div class="bos-briefing__stamp">BRIEFING</div>
    <p class="bos-briefing__story">{{ job.briefing }}</p>
    <div class="bos-briefing__mission">
      <span>THE OBJECTIVE</span>
      <p>{{ job.mission }}</p>
    </div>
    <div class="bos-signature">
      <span>FUNCTION SIGNATURE</span>
      <code>{{ job.signature }}</code>
    </div>
  </section>
</template>
