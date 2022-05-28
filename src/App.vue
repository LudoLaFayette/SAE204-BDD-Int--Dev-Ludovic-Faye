<template>
  <header>
    <icon-logo />
    <FilmIcon class="h-5 w-5 fill-blue-300 stroke-blue-600" />
    <nav>
      <RouterLink to="/" class="text-blue-600 underline">Accueil</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<script>

export default {
  components: { },
};
</script>