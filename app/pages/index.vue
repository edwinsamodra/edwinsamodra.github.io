<script setup lang="ts">
interface Link {
  label: string
  icon: string
  to: string
  target: string
}

interface Experience {
  role: string
  company: string
  period: string
  description: string[]
}

interface Project {
  title: string
  description: string
  tech: string[]
  link: string
}

interface Highlight {
  title: string
  period: string
  description: string[]
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
    to: 'mailto:hi@edwinsamodra.com',
    target: '_blank'
  }
]

const experiences: Experience[] = [
  {
    role: 'Fullstack Developer',
    company: 'PT. Indonesia Bisnis Digital',
    period: 'May 2023 - Present',
    description: [
      'Developed a full-stack Proxmox management dashboard (Vue.js/Express.js) with integrated infrastructure monitoring and e-ticketing features',
      'Streamlined development cycles by implementing automated CI/CD pipelines for seamless web application delivery',
      'Expertly managed the deployment lifecycle on Linux VMs, ensuring stable production environments for Node.js applications',
      'Integrated an internal ticketing system to provide a unified user experience within the infrastructure portal'
    ]
  },
  {
    role: 'Software Tester',
    company: 'Fata Organa',
    period: 'Jun 2025 - Oct 2025',
    description: [
      'Created and documented 1000+ detailed manual test cases based on functional requirements and business processes',
      'Executed test cases thoroughly to identify bugs, inconsistencies, and edge cases',
      'Collaborated closely with developers and project managers to clarify requirements, reproduce issues, and validate fixes',
      'Contributed to improving QA documentation and reporting standards within the testing cycle'
    ]
  },
  {
    role: 'Junior Developer',
    company: 'CV. Karya Hidup Sentosa',
    period: '2019',
    description: [
      'Developed ERP system modules during a 6-month internship program using CodeIgniter 3',
      'Collaborate across departments to discuss features to be implemented'
    ]
  }
]

const projects: Project[] = [
  {
    title: 'Personal Website',
    description: 'A personal website built with Nuxt',
    tech: ['Vite', 'Vue.js', 'Nuxt.js', 'Tailwind CSS', 'NuxtUI'],
    link: 'https://edwinsamodra.com'
  }
]

const highlights: Highlight[] = [
  {
    title: 'Self Learning in DevOps and Cloud',
    period: 'Nov 2024 - Present',
    description: [
      'Deepening DevOps fundamentals through hands-on, community-based learning, with a strong focus on Linux system administration',
      'Continue to develop cloud-native skills by actively engaging in the community and self-learning in the learning platforms'
    ]
  },
  {
    title: 'AWS re/Start Program Participant',
    period: 'Apr 2025 - Aug 2025',
    description: [
      'Completed an intensive 3-month bootcamp designed by AWS, featuring daily live sessions and hands-on labs with real AWS services',
      'Gained practical cloud computing experience through curriculum provided by AWS Training & Certification and Orbit Future Academy',
      'Successfully earned the AWS Certified Cloud Practitioner (CCP) certification in August 2025'
    ]
  },
  {
    title: 'MSIB Back End Engineering Student',
    period: 'Feb 2023 - Jul 2023',
    description: [
      'Participated in the MSIB Program at Ruangguru, mastering Golang fundamentals and building REST APIs and Deployed applications to PaaS environments, gaining hands-on experience in cloud deployment workflows',
      'Selected as an Assistant Mentor to guide fellow students, recognized for leadership and ability to explain complex concepts',
      'Consistently showcased strong problem-solving skills and active contribution during technical discussions'
    ]
  },
  {
    title: 'Brawijaya University Student',
    period: '2020 - 2024',
    description: [
      'Graduated with a Bachelor\'s degree in Information Technology Edu. in under four years with a 3.74 GPA',
      'Actively involved in organizations and community initiatives, with an IT background supporting event operations',
      'Served as a Practicum Assistant, mentoring junior students in fundamental programming & operating system concepts'
    ]
  },
]
</script>

