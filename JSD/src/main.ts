import { createApp } from 'vue'
import '@/style/reset.scss'
import App from './App.vue'
// 导入Element Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import HeroSection from './components/Hero Section/index.vue'
import HowitWorks from './components/How it Works/index.vue'
import LiveDemo from './components/Live Demo/index.vue'
import FinalCTA from './components/Final CTA/index.vue'
import RiskReversalAndFAQ from './components/Risk Reversal & FAQ/index.vue'
import SocialProof from './components/Social Proof/index.vue'
import PainPoint from './components/Pain Point/index.vue'
import Solution from './components/Solution/index.vue'
import TheOffer from './components/The Offer/index.vue'
import ValueStack from './components/Value Stack/index.vue'
import Pay from './components/Pay/index.vue'

const app = createApp(App)
// 使用Element Plus
app.use(ElementPlus)
app.component('HeroSection', HeroSection)
app.component('HowitWorks', HowitWorks)
app.component('LiveDemo', LiveDemo)
app.component('FinalCTA', FinalCTA)
app.component('RiskReversalAndFAQ', RiskReversalAndFAQ)
app.component('SocialProof', SocialProof)
app.component('PainPoint', PainPoint)
app.component('Solution', Solution)
app.component('TheOffer', TheOffer)
app.component('ValueStack', ValueStack)
app.component('Pay', Pay)
app.mount('#app')
