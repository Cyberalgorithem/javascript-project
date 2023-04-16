// alert("")

(function ($){
    $.fn.plugSlider = function (userOption) {
        var options = $.extend({
            slideTime: 10000,
            speed: 500,
            outAnimation: true,
            inAnimation: true,
            pauseOnHover: true,
            pauseOnHover: true,
            showNextPrev: true,
            displayOrder:"sequential" ,
            showControls: true,
        }, userOption);
        var slider = this;
        var slides = slider.find("ul").children("li");
        var slideCount = slides.length
        var i = 0;
        $(document).ready(function () {
            if (options.showNextPrev) {
                var nextTag = $(".next")
                var prevTag = $(".prev")
                $(nextTag).click(function () {
                    showSlide(i + 1)
                });
                $(prevTag).click(function () {
                    showSlide(i - 1)
                });
            }
            var Interval = setInterval(autoSlide , options.slideTime)

            if(options.pauseOnHover != false){
                $(slider).hover(function (){
                    clearInterval(Interval)
                }, function (){
                    var Interval = setInterval(autoSlide , options.slideTime)
                })
            }
            function randomCreator(startNo,endNo){
                var randNumber = Math.floor(startNo + Math.random() * (endNo - startNo));
                return randNumber ;
            }
            function showSlide(slideNo) {
                $(slides[i]).fadeOut()
                i = (slideNo + slideCount) % slideCount;
                $(slides[i]).fadeIn();
            }
            function autoSlide(){
                if(options.displayOrder == "random"){
                    var randomSlide = randomCreator(0 , slideCount - 1)
                    if(randomSlide == i){
                        showSlide(randomSlide + 1);
                    }
                    else{
                        showSlide(randomSlide);
                    }
                }
                else{
                    showSlide(i + 1)
                }
            }
        })
    }
}(jQuery))
/*Body Append*/

function creatediv(tagName,place,className) {
    for (i = 0; i > i.length; i++) {
        var myElement = document.createElement(tagName)
        // myElement.classList.add(className);
        document.body.item(i).appendChild(myElement);
    }
}

