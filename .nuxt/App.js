import Vue from 'vue'


import '../assets/scss/main.scss'


let layouts = {

  "_careers": () => import('../layouts/careers.vue'  /* webpackChunkName: "layouts/careers" */).then(m => m.default || m),

  "_cvengjob": () => import('../layouts/cvengjob.vue'  /* webpackChunkName: "layouts/cvengjob" */).then(m => m.default || m),

  "_default": () => import('../layouts/default.vue'  /* webpackChunkName: "layouts/default" */).then(m => m.default || m),

  "_eeengjob": () => import('../layouts/eeengjob.vue'  /* webpackChunkName: "layouts/eeengjob" */).then(m => m.default || m),

  "_job": () => import('../layouts/job.vue'  /* webpackChunkName: "layouts/job" */).then(m => m.default || m),

  "_mechatronicsengjob": () => import('../layouts/mechatronicsengjob.vue'  /* webpackChunkName: "layouts/mechatronicsengjob" */).then(m => m.default || m),

  "_meengjob": () => import('../layouts/meengjob.vue'  /* webpackChunkName: "layouts/meengjob" */).then(m => m.default || m),

  "_sreeengjob": () => import('../layouts/sreeengjob.vue'  /* webpackChunkName: "layouts/sreeengjob" */).then(m => m.default || m),

  "_srmeengjob": () => import('../layouts/srmeengjob.vue'  /* webpackChunkName: "layouts/srmeengjob" */).then(m => m.default || m),

  "_sysengjob": () => import('../layouts/sysengjob.vue'  /* webpackChunkName: "layouts/sysengjob" */).then(m => m.default || m),

  "_thankyou": () => import('../layouts/thankyou.vue'  /* webpackChunkName: "layouts/thankyou" */).then(m => m.default || m)

}

let resolvedLayouts = {}

export default {
  head: {"title":"Wavemaker Labs","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"wavemaker labs website"}],"link":[{"rel":"icon","type":"image\u002Fpng","href":"favicon.png"}],"style":[],"script":[]},
  render(h, props) {
    
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      }
    }, [ templateEl ])

    return h('div',{
      domProps: {
        id: '__nuxt'
      }
    }, [
      
      transitionEl
    ])
  },
  data: () => ({
    layout: null,
    layoutName: ''
  }),
  beforeCreate () {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created () {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },
  
  methods: {
    
    setLayout (layout) {
      if (!layout || !resolvedLayouts['_' + layout]) layout = 'default'
      this.layoutName = layout
      let _layout = '_' + layout
      this.layout = resolvedLayouts[_layout]
      return this.layout
    },
    loadLayout (layout) {
      if (!layout || !(layouts['_' + layout] || resolvedLayouts['_' + layout])) layout = 'default'
      let _layout = '_' + layout
      if (resolvedLayouts[_layout]) {
        return Promise.resolve(resolvedLayouts[_layout])
      }
      return layouts[_layout]()
      .then((Component) => {
        resolvedLayouts[_layout] = Component
        delete layouts[_layout]
        return resolvedLayouts[_layout]
      })
      .catch((e) => {
        if (this.$nuxt) {
          return this.$nuxt.error({ statusCode: 500, message: e.message })
        }
      })
    }
  },
  components: {
    
  }
}

