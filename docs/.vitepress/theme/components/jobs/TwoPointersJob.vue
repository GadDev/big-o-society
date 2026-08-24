<script setup lang="ts">
import { computed } from 'vue'
import { twoPointerJobById } from '../../data/jobs/two-pointers'
import JobHeader from './JobHeader.vue'
import BriefingCard from './BriefingCard.vue'
import PatternSuspicion from './PatternSuspicion.vue'
import JobTimer from './JobTimer.vue'
import HintLocker from './HintLocker.vue'
import EvidenceBoard from './EvidenceBoard.vue'
import DebriefPanel from './DebriefPanel.vue'
import CaseSolvedStamp from './CaseSolvedStamp.vue'
import ReviewGrade from './ReviewGrade.vue'

const props = defineProps<{ jobId: string }>()
const job = computed(() => twoPointerJobById[props.jobId])
</script>

<template>
  <div v-if="job" class="bos-job">
    <JobHeader :job-id="jobId" />
    <BriefingCard :job-id="jobId" />

    <section class="bos-job-section">
      <PatternSuspicion :job-id="jobId" />
    </section>

    <section class="bos-job-section bos-job-section--split">
      <JobTimer :job-id="jobId" />
      <HintLocker :job-id="jobId" />
    </section>

    <section class="bos-job-section">
      <div class="bos-panel-label">THE DETAILS</div>

      <h2>Constraints</h2>
      <ul>
        <li v-for="item in job.constraints" :key="item">{{ item }}</li>
      </ul>

      <h2>Examples</h2>
      <div class="bos-job-examples">
        <div v-for="example in job.examples" :key="example.input">
          <span>INPUT</span>
          <code>{{ example.input }}</code>
          <span>EXPECTED</span>
          <code>{{ example.output }}</code>
        </div>
      </div>
    </section>

    <section class="bos-job-section">
      <EvidenceBoard :job-id="jobId" />
    </section>

    <section class="bos-job-section">
      <DebriefPanel :job-id="jobId" />
    </section>

    <ReviewGrade :job-id="jobId" />
    <CaseSolvedStamp :job-id="jobId" />
  </div>
</template>
