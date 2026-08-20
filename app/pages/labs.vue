<script setup lang="ts">
import { phasesData } from '~/data/labs'

// Define the SEO metadata in English
const title = 'Labs & Learning Tracker | Edwin Samodra Pratama'
const description = 'An interactive tracker for Edwin Samodra\'s hands-on learning labs: Proxmox Homelab setup, LFCS Linux administration roadmap, Infrastructure as Code, Kubernetes GitOps, and Local Cloud emulation.'

useSeoMeta({
  title,
  description,
  keywords: 'Proxmox Homelab, LFCS Linux Administration, GitOps, Kubernetes, ArgoCD, Ansible, Terraform, OpenTofu, learning tracker, Edwin Samodra',
  ogTitle: title,
  ogDescription: description,
  ogUrl: 'https://edwinsamodra.com/labs',
  ogType: 'website',
  twitterTitle: title,
  twitterDescription: description
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://edwinsamodra.com/labs' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': 'Learning Labs & Learning Tracker',
        'description': 'An interactive tracker for Edwin Samodra\'s hands-on learning labs, detailing Proxmox homelab, LFCS linux admin, infrastructure as code, and Kubernetes GitOps.',
        'url': 'https://edwinsamodra.com/labs',
        'author': {
          '@type': 'Person',
          'name': 'Edwin Samodra Pratama'
        }
      })
    }
  ]
})

// States for search and filters
const searchQuery = ref('')
const selectedPhaseIndex = ref<number | null>(null) // null means all phases
const selectedStatus = ref<string>('All') // 'All', 'To Do', 'In Progress', 'Done'

// List of status options
const statusOptions = ['All', 'To Do', 'In Progress', 'Done']

// Stats computed values
const stats = computed(() => {
  let total = 0
  let done = 0
  let inProgress = 0
  let todo = 0

  phasesData.forEach(phase => {
    phase.labs.forEach(lab => {
      total++
      if (lab.status === 'Done') done++
      else if (lab.status === 'In Progress') inProgress++
      else todo++
    })
  })

  const progressPercent = total > 0 ? Math.round((done / total) * 100) : 0

  return {
    total,
    done,
    inProgress,
    todo,
    progressPercent
  }
})

// Filtered data computed value
const filteredPhases = computed(() => {
  return phasesData.map((phase, phaseIdx) => {
    // If a phase filter is active, and it's not this phase, return empty list of labs for it
    if (selectedPhaseIndex.value !== null && selectedPhaseIndex.value !== phaseIdx) {
      return { ...phase, labs: [] }
    }

    const matchedLabs = phase.labs.filter(lab => {
      // Status Filter
      if (selectedStatus.value !== 'All' && lab.status !== selectedStatus.value) {
        return false
      }

      // Search Filter (ID, subtopic, labCode, or detail)
      if (searchQuery.value.trim() !== '') {
        const query = searchQuery.value.toLowerCase()
        const matchId = lab.id.toLowerCase().includes(query)
        const matchSubtopic = lab.subtopic.toLowerCase().includes(query)
        const matchLabCode = lab.labCode.toLowerCase().includes(query)
        const matchDetail = lab.detail.toLowerCase().includes(query)

        return matchId || matchSubtopic || matchLabCode || matchDetail
      }

      return true
    })

    return {
      ...phase,
      labs: matchedLabs
    }
  }).filter(phase => phase.labs.length > 0) // Only show phases that have matching labs
})

// Reset all filters to default state
const resetFilters = () => {
  searchQuery.value = ''
  selectedPhaseIndex.value = null
  selectedStatus.value = 'All'
}

// Status style resolver
const getStatusClasses = (status: string) => {
  switch (status) {
    case 'Done':
      return {
        text: 'text-white',
        badge: 'bg-white/10 text-white border border-white/20',
        icon: 'i-lucide-check-circle'
      }
    case 'In Progress':
      return {
        text: 'text-zinc-300',
        badge: 'bg-zinc-800/40 text-zinc-300 border border-zinc-700/50',
        icon: 'i-lucide-clock'
      }
    default: // To Do
      return {
        text: 'text-zinc-500',
        badge: 'bg-zinc-950 text-zinc-400 border border-zinc-800',
        icon: 'i-lucide-book-open'
      }
  }
}
</script>

