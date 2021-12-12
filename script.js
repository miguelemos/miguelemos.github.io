                
<!-- SECTION 1 : Intro / About Me -->

function changeEducation(content) {
    if (content === "education")
        document.getElementById("education").innerHTML = ` <div class="project-link autolink">
        Education
    <div class="project-link autolink">
        <p style='font-size: 11px; color: darkgrey; padding-right: 2rem'> </br>PG Software Engineering @ ISEP <a href="https://portotechhub.com/switch/">
        (SWitCH Programme)</a> (2020)
        </br></br>
        MSc Management @ <a href="https://www.bradford.ac.uk/external/">
        University of Bradford</a> (2017)
        </br></br>
        BSc Economics @ <a href="https://sigarra.up.pt/fep/en/WEB_PAGE.INICIAL">
        FEP.UP</a> (2016)</br></br>
        </p>
    </div>
    </div> `
}

function changeWork(content) {
    if (content === "work")
        document.getElementById("work").innerHTML = ` <div class="project-link autolink">
        Work
    <div class="project-link autolink">
        <!-- <p style='font-size: 11px; color: darkgrey; padding-right: 2rem'> <br/>Researcher (internship) | <a href="https://www.ethereum.org">Ethereum Finance</a> (2021 - present)</p> -->
        <p style='font-size: 11px; color: darkgrey; padding-right: 2rem'> <br/>Software Test Engineer | <a href="https://www.fabamaq.com">FABAMAQ</a> (2020 - 2021)</p>
        <p style='font-size: 11px; color: darkgrey; padding-right: 2rem'>Software Developer | PlayTime (2020)</p>
        <p style='font-size: 11px; color: darkgrey; padding-right: 2rem'>Consultant | <a href="https://www.pwc.com">PwC</a> (2017-19)</p>
        <p style='font-size: 11px; color: darkgrey; padding-right: 2rem'>HR Analytics | <a href="https://www.jeronimomartins.com/en/">Jeronimo Martins</a> (2016)</p></br>
    </div>
    </div> `
}


function changeLanguages(content) {
    if (content === "languages")
        document.getElementById("languages").innerHTML = ` <div class="project-link autolink">
        Languages
    <div class="project-link autolink">
        <p style='font-size: 11px; color: darkgrey; padding-right: 2rem'> <br/>English / Portuguese (proficient)</p>
        <p style='font-size: 11px; color: darkgrey; padding-right: 2rem'>Spanish / Italian / French (basic)</p></br>
    </div>
    </div> `
}


function changeInterests(content) {
    if (content === "interests")
        document.getElementById("interests").innerHTML = ` <div class="project-link autolink">
        Favourites
    <div class="project-link autolink">
        <p style='font-size: 11px; color: darkgrey; padding-right: 2rem'> <br/>Favourite album: "true that" by Michael Cera</p>
        <p style='font-size: 11px; color: darkgrey; padding-right: 2rem'>Favourite movie: "Tree of Life" by Terrence Malick</p>
        <p style='font-size: 11px; color: darkgrey; padding-right: 2rem'>Favourite book: "Thinking in Systems" by Donella Meadows</p></br>
    </div>
    </div> `
}

function changeOthers(content) {
    if (content === "others")
        document.getElementById("others").innerHTML = ` <div class="project-link autolink">
        Others
    <div class="project-link autolink">
        <p style='font-size: 11px; color: darkgrey; padding-right: 2rem'> <br/>Interested in urban planning.</p>
        <p style='font-size: 11px; color: darkgrey; padding-right: 2rem'>I also enjoy walking and playing the piano.</p>
        <p style='font-size: 11px; color: darkgrey; padding-right: 2rem'>Playing tennis and swimming are both therapeutic.</p>
        <p style='font-size: 11px; color: darkgrey; padding-right: 2rem'>Meditation is an important part of my life.</p></br>
    </div>
    </div> `
}



<!-- SECTION 2 : Projects details -->

<!-- 2.5 BIKE Finance -->

function changeBike(content) {
    if (content === "bike")
        document.getElementById("content").innerHTML = ` <div class="ctn-section">
        <div class="content-placeholder">
        Project Detail
    </div>

    <div class="ctn-section">
        </br> </br>

        <p>A project to experiment, hack and build on the Ethereum ecosystem.</br></br>
            I'll be doing the following activities:</p>
       <ul>
            <li>smart contract development (Solidity / Hardhat);</li>
            <li>developing and building on top of DeFi protocols;</li>
            <li>writing tutorials on blockchain technology, with a strong focus on design patterns (best practices) and zero knowledge proofs;</li> 
            <li>contributing to OSS / participating in hackathons;</li>
            <li>experimenting with mechanism design ideas (especially related to public goods / QF);</li>    
            <li>exploring smart contract security platforms (e.g. Immunefi);</li>
            <li>applying the right tools for security and doing audit reports;</li>
            <li>experimenting with cadCAD for economic modelling.</li>   
       </ul>
       
       <p>Life on the metaverse can be <a href="https://youtu.be/UUzsWTunbT4">quite fun</a>!</p>
    </div>
    </div> `
}



<!-- 2.4 PlayTime -->

function changePlaytime(content) {
    if (content === "playtime")
        document.getElementById("content").innerHTML = ` <div class="ctn-section">
        <div class="content-placeholder">
        Project Detail
    </div>

    <div class="ctn-section">
        </br> </br>

    <p>Developed in 2020, sold in early 2021.</br>
       For the original concept, please check <a href="https://github.com/miguelemos/playtime">here</a>.</p>
    </div>
    </div> `
}


<!-- 2.3 Park -->

function changePark(content) {
    if (content === "park")
        document.getElementById("content").innerHTML = ` <div class="ctn-section">
        <div class="content-placeholder">
        Project Detail
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
        Project Detail
    </div>

    <div class="ctn-section">
        </br> </br>
    <picture a class="image">
        <img src="Projects/NSMMS.jpg" alt="NSMMS" style="padding-left: 0em; width:350px;";>
</picture>

    <p></br>Released May 2020. Available <a href="https://distrokid.com/hyperfollow/doorsopendoors/not-smiling-makes-me-smile">in all streaming platforms
</a>.</p>
    </div>
    </div> `
}


<!-- 2.1 Painting -->

function changePainting(content) {
    if (content === "painting")
        document.getElementById("content").innerHTML = ` <div class="ctn-section">
        <div class="content-placeholder">
        Project Detail
    </div>

    <div class="ctn-section">
        </br> </br>
    <picture a class="image">
        <img src="Projects/KJM3.jpg" alt="KJM" style="padding-left: 0em; width:350px;";>
<img src="Projects/KJM4.jpg" alt="KJM" style="padding-left: 0em; width:350px;";>
</picture>

    <p></br>Painting based on a Google Doodle from around 2018 and inspired by Kerry James Marshall.</br>
            </br>Made in collaboration with my father.</br>
            </br>Our painting eventually was featured in 2021 in an 
            <a href="https://www.independent.co.uk/independentpremium/long-reads/women-slavery-abolition-britain-b1822235.html">article from "The Independent" 
            newspaper</a>.</p>
    </div>
    </div> `

}
