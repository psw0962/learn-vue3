<template>
  <div>
    <ul class="nav nav-pills">
      <li class="nav-item">
        <RouterLink class="nav-link" active-class="active" to="/nested/one"
          >Nested One</RouterLink
        >
      </li>

      <li class="nav-item">
        <RouterLink class="nav-link" active-class="active" to="/nested/two"
          >Nested Two</RouterLink
        >
      </li>
    </ul>

    <hr />

    <RouterView></RouterView>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
