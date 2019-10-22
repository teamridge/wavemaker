import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _035de20d = () => import('../pages/eeengjob.vue' /* webpackChunkName: "pages/eeengjob" */).then(m => m.default || m)
const _1e5cd143 = () => import('../pages/thankyou.vue' /* webpackChunkName: "pages/thankyou" */).then(m => m.default || m)
const _fc044364 = () => import('../pages/sysengjob.vue' /* webpackChunkName: "pages/sysengjob" */).then(m => m.default || m)
const _5a114f64 = () => import('../pages/srmeengjob.vue' /* webpackChunkName: "pages/srmeengjob" */).then(m => m.default || m)
const _40eb0d05 = () => import('../pages/meengjob.vue' /* webpackChunkName: "pages/meengjob" */).then(m => m.default || m)
const _9784d9b8 = () => import('../pages/jobs.vue' /* webpackChunkName: "pages/jobs" */).then(m => m.default || m)
const _1c84246c = () => import('../pages/sreeengjob.vue' /* webpackChunkName: "pages/sreeengjob" */).then(m => m.default || m)
const _47a745d7 = () => import('../pages/careers.vue' /* webpackChunkName: "pages/careers" */).then(m => m.default || m)
const _51ab13c0 = () => import('../pages/cvengjob.vue' /* webpackChunkName: "pages/cvengjob" */).then(m => m.default || m)
const _7c897405 = () => import('../pages/mechatronicsengjob.vue' /* webpackChunkName: "pages/mechatronicsengjob" */).then(m => m.default || m)
const _2d29e9f4 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/eeengjob",
			component: _035de20d,
			name: "eeengjob"
		},
		{
			path: "/thankyou",
			component: _1e5cd143,
			name: "thankyou"
		},
		{
			path: "/sysengjob",
			component: _fc044364,
			name: "sysengjob"
		},
		{
			path: "/srmeengjob",
			component: _5a114f64,
			name: "srmeengjob"
		},
		{
			path: "/meengjob",
			component: _40eb0d05,
			name: "meengjob"
		},
		{
			path: "/jobs",
			component: _9784d9b8,
			name: "jobs"
		},
		{
			path: "/sreeengjob",
			component: _1c84246c,
			name: "sreeengjob"
		},
		{
			path: "/careers",
			component: _47a745d7,
			name: "careers"
		},
		{
			path: "/cvengjob",
			component: _51ab13c0,
			name: "cvengjob"
		},
		{
			path: "/mechatronicsengjob",
			component: _7c897405,
			name: "mechatronicsengjob"
		},
		{
			path: "/",
			component: _2d29e9f4,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
