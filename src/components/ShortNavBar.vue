<template>
  <div id="short-nav-bar">
    <v-toolbar app dense dark flat color="secondary">
      <v-btn icon @click="open = !open">
        <v-icon>fas fa-bars</v-icon>
      </v-btn>

      <v-toolbar-title>
        <strong>Stammered Voice</strong>
      </v-toolbar-title>
    </v-toolbar>

    <v-navigation-drawer 
      app absolute temporary
      v-model="open"
    >
      <v-list>
        <router-link
          v-for="item in items"
          :key="item.name"
          :to="item.to"
          class="menu-link"
        >
          <v-list-tile class="px-4 py-3 menu-link-card">
            <v-list-tile-content>
                <v-list-tile-title class="title">{{ item.name }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "ShortNavBar",
  data() {
    return { open: false }
  },
  props: [ "items" ]
}
</script>

<style>
.menu-link {
  text-decoration: none;
}

.menu-link-card {
  text-align: left
}
</style>