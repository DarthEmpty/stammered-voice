<template>
  <div id="short-nav-bar">
    <v-toolbar app dense dark flat color="grey">
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
      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.name"
          link
        >
          <router-link :to="item.to" class="menu-link">
            <v-card flat tile class="px-4 py-3 menu-link-card">
              <v-list-item-content class="headline">
                  {{ item.name }}
              </v-list-item-content>
            </v-card>
          </router-link>  
        </v-list-item>
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