import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme-without-fonts'
import Layout from './Layout.vue'
import PatternGrid from './components/PatternGrid.vue'
import PatternCallout from './components/PatternCallout.vue'
import SocietyHome from './components/SocietyHome.vue'
import './styles/index.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('PatternGrid', PatternGrid)
    app.component('PatternCallout', PatternCallout)
    app.component('SocietyHome', SocietyHome)
  }
} satisfies Theme
