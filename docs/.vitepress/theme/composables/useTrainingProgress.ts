import { computed, ref } from 'vue'

const STORAGE_KEY = 'big-o-society:training-progress:v1'
const DAY = 24 * 60 * 60 * 1000
export const REVIEW_INTERVALS = [1, 3, 7, 14, 30] as const

export type JobProgress = {
  jobId: string
  attempts: number
  patternGuesses: number
  patternGuessCorrect: boolean | null
  hintsUsed: number
  testsCleared: boolean
  elapsedSeconds: number | null
  bestSeconds: number | null
  debrief: {
    reason: string
    invariant: string
    time: string
    space: string
  }
  solvedAt: string | null
  reviewStage: number
  nextReviewAt: string | null
  masteredAt: string | null
  weakness: number
  lastReviewedAt: string | null
}

const records = ref<Record<string, JobProgress>>({})
let loaded = false

function blank(jobId: string): JobProgress {
  return {
    jobId,
    attempts: 0,
    patternGuesses: 0,
    patternGuessCorrect: null,
    hintsUsed: 0,
    testsCleared: false,
    elapsedSeconds: null,
    bestSeconds: null,
    debrief: { reason: '', invariant: '', time: '', space: '' },
    solvedAt: null,
    reviewStage: 0,
    nextReviewAt: null,
    masteredAt: null,
    weakness: 0,
    lastReviewedAt: null
  }
}

function load() {
  if (loaded || typeof window === 'undefined') return
  loaded = true
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (raw) records.value = JSON.parse(raw)
  } catch {
    records.value = {}
  }
}

function save() {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(records.value))
}

function ensure(jobId: string) {
  load()
  if (!records.value[jobId]) records.value[jobId] = blank(jobId)
  return records.value[jobId]
}

function mutate(jobId: string, fn: (record: JobProgress) => void) {
  const record = ensure(jobId)
  fn(record)
  records.value = { ...records.value, [jobId]: { ...record } }
  save()
}

function addDays(date: Date, days: number) {
  return new Date(date.getTime() + days * DAY).toISOString()
}

function weaknessDelta(record: JobProgress, targetMinutes: number) {
  let value = record.hintsUsed * 7
  if (record.patternGuessCorrect === false) value += 10
  if (record.elapsedSeconds && record.elapsedSeconds > targetMinutes * 60) value += 8
  return Math.min(35, value)
}

export function useTrainingProgress() {
  load()

  function recordAttempt(jobId: string) {
    mutate(jobId, (r) => { r.attempts += 1 })
  }

  function recordPatternGuess(jobId: string, correct: boolean) {
    mutate(jobId, (r) => {
      r.patternGuesses += 1
      r.patternGuessCorrect = correct
      if (!correct) r.weakness = Math.min(100, r.weakness + 8)
    })
  }

  function useHint(jobId: string) {
    mutate(jobId, (r) => {
      r.hintsUsed += 1
      r.weakness = Math.min(100, r.weakness + 4)
    })
  }

  function setTestsCleared(jobId: string, cleared: boolean) {
    mutate(jobId, (r) => { r.testsCleared = cleared })
  }

  function setElapsed(jobId: string, seconds: number) {
    mutate(jobId, (r) => {
      r.elapsedSeconds = Math.max(0, Math.round(seconds))
      if (r.bestSeconds === null || seconds < r.bestSeconds) r.bestSeconds = Math.round(seconds)
    })
  }

  function setDebrief(jobId: string, patch: Partial<JobProgress['debrief']>) {
    mutate(jobId, (r) => {
      r.debrief = { ...r.debrief, ...patch }
    })
  }

  function canClose(jobId: string) {
    const r = ensure(jobId)
    const d = r.debrief
    return r.testsCleared &&
      d.reason.trim().length >= 10 &&
      d.invariant.trim().length >= 10 &&
      d.time.trim().length > 0 &&
      d.space.trim().length > 0
  }

  function closeCase(jobId: string, targetMinutes: number) {
    if (!canClose(jobId)) return false
    const now = new Date()
    mutate(jobId, (r) => {
      if (!r.solvedAt) {
        r.solvedAt = now.toISOString()
        r.reviewStage = 0
        r.nextReviewAt = addDays(now, REVIEW_INTERVALS[0])
        r.weakness = Math.min(100, r.weakness + weaknessDelta(r, targetMinutes))
      }
    })
    return true
  }

  // quality: 1 = blanked, 2 = heavy help, 3 = shaky, 4 = solid, 5 = automatic
  function gradeReview(jobId: string, quality: 1 | 2 | 3 | 4 | 5) {
    const now = new Date()
    mutate(jobId, (r) => {
      r.lastReviewedAt = now.toISOString()

      if (quality <= 2) {
        r.reviewStage = 0
        r.nextReviewAt = addDays(now, REVIEW_INTERVALS[0])
        r.masteredAt = null
        r.weakness = Math.min(100, r.weakness + 24)
        return
      }

      if (quality === 3) {
        const days = REVIEW_INTERVALS[Math.min(r.reviewStage, REVIEW_INTERVALS.length - 1)]
        r.nextReviewAt = addDays(now, days)
        r.weakness = Math.min(100, r.weakness + 6)
        return
      }

      r.weakness = Math.max(0, r.weakness - (quality === 5 ? 16 : 10))

      if (r.reviewStage >= REVIEW_INTERVALS.length - 1) {
        r.masteredAt = now.toISOString()
        r.nextReviewAt = null
        return
      }

      r.reviewStage += 1
      r.nextReviewAt = addDays(now, REVIEW_INTERVALS[r.reviewStage])
    })
  }

  function resetJob(jobId: string) {
    records.value = { ...records.value, [jobId]: blank(jobId) }
    save()
  }

  const all = computed(() => records.value)

  return {
    all,
    ensure,
    recordAttempt,
    recordPatternGuess,
    useHint,
    setTestsCleared,
    setElapsed,
    setDebrief,
    canClose,
    closeCase,
    gradeReview,
    resetJob
  }
}
