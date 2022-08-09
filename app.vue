<template>
  <TheHeader />
  <NuxtPage />
</template>

<script lang="ts" setup>
    useHead({
        script: [
            {src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js', body: true}
        ],
        link: [
            {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css'}
        ]
    })
</script>

