import { createRouter, createWebHashHistory } from 'vue-router'
import landingVue from '../views/landingPage.vue'
import AppSidebar from '../layout/AppSidebar.vue'
import AppToHeader from '../layout/AppToHeader.vue'
import overView from '../views/overView.vue'
import AppUserTopHeader from '../layout/AppUserTopHeader.vue'
import AppUserSideBar from '../layout/AppUserSideBar.vue'
import questionView from '../views/questionView.vue'
import allquestionsView from '../views/allQuestionsView.vue'
import newQuestion from '../views/newQuestion.vue'
import newResponse from '../views/newResponse.vue'
const routes = [
  {
    path: '/',
    name: 'landingPage',
    components: {
      default: landingVue
    }
  },
  {
    path: '/overview',
    name: 'Overviewlink',
    components: {
        topheader: AppToHeader,
        sidebar: AppSidebar,
        default: overView,
    }
  },
  {
    path: '/user/questions',
    name: 'questionlink',
    components: {
        topheader: AppUserTopHeader,
        sidebar: AppUserSideBar,
        default: questionView,
    }
  },
  {
    path: '/user/addNewQuestion',
    name: 'newquestionlink',
    components: {
        topheader: AppUserTopHeader,
        sidebar: AppUserSideBar,
        default: newQuestion,
    }
  },
  {
    path: '/user/addNewResponse',
    name: 'responselink',
    components: {
        topheader: AppUserTopHeader,
        sidebar: AppUserSideBar,
        default: newResponse,
    }
  },
  {
    path: '/user/allQuestions',
    name: 'questionslink',
    components: {
        topheader: AppUserTopHeader,
        sidebar: AppUserSideBar,
        default: allquestionsView,
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  
})

export default router