createElement()
function createElement(){
    /*Header*/
    var myContainer = document.createElement("div")
    myContainer.className = "container"
    document.body.appendChild(myContainer)
    const header =  document.createElement("header")
    document.getElementsByClassName("container").item(0).appendChild(header)
    const row = document.createElement("div")
    row.className = "row"
    document.getElementsByTagName("header").item(0).appendChild(row)
    const col1 =  document.createElement("div")
    col1.className = "col-12"
    col1.classList.add("header")
    col1.classList.add("wow")
    col1.classList.add("animate__bounceInDown")
    col1.setAttribute("data-wow-duration","3s")
    document.getElementsByClassName("row").item(0).appendChild(col1)
    const mylogo = document.createElement("div")
    mylogo.className = "col-sm-6"
    mylogo.classList.add("HeaderText1")
    document.getElementsByClassName("header").item(0).appendChild(mylogo)
    const textCA = document.createElement("h1")
    textCA.innerText = "CA"
    document.getElementsByClassName("HeaderText1").item(0).appendChild(textCA)
    const textARB = document.createElement("p")
    textARB.innerText = "Architecture & Interiors Blog"
    document.getElementsByClassName("HeaderText1").item(0).appendChild(textARB)
    const SocialHeader = document.createElement("div")
    SocialHeader.className = "SocialHeader"
    document.getElementsByClassName("header").item(0).appendChild(SocialHeader)
    var iconDiv = document.createElement("div")
    iconDiv.innerHTML = "<i class='fa fa-facebook'></i>"
    document.getElementsByClassName("SocialHeader").item(0).appendChild(iconDiv)
    var iconDiv = document.createElement("div")
    iconDiv.innerHTML = "<i class='fa fa-pinterest'></i>"
    document.getElementsByClassName("SocialHeader").item(0).appendChild(iconDiv)
    var iconDiv = document.createElement("div")
    iconDiv.innerHTML = "<i class='fa fa-whatsapp'></i>"
    document.getElementsByClassName("SocialHeader").item(0).appendChild(iconDiv)
    var iconDiv = document.createElement("div")
    iconDiv.innerHTML = "<i class='fa fa-linkedin-square'></i>"
    document.getElementsByClassName("SocialHeader").item(0).appendChild(iconDiv)
    const loginheader = document.createElement("div")
    loginheader.className = "LoginHeader"
    document.getElementsByClassName("header").item(0).appendChild(loginheader)
    const loginDiv =  document.createElement("div")
    loginDiv.className = "LH"
    loginDiv.classList.add("LH1")
    document.getElementsByClassName("LoginHeader").item(0).appendChild(loginDiv)
    const para1 = document.createElement("p")
    para1.innerText = "Login"
    document.getElementsByClassName("LH").item(0).appendChild(para1)
    const line = document.createElement("div")
    line.className = "line"
    document.getElementsByClassName("LoginHeader").item(0).appendChild(line)
    const RH = document.createElement("div")
    RH.className = "LH"
    RH.classList.add("RH1")
    RH.innerHTML = "<p>Sign up</p>"
    document.getElementsByClassName("LoginHeader").item(0).appendChild(RH)
    /*Navbar*/
    const row2 = document.createElement("div")
    row2.className = "row"
    document.getElementsByTagName("header").item(0).appendChild(row2)
    const menu = document.createElement("div")
    menu.className = "col-12"
    menu.classList.add("menu")
    menu.classList.add("wow")
    menu.classList.add("animate__bounceInLeft")
    menu.setAttribute("data-wow-duration","3s")
    document.getElementsByClassName("row").item(1).appendChild(menu)
    const nav = document.createElement("nav")
    nav.className="navbar"
    nav.classList.add("navbar-expand-lg")
    nav.classList.add("navbar-dark")
    document.getElementsByClassName("menu").item(0).appendChild(nav)
    const button = document.createElement("button")
    button.className="navbar-toggler"
    button.setAttribute("data-toggle","collapse")
    button.setAttribute("data-target","#navbarNav")
    button.setAttribute("aria-controls","navbarNav")
    button.setAttribute("aria-expanded","false")
    button.setAttribute("aria-label","Toggle navigation")
    button.innerHTML = "<span class=\"navbar-toggler-icon\"></span>"
    document.getElementsByClassName("navbar").item(0).appendChild(button)
    const collapse = document.createElement("div")
    collapse.className="collapse"
    collapse.classList.add("navbar-collapse")
    collapse.setAttribute("id","navbarNav")
    document.getElementsByClassName("navbar").item(0).appendChild(collapse)
    const ul = document.createElement("ul")
    ul.className="navbar-nav"
    ul.classList.add("ml-lg-4")
    document.getElementsByClassName("collapse").item(0).appendChild(ul)
    var li = document.createElement("li")
    li.className = "nav-item"
    li.classList.add("ml-lg-5")
    li.classList.add("active")
    document.getElementsByClassName("navbar-nav").item(0).appendChild(li)
    var Apara = document.createElement("a")
    Apara.className = "nav-link"
    Apara.setAttribute("href","#")
    Apara.innerHTML = "Explore"
    document.getElementsByClassName("nav-item").item(0).appendChild(Apara)
    var li = document.createElement("li")
    li.className = "nav-item"
    document.getElementsByClassName("navbar-nav").item(0).appendChild(li)
    var Apara = document.createElement("a")
    Apara.className = "nav-link"
    Apara.setAttribute("href","#")
    Apara.innerHTML = "About us"
    document.getElementsByClassName("nav-item").item(1).appendChild(Apara)
    var li = document.createElement("li")
    li.className = "nav-item"
    document.getElementsByClassName("navbar-nav").item(0).appendChild(li)
    var Apara = document.createElement("a")
    Apara.className = "nav-link"
    Apara.setAttribute("href","#")
    Apara.innerHTML = "History"
    document.getElementsByClassName("nav-item").item(2).appendChild(Apara)
    var li = document.createElement("li")
    li.className = "nav-item"
    document.getElementsByClassName("navbar-nav").item(0).appendChild(li)
    var Apara = document.createElement("a")
    Apara.className = "nav-link"
    Apara.setAttribute("href","#")
    Apara.innerHTML = "Blog"
    document.getElementsByClassName("nav-item").item(3).appendChild(Apara)
    var li = document.createElement("li")
    li.className = "nav-item"
    document.getElementsByClassName("navbar-nav").item(0).appendChild(li)
    var Apara = document.createElement("a")
    Apara.className = "nav-link"
    Apara.setAttribute("href","#")
    Apara.innerHTML = "Contact us"
    document.getElementsByClassName("nav-item").item(4).appendChild(Apara)
    var li = document.createElement("li")
    li.className = "nav-item"
    document.getElementsByClassName("navbar-nav").item(0).appendChild(li)
    var Apara = document.createElement("a")
    Apara.className = "nav-link"
    Apara.setAttribute("href","#")
    Apara.innerHTML = "Join the team "
    document.getElementsByClassName("nav-item").item(5).appendChild(Apara)
    var li = document.createElement("li")
    li.className = "nav-item"
    document.getElementsByClassName("navbar-nav").item(0).appendChild(li)
    var Apara = document.createElement("a")
    Apara.className = "nav-link"
    Apara.setAttribute("href","#")
    Apara.innerHTML = "Help center"
    document.getElementsByClassName("nav-item").item(6).appendChild(Apara)
    /*Slider*/
    const row3 = document.createElement("div")
    row3.className = "row"
    row3.classList.add("sliderContainer")
    document.getElementsByTagName("header").item(0).appendChild(row3)
    const slider = document.createElement("div")
    slider.setAttribute("id","Slider")
    slider.className = "col-xl-12"
    slider.classList.add("col-xl-12")
    slider.classList.add("p-0")
    slider.classList.add("m-0")
    slider.classList.add("slider")
    slider.classList.add("wow")
    slider.classList.add("animate__bounceInUp")
    slider.setAttribute("data-wow-duration","3s")
    slider.setAttribute("data-role","slider")
    document.getElementsByClassName("sliderContainer").item(0).appendChild(slider)
    const UL2 = document.createElement("ul")
    document.getElementsByClassName("slider").item(0).appendChild(UL2)
    var LI = document.createElement("li")
    LI.innerHTML = "<img src=\"image/Mainslider5.JPG\" alt=\"\">"
    document.querySelector("#Slider > ul ").appendChild(LI)
    var LI = document.createElement("li")
    LI.innerHTML = "<img src=\"image/Mainslider2.JPG\" alt=\"\">"
    document.querySelector("#Slider > ul ").appendChild(LI)
    var LI = document.createElement("li")
    LI.innerHTML = "<img src=\"image/Mainslider3.JPG\" alt=\"\">"
    document.querySelector("#Slider > ul ").appendChild(LI)
    var LI = document.createElement("li")
    LI.innerHTML = "<img src=\"image/Mainslider4.JPG\" alt=\"\">"
    document.querySelector("#Slider > ul ").appendChild(LI)
    var LI = document.createElement("li")
    LI.innerHTML = "<img src=\"image/1Mainslider.JPG\" alt=\"\">"
    document.querySelector("#Slider > ul ").appendChild(LI)
    /*Arrow*/
    const arrow = document.createElement("div")
    arrow.className = "arrow"
    document.getElementsByClassName("slider").item(0).appendChild(arrow)
    const I = document.createElement("i")
    I.className = "fa"
    I.classList.add("fa-chevron-left")
    I.classList.add("prev")
    document.getElementsByClassName("arrow").item(0).appendChild(I)
    const I2 = document.createElement("i")
    I2.className = "fa"
    I2.classList.add("fa-chevron-right")
    I2.classList.add("next")
    document.getElementsByClassName("arrow").item(0).appendChild(I2)
    /*Sidebar Sticky*/
    const divSidebar = document.createElement("div")
    divSidebar.className = "col-xl-3"
    divSidebar.classList.add("d-xl-block")
    divSidebar.classList.add("float-xl-right")
    divSidebar.classList.add("m-0")
    //comment divSidebar.classList.add("m-0")
    divSidebar.classList.add("p-0")
    document.getElementsByClassName("container").item(0).appendChild(divSidebar)

    const sidebarSection = document.createElement("section")
    sidebarSection.classList.add("sidebar")
    sidebarSection.classList.add("wow")
    sidebarSection.classList.add("animate__bounceInUp")
    sidebarSection.setAttribute("data-wow-duration","3s")
    document.querySelector(".container > div").appendChild(sidebarSection)

    const divStick = document.createElement("div")
    divStick.className = "stick"
    document.getElementsByClassName("sidebar").item(0).appendChild(divStick)

    const divAbout = document.createElement("div")
    divAbout.classList.add("about")
    divAbout.innerHTML = "<p>About Our Company</p>"
    document.getElementsByClassName("stick").item(0).appendChild(divAbout)

    const divimage2 = document.createElement("div")
    divimage2.classList.add("image2")
    document.getElementsByClassName("stick").item(0).appendChild(divimage2)

    const aimage2 = document.createElement("a")
    aimage2.setAttribute("href","#")
    aimage2.innerHTML = "<img src=\"image/IMG_0160.JPG\" alt=\"\">"
    document.getElementsByClassName("image2").item(0).appendChild(aimage2)

    const divparagraph2 = document.createElement("div")
    divparagraph2.classList.add("paragraph2")
    divparagraph2.innerHTML = "<p>Our company was established in California in 1375, and since then we have been trying to improve our structure...</p>"
    document.getElementsByClassName("stick").item(0).appendChild(divparagraph2)

    const divmore = document.createElement("div")
    divmore.classList.add("more")
    document.getElementsByClassName("stick").item(0).appendChild(divmore)

    const Amore = document.createElement("a")
    Amore.setAttribute("href","#")
    Amore.innerText = "Read more about us"
    document.getElementsByClassName("more").item(0).appendChild(Amore)

    const diviconBar = document.createElement("div")
    diviconBar.className="iconBar"
    document.getElementsByClassName("stick").item(0).appendChild(diviconBar)

    var IIconbar = document.createElement("i")
    IIconbar.classList.add("fa")
    IIconbar.classList.add("fa-instagram")
    document.getElementsByClassName("iconBar").item(0).appendChild(IIconbar)

    var IIconbar = document.createElement("i")
    IIconbar.classList.add("fa")
    IIconbar.classList.add("fa-youtube-play")
    document.getElementsByClassName("iconBar").item(0).appendChild(IIconbar)

    var IIconbar = document.createElement("i")
    IIconbar.classList.add("fa")
    IIconbar.classList.add("fa-twitter")
    document.getElementsByClassName("iconBar").item(0).appendChild(IIconbar)

    var IIconbar = document.createElement("i")
    IIconbar.classList.add("fa")
    IIconbar.classList.add("fa-facebook")
    document.getElementsByClassName("iconBar").item(0).appendChild(IIconbar)

    var IIconbar = document.createElement("i")
    IIconbar.classList.add("fa")
    IIconbar.classList.add("fa-linkedin-square")
    document.getElementsByClassName("iconBar").item(0).appendChild(IIconbar)

    const divAbout2 = document.createElement("div")
    divAbout2.classList.add("about")
    divAbout2.innerHTML = "<p>How Design Interiors ?</p>"
    document.getElementsByClassName("stick").item(0).appendChild(divAbout2)

    const divimage3 = document.createElement("div")
    divimage3.className = "image3"
    document.getElementsByClassName("stick").item(0).appendChild(divimage3)

    const aimage3 = document.createElement("a")
    aimage3.setAttribute("href","#")
    aimage3.innerHTML = "<img src=\"image/about1.jpg\" alt=\"\">"
    document.getElementsByClassName("image3").item(0).appendChild(aimage3)

    const divparagraph3 = document.createElement("div")
    divparagraph3.classList.add("paragraph2")
    divparagraph3.innerHTML = "<p> Creating a home interior design that you adore can be a delightful experience. All you need is an interior designer’s insight, and that’s easy to find...</p>"
    document.getElementsByClassName("stick").item(0).appendChild(divparagraph3)

    const divmore2 = document.createElement("div")
    divmore2.classList.add("more")
    document.getElementsByClassName("stick").item(0).appendChild(divmore2)

    const Amore2 = document.createElement("a")
    Amore2.setAttribute("href","#")
    Amore2.innerText = "Read more"
    document.getElementsByClassName("more").item(0).appendChild(Amore2)

    const divtitle2 = document.createElement("div")
    divtitle2.classList.add("title2")
    divtitle2.innerHTML = "<p>Popular Design</p>"
    document.getElementsByClassName("stick").item(0).appendChild(divtitle2)



    var boxes = document.createElement("div")
    boxes.classList.add("boxes")
    document.getElementsByClassName("stick").item(0).appendChild(boxes)

    var divtab1 = document.createElement("div")
    divtab1.classList.add("tab1")
    document.getElementsByClassName("boxes").item(0).appendChild(divtab1)

    var divImageBox = document.createElement("div")
    divImageBox.classList.add("imageBox")
    divImageBox.innerHTML = "<img src=\"image/yura-timoshenko.png\" alt=\"\">"
    document.getElementsByClassName("tab1").item(0).appendChild(divImageBox)

    var HImageBox = document.createElement("h5")
    HImageBox.innerText = "New Decorations Interiors"
    document.getElementsByClassName("imageBox").item(0).appendChild(HImageBox)

    var PImageBox = document.createElement("p")
    PImageBox.innerText = "Decorating doesn’t  ..."
    document.getElementsByClassName("imageBox").item(0).appendChild(PImageBox)

//    2
    var boxes = document.createElement("div")
    boxes.classList.add("boxes")
    document.getElementsByClassName("stick").item(0).appendChild(boxes)

    var divTab2 = document.createElement("div")
    divTab2.classList.add("tab1")
    document.getElementsByClassName("boxes").item(1).appendChild(divTab2)

    var divImageBox1 = document.createElement("div")
    divImageBox1.classList.add("imageBox")
    divImageBox1.innerHTML = "<img src=\"image/1.jpg\" alt=\"\">"
    document.getElementsByClassName("tab1").item(1).appendChild(divImageBox1)

    var HImageBox1 = document.createElement("h5")
    HImageBox1.innerText = "Lanzarote , Spanian"
    document.getElementsByClassName("imageBox").item(1).appendChild(HImageBox1)

    var PImageBox1 = document.createElement("p")
    PImageBox1.innerText = "Camera : FujiFilm ,X-T3"
    document.getElementsByClassName("imageBox").item(1).appendChild(PImageBox1)

    //3

    var boxes = document.createElement("div")
    boxes.classList.add("boxes")
    document.getElementsByClassName("stick").item(0).appendChild(boxes)

    var divTab2 = document.createElement("div")
    divTab2.classList.add("tab1")
    document.getElementsByClassName("boxes").item(2).appendChild(divTab2)

    var divImageBox1 = document.createElement("div")
    divImageBox1.classList.add("imageBox")
    divImageBox1.innerHTML = "<img src=\"image/2.jpg\" alt=\"\">"
    document.getElementsByClassName("tab1").item(2).appendChild(divImageBox1)

    var HImageBox1 = document.createElement("h5")
    HImageBox1.innerText = "Red square , Moscow , Russia"
    document.getElementsByClassName("imageBox").item(2).appendChild(HImageBox1)

    var PImageBox1 = document.createElement("p")
    PImageBox1.innerText = "Published in August 5 , 2020"
    document.getElementsByClassName("imageBox").item(2).appendChild(PImageBox1)

//    4

    var boxes = document.createElement("div")
    boxes.classList.add("boxes")
    document.getElementsByClassName("stick").item(0).appendChild(boxes)

    var divTab2 = document.createElement("div")
    divTab2.classList.add("tab1")
    document.getElementsByClassName("boxes").item(3).appendChild(divTab2)

    var divImageBox1 = document.createElement("div")
    divImageBox1.classList.add("imageBox")
    divImageBox1.innerHTML = "<img src=\"image/3.jpg\" alt=\"\">"
    document.getElementsByClassName("tab1").item(3).appendChild(divImageBox1)

    var HImageBox1 = document.createElement("h5")
    HImageBox1.innerText = "Within the Oslo Opera House"
    document.getElementsByClassName("imageBox").item(3).appendChild(HImageBox1)

    var PImageBox1 = document.createElement("p")
    PImageBox1.innerText = "Dimensions 4480 * 6720"
    document.getElementsByClassName("imageBox").item(3).appendChild(PImageBox1)

//    5

    var boxes = document.createElement("div")
    boxes.classList.add("boxes")
    document.getElementsByClassName("stick").item(0).appendChild(boxes)

    var divTab2 = document.createElement("div")
    divTab2.classList.add("tab1")
    document.getElementsByClassName("boxes").item(4).appendChild(divTab2)

    var divImageBox1 = document.createElement("div")
    divImageBox1.classList.add("imageBox")
    divImageBox1.innerHTML = "<img src=\"image/4.jpg\" alt=\"\">"
    document.getElementsByClassName("tab1").item(4).appendChild(divImageBox1)

    var HImageBox1 = document.createElement("h5")
    HImageBox1.innerText = "NewYork Bar's"
    document.getElementsByClassName("imageBox").item(4).appendChild(HImageBox1)

    var PImageBox1 = document.createElement("p")
    PImageBox1.innerText = "Focal Length (mm) 8.8"
    document.getElementsByClassName("imageBox").item(4).appendChild(PImageBox1)
// 6
    var boxes = document.createElement("div")
    boxes.classList.add("boxes")
    document.getElementsByClassName("stick").item(0).appendChild(boxes)

    var divTab2 = document.createElement("div")
    divTab2.classList.add("tab1")
    document.getElementsByClassName("boxes").item(5).appendChild(divTab2)

    var divImageBox1 = document.createElement("div")
    divImageBox1.classList.add("imageBox")
    divImageBox1.innerHTML = "<img src=\"image/5.jpg\" alt=\"\">"
    document.getElementsByClassName("tab1").item(5).appendChild(divImageBox1)

    var HImageBox1 = document.createElement("h5")
    HImageBox1.innerText = "NewYork Bridge"
    document.getElementsByClassName("imageBox").item(5).appendChild(HImageBox1)

    var PImageBox1 = document.createElement("p")
    PImageBox1.innerText = "Iphone 13 pro Max"
    document.getElementsByClassName("imageBox").item(5).appendChild(PImageBox1)

    // Popular tag

    const divTitle2 = document.createElement("div")
    divTitle2.className = "title2"
    divTitle2.innerHTML = "<p>Our Instagram</p>"
    document.getElementsByClassName("stick").item(0).appendChild(divTitle2)

    var divTag = document.createElement("div")
    divTag.classList.add("tag")
    document.getElementsByClassName("stick").item(0).appendChild(divTag)

    var tagBox = document.createElement("div")
    tagBox.classList.add("tagBox")
    document.getElementsByClassName("tag").item(0).appendChild(tagBox)

    var Itag = document.createElement("i")
    Itag.classList.add("fa")
    Itag.classList.add("fa-close")
    document.getElementsByClassName("tagBox").item(0).appendChild(Itag)

    var ATagbox = document.createElement("a")
    ATagbox.setAttribute("href" , "#")
    ATagbox.innerText = " Architecture"
    document.getElementsByClassName("tagBox").item(0).appendChild(ATagbox)

    //

    var tagBox = document.createElement("div")
    tagBox.classList.add("tagBox")
    document.getElementsByClassName("tag").item(0).appendChild(tagBox)

    var Itag = document.createElement("i")
    Itag.classList.add("fa")
    Itag.classList.add("fa-close")
    document.getElementsByClassName("tagBox").item(1).appendChild(Itag)

    var ATagbox = document.createElement("a")
    ATagbox.setAttribute("href" , "#")
    ATagbox.innerText = " Interior"
    document.getElementsByClassName("tagBox").item(1).appendChild(ATagbox)

    //
    var tagBox = document.createElement("div")
    tagBox.classList.add("tagBox")
    document.getElementsByClassName("tag").item(0).appendChild(tagBox)

    var Itag = document.createElement("i")
    Itag.classList.add("fa")
    Itag.classList.add("fa-close")
    document.getElementsByClassName("tagBox").item(2).appendChild(Itag)

    var ATagbox = document.createElement("a")
    ATagbox.setAttribute("href" , "#")
    ATagbox.innerText = " Design"
    document.getElementsByClassName("tagBox").item(2).appendChild(ATagbox)

//

    var tagBox = document.createElement("div")
    tagBox.classList.add("tagBox")
    document.getElementsByClassName("tag").item(0).appendChild(tagBox)

    var Itag = document.createElement("i")
    Itag.classList.add("fa")
    Itag.classList.add("fa-close")
    document.getElementsByClassName("tagBox").item(3).appendChild(Itag)

    var ATagbox = document.createElement("a")
    ATagbox.setAttribute("href" , "#")
    ATagbox.innerText = " Building"
    document.getElementsByClassName("tagBox").item(3).appendChild(ATagbox)
    //
    var tagBox = document.createElement("div")
    tagBox.classList.add("tagBox")
    document.getElementsByClassName("tag").item(0).appendChild(tagBox)

    var Itag = document.createElement("i")
    Itag.classList.add("fa")
    Itag.classList.add("fa-close")
    document.getElementsByClassName("tagBox").item(4).appendChild(Itag)

    var ATagbox = document.createElement("a")
    ATagbox.setAttribute("href" , "#")
    ATagbox.innerText = " Architect"
    document.getElementsByClassName("tagBox").item(4).appendChild(ATagbox)
    /*Our Instagram*/
    const DivTitle2 = document.createElement("div")
    DivTitle2.classList.add("title2")
    DivTitle2.innerHTML = "<p>Our Instagram</p>"
    document.getElementsByClassName("stick").item(0).appendChild(DivTitle2)

    const DivInstagramBox = document.createElement("div")
    DivInstagramBox.classList.add("InstagramBox")
    document.getElementsByClassName("stick").item(0).appendChild(DivInstagramBox)

    var PhotoBox = document.createElement("div")
    PhotoBox.classList.add("photoBox")
    document.getElementsByClassName("InstagramBox").item(0).appendChild(PhotoBox)

    var ImagePhotoBox = document.createElement("img")
    ImagePhotoBox.setAttribute("src","image/8.jpg")
    document.getElementsByClassName("photoBox").item(0).appendChild(ImagePhotoBox)
    //
    var PhotoBox = document.createElement("div")
    PhotoBox.classList.add("photoBox")
    document.getElementsByClassName("InstagramBox").item(0).appendChild(PhotoBox)

    var ImagePhotoBox = document.createElement("img")
    ImagePhotoBox.setAttribute("src","image/7.jpg")
    document.getElementsByClassName("photoBox").item(1).appendChild(ImagePhotoBox)
    //
    const DivInstagramBox2 = document.createElement("div")
    DivInstagramBox2.classList.add("InstagramBox2")
    document.getElementsByClassName("stick").item(0).appendChild(DivInstagramBox2)

    const PhotoBox2 = document.createElement("div")
    PhotoBox2.classList.add("photoBox2")
    document.getElementsByClassName("InstagramBox2").item(0).appendChild(PhotoBox2)

    const ImagePhotoBox2 = document.createElement("img")
    ImagePhotoBox2.setAttribute("src","image/6.jpg")
    document.getElementsByClassName("photoBox2").item(0).appendChild(ImagePhotoBox2)
    //
    const InstagramBox3 = document.createElement("div")
    InstagramBox3.classList.add("InstagramBox")
    document.getElementsByClassName("stick").item(0).appendChild(InstagramBox3)

    var PhotoBox1 = document.createElement("div")
    PhotoBox1.classList.add("photoBox")
    document.getElementsByClassName("InstagramBox").item(1).appendChild(PhotoBox1)

    var ImagePhotoBox1 = document.createElement("img")
    ImagePhotoBox1.setAttribute("src","image/9.jpg")
    document.getElementsByClassName("photoBox").item(2).appendChild(ImagePhotoBox1)
    //
    var PhotoBox1 = document.createElement("div")
    PhotoBox1.classList.add("photoBox")
    document.getElementsByClassName("InstagramBox").item(1).appendChild(PhotoBox1)

    var ImagePhotoBox1 = document.createElement("img")
    ImagePhotoBox1.setAttribute("src","image/10%20(2).jpg")
    document.getElementsByClassName("photoBox").item(3).appendChild(ImagePhotoBox1)

    //Subscribe
    const DivTitle3 = document.createElement("div")
    DivTitle3.classList.add("title3")
    DivTitle3.innerHTML = "<p>Subscribe Us</p>"
    document.getElementsByClassName("stick").item(0).appendChild(DivTitle3)

    const mailBox = document.createElement("div")
    mailBox.classList.add("mailbox")
    document.getElementsByClassName("stick").item(0).appendChild(mailBox)

    const MailBoxForm = document.createElement("div")
    MailBoxForm.classList.add("form-group")
    document.getElementsByClassName("mailbox").item(0).appendChild(MailBoxForm)

    const input = document.createElement("input")
    input.setAttribute("type","text")
    input.setAttribute("placeholder","Email for subscribe")
    input.classList.add("form-control")
    document.getElementsByClassName("form-group").item(0).appendChild(input)

    const ButtonEmail = document.createElement("button")
    ButtonEmail.setAttribute("type","submit")
    ButtonEmail.classList.add("btn")
    ButtonEmail.classList.add("btn-dark")
    ButtonEmail.innerText = "Confirm"
    document.getElementsByClassName("form-group").item(0).appendChild(ButtonEmail)


    /*Last Slider*/

    const LastSlider = document.createElement("div")
    LastSlider.classList.add("LastSlider")
    LastSlider.classList.add("p-0")
    // LastSlider.classList.add("m-0")
    LastSlider.setAttribute("data-role","slider2")
    document.getElementsByClassName("stick").item(0).appendChild(LastSlider)

    var ImageLS = document.createElement("img")
    ImageLS.setAttribute("src","image/slider2/IMG_0151-Slider2.JPG")
    document.getElementsByClassName("LastSlider").item(0).appendChild(ImageLS)

    //1
    var ImageLS = document.createElement("img")
    ImageLS.setAttribute("src","image/slider2/manu-Slider2.jpg")
    document.getElementsByClassName("LastSlider").item(0).appendChild(ImageLS)

    //2
    var ImageLS = document.createElement("img")
    ImageLS.setAttribute("src","image/slider2/mauro-lima-Slider2.jpg")
    document.getElementsByClassName("LastSlider").item(0).appendChild(ImageLS)

    //3
    var ImageLS = document.createElement("img")
    ImageLS.setAttribute("src","image/slider2/mos-design-Slider2.jpg")
    document.getElementsByClassName("LastSlider").item(0).appendChild(ImageLS)

    //4
    var ImageLS = document.createElement("img")
    ImageLS.setAttribute("src","image/slider2/IMG_0156-Slider2.JPG")
    document.getElementsByClassName("LastSlider").item(0).appendChild(ImageLS)

    //function slider

    $(function (){
        var sliderSelector = "[data-role='slider2']"
        var sliderBoxWidth = $(sliderSelector).width()
        $(sliderSelector + " img").css("left",sliderBoxWidth)
        $(sliderSelector + " img").eq(0).css("left","0px")
        $(sliderSelector).height($(sliderSelector + " img").height())
        function sliderMove(slideNo){
            $(sliderSelector + " img").eq(slideNo).animate({left: 0} , 2500 , function (){
                $(sliderSelector + " img").eq(slideNo).animate({left:0} , 2500 , function (){
                    $(sliderSelector + " img").eq(slideNo).animate({left:(-1 * sliderBoxWidth)} , 2500 , function (){
                        $(this).css("left",sliderBoxWidth)
                    })
                    sliderMove(++slideNo >= $(sliderSelector + " img").length ? 0 : slideNo)
                })
            })
        }
        sliderMove(0);
    })
    /*paris Louvre*/

    var row4 = document.createElement("div")
    row4.classList.add("row")
    document.getElementsByClassName("container").item(0).appendChild(row4)

    var paris = document.createElement("div")
    paris.classList.add("col-xl-8")
    paris.classList.add("col-sm-12")
    paris.classList.add("p-0")
    paris.classList.add("m-0")
    paris.classList.add("paris")
    paris.classList.add("wow")
    paris.classList.add("animate__fadeInDown")
    paris.setAttribute("data-wow-duration","3s")
    document.getElementsByClassName("row").item(3).appendChild(paris)

    var sec1 = document.createElement("div")
    sec1.classList.add("section1")
    document.getElementsByClassName("paris").item(0).appendChild(sec1)

    var Para1 = document.createElement("div")
    Para1.classList.add("paragraph1")
    Para1.innerHTML = "<p>Getting To Know The Louvre Museum</p>"
    document.getElementsByClassName("section1").item(0).appendChild(Para1)

    var Title1 = document.createElement("div")
    Title1.classList.add("title1")
    Title1.innerText = "Louvre Museum Introduction"
    document.getElementsByClassName("section1").item(0).appendChild(Title1)

    var ProducerBox = document.createElement("div")
    ProducerBox.classList.add("ProducerBox")
    document.getElementsByClassName("section1").item(0).appendChild(ProducerBox)

    var box1 = document.createElement("div")
    box1.classList.add("box")
    box1.classList.add("box1")
    box1.innerHTML = "<p>By : Nicolas Houdayer </p>"
    document.getElementsByClassName("ProducerBox").item(0).appendChild(box1)

    var lines1 = document.createElement("div")
    lines1.classList.add("lines1")
    document.getElementsByClassName("ProducerBox").item(0).appendChild(lines1)

    var box1 = document.createElement("div")
    box1.classList.add("box")
    box1.classList.add("box2")
    box1.innerHTML = "<p> Date Modified : 4 Days ago</p>"
    document.getElementsByClassName("ProducerBox").item(0).appendChild(box1)


    var lines2 = document.createElement("div")
    lines2.classList.add("lines2")
    document.getElementsByClassName("ProducerBox").item(0).appendChild(lines2)

    var box1 = document.createElement("div")
    box1.classList.add("box")
    box1.classList.add("box3")
    box1.innerHTML = "<p> 3 Comment</p>"
    document.getElementsByClassName("ProducerBox").item(0).appendChild(box1)

    var image1 = document.createElement("div")
    image1.classList.add("image1")
    document.getElementsByClassName("section1").item(0).appendChild(image1)

    var imgImage1 = document.createElement("img")
    imgImage1.setAttribute("src","image/louver.JPG")
    document.getElementsByClassName("image1").item(0).appendChild(imgImage1)

    var box4 = document.createElement("div")
    box4.classList.add("box")
    box4.classList.add("box4")
    box4.classList.add("m-auto")
    box4.classList.add("my-5")
    box4.innerHTML = "<p> Louvre, in full Louvre Museum or French Musée du Louvre, official name Great Louvre or French Grand Louvre, national museum and art gallery of France, housed in part of a large palace in Paris that was built on the right-bank site of the 12th-century fortress of Philip Augustus. It is the world’s most-visited art museum, with a collection that spans work from ancient civilizations to the mid-19th century...</p>"
    document.getElementsByClassName("section1").item(0).appendChild(box4)

    var Abox4 = document.createElement("a")
    Abox4.classList.add("box")
    Abox4.classList.add("box4-1")
    Abox4.innerText = "Read More"
    document.getElementsByClassName("box4").item(0).appendChild(Abox4)

    var box42 = document.createElement("div")
    box42.classList.add("box")
    box42.classList.add("box4-2")
    document.getElementsByClassName("box4").item(0).appendChild(box42)

    var Ibox42 = document.createElement("i")
    Ibox42.classList.add("fa")
    Ibox42.classList.add("fa-share-alt")
    document.getElementsByClassName("box4-2").item(0).appendChild(Ibox42)

    var Ibox42 = document.createElement("i")
    Ibox42.classList.add("fa")
    Ibox42.classList.add("fa-wikipedia-w")
    document.getElementsByClassName("box4-2").item(0).appendChild(Ibox42)

    var Ibox42 = document.createElement("i")
    Ibox42.classList.add("fa")
    Ibox42.classList.add("fa-flickr")
    document.getElementsByClassName("box4-2").item(0).appendChild(Ibox42)

    var Ibox42 = document.createElement("i")
    Ibox42.classList.add("fa")
    Ibox42.classList.add("fa-google-plus-official")
    document.getElementsByClassName("box4-2").item(0).appendChild(Ibox42)

    var Ibox42 = document.createElement("i")
    Ibox42.classList.add("fa")
    Ibox42.classList.add("fa-linkedin-square")
    document.getElementsByClassName("box4-2").item(0).appendChild(Ibox42)

    /*california*/


    var row4 = document.createElement("div")
    row4.classList.add("row")
    document.getElementsByClassName("container").item(0).appendChild(row4)

    var paris = document.createElement("div")
    paris.classList.add("col-xl-8")
    paris.classList.add("col-sm-12")
    paris.classList.add("p-0")
    paris.classList.add("m-0")
    paris.classList.add("paris")
    paris.classList.add("wow")
    paris.classList.add("animate__fadeInDown")
    paris.setAttribute("data-wow-duration","3s")
    document.getElementsByClassName("row").item(4).appendChild(paris)

    var sec1 = document.createElement("div")
    sec1.classList.add("section1")
    document.getElementsByClassName("paris").item(1).appendChild(sec1)

    var Para1 = document.createElement("div")
    Para1.classList.add("paragraph1")
    Para1.innerHTML = "<p>State, United States</p>"
    document.getElementsByClassName("section1").item(1).appendChild(Para1)

    var Title1 = document.createElement("div")
    Title1.classList.add("title1")
    Title1.innerText = "California"
    document.getElementsByClassName("section1").item(1).appendChild(Title1)

    var ProducerBox = document.createElement("div")
    ProducerBox.classList.add("ProducerBox")
    document.getElementsByClassName("section1").item(1).appendChild(ProducerBox)

    var box1 = document.createElement("div")
    box1.classList.add("box")
    box1.classList.add("box1")
    box1.innerHTML = "<p>By : Alonso Reyes</p>"
    document.getElementsByClassName("ProducerBox").item(1).appendChild(box1)

    var lines1 = document.createElement("div")
    lines1.classList.add("lines1")
    document.getElementsByClassName("ProducerBox").item(1).appendChild(lines1)

    var box1 = document.createElement("div")
    box1.classList.add("box")
    box1.classList.add("box2")
    box1.innerHTML = "<p>Date Modified : 2 Weeks ago</p>"
    document.getElementsByClassName("ProducerBox").item(1).appendChild(box1)


    var lines2 = document.createElement("div")
    lines2.classList.add("lines2")
    document.getElementsByClassName("ProducerBox").item(1).appendChild(lines2)

    var box1 = document.createElement("div")
    box1.classList.add("box")
    box1.classList.add("box3")
    box1.innerHTML = "<p> 103 Comment</p>"
    document.getElementsByClassName("ProducerBox").item(1).appendChild(box1)

    var image1 = document.createElement("div")
    image1.classList.add("image1")
    document.getElementsByClassName("section1").item(1).appendChild(image1)

    var imgImage1 = document.createElement("img")
    imgImage1.setAttribute("src","image/alonso-reyes-1.jpg")
    document.getElementsByClassName("image1").item(1).appendChild(imgImage1)

    var box4 = document.createElement("div")
    box4.classList.add("box")
    box4.classList.add("box4")
    box4.classList.add("m-auto")
    box4.classList.add("my-5")
    box4.innerHTML = "<p>California, constituent state of the United States of America. It was admitted as the 31st state of the union on September 9, 1850, and by the early 1960s it was the most populous U.S. state. No version of the origin of California’s name has been fully accepted, but there is wide support for the contention that it derived from an early 16th-century Spanish novel, Las sergas de Esplandián (“The Adventures of Esplandián”), that described a paradisiacal island full of gold and precious stones called California. The influence of the Spanish settlers of the 18th and 19th centuries is evident in California’s architecture and place-names. The capital is Sacramento...</p>"
    document.getElementsByClassName("section1").item(1).appendChild(box4)

    var Abox4 = document.createElement("a")
    Abox4.classList.add("box")
    Abox4.classList.add("box4-1")
    Abox4.innerText = "Read More"
    document.getElementsByClassName("box4").item(1).appendChild(Abox4)

    var box42 = document.createElement("div")
    box42.classList.add("box")
    box42.classList.add("box4-2")
    document.getElementsByClassName("box4").item(1).appendChild(box42)

    var Ibox42 = document.createElement("i")
    Ibox42.classList.add("fa")
    Ibox42.classList.add("fa-share-alt")
    document.getElementsByClassName("box4-2").item(1).appendChild(Ibox42)

    var Ibox42 = document.createElement("i")
    Ibox42.classList.add("fa")
    Ibox42.classList.add("fa-wikipedia-w")
    document.getElementsByClassName("box4-2").item(1).appendChild(Ibox42)

    var Ibox42 = document.createElement("i")
    Ibox42.classList.add("fa")
    Ibox42.classList.add("fa-flickr")
    document.getElementsByClassName("box4-2").item(1).appendChild(Ibox42)

    var Ibox42 = document.createElement("i")
    Ibox42.classList.add("fa")
    Ibox42.classList.add("fa-google-plus-official")
    document.getElementsByClassName("box4-2").item(1).appendChild(Ibox42)

    var Ibox42 = document.createElement("i")
    Ibox42.classList.add("fa")
    Ibox42.classList.add("fa-linkedin-square")
    document.getElementsByClassName("box4-2").item(1).appendChild(Ibox42)

//  <!--Berlin Germany-->

    var row4 = document.createElement("div")
    row4.classList.add("row")
    document.getElementsByClassName("container").item(0).appendChild(row4)

    var paris = document.createElement("div")
    paris.classList.add("col-xl-8")
    paris.classList.add("col-sm-12")
    paris.classList.add("p-0")
    paris.classList.add("m-0")
    paris.classList.add("paris")
    paris.classList.add("wow")
    paris.classList.add("animate__fadeInDown")
    paris.setAttribute("data-wow-duration","3s")
    document.getElementsByClassName("row").item(5).appendChild(paris)

    var sec1 = document.createElement("div")
    sec1.classList.add("section1")
    document.getElementsByClassName("paris").item(2).appendChild(sec1)

    var Para1 = document.createElement("div")
    Para1.classList.add("paragraph1")
    Para1.innerHTML = "<p>Getting To Know The Berlin</p>"
    document.getElementsByClassName("section1").item(2).appendChild(Para1)

    var Title1 = document.createElement("div")
    Title1.classList.add("title1")
    Title1.innerText = "Berlin"
    document.getElementsByClassName("section1").item(2).appendChild(Title1)

    var ProducerBox = document.createElement("div")
    ProducerBox.classList.add("ProducerBox")
    document.getElementsByClassName("section1").item(2).appendChild(ProducerBox)

    var box1 = document.createElement("div")
    box1.classList.add("box")
    box1.classList.add("box1")
    box1.innerHTML = "<p>By : Conny Schneider</p>"
    document.getElementsByClassName("ProducerBox").item(2).appendChild(box1)

    var lines1 = document.createElement("div")
    lines1.classList.add("lines1")
    document.getElementsByClassName("ProducerBox").item(2).appendChild(lines1)

    var box1 = document.createElement("div")
    box1.classList.add("box")
    box1.classList.add("box2")
    box1.innerHTML = "<p> Date Modified : 25 Days  ago</p>"
    document.getElementsByClassName("ProducerBox").item(2).appendChild(box1)


    var lines2 = document.createElement("div")
    lines2.classList.add("lines2")
    document.getElementsByClassName("ProducerBox").item(2).appendChild(lines2)

    var box1 = document.createElement("div")
    box1.classList.add("box")
    box1.classList.add("box3")
    box1.innerHTML = "<p> 17 Comment</p>"
    document.getElementsByClassName("ProducerBox").item(2).appendChild(box1)

    var image1 = document.createElement("div")
    image1.classList.add("image1")
    document.getElementsByClassName("section1").item(2).appendChild(image1)

    var imgImage1 = document.createElement("img")
    imgImage1.setAttribute("src","image/conny-schneider-1.jpg")
    document.getElementsByClassName("image1").item(2).appendChild(imgImage1)

    var box4 = document.createElement("div")
    box4.classList.add("box")
    box4.classList.add("box4")
    box4.classList.add("m-auto")
    box4.classList.add("my-5")
    box4.innerHTML = "<p>Berlin's history has left the city with an eclectic assortment of architecture. The city's appearance in the 21st century has been shaped by the key role the city played in Germany's 20th-century history. Each of the governments based in Berlin—the Kingdom of Prussia, the 1871 German Empire, the Weimar Republic, Nazi Germany, East Germany and the reunified Federal Republic of Germany—initiated ambitious construction programs, with each adding its distinct flavour to the city's architecture...</p>"
    document.getElementsByClassName("section1").item(2).appendChild(box4)

    var Abox4 = document.createElement("a")
    Abox4.classList.add("box")
    Abox4.classList.add("box4-1")
    Abox4.innerText = "Read More"
    document.getElementsByClassName("box4").item(2).appendChild(Abox4)

    var box42 = document.createElement("div")
    box42.classList.add("box")
    box42.classList.add("box4-2")
    document.getElementsByClassName("box4").item(2).appendChild(box42)

    var Ibox42 = document.createElement("i")
    Ibox42.classList.add("fa")
    Ibox42.classList.add("fa-share-alt")
    document.getElementsByClassName("box4-2").item(2).appendChild(Ibox42)

    var Ibox42 = document.createElement("i")
    Ibox42.classList.add("fa")
    Ibox42.classList.add("fa-wikipedia-w")
    document.getElementsByClassName("box4-2").item(2).appendChild(Ibox42)

    var Ibox42 = document.createElement("i")
    Ibox42.classList.add("fa")
    Ibox42.classList.add("fa-flickr")
    document.getElementsByClassName("box4-2").item(2).appendChild(Ibox42)

    var Ibox42 = document.createElement("i")
    Ibox42.classList.add("fa")
    Ibox42.classList.add("fa-google-plus-official")
    document.getElementsByClassName("box4-2").item(2).appendChild(Ibox42)

    var Ibox42 = document.createElement("i")
    Ibox42.classList.add("fa")
    Ibox42.classList.add("fa-linkedin-square")
    document.getElementsByClassName("box4-2").item(2).appendChild(Ibox42)

    //<!-- Sheikh azad -->

    var row4 = document.createElement("div")
    row4.classList.add("row")
    document.getElementsByClassName("container").item(0).appendChild(row4)

    var paris = document.createElement("div")
    paris.classList.add("col-xl-8")
    paris.classList.add("col-sm-12")
    paris.classList.add("p-0")
    paris.classList.add("m-0")
    paris.classList.add("paris")
    paris.classList.add("wow")
    paris.classList.add("animate__fadeInDown")
    paris.setAttribute("data-wow-duration","3s")
    document.getElementsByClassName("row").item(6).appendChild(paris)

    var sec1 = document.createElement("div")
    sec1.classList.add("section1")
    document.getElementsByClassName("paris").item(3).appendChild(sec1)

    var Para1 = document.createElement("div")
    Para1.classList.add("paragraph1")
    Para1.innerHTML = "<p>Islamic Architecture</p>"
    document.getElementsByClassName("section1").item(3).appendChild(Para1)

    var Title1 = document.createElement("div")
    Title1.classList.add("title1")
    Title1.innerText = " Sheikh Zayed Mosque"
    document.getElementsByClassName("section1").item(3).appendChild(Title1)

    var ProducerBox = document.createElement("div")
    ProducerBox.classList.add("ProducerBox")
    document.getElementsByClassName("section1").item(3).appendChild(ProducerBox)

    var box1 = document.createElement("div")
    box1.classList.add("box")
    box1.classList.add("box1")
    box1.innerHTML = "<p>By : Yusef Abdelki</p>"
    document.getElementsByClassName("ProducerBox").item(3).appendChild(box1)

    var lines1 = document.createElement("div")
    lines1.classList.add("lines1")
    document.getElementsByClassName("ProducerBox").item(3).appendChild(lines1)

    var box1 = document.createElement("div")
    box1.classList.add("box")
    box1.classList.add("box2")
    box1.innerHTML = "<p> Date Modified : 4 Days  ago</p>"
    document.getElementsByClassName("ProducerBox").item(3).appendChild(box1)


    var lines2 = document.createElement("div")
    lines2.classList.add("lines2")
    document.getElementsByClassName("ProducerBox").item(3).appendChild(lines2)

    var box1 = document.createElement("div")
    box1.classList.add("box")
    box1.classList.add("box3")
    box1.innerHTML = "<p> 3 Comment</p>"
    document.getElementsByClassName("ProducerBox").item(3).appendChild(box1)

    var image1 = document.createElement("div")
    image1.classList.add("image1")
    document.getElementsByClassName("section1").item(3).appendChild(image1)

    var imgImage1 = document.createElement("img")
    imgImage1.setAttribute("src","image/sheikh-zayed-mosque1.jpg")
    document.getElementsByClassName("image1").item(3).appendChild(imgImage1)

    var box4 = document.createElement("div")
    box4.classList.add("box")
    box4.classList.add("box4")
    box4.classList.add("m-auto")
    box4.classList.add("my-5")
    box4.innerHTML = "<p>The Sheikh Zayed Grand Mosque (Arabic جامع الشيخ زايد الكبير) construction began during the presidency of the late HH Sheikh Zayed bin Sultan Al Nahyan, Sheikh of the United Arab Emirates (UAE), who wanted to establish a structure that would unite the Islamic world’s cultural diversity, historical and modern values ​​of architecture and art. His final resting place is in the gardens beside the same mosque. It is the largest mosque in the United Arab Emirates and the eighth largest mosque in the world. The space it occupies is approximately equivalent to the size of five football fields. As great mosque of the country, is the key place of worship for Friday meetings and prayers of Ramadan, when it can be accessed by more than 40,000 people..</p>"
    document.getElementsByClassName("section1").item(3).appendChild(box4)

    var Abox4 = document.createElement("a")
    Abox4.classList.add("box")
    Abox4.classList.add("box4-1")
    Abox4.innerText = "Read More"
    document.getElementsByClassName("box4").item(3).appendChild(Abox4)

    var box42 = document.createElement("div")
    box42.classList.add("box")
    box42.classList.add("box4-2")
    document.getElementsByClassName("box4").item(3).appendChild(box42)

    var Ibox42 = document.createElement("i")
    Ibox42.classList.add("fa")
    Ibox42.classList.add("fa-share-alt")
    document.getElementsByClassName("box4-2").item(3).appendChild(Ibox42)

    var Ibox42 = document.createElement("i")
    Ibox42.classList.add("fa")
    Ibox42.classList.add("fa-wikipedia-w")
    document.getElementsByClassName("box4-2").item(3).appendChild(Ibox42)

    var Ibox42 = document.createElement("i")
    Ibox42.classList.add("fa")
    Ibox42.classList.add("fa-flickr")
    document.getElementsByClassName("box4-2").item(3).appendChild(Ibox42)

    var Ibox42 = document.createElement("i")
    Ibox42.classList.add("fa")
    Ibox42.classList.add("fa-google-plus-official")
    document.getElementsByClassName("box4-2").item(3).appendChild(Ibox42)

    var Ibox42 = document.createElement("i")
    Ibox42.classList.add("fa")
    Ibox42.classList.add("fa-linkedin-square")
    document.getElementsByClassName("box4-2").item(3).appendChild(Ibox42)
// stair
    var row4 = document.createElement("div")
    row4.classList.add("row")
    document.getElementsByClassName("container").item(0).appendChild(row4)

    var paris = document.createElement("div")
    paris.classList.add("col-xl-8")
    paris.classList.add("col-sm-12")
    paris.classList.add("p-0")
    paris.classList.add("m-0")
    paris.classList.add("paris")
    paris.classList.add("wow")
    paris.classList.add("animate__fadeInDown")
    paris.setAttribute("data-wow-duration","3s")
    document.getElementsByClassName("row").item(7).appendChild(paris)

    var sec1 = document.createElement("div")
    sec1.classList.add("section1")
    document.getElementsByClassName("paris").item(4).appendChild(sec1)

    var Para1 = document.createElement("div")
    Para1.classList.add("paragraph1")
    Para1.innerHTML = "<p>Spiral Staircase</p>"
    document.getElementsByClassName("section1").item(4).appendChild(Para1)

    var Title1 = document.createElement("div")
    Title1.classList.add("title1")
    Title1.innerText = " Interior Design Introduction"
    document.getElementsByClassName("section1").item(4).appendChild(Title1)

    var ProducerBox = document.createElement("div")
    ProducerBox.classList.add("ProducerBox")
    document.getElementsByClassName("section1").item(4).appendChild(ProducerBox)

    var box1 = document.createElement("div")
    box1.classList.add("box")
    box1.classList.add("box1")
    box1.innerHTML = "<p>By : Dennis Liang </p>"
    document.getElementsByClassName("ProducerBox").item(4).appendChild(box1)

    var lines1 = document.createElement("div")
    lines1.classList.add("lines1")
    document.getElementsByClassName("ProducerBox").item(4).appendChild(lines1)

    var box1 = document.createElement("div")
    box1.classList.add("box")
    box1.classList.add("box2")
    box1.innerHTML = "<p> Date Modified : Last Days  ago</p>"
    document.getElementsByClassName("ProducerBox").item(4).appendChild(box1)


    var lines2 = document.createElement("div")
    lines2.classList.add("lines2")
    document.getElementsByClassName("ProducerBox").item(4).appendChild(lines2)

    var box1 = document.createElement("div")
    box1.classList.add("box")
    box1.classList.add("box3")
    box1.innerHTML = "<p> 0 Comment</p>"
    document.getElementsByClassName("ProducerBox").item(4).appendChild(box1)

    var image1 = document.createElement("div")
    image1.classList.add("image1")
    document.getElementsByClassName("section1").item(4).appendChild(image1)

    var imgImage1 = document.createElement("img")
    imgImage1.setAttribute("src","image/spiral-staircase-le-vierge-france-lighthouse-steps-look-up-4431x3689-6714.jpg")
    document.getElementsByClassName("image1").item(4).appendChild(imgImage1)

    var box4 = document.createElement("div")
    box4.classList.add("box")
    box4.classList.add("box4")
    box4.classList.add("m-auto")
    box4.classList.add("my-5")
    box4.innerHTML = "<p>Spiral Staircases are used in spaces where you need to introduce a twist (even literally) or where the designer wants the staircase to bring in a different feel to space. Also, a staircase railing is the unknown soldier in any stairway, let alone the aesthetic features it can possess to become the focal point of any interior. Check out what a staircase railing can do to an interior. Sometimes, a circular staircase is added when there is limited space. Spiral staircases have a sense of appeal to them, that draw your attention and make it almost impossible to look away. The curved stairs are known to bring in a sense of luxury and art. Throughout architectural history, spiral staircases have been used inside places of luxury—mansions, palaces, churches. Though they made brief cameos in the 5th Century BC, spiral staircases didn’t get a proper role in architecture until one was used in the Trajan Column in 115 AD.  In the modern era, they have slowly become a part of the residential world...</p>"
    document.getElementsByClassName("section1").item(4).appendChild(box4)

    var Abox4 = document.createElement("a")
    Abox4.classList.add("box")
    Abox4.classList.add("box4-1")
    Abox4.innerText = "Read More"
    document.getElementsByClassName("box4").item(4).appendChild(Abox4)

    var box42 = document.createElement("div")
    box42.classList.add("box")
    box42.classList.add("box4-2")
    document.getElementsByClassName("box4").item(4).appendChild(box42)

    var Ibox42 = document.createElement("i")
    Ibox42.classList.add("fa")
    Ibox42.classList.add("fa-share-alt")
    document.getElementsByClassName("box4-2").item(4).appendChild(Ibox42)

    var Ibox42 = document.createElement("i")
    Ibox42.classList.add("fa")
    Ibox42.classList.add("fa-wikipedia-w")
    document.getElementsByClassName("box4-2").item(4).appendChild(Ibox42)

    var Ibox42 = document.createElement("i")
    Ibox42.classList.add("fa")
    Ibox42.classList.add("fa-flickr")
    document.getElementsByClassName("box4-2").item(4).appendChild(Ibox42)

    var Ibox42 = document.createElement("i")
    Ibox42.classList.add("fa")
    Ibox42.classList.add("fa-google-plus-official")
    document.getElementsByClassName("box4-2").item(4).appendChild(Ibox42)

    var Ibox42 = document.createElement("i")
    Ibox42.classList.add("fa")
    Ibox42.classList.add("fa-linkedin-square")
    document.getElementsByClassName("box4-2").item(4).appendChild(Ibox42)

//     <!--Setup Desk-->

    var row4 = document.createElement("div")
    row4.classList.add("row")
    document.getElementsByClassName("container").item(0).appendChild(row4)

    var paris = document.createElement("div")
    paris.classList.add("col-xl-8")
    paris.classList.add("col-sm-12")
    paris.classList.add("p-0")
    paris.classList.add("m-0")
    paris.classList.add("paris")
    paris.classList.add("wow")
    paris.classList.add("animate__fadeInDown")
    paris.setAttribute("data-wow-duration","3s")
    document.getElementsByClassName("row").item(8).appendChild(paris)

    var sec1 = document.createElement("div")
    sec1.classList.add("section1")
    document.getElementsByClassName("paris").item(5).appendChild(sec1)

    var Para1 = document.createElement("div")
    Para1.classList.add("paragraph1")
    Para1.innerHTML = "<p>How Set up Your Desk</p>"
    document.getElementsByClassName("section1").item(5).appendChild(Para1)

    var Title1 = document.createElement("div")
    Title1.classList.add("title1")
    Title1.innerText = " Set Up Desk Ergonomically"
    document.getElementsByClassName("section1").item(5).appendChild(Title1)

    var ProducerBox = document.createElement("div")
    ProducerBox.classList.add("ProducerBox")
    document.getElementsByClassName("section1").item(5).appendChild(ProducerBox)

    var box1 = document.createElement("div")
    box1.classList.add("box")
    box1.classList.add("box1")
    box1.innerHTML = "<p>By : Nicolas Houdayer </p>"
    document.getElementsByClassName("ProducerBox").item(5).appendChild(box1)

    var lines1 = document.createElement("div")
    lines1.classList.add("lines1")
    document.getElementsByClassName("ProducerBox").item(5).appendChild(lines1)

    var box1 = document.createElement("div")
    box1.classList.add("box")
    box1.classList.add("box2")
    box1.innerHTML = "<p> Date Modified : 1 Days  ago</p>"
    document.getElementsByClassName("ProducerBox").item(5).appendChild(box1)


    var lines2 = document.createElement("div")
    lines2.classList.add("lines2")
    document.getElementsByClassName("ProducerBox").item(5).appendChild(lines2)

    var box1 = document.createElement("div")
    box1.classList.add("box")
    box1.classList.add("box3")
    box1.innerHTML = "<p> 7 Comment</p>"
    document.getElementsByClassName("ProducerBox").item(5).appendChild(box1)

    var image1 = document.createElement("div")
    image1.classList.add("image1")
    document.getElementsByClassName("section1").item(5).appendChild(image1)

    var imgImage1 = document.createElement("img")
    imgImage1.setAttribute("src","image/jack-1.jpg")
    document.getElementsByClassName("image1").item(5).appendChild(imgImage1)

    var box4 = document.createElement("div")
    box4.classList.add("box")
    box4.classList.add("box4")
    box4.classList.add("m-auto")
    box4.classList.add("my-5")
    box4.innerHTML = "<p> Take a seat at your desk. With your back pressed against the backrest, do your lower and mid-back feel cushioned, or are there gaps between your spine and the chair? The best office chairs support the natural S-curve of your back; poorly designed chairs feel more like you’re sitting on a log against a hard wall. Cornell University ergonomics professor Alan Hedge told us that if your lower back isn’t supported by the chair, you need lumbar support....</p>"
    document.getElementsByClassName("section1").item(5).appendChild(box4)

    var Abox4 = document.createElement("a")
    Abox4.classList.add("box")
    Abox4.classList.add("box4-1")
    Abox4.innerText = "Read More"
    document.getElementsByClassName("box4").item(5).appendChild(Abox4)

    var box42 = document.createElement("div")
    box42.classList.add("box")
    box42.classList.add("box4-2")
    document.getElementsByClassName("box4").item(5).appendChild(box42)

    var Ibox42 = document.createElement("i")
    Ibox42.classList.add("fa")
    Ibox42.classList.add("fa-share-alt")
    document.getElementsByClassName("box4-2").item(5).appendChild(Ibox42)

    var Ibox42 = document.createElement("i")
    Ibox42.classList.add("fa")
    Ibox42.classList.add("fa-wikipedia-w")
    document.getElementsByClassName("box4-2").item(5).appendChild(Ibox42)

    var Ibox42 = document.createElement("i")
    Ibox42.classList.add("fa")
    Ibox42.classList.add("fa-flickr")
    document.getElementsByClassName("box4-2").item(5).appendChild(Ibox42)

    var Ibox42 = document.createElement("i")
    Ibox42.classList.add("fa")
    Ibox42.classList.add("fa-google-plus-official")
    document.getElementsByClassName("box4-2").item(5).appendChild(Ibox42)

    var Ibox42 = document.createElement("i")
    Ibox42.classList.add("fa")
    Ibox42.classList.add("fa-linkedin-square")
    document.getElementsByClassName("box4-2").item(5).appendChild(Ibox42)

    //  <!--Pagination-->

    const row5 = document.createElement("div")
    row5.classList.add("row")
    document.getElementsByClassName("container").item(0).appendChild(row5)

    const pagination = document.createElement("div")
    pagination.classList.add("col-xl-8")
    pagination.classList.add("col-sm-12")
    pagination.classList.add("Pagination")
    pagination.classList.add("p-0")
    pagination.classList.add("m-0")
    pagination.classList.add("wow")
    pagination.classList.add("animate__bounceInLeft")
    pagination.setAttribute("data-wow-duration","3s")
    document.getElementsByClassName("row").item(9).appendChild(pagination)

    const pagination1 = document.createElement("div")
    pagination1.classList.add("pagination1")
    document.getElementsByClassName("Pagination").item(0).appendChild(pagination1)

    const navPage = document.createElement("nav")
    navPage.setAttribute("aria-label","Page navigation ")
    document.getElementsByClassName("pagination1").item(0).appendChild(navPage)

    const ULPage = document.createElement("ul")
    ULPage.classList.add("pagination")
    document.querySelector(".pagination1 > nav").appendChild(ULPage)

    var LiPage = document.createElement("li")
    LiPage.classList.add("page-item")
    document.getElementsByClassName("pagination").item(0).appendChild(LiPage)

    var Apage = document.createElement("a")
    Apage.classList.add("page-link")
    Apage.setAttribute("href","index.html")
    Apage.innerText = "1"
    document.getElementsByClassName("page-item").item(0).appendChild(Apage)

    var LiPage1 = document.createElement("li")
    LiPage1.classList.add("page-item")
    document.getElementsByClassName("pagination").item(0).appendChild(LiPage1)

    var Apage1 = document.createElement("a")
    Apage1.classList.add("page-link")
    Apage1.setAttribute("href","index2.html")
    Apage1.innerText = "2"
    document.getElementsByClassName("page-item").item(1).appendChild(Apage1)

    var LiPagenext = document.createElement("li")
    LiPagenext.classList.add("page-item")
    document.getElementsByClassName("pagination").item(0).appendChild(LiPagenext)

    var Apagenext = document.createElement("a")
    Apagenext.classList.add("page-link")
    Apagenext.setAttribute("href","index2.html")
    Apagenext.innerText = "Next"
    document.getElementsByClassName("page-item").item(2).appendChild(Apagenext)

    // footer

    const footer = document.createElement("div")
    footer.classList.add("container-fluid")
    footer.classList.add("p-0")
    document.body.appendChild(footer)

    const Divfooter = document.createElement("div")
    Divfooter.classList.add("col-12")
    Divfooter.classList.add("p-0")
    Divfooter.classList.add("m-0")
    Divfooter.classList.add("wow")
    Divfooter.classList.add("animate__fadeInUp")
    Divfooter.setAttribute("data-wow-duration","3s")
    document.getElementsByClassName("container-fluid").item(0).appendChild(Divfooter)

    const FooterTag = document.createElement("footer")
    document.querySelector(".container-fluid > div ").appendChild(FooterTag)

    const part1 = document.createElement("div")
    part1.classList.add("part1")
    document.getElementsByTagName("footer").item(0).appendChild(part1)

    const H1 = document.createElement("h1")
    H1.innerText = "CA.inc"
    document.getElementsByClassName("part1").item(0).appendChild(H1)

    const p1 = document.createElement("p")
    p1.innerText = "Architecture & Interiors Blog"
    document.getElementsByClassName("part1").item(0).appendChild(p1)

    const part2 = document.createElement("div")
    part2.classList.add("part2")
    document.getElementsByTagName("footer").item(0).appendChild(part2)

    const address = document.createElement("div")
    address.classList.add("Address")
    document.getElementsByClassName("part2").item(0).appendChild(address)

    const A1 = document.createElement("a")
    A1.setAttribute("href","#")
    A1.innerHTML= "<i class=\"fa fa-map-marker\"></i> 3883 Howard Hughes Parkway <br>" +
        "Suite 650 <br>" +
        "Las Vegas, NV 89169 <br>" +
        "USA"
    document.getElementsByClassName("Address").item(0).appendChild(A1)


    const part3 = document.createElement("div")
    part3.classList.add("part3")
    document.getElementsByTagName("footer").item(0).appendChild(part3)

    const Bxpart3 = document.createElement("div")
    Bxpart3.classList.add("Bx")
    Bxpart3.innerHTML = "<a href=\"#\">Project</a> <br>\n" +
        "          <a href=\"#\">Brand Design</a> <br>\n" +
        "          <a href=\"#\">Cities & Urban Design</a> <br>\n" +
        "          <a href=\"#\">Consumer Goods</a><br>\n" +
        "          <a href=\"#\">Critical Facilities</a><br>\n" +
        "          <a href=\"#\">Culture & Museum</a><br>\n" +
        "          <a href=\"#\">Developer</a><br>\n" +
        "          <a href=\"#\">Digital Experience Design</a>"
    document.getElementsByClassName("part3").item(0).appendChild(Bxpart3)

    const Part4 = document.createElement("div")
    Part4.classList.add("part4")
    document.getElementsByTagName("footer").item(0).appendChild(Part4)

    const BxPart4 = document.createElement("div")
    BxPart4.classList.add("Bx")
    BxPart4.innerHTML = " <a href=\"#\">Education</a><br>\n" +
        "          <a href=\"#\">Energy</a> <br>\n" +
        "          <a href=\"#\">Healthcare</a> <br>\n" +
        "          <a href=\"#\">Hospitali</a><br>"
    document.getElementsByClassName("part4").item(0).appendChild(BxPart4)

    const LastIconBar = document.createElement("div")
    LastIconBar.classList.add("IconBar")
    LastIconBar.innerHTML = " <i class=\"fa fa-paypal\"></i>\n" +
        "          <i class=\"fa fa-youtube-play\"></i>\n" +
        "          <i class=\"fa fa-cc-visa\"></i>\n" +
        "          <i class=\"fa fa-pinterest-square\"></i>\n" +
        "          <i class=\"fa fa-facebook-square\"></i>\n" +
        "          <i class=\"fa fa-wechat\"></i>\n" +
        "          <i class=\"fa fa-twitter-square\"></i>"
    document.getElementsByClassName("part4").item(0).appendChild(LastIconBar)

    const Privacy = document.createElement("div")
    Privacy.classList.add("Bx1")
    Privacy.innerHTML = "<a href=\"#\">Privacy Statement & Cookie Policy </a>"
    document.getElementsByClassName("part4").item(0).appendChild(Privacy)

































}
