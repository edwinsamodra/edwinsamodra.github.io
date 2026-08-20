<script setup lang="ts">
interface Link {
  label: string
  icon: string
  to: string
  target: string
}

interface SubExperience {
  role?: string
  period?: string
  description: string[]
}

interface Experience {
  role: string
  company: string
  period: string
  description?: string[]
  subExperiences?: SubExperience[]
}

interface Project {
  title: string
  period?: string
  description: string
  details?: string[]
  tech: string[]
  link?: string
  thumbnail?: string
  youtubeUrl?: string
  links?: { label: string; url: string }[]
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
    subExperiences: [
      {
        role: 'Product Support',
        period: 'May 2026 - Present',
        description: [
          'Authored technical documentation, user manuals, and internal development briefs to bridge the communication gap between the CTO and the management team.',
          'Facilitated transparency by reporting on the product roadmap, development milestones, and technical hurdles to non-technical stakeholders (not responsible for defining product vision).'
        ]
      },
      {
        role: 'Fullstack Developer (IndoBSD Bills)',
        period: 'Jan 2026 - Apr 2026',
        description: [
          'Developed a License Key Generator/Billing System (IndoBSD Bills) to automate NOCS software license issuance.',
          'Built a billing module for managing customer purchases, invoices, and license activation.',
          'Designed and developed both frontend, backend features and database schema for the application.',
          'Performed application deployment and server setup on a Debian with PM2 and NGINX.',
          'Developed independently, covering the complete software development lifecycle—from application design and implementation to deployment and production infrastructure setup.',
          'Tech Stack: Node.js, Express.js, and EJS'
        ]
      },
      {
        role: 'Fullstack Developer (Proxmox Manager Dashboard)',
        period: 'May 2023 - Dec 2025',
        description: [
          'Developed a custom full-stack Proxmox Manager dashboard integrated infrastructure monitoring.',
          'Implemented automation (CI/CD) in Git-based, fully-integrated platform, to streamline the development-to-deployment workflow.',
          'Performed application deployment and server setup on a Debian with PM2 and NGINX.',
          'Tech Stack: Node.js, Express.js, and Vite/Vue.js'
        ]
      }
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
    title: 'IndoBSD Bills',
    period: 'JAN 2026 - APR 2026',
    description: 'License Key Generator & Billing System to automate NOCS software license issuance, email notifications, and customer billing.',
    details: [
      'Developed a License Key Generator/Billing System (IndoBSD Bills) to automate NOCS software license issuance.',
      'Developed email notifications for license delivery and billing-related events.',
      'Implemented Role-Based Access Control (RBAC) for Admin and Customer roles.',
      'Built a billing module for managing customer purchases, invoices, and license activation.',
      'Designed and developed both frontend, backend features and database schema for the application.',
      'Performed application deployment and server setup on a Debian with PM2 and NGINX.',
      'This project was developed independently, covering the complete software development lifecycle—from application design and implementation to deployment and production infrastructure setup.'
    ],
    tech: ['Node.js', 'Express.js', 'EJS', 'Debian', 'PM2', 'NGINX'],
    thumbnail: '/images/projects/indobsd-bills.png',
    youtubeUrl: 'https://youtu.be/hKCBBFrTyng',
    link: 'https://billing.indobsd.id/'
  },
  {
    title: 'Zetoup',
    period: 'MAY 2023 - DEC 2025',
    description: 'A custom full-stack Proxmox Manager dashboard integrated with infrastructure monitoring and automated Git-based CI/CD workflows.',
    details: [
      'Developed a custom full-stack Proxmox Manager dashboard, for multi cluster, multi standalone nodes, integrated infrastructure monitoring.',
      'Implemented automation (CI/CD) in Gitlab, fully-integrated platform, to streamline the development-to-deployment workflow.',
      'Performed application deployment and server setup on a Debian with PM2 and NGINX.'
    ],
    tech: ['Node.js', 'Express.js', 'Vite', 'Vue.js', 'Proxmox VE', 'Debian', 'PM2', 'NGINX'],
    thumbnail: '/images/projects/zetoup.png',
    youtubeUrl: 'https://youtu.be/a7aM1lt_weY'
  },
  {
    title: 'Personal Website',
    period: 'JAN 2026',
    description: 'A personal portfolio website built with Nuxt, Vue.js, Tailwind CSS, and Nuxt UI.',
    tech: ['Vite', 'Vue.js', 'Nuxt.js', 'Tailwind CSS', 'NuxtUI'],
    thumbnail: '/images/projects/personal-website.png',
    link: 'https://edwinsamodra.com'
  },
  {
    title: 'Phishing Simulator',
    period: 'JUL 2026',
    description: 'A custom tool for phishing simulation designed for security awareness and training.',
    details: [
      'Developed a custom phishing simulation tool to conduct simulated phishing campaigns for security awareness and testing.',
      'Configured backend services and HTTP handlers for managing simulation campaigns and tracking metrics.',
      'Designed modular project structure using Go.'
    ],
    tech: ['Go', 'html/template', 'SQLite'],
    thumbnail: '/images/projects/phishing-simulator.png',
    link: 'https://github.com/edwinsamodra/phishing-simulator'
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
  }
]