<template>
  <UContainer class="py-12 space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">

    <!-- Hero / Intro Section -->
    <header class="space-y-6 max-w-3xl">
      <div class="space-y-2">
        <h1
          class="text-4xl font-extrabold tracking-tight text-white sm:text-6xl bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
          Learning Labs
        </h1>
        <p class="text-lg text-zinc-400 leading-relaxed pt-2">
          Welcome to my hands-on practical labs journal and learning tracker. This page maps my journey building
          physical infrastructure (Bare-Metal Proxmox Homelab), Linux system administration (LFCS Track), infrastructure
          automation (IaC), container orchestration (Kubernetes), and hybrid cloud emulation.
        </p>
      </div>
    </header>

    <!-- Progress Dashboard Grid -->
    <section class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <div
        class="relative overflow-hidden bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 rounded-2xl p-6 transition-all hover:bg-zinc-900/60 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.02)]">
        <div class="flex items-center justify-between mb-4">
          <span class="text-sm font-medium text-zinc-500 uppercase tracking-wider">Total Progress</span>
          <UIcon name="i-lucide-layers" class="w-5 h-5 text-zinc-400 shrink-0" />
        </div>
        <div class="flex items-baseline gap-2">
          <span class="text-3xl font-bold text-white">{{ stats.progressPercent }}%</span>
          <span class="text-xs text-zinc-500">completed</span>
        </div>
        <!-- Progress Bar -->
        <div class="w-full bg-zinc-800 rounded-full h-1.5 mt-4 overflow-hidden">
          <div class="bg-white h-1.5 rounded-full transition-all duration-1000"
            :style="{ width: `${stats.progressPercent}%` }"></div>
        </div>
      </div>

      <div
        class="bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 rounded-2xl p-6 transition-all hover:bg-zinc-900/60 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.02)]">
        <div class="flex items-center justify-between mb-4">
          <span class="text-sm font-medium text-zinc-500 uppercase tracking-wider">Completed Labs</span>
          <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-zinc-400 shrink-0" />
        </div>
        <div class="flex items-baseline gap-2">
          <span class="text-3xl font-bold text-white">{{ stats.done }}</span>
          <span class="text-xs text-zinc-500">/ {{ stats.total }} total</span>
        </div>
        <p class="text-xs text-zinc-400 mt-4 leading-relaxed">
          Verified and successfully implemented labs.
        </p>
      </div>

      <div
        class="bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 rounded-2xl p-6 transition-all hover:bg-zinc-900/60 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.02)]">
        <div class="flex items-center justify-between mb-4">
          <span class="text-sm font-medium text-zinc-500 uppercase tracking-wider">In Progress</span>
          <UIcon name="i-lucide-clock" class="w-5 h-5 text-zinc-400 shrink-0" />
        </div>
        <div class="flex items-baseline gap-2">
          <span class="text-3xl font-bold text-white">{{ stats.inProgress }}</span>
          <span class="text-xs text-zinc-500">labs active</span>
        </div>
        <p class="text-xs text-zinc-400 mt-4 leading-relaxed">
          Workloads currently active or in-setup.
        </p>
      </div>

      <div
        class="bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 rounded-2xl p-6 transition-all hover:bg-zinc-900/60 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.02)]">
        <div class="flex items-center justify-between mb-4">
          <span class="text-sm font-medium text-zinc-500 uppercase tracking-wider">Remaining Tasks</span>
          <UIcon name="i-lucide-book-open" class="w-5 h-5 text-zinc-400 shrink-0" />
        </div>
        <div class="flex items-baseline gap-2">
          <span class="text-3xl font-bold text-white">{{ stats.todo }}</span>
          <span class="text-xs text-zinc-500">queued</span>
        </div>
        <p class="text-xs text-zinc-400 mt-4 leading-relaxed">
          Modules scheduled for next deployments.
        </p>
      </div>
    </section>

    <!-- Filters & Search Section -->
    <section class="space-y-6 bg-zinc-900/20 border border-zinc-800/80 p-6 rounded-2xl">
      <!-- Search & Status Row -->
      <div class="flex flex-col lg:flex-row gap-4 items-center justify-between">
        <!-- Search Input -->
        <div class="relative w-full lg:w-96">
          <UInput v-model="searchQuery" placeholder="Search something..." size="md" class="w-full text-zinc-200"
            icon="i-lucide-search" />
        </div>

        <!-- Status Filter Button Group -->
        <div class="flex items-center gap-3 w-full lg:w-auto justify-start lg:justify-end">
          <span class="text-xs font-mono text-zinc-500 uppercase tracking-wider hidden sm:inline">Status:</span>
          <div class="flex bg-zinc-900 p-0.5 rounded-lg border border-zinc-800 w-full sm:w-auto">
            <button v-for="status in statusOptions" :key="status" @click="selectedStatus = status"
              class="flex-1 sm:flex-none px-4 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap"
              :class="[
                selectedStatus === status
                  ? 'bg-zinc-800 text-white border border-zinc-700 shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              ]">
              {{ status }}
            </button>
          </div>
        </div>
      </div>

      <!-- Phase Filter Pills -->
      <div class="space-y-3 pt-2 border-t border-zinc-800/60">
        <span class="text-xs font-mono text-zinc-500 uppercase tracking-wider block">Filter by Phase:</span>
        <div class="flex flex-wrap gap-2">
          <!-- All Phases Pill -->
          <button @click="selectedPhaseIndex = null"
            class="px-3 py-1.5 text-xs font-medium rounded-lg border transition-all" :class="[
              selectedPhaseIndex === null
                ? 'bg-white/10 text-white border-white/20 shadow-sm shadow-white/5'
                : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-zinc-250'
            ]">
            All Phases
          </button>

          <!-- Phase Pills -->
          <button v-for="(phase, idx) in phasesData" :key="idx" @click="selectedPhaseIndex = idx"
            class="px-3 py-1.5 text-xs font-medium rounded-lg border transition-all" :class="[
              selectedPhaseIndex === idx
                ? 'bg-white/10 text-white border-white/20 shadow-sm shadow-white/5'
                : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-zinc-250'
            ]">
            Phase {{ idx }}<span class="hidden md:inline">: {{ phase.title }}</span>
          </button>
        </div>
      </div>

      <!-- Reset Filters Button -->
      <div v-if="searchQuery || selectedPhaseIndex !== null || selectedStatus !== 'All'" class="flex justify-end pt-2">
        <UButton @click="resetFilters" color="neutral" variant="ghost" size="sm" icon="i-lucide-filter"
          class="text-zinc-400 hover:text-white">
          Clear Active Filters
        </UButton>
      </div>
    </section>

    <!-- Labs Sections -->
    <section class="space-y-16">
      <div v-if="filteredPhases.length === 0" class="flex flex-col items-center justify-center py-20 text-center">
        <div class="p-4 rounded-full bg-zinc-900 mb-4 border border-zinc-800">
          <UIcon name="i-lucide-filter" class="w-8 h-8 text-zinc-600" />
        </div>
        <h4 class="text-xl font-bold text-zinc-300 mb-2">Not Found</h4>
        <p class="text-zinc-500 max-w-sm mb-6">
          No labs match the selected search query or status filter.
        </p>
        <UButton @click="resetFilters" color="primary" variant="solid">
          Reset All Filters
        </UButton>
      </div>

      <!-- Phase Container -->
      <div v-for="(phase, phaseIdx) in filteredPhases" :key="phase.title"
        class="space-y-8 animate-in fade-in duration-500">
        <!-- Phase Section Header (Fully detailed, no truncation) -->
        <div class="space-y-2 border-b border-zinc-800/80 pb-6">
          <div class="flex items-center gap-3">
            <div
              class="w-10 h-10 rounded-xl flex items-center justify-center border bg-white/5 text-white border-white/10 shrink-0">
              <UIcon :name="phase.icon" class="w-5 h-5" />
            </div>
            <div>
              <span class="text-xs font-mono uppercase tracking-wider text-zinc-500">
                Module {{ phaseIdx }}
              </span>
              <h2 class="text-2xl font-bold text-zinc-150">
                {{ phase.title }}
              </h2>
            </div>
          </div>
          <p class="text-zinc-400 max-w-3xl leading-relaxed text-sm">
            {{ phase.description }}
          </p>
        </div>

        <!-- Labs Cards Grid -->
        <div class="grid gap-6 md:grid-cols-2">
          <div v-for="lab in phase.labs" :key="lab.labCode"
            class="group relative overflow-hidden bg-zinc-900/20 hover:bg-zinc-900/40 border border-zinc-800/80 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.02)] rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between">
            <!-- Emerald Hover Accent Gradient -->
            <div
              class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full pointer-events-none">
            </div>

            <div class="space-y-4">
              <!-- Header Segment -->
              <div class="flex items-center justify-between">
                <span class="text-xs font-mono text-zinc-500">
                  <span class="font-bold text-zinc-400">{{ lab.labCode }}</span>
                </span>

                <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium shrink-0"
                  :class="getStatusClasses(lab.status).badge">
                  <span v-if="lab.status === 'In Progress'"
                    class="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-ping shrink-0"></span>
                  <UIcon :name="getStatusClasses(lab.status).icon" class="w-3.5 h-3.5 shrink-0" />
                  {{ lab.status }}
                </span>
              </div>

              <!-- Title -->
              <h4 class="text-base font-bold text-zinc-200 group-hover:text-white transition-colors">
                {{ lab.subtopic }}
              </h4>

              <!-- Detail / Practical Guidelines -->
              <p class="text-zinc-450 text-sm leading-relaxed grow">
                {{ lab.detail }}
              </p>
            </div>

            <!-- Optional Notes / Evidence Segments -->
            <div v-if="lab.evidence || lab.notes" class="mt-6 pt-4 border-t border-zinc-800/80 space-y-2 text-xs">
              <div v-if="lab.evidence" class="flex items-center gap-2 text-zinc-400">
                <UIcon name="i-lucide-check-circle" class="w-4 h-4 text-white shrink-0" />
                <span class="font-semibold text-zinc-300">Evidence:</span>
                <span class="font-mono text-zinc-500">{{ lab.evidence }}</span>
              </div>
              <div v-if="lab.notes" class="text-zinc-400">
                <span class="font-semibold text-zinc-300">Notes:</span> {{ lab.notes }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </UContainer>
</template>

<style scoped>
/* scoped utility classes */
</style>
