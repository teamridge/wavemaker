<template>
    <section class="company-logos fullwidth">
      <ul class="logos-grid">
        <li class="bumper" v-bind:class="{ 'is-pushed': logoSectionIsPushed}"></li>
        <li class="logo-set">
          
        <div class="company-logo">
            <img src="~/static/company-logos/clutter.svg" alt="clutter">
            <img src="~/static/company-logos/clutter-active.svg" alt="clutter">
          </div>
          
           <div class="company-logo">
            <img src="~/static/company-logos/phunware.svg" alt="phunware">
            <img src="~/static/company-logos/phunware-active.svg" alt="phunware">
          </div>

        </li>
        <li class="logo-set">
          
          
        </li>
        <li class="logo-set">

      <div class="company-logo has-border-left">
            <img src="~/static/company-logos/miso-robotics.svg" alt="miso-robotics">
            <img src="~/static/company-logos/miso-robotics-active.svg" alt="miso-robotics">
          </div>
          <div class="company-logo has-border-left">
            <img src="~/static/company-logos/surfair.svg" alt="surfair">
            <img src="~/static/company-logos/surfair-active.svg" alt="surfair">
          </div>

     
        </li>

        <li class="logo-set">
          <div class="company-logo has-border-left">
            <img src="~/static/company-logos/graze.png" alt="graze">
            <img src="~/static/company-logos/graze-active.png" alt="graze">
          </div>
          <div class="company-logo has-border-left">
            <img src="~/static/company-logos/hitch.png" alt="hitch">
            <img src="~/static/company-logos/hitch-active.png" alt="hitch">
          </div>

        </li>
        <li class="logo-set">
          <div class="company-logo">
            <img src="~/static/company-logos/honeybook.svg" alt="honeybook">
            <img src="~/static/company-logos/honeybook-active.svg" alt="honeybook">
          </div>
          <div class="company-logo">
            <img src="~/static/company-logos/gyft.svg" alt="gyft">
            <img src="~/static/company-logos/gyft-active.svg" alt="gyft">
          </div>
        </li>
        <li class="logo-set">
          <div class="company-logo">
            <img src="~/static/company-logos/winc.svg" alt="winc">
            <img src="~/static/company-logos/winc-active.svg" alt="winc">
          </div>
          <div class="company-logo">
            <img src="~/static/company-logos/stackcommerce.svg" alt="stackcommerce">
            <img src="~/static/company-logos/stackcommerce-active.svg" alt="stackcommerce">
          </div>
        </li>
        <li class="logo-set">
          <div class="company-logo">
            <img src="~/static/company-logos/mindbody.svg" alt="mindbody">
            <img src="~/static/company-logos/mindbody-active.svg" alt="mindbody">
          </div>
          <div class="company-logo">
            <img src="~/static/company-logos/chownow.svg" alt="chownow">
            <img src="~/static/company-logos/chownow-active.svg" alt="chownow">
          </div>
        </li>
        <li class="logo-set">
          <div class="company-logo">
            <img src="~/static/company-logos/relativity.svg" alt="relativity">
            <img src="~/static/company-logos/relativity-active.svg" alt="relativity">
          </div>
          <div class="company-logo">
            <img src="~/static/company-logos/ranker.svg" alt="ranker">
            <img src="~/static/company-logos/ranker-active.svg" alt="ranker">
          </div>
        </li>
        <li class="logo-set">
          
          <div class="company-logo">
            <img src="~/static/company-logos/bridg.svg" alt="bridg">
            <img src="~/static/company-logos/bridg-active.svg" alt="bridg">
          </div>


          <div class="company-logo">
            <img src="~/static/company-logos/bougs.svg" alt="bougs">
            <img src="~/static/company-logos/bougs-active.svg" alt="bougs">
          </div>
        </li>
        <li class="logo-set">
          <div class="company-logo">
            <img src="~/static/company-logos/auditboard.svg" alt="auditboard">
            <img src="~/static/company-logos/auditboard-active.svg" alt="auditboard">
          </div>
          <div class="company-logo">
            <img src="~/static/company-logos/blue-bottle.svg" alt="blue-bottle">
            <img src="~/static/company-logos/blue-bottle-active.svg" alt="blue-bottle">
          </div>
        </li>
        <li class="logo-set">
          <div class="company-logo">
            <img src="~/static/company-logos/figs.svg" alt="figs">
            <img src="~/static/company-logos/figs-active.svg" alt="figs">
          </div>
          <div class="company-logo">
            <img src="~/static/company-logos/joany.svg" alt="joany">
            <img src="~/static/company-logos/joany-active.svg" alt="joany">
          </div>
        </li>
        <li class="logo-set">
          <div class="company-logo">
            <img src="~/static/company-logos/floqast.svg" alt="floqast">
            <img src="~/static/company-logos/floqast-active.svg" alt="floqast">
          </div>
          <div class="company-logo">
            <img src="~/static/company-logos/pixalate.svg" alt="pixalate">
            <img src="~/static/company-logos/pixalate-active.svg" alt="pixalate">
          </div>
        </li>
        <li class="logo-set">
          <div class="company-logo">
            <img src="~/static/company-logos/hellotech.svg" alt="hellotech">
            <img src="~/static/company-logos/hellotech-active.svg" alt="hellotech">
          </div>

          <div class="company-logo">
            <img src="~/static/company-logos/jukin-media.svg" alt="jukin-media">
            <img src="~/static/company-logos/jukin-media-active.svg" alt="jukin-media">
          </div>

         
        </li>
      </ul>
    </section>
