<template>
    <section id="team" class="team">
      <div class="row">
        <div class="col xs9 xl6">
          <!-- Team Grid -->
          <div class="team-grid">
            <!-- Employee -->
            <div class="team-member">
              <img src="~/static/team/buck-jordan.jpg" alt="Team Member" class="responsive">
              <div class="team-member-info">
                <p>Buck Jordan</p>
                <p>Managing Partner</p>
              </div>
            </div>
            <!-- /Employee -->
            <!-- Employee -->
        
            <!-- /Employee -->
            <!-- Employee -->
            <div class="team-member">
              <img src="~/static/team/eric-manlunas.jpg" alt="Team Member" class="responsive">
              <div class="team-member-info">
                <p>Eric Manlunas</p>
                <p>Partner</p>
              </div>
            </div>
            <!-- /Employee -->
            <!-- Employee -->
            <!-- <div class="team-member">
              <img src="~/static/team/paul-santos.jpg" alt="Team Member" class="responsive">
              <div class="team-member-info">
                <p>Paul Santos</p>
                <p>Managing Partner</p>
              </div>
            </div> -->
            <!-- /Employee -->
            <!-- Employee -->
            <div class="team-member">
              <img src="~/static/team/matt-lucido.jpg" alt="Team Member" class="responsive">
              <div class="team-member-info">
                <p>Matt Lucido</p>
                <p>Principal</p>
              </div>
            </div>
            
            <!-- /Employee -->
            <!-- Employee -->
            <div class="team-member">
              <img src="~/static/team/john-marshall-stubs.jpg" alt="Team Member" class="responsive">
              <div class="team-member-info">
                <p>John-Marshall Stubbs</p>
                <p>Associate</p>
              </div>
            </div>

              <div class="team-member">
              <img src="~/static/team/michael.jpg" alt="Team Member" class="responsive">
              <div class="team-member-info">
                <p>Michael Mizrahi</p>
                <p>Venture Partner</p>
              </div>
            </div>
            <!-- /Employee -->
            <!-- Employee -->
            <div class="team-member">
              <img src="~/static/team/roman-flores.jpg" alt="Team Member" class="responsive">
              <div class="team-member-info">
                <p>Roman Flores</p>
                <p>CTO - Graze</p>
              </div>
            </div>

            <!-- /Employee -->
          <!-- Employee -->
            <div class="team-member">
              <img src="~/static/team/nick-degnan.jpg" alt="Team Member" class="responsive">
              <div class="team-member-info">
                <p>Nick Degnan</p>
                <p>VP Product and Operations</p>
              </div>
            </div>
            <!-- /Employee -->




            <!-- Employee -->
            <div class="team-member">
              <img src="~/static/team/adam-parker.jpg" alt="Team Member" class="responsive">
              <div class="team-member-info">
                <p>Adam Parker</p>
                <p>EIR</p>
              </div>
            </div>
            <!-- /Employee -->

           <!-- Employee -->
            <div class="team-member">
              <img src="~/static/team/kimberly-ng.jpg" alt="Team Member" class="responsive">
              <div class="team-member-info">
                <p>Kimberly Ng</p>
                <p>Chief of Staff</p>
              </div>
            </div>
            <!-- /Employee -->

            <!-- Employee -->
            <div class="team-member">
              <img src="~/static/team/mikal-khoso.jpg" alt="Team Member" class="responsive">
              <div class="team-member-info">
                <p>Mikal Khoso</p>
                <p>Analyst</p>
              </div>
            </div>
            <!-- /Employee -->
            <!-- Employee -->
            <div class="team-member">
              <img src="~/static/team/shaina-gill.jpg" alt="Team Member" class="responsive">
              <div class="team-member-info">
                <p>Shaina Gill</p>
                <p>Analyst</p>
              </div>
            </div>
            <!-- /Employee -->
          
            <!-- Employee -->
            <div class="team-member">
              <img src="~/static/team/karan-kochhar.jpg" alt="Team Member" class="responsive">
              <div class="team-member-info">
                <p>Karan Kochhar</p>
                <p>Analyst</p>
              </div>
            </div>
            <!-- /Employee -->

            <!-- Employee -->
            <div class="team-member">
              <img src="~/static/team/philip.jpg" alt="Team Member" class="responsive">
              <div class="team-member-info">
                <p>Philip Wong</p>
                <p>Systems Engineer</p>
              </div>
            </div>
            <!-- /Employee -->

            <!-- Employee -->
            <div class="team-member">
              <img src="~/static/team/garrett.jpg" alt="Team Member" class="responsive">
              <div class="team-member-info">
                <p>Garrett O'Grady</p>
                <p>Software Engineer</p>
              </div>
            </div>
            <!-- /Employee -->
          


          </div>
          <!-- /Team Grid -->
        </div>
        <div class="col xs9 xl2 offset-xl1">
          <p class="m-top--xx-large">We are venture investors, operators, and technologists, who have launched over 100 companies.</p>
          <p class="m-top--large">Deep experience in Big Data, AI, Robotics, and Automation.</p>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: "Team"
};
</script>

<style lang="scss" scoped>
.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  overflow: auto;
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}

.team-member {
  margin-right: 0.5rem;
  margin-bottom: 1rem;
  position: relative;
  background-color: rgba(10, 36, 84, 1);
  @media (min-width: 500px) {
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
  img {
    display: block;
    opacity: 0.75;
  }
}

.team-member-info {
  padding-top: 0.2rem;
  background-color: #fbfbfb;
  & p {
    color: var(--color);
    font-size: 12px;
    font-weight: 500;
    font-family: AvenirNextRegular;
    margin-bottom: 0;
    line-height: 1.1rem;
  }
  @media (min-width: 1245px) {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(10, 36, 84, 0.7);
    opacity: 0;
    &:hover {
      opacity: 1;
    }
    & p {
      color: white;
      font-size: 15px;
      font-weight: 600;
      text-align: center;
      margin-bottom: 0;
      line-height: 1.5rem;
    }
  }
}
</style>
