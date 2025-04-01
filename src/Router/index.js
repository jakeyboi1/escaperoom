import { createRouter, createWebHashHistory  } from 'vue-router'
import Home from '../components/home.vue'
//import About from '../pages/aboutPage.vue'
//import Projects from '../pages/projectsPage.vue'

const router = createRouter({
    history: createWebHashHistory('/escaperoom/'),
    routes: [
        { path: '/', name: "Home", component: Home }
        //{ path: '/about', name: "About", component: About },
        //{ path: '/projects', name: "Projects", component: Projects }
    ]
})

export default router;