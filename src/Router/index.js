import { createRouter, createWebHashHistory  } from 'vue-router'
import Home from '../views/home.vue'
import Wordle from '../views/wordle.vue'
import RedButton from '../views/redbutton.vue'
import Captcha from '../views/captcha.vue'
import FinalPuzzle from '../views/finalpuzzle.vue'

const router = createRouter({
    history: createWebHashHistory('/escaperoom/'),
    routes: [
        { path: '/', name: "Home", component: Home },
        { path: '/wordle', name: "Wordle", component: Wordle },
        { path: '/redbutton', name: "Red Button", component: RedButton },
        { path: '/captcha', name: "Home", component: Captcha },
        { path: '/final', name: "Home", component: FinalPuzzle }
    ]
})

export default router;