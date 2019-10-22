<template>
  <section id="portfolio" class="portfolio">
    <!-- Carousel -->
    <div class="carousel-container">
        <div class='carousel'>
          <div v-for="slide in slides" class='slide' :class="[slide.fallbackImageClass, {translate_left_100: animating}]" :key="slide.id">
              <div class="video-container">
                <video :ref="slide.ref" playsinline autoplay loop muted>
                  <source :src="slide.videoSrc" type="video/mp4">
                </video>
              </div>
              <div class="slide-overlay" v-bind:class="{active: slide.isCurrentSlide}"></div>
          </div>
        </div>
        <h4 class="slide-title"> {{ slides[0].companyName }} </h4>
        <div class='carousel-controls' @click="changeSlide">
            <button class='carousel-controls__button'>Next</button>
        </div>
    </div>
    <!-- /Carousel -->
    <!-- Carousel Info -->
    <div class="carousel-info">
      <div class="row">
        <div class="col xs9 xl2 offset-xl1">
          <h3 class="text-small--primary m-bottom--x-small">{{slides[0].welcomeTitle}}</h3>
          <p class="text-small--grey m-bottom--xx-large">{{slides[0].welcomeNote}}</p>
        </div>
        <div class="col xs9 xl5 offset-xl1">
          <h1 class="headline m-top--none m-bottom--x-large">{{slides[0].tagline}}</h1>
          <p class="m-bottom--x-large">{{slides[0].description_1}}</p>
          <p>{{slides[0].description_2}}</p>
          <button v-if="slides[0].isShowcaseLinkVisible" v-on:click="showModal" class="m-top--medium btn-link">See how it's being used at Dodgers Stadium</button>
          <a v-if="slides[0].isGrazeLinkVisible" href="https://www.grazemowing.com" target="_blank" class="m-top--medium btn-link">Invest Now</a>
          <a v-if="slides[0].isHitchLinkVisible" href="https://www.hitchrobotics.com" target="_blank" class="m-top--medium btn-link">Invest Now</a>
        </div>
      </div>
      <!-- Additional -->
      <div class="row">
        <div class="col xs9 offset-xl1">
          <h3 class="title-small--grey m-bottom--x-small m-top--xx-large">Venture History</h3>
          <p class="title-short m-top--none m-bottom--none">A snapshot from our <br> 250+ investments, globally</p>
        </div>
      </div>
      <!-- Additional -->
    </div>
    <!-- /Carousel Info -->
    <!-- Showcase Modal -->
    <ShowcaseModal v-show="isModalVisible" v-on:close="closeModal"/>
    <!-- Showcase Modal -->
  </section>
</template>

<script>
import ShowcaseModal from "~/components/ShowcaseModal";
export default {
  name: "Portfolio",
  components: {
    ShowcaseModal
  },
  data() {
    return {
      isModalVisible: false,
      animating: false,
      slides: [
        {
          id: 1,
          ref: "video_1",
          imgSrc: "../carousel/flippy.jpg",
          videoSrc:
            "../carousel/MISO_website_FINAL_h264_NOmusic_compressed.mp4",
          autoplay: true,
          isCurrentSlide: true,
            isActionLinkVisible: false,
          isShowcaseLinkVisible: true,
          companyName: "Miso Robotics",
          fallbackImageClass: "flippy",
          welcomeTitle: "Meet Flippy:",
          welcomeNote: "The AI Powered Robotic Kitchen Assistant",
          tagline: "Disrupting the fast food kitchen.",
          description_1:
            "We partnered with CaliBurger, a forward-thinking fast food company with over 50 locations in 12 countries, to solve their biggest problem.",
          description_2:
            "Together, we built Miso Robotics and launched its first product: Flippy, an AI-powered robotic kitchen assistant."
        },
          {
              id: 2,
              ref: "video_3",
              imgSrc: "../carousel/graze.jpg",
              videoSrc: "../carousel/graze-website-compressed.mp4",
              autoplay: false,
              isCurrentSlide: false,
              isGrazeLinkVisible: true,
              isShowcaseLinkVisible: false,
              companyName: "Graze Mowing",
              fallbackImageClass: "graze",
              welcomeTitle: "Meet Graze:",
              welcomeNote: "the World's 1st Electric, Fully Autonomous Commercial Lawn Mower",
              tagline: "Disrupting the landscaping indsutry",
              description_1:
                  "In partnership with LandCare and Mainscape, we have designed an advanced, electric, autonomous lawn mower specifically for the commercial landscaping industry to counter labor shortages and rising wages in the US.",
              description_2: "Two industry leaders, LandCare and Mainscape, have partnered with Graze to bring its autonomous mower to market."
          },
          {
              id: 3,
              ref: "video_4",
              imgSrc: "../carousel/hitch.jpg",
              videoSrc: "../carousel/hitch-video-compressed.mp4",
              autoplay: false,
              isCurrentSlide: false,
              isActionLinkVisible: true,
              isShowcaseLinkVisible: false,
              isHitchLinkVisible: true,
              companyName: "Hitch Robotics",
              fallbackImageClass: "hitch",
              welcomeTitle: "Meet Hitch:",
              welcomeNote: "Electric, fully autonomous farming transport system",
              tagline: "Saving the American Farm Industry",
              description_1:
                  "In collaboration with HMC Farms, Hitch has developed one of the first electric, fully-autonomous transport robot for the agriculture and farming industry.",
              description_2: ""
          },
        {
          id: 4,
          ref: "video_2",
          imgSrc: "../carousel/spaces.jpg",
          videoSrc: "../carousel/Spaces-web-video-compressed.mp4",
          autoplay: false,
          isCurrentSlide: false,
          isShowcaseLinkVisible: false,
            isActionLinkVisible: false,
          companyName: "Spaces",
          fallbackImageClass: "spaces",
          welcomeTitle: "Meet Spaces:",
          welcomeNote: "Experience the future of entertainment",
          tagline: "Immersive group virtual reality",
          description_1:
            "Together with Spaces, we’re launching VR experience centers around the globe. Through deep partnerships with IP rights holders, we’re able to bring unique sought-after entertainment options to the next generation of thrill-seekers.",
          description_2: ""
        }
      ]
    };
  },
  methods: {
    // Carousel steps to slide to next image
    // Step 1
    changeSlide() {
      let animatingStatus = this.animating;
      let currentVid = this.slides[0];
      let currentVidRef = currentVid.ref;
      let nextVid = this.slides[1];
      let nextVidRef = nextVid.ref;
      // Check to see if currently animating
      if (animatingStatus === false) {
        // Pause Current Video
        this.$refs[currentVidRef][0].pause();
        // Play Next Video
        this.$refs[nextVidRef][0].play();
        // Slide all slides to the left
        this.animating = true;
        // Remove active css class
        currentVid.isCurrentSlide = false;
        // Add active css class
        nextVid.isCurrentSlide = true;
        // Make call to remove animation class - Timed with the translate_left_100 css class
        setTimeout(this.removeAnimation, 500);
      }
    },
    // Step 2
    removeAnimation() {
      // Set animation to false and remove css class translate_left_100
      this.animating = false;
      // Make call to rearrange slide order
      this.changeSlideOrder();
    },
    // Step 3
    changeSlideOrder() {
      // Remove first item in slides array
      let firstSlide = this.slides.shift();
      // Attach removed item to the end of the slides array
      this.slides = this.slides.concat(firstSlide);
    },
    // End of carousel steps //
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  },
  mounted() {
    // Pause videos on page load
    let video_2 = this.slides[1].ref;
    this.$refs[video_2][0].pause();
  }
};
</script>