</template>

<script>
export default {
  name: "CompanyLogos",
  data() {
    return {
      logoSectionIsPushed: false
    };
  },
  methods: {
    handleLogoPush() {
      let scrollVal = window.scrollY;
      // Push Logos Left
      if (scrollVal > 2350) {
        this.logoSectionIsPushed = true;
      } else {
        this.logoSectionIsPushed = false;
      }
    }
  },
  created() {
    if (process.browser) {
      window.addEventListener("scroll", this.handleLogoPush);
    }
  }
};
</script>

<style lang="scss" scoped>
.logos-grid {
  display: flex;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  border-top: 1px solid rgba(7, 69, 175, 0.1);
  border-bottom: 1px solid rgba(7, 69, 175, 0.1);
  &::-webkit-scrollbar-thumb {
    background-color: var(--primary-color);
  }
  &::-webkit-scrollbar {
    height: 2px;
    background-color: rgba(0, 0, 0, 0);
  }
}

.bumper {
  flex: 0 0 calc((100vw - 960px) / 2);
  transition: all 0.5s ease-in-out;
  &.is-pushed {
    flex: 0 0 calc((100vw - 1200px) / 2);
  }
}

.logo-set {
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #f9fafd;
  &:after {
    content: url("~/static/crosshairs.svg");
    width: 10px;
    height: 10px;
    position: absolute;
    left: 100%;
    top: 50%;
    margin-left: -6px;
    margin-top: -11px;
    transition: all 0.2s linear;
    z-index: 1;
  }
  &:first-child {
    border-left: 1px dashed rgba(7, 69, 175, 0.1);
  }
  // Removes crosshairs on the last set of logos
  &:nth-last-child(1) {
    &:after {
      content: "";
      width: 0;
    }
  }
}

.company-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px dashed rgba(7, 69, 175, 0.1);
  width: 125px;
  height: 125px;
  position: relative;
  @media (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
  @media (min-width: 1024px) {
    width: 200px;
    height: 200px;
  }
  // Adds border-top to the bottom logo
  &:nth-child(2) {
    border-top: 1px dashed rgba(7, 69, 175, 0.1);
  }
  &.has-border-left {
    border-left: 1px dashed rgba(7, 69, 175, 0.1) !important;
  }
}

// Hover Image
.company-logo img:nth-child(2) {
  opacity: 0;
  position: absolute;
  z-index: 2;
  transition: all 0.15s linear;
  &:hover {
    opacity: 1;
    // transform: scale(0.95);
  }
}
</style>
