<template>
    <section class="Job">
        <div class="row">
            <h1>Computer Vision Engineer</h1>

            <h4>Job Type: Full-Time</h4>
            <br>
            <h4>We are seeking an experienced hands-on Computer Vision Engineer to help lead the company from early-stage product development through the commercialization of autonomous field service vehicles, robotics and other automation applications. The right candidate must be ready to design vision architecture, build, debug and serve as the team’s subject area expert in this field.</h4>

            <div class="qualifications">
                <h4>Essential Responsibilities:</h4>
                <ul>
                    <li>Design, implement, test, and document robotics and vision algorithms in C/C++ on desktop and embedded platforms.</li>
                    <li>Act as team lead with understanding of and experience with any of the following: behavior-based control, navigation, path-planning, obstacle avoidance, SLAM, estimation and control.</li>
                    <li>Ultimate troubleshooter with understanding of and experience with any of the following: visual object recognition, structure from motion, 3D reconstruction, ego-motion estimation, feature extraction, deep learning frameworks.</li>
                    <li>Understanding of and experience with Amazon AWS cloud infrastructure and services and Internet of Things devices, protocols, and API integration.</li>
                    <li>Hands-on design and development experience of software and hardware products.</li>
                    <li>Ability to build/assemble/modify electronic assemblies or robots into various configurations for test purposes.</li>
                    <li>Experience developing embedded systems.</li>
                    <li>Experience validating consumer or robotics products.</li>

                </ul>
            </div>

            <div class="qualifications">
                <h4>Who you are:</h4>
                <ul>
                    <li>5+ years of practical experience deploying computer vision software systems.</li>
                    <li>B.S. and/or M.S. and/or Ph.D. in CS/EE or closely related field with hands on work experience in machine vision, lidar processing, radar processing, environmental modeling, and/or sensor fusion.  M.S. and above preferred.</li>
                    <li>You possess a deep understanding of programming languages such as C, C++, Python.</li>
                    <li>Familiarity debugging hardware issues.</li>
                    <li>You are a self-starter and can execute with confidence.   You maintain an opportunistic, problem-solving attitude and work demeanor.  You are an entrepreneur at heart.</li>
                    <li>Ability to travel globally if/as needed.</li>
                    <li>Excellent communication and teamwork skills. Self-motivated and passionate about robotics and AI.</li>
                    <li>Legal authorization to work in the U.S. is required. </li>
                </ul>
            </div>


            <div class="apply-section">
                <p>Apply here: </p>
            </div>

            <JobApplication job-title="cveng" />



            <div class="disclosure">
                <i><h4>Wavemaker Labs is a product development accelerator. We are a diverse team of innovators, builders and entrepreneurs, developing advanced technologies for practical use in robotics, automation and mobility… to name a few. We are an equal opportunity employer and value diversity. All employment is decided on the basis of qualifications, merit and business need.</h4></i>
            </div>

        </div>
    </section>
</template>

<script>
    import JobApplication from "../JobApplication";
    export default {
        name: "CVEngJob",
        components: {JobApplication},
    };
</script>