<style lang="scss" scoped>
.carousel-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
}

.carousel {
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
  width: 100%;
  background-color: rgba(10, 36, 84, 1);
}

.slide {
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  flex: 0 0 75%;
  // height: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
  @media (min-width: 500px) {
    // height: 300px;
  }
  @media (min-width: 768px) {
    // height: auto;
  }
  @media (min-width: 992px) {
    // height: 500px;
  }
  @media (min-width: 1024px) {
    max-height: 650px;
    flex: 0 0 85%;
  }
}

.slide-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.5s ease-in-out;
  background-color: rgba(10, 36, 84, 0.7);
  &.active {
    background-color: rgba(10, 36, 84, 0);
  }
}

.slide-title {
  position: absolute;
  right: 25%;
  bottom: 0;
  background-color: rgba(244, 247, 251, 0.95);
  color: #576376;
  padding: 0.5rem 1.2rem;
  font-weight: 500;
  font-size: 15px;
  min-width: 150px;
  text-align: center;
  @media (min-width: 768px) {
    min-width: 170px;
    padding: 1.5rem 2.2rem;
  }
  @media (min-width: 1024px) {
    right: 15%;
  }
}

.video-container {
  width: 100%;
  overflow: hidden;
  & video {
    display: block;
    max-width: 100%;
    &::-webkit-media-controls {
      display: none;
    }
  }
}

.carousel-controls {
  position: absolute;
  bottom: 0;
  right: 0;
  top: 0;
  width: 25%;
  display: flex;
  align-items: flex-end;
  padding: 0;
  &:hover {
    cursor: pointer;
  }
  @media (min-width: 768px) {
    padding: 0;
  }
  @media (min-width: 1024px) {
    width: 15%;
  }
}

// Next Button
.carousel-controls__button {
  border: none;
  outline: none;
  color: white;
  font-size: 15px;
  font-weight: 500;
  background: transparent;
  line-height: 1.5;
  padding: 0.5rem 1.2rem;
  cursor: pointer;
  @media (min-width: 768px) {
    font-size: 15px;
    padding: 1.5rem 2.2rem;
  }
  &:after {
    content: url("~/static/carousel/carousel-arrows-next.svg");
    margin-left: 0.5rem;
  }
}

// Slide Transition
.translate_left_100 {
  transform: translateX(-100%);
  transition: transform 0.5s ease-in-out;
}

// Slide Background Image Fallbacks
.flippy {
  background-image: url("~/static/carousel/flippy.jpg");
}

.spaces {
  background-image: url("~/static/carousel/spaces.jpg");
}

.btn-link {
  font-size: 14px;
  font-weight: bold;
  font-family: AvenirNextDemiBold;
  color: #3d83f6;
  text-decoration: underline;
  background-color: transparent;
  display: inline-block;
  border: 0;
  padding: 0;
}
</style>
