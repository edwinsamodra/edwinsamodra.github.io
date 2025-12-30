<script setup lang="ts">
interface Link{
  label: string
  icon: string
  to: string
  target: string
}

interface Experience {
  role: string
  company: string
  period: string
  description: string
}

interface Project {
  title: string
  description: string
  tech: string[]
  link: string
}

const links: Link[] = [
  {
    label: 'GitHub',
    icon: 'i-simple-icons-github',
    to: 'https://github.com/edwinsamodra',
    target: '_blank'
  },
  {
    label: 'LinkedIn',
    icon: 'i-simple-icons-linkedin',
    to: 'https://linkedin.com/in/edwinsamodra',
    target: '_blank'
  },
  {
    label: 'Medium',
    icon: 'i-simple-icons-medium',
    to: 'https://medium.com/@edwinsamodra',
    target: '_blank'
  },
  {
    label: 'Email',
    icon: 'i-lucide-mail',
    to: 'mailto:contact@edwinsamodra.com',
    target: '_blank'
  }
]

const experiences: Experience[] = [
  {
    role: 'Fullstack Developer',
    company: 'PT. Indonesia Bisnis Digital',
    period: 'May 2023 - Present',
    description: 'Developed a web-based operations platform acting as a UI wrapper for Proxmox, integrating Proxmox APIs through an Express.js backend and delivering a responsive frontend with Vue.js/Nuxt.'
  },
  {
    role: 'Junior Developer',
    company: 'CV. Karya Hidup Sentosa',
    period: '2019',
    description: 'Developed ERP system modules during a 6-month internship program using CodeIgniter 3.'
  }
]

const projects: Project[] = []
</script>

<template>
  <UContainer class="py-16 space-y-32">
    <!-- Hero Section -->
    <section id="home" class="flex flex-col items-start gap-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div class="space-y-4">
        <h1 class="text-5xl font-bold tracking-tight text-white sm:text-7xl">
          Edwin Samodra
        </h1>
        <h2 class="text-2xl font-medium text-zinc-400 sm:text-3xl">
          Fullstack Developer | Infra Enthusiast
        </h2>
      </div>
      <p class="max-w-2xl text-lg text-zinc-400 leading-relaxed">
        Greetings! Building applications with a full-stack perspective, from Linux systems to cloud-ready deployments.
      </p>
      <div class="flex gap-4">
        <UButton
          v-for="link in links"
          :key="link.label"
          :icon="link.icon"
          :to="link.to"
          :target="link.target"
          color="neutral"
          variant="ghost"
          size="xl"
          class="hover:bg-zinc-800"
        />
      </div>
    </section>

    <!-- Experience Summary -->
    <section id="experience" class="scroll-mt-20">
      <div class="flex items-center gap-4 mb-12">
        <div class="h-px flex-1 bg-zinc-800"></div>
        <h3 class="text-2xl font-bold text-zinc-200 uppercase tracking-wider">Experience Summary</h3>
        <div class="h-px flex-1 bg-zinc-800"></div>
      </div>

      <div class="space-y-12 border-l border-zinc-800 ml-3 pl-10 relative">
        <div v-for="(exp, index) in experiences" :key="index" class="relative group">
          <div class="absolute -left-[25px] top-1.5 h-4 w-4 group-hover:border-zinc-500 group-hover:scale-110 transition-all" />
          <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
            <h4 class="text-xl font-bold text-zinc-100 group-hover:text-primary-400 transition-colors">{{ exp.role }}</h4>
            <span class="text-sm font-mono text-zinc-500">{{ exp.period }}</span>
          </div>
          <div class="text-zinc-400 font-medium mb-3">{{ exp.company }}</div>
          <p class="text-zinc-400 leading-relaxed max-w-3xl">
            {{ exp.description }}
          </p>
        </div>
      </div>
    </section>

    <!-- Showcase Projects -->
    <section id="projects" class="scroll-mt-20">
      <div class="flex items-center gap-4 mb-12">
        <div class="h-px flex-1 bg-zinc-800"></div>
        <h3 class="text-2xl font-bold text-zinc-200 uppercase tracking-wider">Showcase Projects</h3>
        <div class="h-px flex-1 bg-zinc-800"></div>
      </div>

      <div v-if="projects.length > 0" class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <UCard
          v-for="(project, index) in projects"
          :key="index"
          class="bg-zinc-900/30 border-zinc-800 hover:border-zinc-600 hover:bg-zinc-900/50 transition-all duration-300 group"
          :ui="{ body: 'flex flex-col h-full' }"
        >
          <template #header>
            <div class="flex items-center justify-between">
              <h4 class="text-xl font-bold text-zinc-200 group-hover:text-primary-400 transition-colors">{{ project.title }}</h4>
              <UIcon name="i-lucide-arrow-up-right" class="w-5 h-5 text-zinc-600 group-hover:text-zinc-300 transition-colors" />
            </div>
          </template>

          <p class="text-zinc-400 mb-6 grow">
            {{ project.description }}
          </p>

          <template #footer>
            <div class="flex flex-wrap gap-2">
              <UBadge
                v-for="tech in project.tech"
                :key="tech"
                color="neutral"
                variant="subtle"
                size="sm"
                class="bg-zinc-800/50 text-zinc-300"
              >
                {{ tech }}
              </UBadge>
            </div>
          </template>
        </UCard>
      </div>

      <div v-else class="flex flex-col items-center justify-center py-12 text-center border border-dashed border-zinc-800 rounded-xl bg-zinc-900/20">
        <div class="p-4 rounded-full bg-zinc-900 mb-4">
          <UIcon name="i-lucide-hammer" class="w-8 h-8 text-zinc-500" />
        </div>
        <h4 class="text-xl font-bold text-zinc-300 mb-2">Projects Under Construction</h4>
        <p class="text-zinc-500 max-w-md">
          I'm currently polishing some exciting projects to showcase here. Check back soon or visit my GitHub to see what I'm working on!
        </p>
      </div>
    </section>

    <!-- About Me -->
    <section id="about" class="scroll-mt-20">
      <div class="flex items-center gap-4 mb-12">
        <div class="h-px flex-1 bg-zinc-800"></div>
        <h3 class="text-2xl font-bold text-zinc-200 uppercase tracking-wider">About Me</h3>
        <div class="h-px flex-1 bg-zinc-800"></div>
      </div>

      <div class="bg-zinc-900/20 rounded-2xl p-8 border border-zinc-800/50">
        <div class="prose prose-invert prose-zinc max-w-none">
          <p class="text-lg text-zinc-400 leading-relaxed">
            I am a <strong>Fullstack Developer</strong> who doesn't just stop at the application layer.
            My curiosity drives me to understand the entire stack, from the Linux OS to the frontend web.
            I am constantly exploring new technologies in the <strong>Linux</strong>, <strong>DevOps Tools</strong>, and <strong>Cloud</strong> native solutions.
            My goal is to build applications and deploy them to servers in a seamless and reliable way.
          </p>
          <p class="text-lg text-zinc-400 leading-relaxed mt-6">
            Always up for new adventures in code and creativity! Whether you're looking to collaborate or just want to say hello, I'd love to connect. Find me on <a href="https://www.linkedin.com/in/edwinsamodra" target="_blank" rel="noopener noreferrer" class="underline">LinkedIn</a> or drop me an <a href="mailto:hi@edwinsamodra.com" class="underline">email</a>
          </p>
        </div>
      </div>
    </section>
  </UContainer>
</template>
