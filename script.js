
<!-- SECTION 1 : Intro / About Me -->

function changeEducation(content) {
    if (content === "education")
        document.getElementById("education").innerHTML = ` <div class="project-link autolink">
        Education
    <div class="project-link autolink">
        <p style='font-size: 11px; color: darkgrey; padding-right: 2rem'> <br/>PG Software Engineering | ISEP (2019-20)</p>
        <p style='font-size: 11px; color: darkgrey; padding-right: 2rem'>MSc Management | University of Bradford (2016-17)</p>
        <p style='font-size: 11px; color: darkgrey; padding-right: 2rem'>BSc Economics | FEP.UP (2012-16)</p></br>
    </div>
    </div> `
}

function changeWork(content) {
    if (content === "work")
        document.getElementById("work").innerHTML = ` <div class="project-link autolink">
        Work
    <div class="project-link autolink">
        <p style='font-size: 11px; color: darkgrey; padding-right: 2rem'> <br/>Founder | Playtime (2020 - present)</p>
        <p style='font-size: 11px; color: darkgrey; padding-right: 2rem'>Consultant | PwC (2017-19)</p>
        <p style='font-size: 11px; color: darkgrey; padding-right: 2rem'>HR Analytics | Jeronimo Martins (2016)</p></br>
    </div>
    </div> `
}


function changeLanguages(content) {
    if (content === "languages")
        document.getElementById("languages").innerHTML = ` <div class="project-link autolink">
        Languages
    <div class="project-link autolink">
        <p style='font-size: 11px; color: darkgrey; padding-right: 2rem'> <br/>English / Portuguese / French</p>
        <p style='font-size: 11px; color: darkgrey; padding-right: 2rem'>Spanish / Italian (basic)</p></br>
    </div>
    </div> `
}


function changeInterests(content) {
    if (content === "interests")
        document.getElementById("interests").innerHTML = ` <div class="project-link autolink">
        Interests
    <div class="project-link autolink">
        <p style='font-size: 11px; color: darkgrey; padding-right: 2rem'> <br/>Favorite album: 808s & Heartbreaks</p>
        <p style='font-size: 11px; color: darkgrey; padding-right: 2rem'>Favorite movie: Tree of Life</p>
        <p style='font-size: 11px; color: darkgrey; padding-right: 2rem'>Favorite book: there's too many, so I'll just 
        name drop a couple of my favorite authors - Axel Vervoordt, Yuval Noah Harari, Walter Isaacson</p></br>
    </div>
    </div> `
}

function changeOthers(content) {
    if (content === "others")
        document.getElementById("others").innerHTML = ` <div class="project-link autolink">
        Others
    <div class="project-link autolink">
        <p style='font-size: 11px; color: darkgrey; padding-right: 2rem'> <br/>Interested in astronomy and geometry.</p>
        <p style='font-size: 11px; color: darkgrey; padding-right: 2rem'>I also enjoy walking and playing the piano.</p>
        <p style='font-size: 11px; color: darkgrey; padding-right: 2rem'>Playing tennis is also therapeutic.</p>
        <p style='font-size: 11px; color: darkgrey; padding-right: 2rem'>Meditation is an important part of my life.</p></br>
    </div>
    </div> `
}



<!-- SECTION 2 : Projects details -->

<!-- 2.4 PlayTime -->

function changePlaytime(content) {
    if (content === "playtime")
        document.getElementById("content").innerHTML = ` <div class="ctn-section">
        <div class="content-placeholder">
        June, 2020
    </div>

    <div class="ctn-section">
        </br> </br>

    <p>Currently under development.</br>
       Soon available in Google Play and App Store.</p>
    </div>
    </div> `
}


<!-- 2.3 Park -->

function changePark(content) {
    if (content === "park")
        document.getElementById("content").innerHTML = ` <div class="ctn-section">
        <div class="content-placeholder">
        June, 2020
    </div>

    <div class="ctn-section">
        </br> </br>
    <picture a class="image">
        <img src="Projects/park.jpg" alt="why" style="padding-left: 0em; width:350px;";>
</picture>

    <p></br>Prototype version/sketch of a conceptual park.</p>
    </div>
    </div> `
}


<!-- 2.2 NSMMS -->

function changeNSMMS(content) {
    if (content === "NSMMS")
        document.getElementById("content").innerHTML = ` <div class="ctn-section">
        <div class="content-placeholder">
        June, 2020
    </div>

    <div class="ctn-section">
        </br> </br>
    <picture a class="image">
        <img src="Projects/NSMMS.jpg" alt="NSMMS" style="padding-left: 0em; width:350px;";>
</picture>

    <p></br>Released May 2020. Available in all streaming platforms.</p>
    </div>
    </div> `
}


<!-- 2.1 Painting -->

function changePainting(content) {
    if (content === "painting")
        document.getElementById("content").innerHTML = ` <div class="ctn-section">
        <div class="content-placeholder">
        June, 2020
    </div>

    <div class="ctn-section">
        </br> </br>
    <picture a class="image">
        <img src="Projects/KJM3.jpg" alt="KJM" style="padding-left: 0em; width:350px;";>
<img src="Projects/KJM4.jpg" alt="KJM" style="padding-left: 0em; width:350px;";>
</picture>

    <p></br>Painting based on a Google Doodle from around 2018 and inspired by Kerry James Marshall.</br>
            </br>Made in collaboration with my father.</p>
    </div>
    </div> `

}







