<script lang="ts" setup></script>

<template>
  <UPage>
    <UPageHero
      orientation="horizontal"
      description="I'm a frontend engineer passionate about crafting engaging, user-friendly web experiences."
      :links="[
        {
          label: 'Get in touch',
          to: 'contact',
        },
      ]"
    >
      <template #title>
        <small>Hi, I'm</small>
        <br />
        Stijn Slats
      </template>

      <img
        src="/images/stijn-slats.jpg"
        alt="Stijn Slats"
        class="rounded-2xl"
      />
    </UPageHero>
  </UPage>
</template>
