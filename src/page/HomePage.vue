<!-- src/page/production1.vue -->
<template>
  <div>
    <!-- Include the Navbar component -->
    <Navbar />

    <!-- Your production1 content goes here -->
    <h1>test</h1>
    <!-- ... other content specific to production1 -->
  </div>
</template>

<script>
// Import the Navbar component
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar, // Register the Navbar component
  },
  // ... other component options
}
</script>
