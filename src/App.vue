<script setup>
import { Button } from '@/components/ui/button'

const message = 'RecordFlow Setup: Electron, Vite, Vue 3, TailwindCSS, Shadcn-Vue, JavaScript.'
const features = [
  { name: 'Electron', description: 'Build cross-platform desktop apps' },
  { name: 'Vite', description: 'Next generation frontend tooling' },
  { name: 'Vue 3', description: 'The progressive JavaScript framework' },
  { name: 'TailwindCSS', description: 'A utility-first CSS framework' },
  { name: 'Shadcn-Vue', description: 'Beautifully designed components' },
  { name: 'JavaScript', description: 'The language of the web' },
]
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex flex-col">
    <header class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div class="flex items-center">
          <img alt="Vue logo" class="h-10 w-10 mr-4" src="./assets/logo.svg" />
          <h1 class="text-xl font-semibold text-gray-900">RecordFlow</h1>
        </div>
        <Button>Get Started</Button>
      </div>
    </header>

    <main class="flex-grow">
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="px-4 py-6 sm:px-0">
          <h2 class="text-2xl font-bold mb-4">{{ message }}</h2>
          
          <div class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div v-for="feature in features" :key="feature.name" class="bg-white overflow-hidden shadow rounded-lg">
              <div class="px-4 py-5 sm:p-6">
                <h3 class="text-lg font-medium text-gray-900">{{ feature.name }}</h3>
                <p class="mt-2 text-sm text-gray-500">{{ feature.description }}</p>
              </div>
            </div>
          </div>
          
          <div class="mt-8 text-center">
            <Button class="px-6 py-3">Explore More</Button>
          </div>
        </div>
      </div>
    </main>

    <footer class="bg-white">
      <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center text-gray-500">
        &copy; 2023 RecordFlow. All rights reserved.
      </div>
    </footer>
  </div>
</template>
