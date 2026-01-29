import { createRouter, createWebHistory } from "vue-router";
import { components } from "vuetify/dist/vuetify.js";
import Login from "./pages/Login.vue";
import Signup from "./pages/Signup.vue";
import Home from "./pages/Home.vue";
import Profile from "./pages/Profile.vue";
import BountyList from "./pages/BountyList.vue";
import ActiveIssue from "./pages/ActiveIssue.vue";
import PostNewIssue from "./pages/PostNewIssue.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/signup", component: Signup },
  { path: "/profile", component: Profile },
  { path: "/bounty", component: BountyList },
  { path: "/issue", component: ActiveIssue },
  { path: "/postnew", component: PostNewIssue }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
