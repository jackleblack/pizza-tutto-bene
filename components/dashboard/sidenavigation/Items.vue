<template>
  <ul class="md:pl-2">
    <sidenav-item title="Carte" to="/">
      <pizza-icon />
    </sidenav-item>

    <sidenav-item title="Clients" to="/customers">
      <user-icon />
    </sidenav-item>

    <!-- <sidenav-item title="Archives" to="/admin/archives">
      <archives-icon />
    </sidenav-item>

    <sidenav-item title="Credits" to="/admin/credits">
      <credits-icon />
    </sidenav-item>

    <sidenav-item title="Settings" to="/admin/settings">
      <settings-icon />
    </sidenav-item>

    <sidenav-item title="Documentation" to="/admin/documentation">
      <documentation-icon />
    </sidenav-item> -->
  </ul>
</template>

<script>
import SidenavItem from './Item.vue'

/* ICONS */
import PizzaIcon from './icons/Pizza.vue'
import UserIcon from './icons/User.vue'
// import CreditsIcon from './icons/Credits.vue'
// import SettingsIcon from './icons/Settings.vue'
// import ArchivesIcon from './icons/Archives.vue'
// import DocumentationIcon from './icons/Documentation.vue'

export default {
  name: 'SidenavItems',
  components: {
    PizzaIcon,
    UserIcon,
    SidenavItem,
    // CreditsIcon,
    // SettingsIcon,
    // ArchivesIcon,
    // DocumentationIcon,
  },
}
</script>
