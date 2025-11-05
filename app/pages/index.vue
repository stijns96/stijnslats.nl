<script lang="ts" setup>
const techStack = ref([
  {
    title: "Nuxt",
    icon: "i-fa-brands-vuejs",
    description:
      "Nuxt is a framework for building web applications with Vue.js.",
    to: "https://nuxt.com",
  },
  {
    title: "Vue",
    icon: "i-fa-brands-vuejs",
    description: "Vue is a progressive framework for building user interfaces.",
    to: "https://vuejs.org",
  },
  {
    title: "Tailwind CSS",
    icon: "i-lucide-tailwindcss",
    description:
      "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.",
    to: "https://tailwindcss.com",
  },
]);
</script>

<template>
  <UPage>
    <UPageSection>
      <UPageGrid as="section">
        <div
          class="bg-default flex aspect-square items-center justify-center rounded-xl"
        >
          Default
        </div>
        <div
          class="bg-muted flex aspect-square items-center justify-center rounded-xl"
        >
          Muted
        </div>
        <div
          class="bg-elevated flex aspect-square items-center justify-center rounded-xl"
        >
          Elevated
        </div>
        <div
          class="bg-accented flex aspect-square items-center justify-center rounded-xl"
        >
          Accented
        </div>
        <div
          class="bg-inverted text-inverted flex aspect-square items-center justify-center rounded-xl"
        >
          Inverted
        </div>
      </UPageGrid>
    </UPageSection>

    <UPageHero
      as="section"
      class="overflow-hidden"
      orientation="horizontal"
      description="I'm a frontend engineer passionate about crafting engaging, user-friendly web experiences."
      :links="[
        {
          label: 'Get in touch',
          to: 'contact',
          color: 'neutral',
          variant: 'subtle',
          icon: 'i-lucide-at-sign',
        },
      ]"
      :ui="{
        container:
          'mb-24 pb-0 [clip-path:inset(-1000px_-1000px_1px_-1000px)] sm:mb-32 sm:pb-0 lg:mb-40 lg:pb-0',
        wrapper: 'z-10',
      }"
    >
      <template #title>
        <small>Hi, I'm</small>
        <br />
        <span class="text-highlighted">Stijn Slats</span>
      </template>

      <div class="relative isolate mx-auto max-w-md">
        <img
          src="/images/stijn-slats.png"
          alt="Stijn Slats"
          class="bg-default rounded-t-2xl"
        />
        <div
          class="absolute inset-0 -z-10 animate-[spin_5s_linear_infinite] bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700 opacity-25 blur-[160px]"
        />
        <div
          class="from-default absolute bottom-0 -left-[150%] h-2/5 w-screen bg-linear-to-t to-transparent"
        />
      </div>
    </UPageHero>

    <UPageSection>
      <UPageGrid as="section">
        <UPageCard
          v-for="(tech, index) in techStack"
          :key="index"
          v-bind="tech"
          spotlight
        />
      </UPageGrid>
    </UPageSection>
  </UPage>
</template>
