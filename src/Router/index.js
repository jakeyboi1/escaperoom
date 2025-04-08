import { createRouter, createWebHashHistory  } from 'vue-router'
import Home from '../views/home.vue'
import Wordle from '../views/wordle.vue'
import RedButton from '../views/redbutton.vue'
import Captcha from '../views/captcha.vue'
import FinalPuzzle from '../views/finalpuzzle.vue'

const router = createRouter({
    history: createWebHashHistory('/escaperoom/'),
    routes: [
        { path: '/w', name: "Home", component: Home },
        { path: '/w', name: "Wordle", component: Wordle },
        { path: '/', name: "Red Button", component: RedButton },
        { path: '/captcha', name: "Home", component: Captcha },
        { path: '/final', name: "Home", component: FinalPuzzle }
    ]
})

export default router;