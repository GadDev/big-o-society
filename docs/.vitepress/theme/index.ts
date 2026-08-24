import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme-without-fonts";
import Layout from "./Layout.vue";
import PatternGrid from "./components/PatternGrid.vue";
import PatternCallout from "./components/PatternCallout.vue";
import SocietyHome from "./components/SocietyHome.vue";

import TwoPointersJob from "./components/jobs/TwoPointersJob.vue";
import TwoPointersReviewQueue from "./components/jobs/TwoPointersReviewQueue.vue";

import "./styles/index.css";
import "./styles/jobs.css";

export default {
	extends: DefaultTheme,
	Layout,
	enhanceApp({ app }) {
		app.component("PatternGrid", PatternGrid);
		app.component("PatternCallout", PatternCallout);
		app.component("SocietyHome", SocietyHome);

		// The Job experience
		app.component("TwoPointersJob", TwoPointersJob);
		app.component("TwoPointersReviewQueue", TwoPointersReviewQueue);
	},
} satisfies Theme;
