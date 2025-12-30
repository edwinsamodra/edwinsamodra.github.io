<script setup lang="ts">
const links = [
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

const experiences = [
  {
    role: 'Senior Fullstack Developer',
    company: 'Tech Company',
    period: '2023 - Present',
    description: 'Architecting scalable web applications and optimizing CI/CD pipelines for faster deployment cycles.'
  },
  {
    role: 'System Engineer',
    company: 'Cloud Solutions Inc',
    period: '2021 - 2023',
    description: 'Managed high-availability Linux server fleets and implemented infrastructure as code using Terraform.'
  },
  {
    role: 'Junior Developer',
    company: 'StartUp Lab',
    period: '2019 - 2021',
    description: 'Developed RESTful APIs and maintained legacy systems while migrating to modern cloud architecture.'
  }
]

const projects = [
  {
    title: 'Cloud Monitor',
    description: 'Real-time server monitoring dashboard with alert systems.',
    tech: ['Vue.js', 'Go', 'Prometheus', 'Grafana'],
    link: '#'
  },
  {
    title: 'AutoDeploy CLI',
    description: 'A CLI tool to automate deployment workflows on Linux servers.',
    tech: ['Rust', 'Docker', 'GitHub Actions'],
    link: '#'
  },
  {
    title: 'SaaS Boilerplate',
    description: 'Production-ready SaaS starter kit with authentication and billing.',
    tech: ['Nuxt', 'Supabase', 'Stripe', 'Tailwind'],
    link: '#'
  }
]
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
          Fullstack Developer & System Enthusiast
        </h2>
      </div>
      <p class="max-w-2xl text-lg text-zinc-400 leading-relaxed">
        I build robust applications with a deep understanding of the underlying systems.
        Passionate about <span class="text-zinc-200 font-medium">Linux OS</span>, <span class="text-zinc-200 font-medium">DevOps</span>, and <span class="text-zinc-200 font-medium">Cloud Architecture</span>.
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
          <div class="absolute -left-[25px] top-1.5 h-4 w-4 rounded-full border-2 border-zinc-700 bg-zinc-950 group-hover:border-zinc-500 group-hover:scale-110 transition-all" />
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

      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
            My curiosity drives me to understand the entire stack, from the kernel to the frontend.
          </p>
          <p class="text-lg text-zinc-400 leading-relaxed mt-6">
            With a strong foundation in <strong>System Engineering</strong>, I specialize in creating solutions that are not only functional but also performant, secure, and scalable.
            I am constantly exploring new technologies in the <strong>Linux</strong> ecosystem, refining <strong>DevOps</strong> pipelines, and architecting <strong>Cloud</strong> native solutions.
          </p>
          <p class="text-lg text-zinc-400 leading-relaxed mt-6">
            My goal is to bridge the gap between development and operations, ensuring that the software I build runs smoothly in production environments.
          </p>
          <p class="text-lg text-zinc-400 leading-relaxed mt-6">
            If you're interested in collaborating or just want to chat, feel free to reach out on <a href="https://www.linkedin.com/in/edwinsamodra" target="_blank" rel="noopener noreferrer" class="underline">LinkedIn</a> or via <a href="mailto:hi@edwinsamodra.com" class="underline">email</a>
          </p>
        </div>
      </div>
    </section>
  </UContainer>
</template>
