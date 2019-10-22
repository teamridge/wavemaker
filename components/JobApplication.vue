<template>
    <div class="job-application">

        <form action="https://liveformhq.com/form/afe6e605-0adc-498d-897a-eedd80057642" method="POST" accept-charset="utf-8" enctype="multipart/form-data">
            <input type="hidden" name="_utf8" value="✓">

            <input type="hidden" value="https://www.wavemakerlabs.com/thankyou" name="_redirect" />


            <div class="form-group">
                <label for="resume">Resume *</label><br />
                <input type=file name=resume id="resume" required/> <br />
            </div>

            <div class="form-group">
                <label for="name">Full Name *</label>
                <input required type="text" id="name" name="name" style="width: 100%; padding: 12px 20px; margin: 8px 0; display: inline-block; border: 1px solid #ccc; border-radius: 4px; -webkit-box-sizing: border-box; box-sizing: border-box;"> <br />
            </div>

            <input type="hidden" name="jobtype" :value="this.jobTitle" />

            <div class="form-group">
                <label for="email">Email *</label>
                <input required type="text" id="email" name="email" style="width: 100%; padding: 12px 20px; margin: 8px 0; display: inline-block; border: 1px solid #ccc; border-radius: 4px; -webkit-box-sizing: border-box; box-sizing: border-box;"> <br />
            </div>

            <div class="form-group">
                <label for="phone">Phone *</label>
                <input required type="text" id="phone" name="phone" style="width: 100%; padding: 12px 20px; margin: 8px 0; display: inline-block; border: 1px solid #ccc; border-radius: 4px; -webkit-box-sizing: border-box; box-sizing: border-box;"> <br />
            </div>

            <div class="form-group">
                <label for="company">Current Company</label>
                <input type="text" id="company" name="company" style="width: 100%; padding: 12px 20px; margin: 8px 0; display: inline-block; border: 1px solid #ccc; border-radius: 4px; -webkit-box-sizing: border-box; box-sizing: border-box;"> <br />
            </div>

            <div class="form-group">
                <h3>Links</h3>
            </div>

            <div class="form-group">
                <label for="linkedin">LinkedIn URL</label>
                <input type="text" id="linkedin" name="linkedin" style="width: 100%; padding: 12px 20px; margin: 8px 0; display: inline-block; border: 1px solid #ccc; border-radius: 4px; -webkit-box-sizing: border-box; box-sizing: border-box;"> <br />
            </div>

            <div class="form-group">
                <label for="github">GitHub URL</label>
                <input type="text" id="github" name="github" style="width: 100%; padding: 12px 20px; margin: 8px 0; display: inline-block; border: 1px solid #ccc; border-radius: 4px; -webkit-box-sizing: border-box; box-sizing: border-box;"> <br />
            </div>

            <div class="form-group">
                <label for="portfolio">Portfolio</label>
                <input type="text" id="portfolio" name="portfolio" style="width: 100%; padding: 12px 20px; margin: 8px 0; display: inline-block; border: 1px solid #ccc; border-radius: 4px; -webkit-box-sizing: border-box; box-sizing: border-box;"> <br />
            </div>

            <div class="form-group">
                <label for="other">Other Website</label>
                <input type="text" id="other" name="other" style="width: 100%; padding: 12px 20px; margin: 8px 0; display: inline-block; border: 1px solid #ccc; border-radius: 4px; -webkit-box-sizing: border-box; box-sizing: border-box;"> <br />
            </div>


            <div class="form-group">
                <h3>Additional Information</h3>
                <br>
                <textarea type="textarea" rows="10" name="additional" placeholder="Add a cover letter or anything else you want to share."></textarea> <br />
            </div>

            <div class="form-group">
                <button type="submit" class="button">Submit Application</button>
            </div>


        </form>

    </div>
</template>

<script>

    export default {
        name: "JobApplication",
        props: {
            jobTitle: String
        }
    };
</script>

<style>

    input[type=file], select {
        width: 100%;
        padding: 12px 0;
        margin: 8px 0;
        display: inline-block;
    }

    textarea, select {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }

    input[type=submit] {
        width: 100%;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    input[type=submit]:hover {
        background-color: #45a049;
    }

    .form-group {
        background-color: #f2f2f2;
        padding: 20px;
    }
</style>