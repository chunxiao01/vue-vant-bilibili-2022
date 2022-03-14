import Vue from "vue"
import VueRouter from "vue-router"

const Home = () => import("views/home/Home")

const Category = () => import("views/category/Category")

const Profile = () => import("views/profile/Profile")
const HistoryView = () => import("views/profile/childComps/HistoryView")

const Search = () => import("views/search/Search")

const VideoDetail = () => import("views/videodetail/VideoDetail")

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/category",
    component: Category
  },
  {
    path: "/profile",
    component: Profile
  },
  {
    path: "/historyview",
    component: HistoryView
  },
  {
    path: "/search",
    component: Search
  },
  {
    path: "/videodetail",
    component: VideoDetail
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