<template>
  <UContainer class="py-16 space-y-32">
    <!-- Hero Section -->
    <section id="" class="flex flex-col items-start gap-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div class="space-y-4">
        <h1 class="text-5xl font-bold tracking-tight text-white sm:text-7xl">
          Edwin Samodra
        </h1>
        <h2 class="text-2xl font-medium text-zinc-400 sm:text-3xl">
          Fullstack Developer | Infra Enthusiast
        </h2>
      </div>
      <p class="max-w-2xl text-lg text-zinc-400 leading-relaxed">
        Greetings! I'm a full-stack developer who loves building great apps and making sure they get to the server
        without a hitch.
      </p>
      <div class="flex gap-4">
        <UButton v-for="link in links" :key="link.label" :icon="link.icon" :to="link.to" :target="link.target"
          color="neutral" variant="ghost" size="xl" class="hover:bg-zinc-800" />
      </div>
    </section>

    <!-- Experience -->
    <section id="experience" class="scroll-mt-20">
      <div class="flex items-center gap-4 mb-12">
        <div class="h-px flex-1 bg-zinc-800"></div>
        <h3 class="text-2xl font-bold text-zinc-200 uppercase tracking-wider">Experience</h3>
        <div class="h-px flex-1 bg-zinc-800"></div>
      </div>

      <div class="space-y-12 border-l border-zinc-800 pl-4 md:pl-10 relative">
        <div v-for="(exp, index) in experiences" :key="index" class="relative group">
          <div
            class="absolute -left-[25px] top-1.5 h-4 w-4 group-hover:border-zinc-500 group-hover:scale-110 transition-all" />
          <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
            <h4 class="text-xl font-bold text-zinc-100 group-hover:text-primary-400 transition-colors">{{ exp.role }}
            </h4>
            <span class="text-sm font-mono text-zinc-500">{{ exp.period }}</span>
          </div>
          <div class="text-zinc-400 font-medium mb-3">{{ exp.company }}</div>
          <ul class="list-disc list-outside ml-5 text-zinc-400 space-y-2 max-w-3xl">
            <li v-for="(desc, i) in exp.description" :key="i" class="leading-relaxed">
              {{ desc }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Project -->
    <section id="project" class="scroll-mt-20">
      <div class="flex items-center gap-4 mb-12">
        <div class="h-px flex-1 bg-zinc-800"></div>
        <h3 class="text-2xl font-bold text-zinc-200 uppercase tracking-wider">Project</h3>
        <div class="h-px flex-1 bg-zinc-800"></div>
      </div>

      <div v-if="projects.length > 0" class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <UCard v-for="(project, index) in projects" :key="index"
          class="bg-zinc-900/30 border-zinc-800 hover:border-zinc-600 hover:bg-zinc-900/50 transition-all duration-300 group flex flex-col"
          :ui="{ body: 'flex flex-col flex-1' }">
          <template #header>
            <a :href="project.link" target="_blank" class="flex items-center justify-between hover:cursor-pointer">
              <h4 class="text-xl font-bold text-zinc-200 group-hover:text-primary-400 transition-colors">{{
                project.title }}</h4>
              <UIcon name="i-lucide-arrow-up-right"
                class="w-5 h-5 text-zinc-600 group-hover:text-zinc-300 transition-colors" />
            </a>
          </template>

          <p class="text-zinc-400 mb-6 grow">
            {{ project.description }}
          </p>

          <div class="flex flex-wrap gap-2">
            <UBadge v-for="tech in project.tech" :key="tech" color="neutral" variant="subtle" size="sm"
              class="bg-zinc-800/50 text-zinc-300">
              {{ tech }}
            </UBadge>
          </div>
        </UCard>
      </div>

      <div v-else
        class="flex flex-col items-center justify-center py-12 text-center border border-dashed border-zinc-800 rounded-xl bg-zinc-900/20">
        <div class="p-4 rounded-full bg-zinc-900 mb-4">
          <UIcon name="i-lucide-hammer" class="w-8 h-8 text-zinc-500" />
        </div>
        <h4 class="text-xl font-bold text-zinc-300 mb-2">Under Construction</h4>
      </div>
    </section>

    <!-- Highlight -->
    <section id="highlight" class="scroll-mt-20">
      <div class="flex items-center gap-4 mb-12">
        <div class="h-px flex-1 bg-zinc-800"></div>
        <h3 class="text-2xl font-bold text-zinc-200 uppercase tracking-wider">Highlight</h3>
        <div class="h-px flex-1 bg-zinc-800"></div>
      </div>

      <div class="space-y-12 border-l border-zinc-800 pl-4 md:pl-10 relative">
        <div v-for="(item, index) in highlights" :key="index" class="relative group">
          <div
            class="absolute -left-[25px] top-1.5 h-4 w-4 group-hover:border-zinc-500 group-hover:scale-110 transition-all" />
          <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
            <h4 class="text-xl font-bold text-zinc-100 group-hover:text-primary-400 transition-colors">{{ item.title }}
            </h4>
            <span class="text-sm font-mono text-zinc-500">{{ item.period }}</span>
          </div>
          <ul class="list-disc list-outside ml-5 text-zinc-400 space-y-2 max-w-3xl">
            <li v-for="(desc, i) in item.description" :key="i" class="leading-relaxed">
              {{ desc }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- About -->
    <section id="about" class="scroll-mt-20">
      <div class="flex items-center gap-4 mb-12">
        <div class="h-px flex-1 bg-zinc-800"></div>
        <h3 class="text-2xl font-bold text-zinc-200 uppercase tracking-wider">About</h3>
        <div class="h-px flex-1 bg-zinc-800"></div>
      </div>

      <div class="bg-zinc-900/20 rounded-2xl p-8 border border-zinc-800/50">
        <div class="prose prose-invert prose-zinc max-w-none">
          <p class="text-lg text-zinc-400 leading-relaxed">
            I am a Fullstack Developer who thrives on understanding how software lives and breathes from end to end. My
            curiosity doesn't stop at the code; I actively explore the DevOps side of the stack to master the full
            software lifecycle.
            My mission is to build high-quality applications and ship them through automated.
          </p>
          <p class="text-lg text-zinc-400 leading-relaxed mt-6">
            Always up for new adventures in code and creativity! Whether you're looking to collaborate or just want to
            say
            hello, I'd love to connect. Find me on <a href="https://www.linkedin.com/in/edwinsamodra" target="_blank"
              rel="noopener noreferrer" class="underline">LinkedIn</a> or drop me an <a
              href="mailto:hi@edwinsamodra.com" class="underline">email</a>
          </p>
        </div>
      </div>
    </section>
  </UContainer>
</template>