const selectedProject = ref<Project | null>(null)
const isModalOpen = ref(false)

function openDetails(project: Project) {
  selectedProject.value = project
  isModalOpen.value = true
}

function getEmbedUrl(url?: string) {
  if (!url) return ''
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/)
  return match ? `https://www.youtube-nocookie.com/embed/${match[1]}` : url
}

// Define SEO Metadata for the home page
const pageTitle = 'Edwin Samodra Pratama | Fullstack Developer & Infrastructure Enthusiast'
const pageDescription = 'Portfolio of Edwin Samodra Pratama, a Fullstack Developer and Infrastructure Enthusiast specializing in Node.js, Express, Vue.js, Go, Debian server setups, and Proxmox virtualization.'

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  keywords: 'Edwin Samodra Pratama, Fullstack Developer, Infrastructure Enthusiast, Proxmox Homelab, Node.js, Express, Go, Vue.js, IT Specialist Indonesia',
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogUrl: 'https://edwinsamodra.com/',
  twitterTitle: pageTitle,
  twitterDescription: pageDescription
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://edwinsamodra.com/' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        'name': 'Edwin Samodra Pratama',
        'jobTitle': 'Fullstack Developer & Infrastructure Enthusiast',
        'url': 'https://edwinsamodra.com',
        'sameAs': [
          'https://github.com/edwinsamodra',
          'https://linkedin.com/in/edwinsamodra',
          'https://medium.com/@edwinsamodra'
        ],
        'knowsAbout': [
          'Full-stack Web Development',
          'Node.js',
          'Express.js',
          'Vue.js',
          'Go',
          'Linux System Administration (LFCS)',
          'Proxmox VE Virtualization',
          'DevOps & Infrastructure Automation'
        ],
        'worksFor': {
          '@type': 'Organization',
          'name': 'PT. Indonesia Bisnis Digital'
        }
      })
    }
  ]
})
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
          :aria-label="link.label" color="neutral" variant="ghost" size="xl" class="hover:bg-zinc-800" />
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
          <ul v-if="exp.description" class="list-disc list-outside ml-5 text-zinc-400 space-y-2 max-w-3xl">
            <li v-for="(desc, i) in exp.description" :key="i" class="leading-relaxed">
              {{ desc }}
            </li>
          </ul>

          <div v-else-if="exp.subExperiences" class="space-y-6 max-w-3xl mt-4">
            <div v-for="(sub, subIdx) in exp.subExperiences" :key="subIdx" class="space-y-2">
              <div v-if="subIdx > 0" class="border-t border-zinc-800/80 my-4 pt-4"></div>
              <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between text-sm mb-1">
                <span v-if="sub.role" class="font-semibold text-zinc-300">{{ sub.role }}</span>
                <span v-if="sub.period" class="font-mono text-zinc-500">{{ sub.period }}</span>
              </div>
              <ul class="list-disc list-outside ml-5 text-zinc-400 space-y-2">
                <li v-for="(desc, i) in sub.description" :key="i" class="leading-relaxed text-zinc-400/90 text-sm">
                  {{ desc }}
                </li>
              </ul>
            </div>
          </div>
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
          class="bg-zinc-900/30 border-zinc-800 hover:border-zinc-600 hover:bg-zinc-900/50 transition-all duration-300 group flex flex-col overflow-hidden cursor-pointer"
          :ui="{ body: 'p-0 sm:p-2 sm:pt-4 flex flex-col flex-1' }" @click="openDetails(project)">

          <!-- Thumbnail Header if available -->
          <div v-if="project.thumbnail"
            class="relative w-full aspect-video overflow-hidden bg-zinc-900 border-b border-zinc-800/80 group/thumb">
            <img :src="project.thumbnail" :alt="project.title"
              class="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-500" />
            <div
              class="absolute inset-0 bg-black/50 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-medium text-sm backdrop-blur-[2px]">
              <UIcon name="i-lucide-play-circle" class="w-8 h-8 text-white drop-shadow-md" />
              <span>Click to view demo & details</span>
            </div>
          </div>

          <!-- Padded Text & Tag Content -->
          <div class="p-4 flex flex-col flex-1">
            <div class="mb-3">
              <h4 class="text-lg font-bold text-zinc-200 group-hover:text-white transition-colors">
                {{ project.title }}
              </h4>
              <div v-if="project.period" class="text-xs font-mono text-zinc-500 mt-1 flex items-center gap-1">
                <UIcon name="i-lucide-calendar" class="w-3.5 h-3.5" />
                <span>{{ project.period }}</span>
              </div>
            </div>

            <p class="text-zinc-400 text-sm leading-relaxed mb-4 grow">
              {{ project.description }}
            </p>

            <div class="flex flex-wrap gap-2">
              <UBadge v-for="tech in project.tech" :key="tech" color="neutral" variant="subtle" size="sm"
                class="bg-zinc-800/60 text-zinc-300 border border-zinc-700/40">
                {{ tech }}
              </UBadge>
            </div>
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

      <!-- Project Details Modal (Larger size for high-quality video embed) -->
      <UModal v-model:open="isModalOpen" :title="selectedProject?.title || 'Project Details'"
        :ui="{ content: 'sm:max-w-4xl lg:max-w-5xl' }">
        <template #body>
          <div v-if="selectedProject" class="space-y-6 py-2">
            <div class="flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-zinc-800">
              <div v-if="selectedProject.period" class="flex items-center gap-2">
                <UIcon name="i-lucide-calendar" class="w-4 h-4 text-zinc-400" />
                <span class="text-sm font-mono text-zinc-300">{{ selectedProject.period }}</span>
              </div>
              <div class="flex gap-2">
                <UBadge v-for="tech in selectedProject.tech" :key="tech" color="neutral" variant="subtle" size="xs"
                  class="bg-zinc-800/80 text-zinc-300">
                  {{ tech }}
                </UBadge>
              </div>
            </div>

            <!-- Project Links -->
            <div v-if="(selectedProject.links && selectedProject.links.length > 0) || selectedProject.link"
              class="space-y-2">
              <h5 class="text-xs font-semibold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                <UIcon name="i-lucide-link" class="w-4 h-4 text-emerald-450" />
                Project Link{{ (selectedProject.links && selectedProject.links.length > 1) ? 's' : '' }}
              </h5>
              <div class="flex flex-wrap gap-3">
                <template v-if="selectedProject.links && selectedProject.links.length > 0">
                  <a v-for="link in selectedProject.links" :key="link.url" :href="link.url" target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-800/40 hover:bg-zinc-800/80 text-sm text-zinc-300 hover:text-white border border-zinc-700/50 hover:border-zinc-600 transition-all">
                    <UIcon name="i-lucide-external-link" class="w-4 h-4 text-zinc-450" />
                    <span>{{ link.label }}</span>
                  </a>
                </template>
                <a v-else-if="selectedProject.link" :href="selectedProject.link" target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-800/40 hover:bg-zinc-800/80 text-sm text-zinc-300 hover:text-white border border-zinc-700/50 hover:border-zinc-600 transition-all">
                  <UIcon name="i-lucide-external-link" class="w-4 h-4 text-zinc-450" />
                  <span>Visit Website</span>
                </a>
              </div>
            </div>

            <!-- YouTube Video Embed -->
            <div v-if="selectedProject.youtubeUrl" class="space-y-2">
              <h5 class="text-xs font-semibold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                <UIcon name="i-lucide-video" class="w-4 h-4 text-red-400" />
                Project Demo Video
              </h5>
              <div
                class="relative w-full aspect-video rounded-xl overflow-hidden bg-black border border-zinc-800 shadow-2xl">
                <iframe :src="getEmbedUrl(selectedProject.youtubeUrl)" title="YouTube video player"
                  class="absolute inset-0 w-full h-full" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen></iframe>
              </div>
            </div>

            <!-- Thumbnail Image (if no video or as secondary view) -->
            <div v-else-if="selectedProject.thumbnail"
              class="relative w-full aspect-video rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800">
              <img :src="selectedProject.thumbnail" :alt="selectedProject.title" class="w-full h-full object-cover" />
            </div>

            <!-- Full Details List -->
            <div v-if="selectedProject.details && selectedProject.details.length > 0" class="space-y-3">
              <h5 class="text-xs font-semibold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                <UIcon name="i-lucide-list-checks" class="w-4 h-4 text-primary-400" />
                Project Overview & Responsibilities
              </h5>
              <ul class="space-y-2.5">
                <li v-for="(detail, i) in selectedProject.details" :key="i"
                  class="flex items-start gap-3 text-sm text-zinc-300 leading-relaxed">
                  <span class="inline-block w-1.5 h-1.5 rounded-full bg-zinc-400 mt-2 shrink-0"></span>
                  <span>{{ detail }}</span>
                </li>
              </ul>
            </div>
          </div>
        </template>
      </UModal>
    </section>

    <!-- Lab Preview -->
    <section id="lab" class="scroll-mt-20">
      <div class="flex items-center gap-4 mb-12">
        <div class="h-px flex-1 bg-zinc-800"></div>
        <h3 class="text-2xl font-bold text-zinc-200 uppercase tracking-wider">Lab</h3>
        <div class="h-px flex-1 bg-zinc-800"></div>
      </div>

      <div
        class="bg-zinc-900/20 rounded-2xl p-8 border border-zinc-800/80 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.02)] transition-all duration-300">
        <div class="max-w-3xl space-y-6">
          <h4 class="text-xl font-bold text-zinc-100">Hands-on Lab Tracker</h4>
          <p class="text-zinc-400 leading-relaxed">
            I actively document my learning journey by implementing real-world scenarios on my Proxmox Homelab. This
            includes host hardening, automated deployments using OpenTofu & Ansible, bootstrapping Kubernetes clusters,
            and
            orchestrating GitOps reconciliation pipelines.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-sm">
            <div class="flex items-center gap-2 text-zinc-355">
              <UIcon name="i-lucide-check" class="w-4 h-4 text-zinc-450 shrink-0" />
              <span>Bare-Metal & Proxmox Prep</span>
            </div>
            <div class="flex items-center gap-2 text-zinc-355">
              <UIcon name="i-lucide-check" class="w-4 h-4 text-zinc-450 shrink-0" />
              <span>LFCS Linux Sysadmin Track</span>
            </div>
            <div class="flex items-center gap-2 text-zinc-355">
              <UIcon name="i-lucide-check" class="w-4 h-4 text-zinc-450 shrink-0" />
              <span>IaC & Ansible Configuration</span>
            </div>
            <div class="flex items-center gap-2 text-zinc-355">
              <UIcon name="i-lucide-check" class="w-4 h-4 text-zinc-450 shrink-0" />
              <span>K3s Cluster & ArgoCD GitOps</span>
            </div>
          </div>
          <div class="pt-6">
            <UButton to="/labs" color="neutral" variant="outline" size="lg"
              class="border-zinc-700 text-white hover:bg-zinc-850 hover:border-white/40 transition-all"
              icon="i-lucide-arrow-right" trailing>
              Explore Full Lab Tracker
            </UButton>
          </div>
        </div>
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
