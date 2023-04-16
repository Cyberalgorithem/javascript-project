(function ($){
    $.fn.plugSlider = function (userOption) {
        var options = $.extend({
            slideTime: 10000,
            speed: 500,
            outAnimation: true,
            inAnimation: true,
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
            if(options.pauseOnHover){
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
    nav.classList.add("navbar-light")
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
    LI.innerHTML = "<img src=\"image/1Mainslider.JPG\" alt=\"\">"
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
    LI.innerHTML = "<img src=\"image/Mainslider5.JPG\" alt=\"\">"
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

    /*paris Louvre*/
    var row4 = document.createElement("div")
    row4.classList.add("row")
    document.getElementsByClassName("container").item(0).appendChild(row4)

    var paris = document.createElement("div")
    paris.classList.add("col-xl-12")
    paris.classList.add("p-0")
    paris.classList.add("m-0")
    paris.classList.add("paris")
    paris.classList.add("wow")
    paris.classList.add("animate__backInRight")
    paris.setAttribute("data-wow-duration","3s")
    document.getElementsByClassName("row").item(3).appendChild(paris)

    var sec1 = document.createElement("div")
    sec1.classList.add("section1")
    document.getElementsByClassName("paris").item(0).appendChild(sec1)

    var Para1 = document.createElement("div")
    Para1.classList.add("paragraph1")
    Para1.innerHTML = "<p>Getting To Know The Amesterdam/p>"
    document.getElementsByClassName("section1").item(0).appendChild(Para1)

    var Title1 = document.createElement("div")
    Title1.classList.add("title1")
    Title1.innerText = "Netherland"
    document.getElementsByClassName("section1").item(0).appendChild(Title1)

    var ProducerBox = document.createElement("div")
    ProducerBox.classList.add("ProducerBox")
    document.getElementsByClassName("section1").item(0).appendChild(ProducerBox)

    var box1 = document.createElement("div")
    box1.classList.add("box")
    box1.classList.add("box1")
    box1.innerHTML = "<p>By : Fons Heijnsbroek  </p>"
    document.getElementsByClassName("ProducerBox").item(0).appendChild(box1)

    var lines1 = document.createElement("div")
    lines1.classList.add("lines1")
    document.getElementsByClassName("ProducerBox").item(0).appendChild(lines1)

    var box1 = document.createElement("div")
    box1.classList.add("box")
    box1.classList.add("box2")
    box1.innerHTML = "<p> Date Modified :  August 11 , 2020 </p>"
    document.getElementsByClassName("ProducerBox").item(0).appendChild(box1)


    var lines2 = document.createElement("div")
    lines2.classList.add("lines2")
    document.getElementsByClassName("ProducerBox").item(0).appendChild(lines2)

    var box1 = document.createElement("div")
    box1.classList.add("box")
    box1.classList.add("box3")
    box1.innerHTML = "<p> 548 Comment</p>"
    document.getElementsByClassName("ProducerBox").item(0).appendChild(box1)

    var image1 = document.createElement("div")
    image1.classList.add("image1")
    document.getElementsByClassName("section1").item(0).appendChild(image1)

    var imgImage1 = document.createElement("img")
    imgImage1.setAttribute("src","image2/Part1.JPG")
    document.getElementsByClassName("image1").item(0).appendChild(imgImage1)

    var box4 = document.createElement("div")
    box4.classList.add("box")
    box4.classList.add("box4")
    box4.classList.add("m-auto")
    box4.classList.add("my-5")
    box4.innerHTML = "<p>  Netherlands, country located in northwestern Europe, also known as Holland. “Netherlands” means low-lying country; the name Holland (from Houtland, or “Wooded Land”) was originally given to one of the medieval cores of what later became the modern state and is still used for 2 of its 12 provinces (Noord-Holland and Zuid-Holland). A parliamentary democracy under a constitutional monarch, the kingdom includes its former colonies in the Lesser Antilles: Aruba, Bonaire, Curaçao, Saba, Sint Eustatius, and Sint Maarten. The capital is Amsterdam and the seat of government The Hague...</p>"
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

    /*Interior*/


    var row4 = document.createElement("div")
    row4.classList.add("row")
    document.getElementsByClassName("container").item(0).appendChild(row4)

    var paris = document.createElement("div")
    paris.classList.add("col-xl-12")
    paris.classList.add("p-0")
    paris.classList.add("m-0")
    paris.classList.add("paris")
    paris.classList.add("wow")
    paris.classList.add("animate__backInLeft")
    paris.setAttribute("data-wow-duration","3s")
    document.getElementsByClassName("row").item(4).appendChild(paris)

    var sec1 = document.createElement("div")
    sec1.classList.add("section1")
    document.getElementsByClassName("paris").item(1).appendChild(sec1)

    var Para1 = document.createElement("div")
    Para1.classList.add("paragraph1")
    Para1.innerHTML = "<p>Talk About Interior<</p>"
    document.getElementsByClassName("section1").item(1).appendChild(Para1)

    var Title1 = document.createElement("div")
    Title1.classList.add("title1")
    Title1.innerText = "Interior Design"
    document.getElementsByClassName("section1").item(1).appendChild(Title1)

    var ProducerBox = document.createElement("div")
    ProducerBox.classList.add("ProducerBox")
    document.getElementsByClassName("section1").item(1).appendChild(ProducerBox)

    var box1 = document.createElement("div")
    box1.classList.add("box")
    box1.classList.add("box1")
    box1.innerHTML = "<p>By : Pedro Nogueria </p>"
    document.getElementsByClassName("ProducerBox").item(1).appendChild(box1)

    var lines1 = document.createElement("div")
    lines1.classList.add("lines1")
    document.getElementsByClassName("ProducerBox").item(1).appendChild(lines1)

    var box1 = document.createElement("div")
    box1.classList.add("box")
    box1.classList.add("box2")
    box1.innerHTML = "<p>Date Modified : December 7 , 2022</p>"
    document.getElementsByClassName("ProducerBox").item(1).appendChild(box1)


    var lines2 = document.createElement("div")
    lines2.classList.add("lines2")
    document.getElementsByClassName("ProducerBox").item(1).appendChild(lines2)

    var box1 = document.createElement("div")
    box1.classList.add("box")
    box1.classList.add("box3")
    box1.innerHTML = "<p> 81 Comment</p>"
    document.getElementsByClassName("ProducerBox").item(1).appendChild(box1)

    var image1 = document.createElement("div")
    image1.classList.add("image1")
    document.getElementsByClassName("section1").item(1).appendChild(image1)

    var imgImage1 = document.createElement("img")
    imgImage1.setAttribute("src","image2/Part2.JPG")
    document.getElementsByClassName("image1").item(1).appendChild(imgImage1)

    var box4 = document.createElement("div")
    box4.classList.add("box")
    box4.classList.add("box4")
    box4.classList.add("m-auto")
    box4.classList.add("my-5")
    box4.innerHTML = "Interior design is the art and science of enhancing the interior of a building to achieve a healthier and more aesthetically pleasing environment for the people using the space. An interior designer is someone who plans, researches, coordinates, and manages such enhancement projects. Interior design is a multifaceted profession that includes conceptual development, space planning, site inspections, programming, research, communicating with the stakeholders of a project, construction management, and execution of the design...</p>"
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

//  Fez

    var row4 = document.createElement("div")
    row4.classList.add("row")
    document.getElementsByClassName("container").item(0).appendChild(row4)

    var paris = document.createElement("div")
    paris.classList.add("col-xl-12")
    paris.classList.add("p-0")
    paris.classList.add("m-0")
    paris.classList.add("paris")
    paris.classList.add("wow")
    paris.classList.add("animate__backInRight")
    paris.setAttribute("data-wow-duration","3s")
    document.getElementsByClassName("row").item(5).appendChild(paris)

    var sec1 = document.createElement("div")
    sec1.classList.add("section1")
    document.getElementsByClassName("paris").item(2).appendChild(sec1)

    var Para1 = document.createElement("div")
    Para1.classList.add("paragraph1")
    Para1.innerHTML = "<p>Let's Know About Morocco</p>"
    document.getElementsByClassName("section1").item(2).appendChild(Para1)

    var Title1 = document.createElement("div")
    Title1.classList.add("title1")
    Title1.innerText = "Fez , Morocco"
    document.getElementsByClassName("section1").item(2).appendChild(Title1)

    var ProducerBox = document.createElement("div")
    ProducerBox.classList.add("ProducerBox")
    document.getElementsByClassName("section1").item(2).appendChild(ProducerBox)

    var box1 = document.createElement("div")
    box1.classList.add("box")
    box1.classList.add("box1")
    box1.innerHTML = "<p>By :  Erik Knoef </p>"
    document.getElementsByClassName("ProducerBox").item(2).appendChild(box1)

    var lines1 = document.createElement("div")
    lines1.classList.add("lines1")
    document.getElementsByClassName("ProducerBox").item(2).appendChild(lines1)

    var box1 = document.createElement("div")
    box1.classList.add("box")
    box1.classList.add("box2")
    box1.innerHTML = "<p> Date Modified : November 1 , 2022</p>"
    document.getElementsByClassName("ProducerBox").item(2).appendChild(box1)


    var lines2 = document.createElement("div")
    lines2.classList.add("lines2")
    document.getElementsByClassName("ProducerBox").item(2).appendChild(lines2)

    var box1 = document.createElement("div")
    box1.classList.add("box")
    box1.classList.add("box3")
    box1.innerHTML = "<p> 56 Comment</p>"
    document.getElementsByClassName("ProducerBox").item(2).appendChild(box1)

    var image1 = document.createElement("div")
    image1.classList.add("image1")
    document.getElementsByClassName("section1").item(2).appendChild(image1)

    var imgImage1 = document.createElement("img")
    imgImage1.setAttribute("src","image2/Part3.JPG")
    document.getElementsByClassName("image1").item(2).appendChild(imgImage1)

    var box4 = document.createElement("div")
    box4.classList.add("box")
    box4.classList.add("box4")
    box4.classList.add("m-auto")
    box4.classList.add("my-5")
    box4.innerHTML = "<p>Fez or Fes (/fɛz/; Arabic: فاس, romanized: fās; Standard Moroccan Tamazight: ⴼⵉⵣⴰⵣ, romanized: fizaz; French: Fès) is a city in northern inland Morocco and the capital of the Fès-Meknès administrative region. It is the second largest city in Morocco, with a population of 1.11 million according to the 2014 census.[2] Located to the north west of the Atlas Mountains, Fez is linked to several important cities of different regions; it is 206 km (128 mi) from Tangier to the northwest, 246 km (153 mi) from Casablanca, 189 km (117 mi) from Rabat to the west, and 387 km (240 mi) from Marrakesh to the southwest. It is surrounded by hills and the old city is centered around the Fez River (Oued Fes) flowing from west to east.\n" +
        "                        Fez was founded under Idrisid rule during the 8th-9th centuries CE. It initially consisted of two autonomous and competing settlements. Successive waves of mainly Arab immigrants from Ifriqiya (Tunisia) and al-Andalus (Spain/Portugal) in the early 9th century gave the nascent city its Arab character. After the downfall of the Idrisid dynasty, other empires came and went until the 11th century when the Almoravid Sultan Yusuf ibn Tashfin united the two settlements into what is today's Fes el-Bali quarter. Under Almoravid rule, the city gained a reputation for religious scholarship and mercantile activity...</p>"
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

    //Istanbul

    var row4 = document.createElement("div")
    row4.classList.add("row")
    document.getElementsByClassName("container").item(0).appendChild(row4)

    var paris = document.createElement("div")
    paris.classList.add("col-xl-12")
    paris.classList.add("p-0")
    paris.classList.add("m-0")
    paris.classList.add("paris")
    paris.classList.add("wow")
    paris.classList.add("animate__backInLeft")
    paris.setAttribute("data-wow-duration","3s")
    document.getElementsByClassName("row").item(6).appendChild(paris)

    var sec1 = document.createElement("div")
    sec1.classList.add("section1")
    document.getElementsByClassName("paris").item(3).appendChild(sec1)

    var Para1 = document.createElement("div")
    Para1.classList.add("paragraph1")
    Para1.innerHTML = "<p>15 Temmuz Şehitler Köprüsü</p>"
    document.getElementsByClassName("section1").item(3).appendChild(Para1)

    var Title1 = document.createElement("div")
    Title1.classList.add("title1")
    Title1.innerText = "Istanbul Architecture"
    document.getElementsByClassName("section1").item(3).appendChild(Title1)

    var ProducerBox = document.createElement("div")
    ProducerBox.classList.add("ProducerBox")
    document.getElementsByClassName("section1").item(3).appendChild(ProducerBox)

    var box1 = document.createElement("div")
    box1.classList.add("box")
    box1.classList.add("box1")
    box1.innerHTML = "<p>By : Osman Köycü</p>"
    document.getElementsByClassName("ProducerBox").item(3).appendChild(box1)

    var lines1 = document.createElement("div")
    lines1.classList.add("lines1")
    document.getElementsByClassName("ProducerBox").item(3).appendChild(lines1)

    var box1 = document.createElement("div")
    box1.classList.add("box")
    box1.classList.add("box2")
    box1.innerHTML = "<p> Date Modified :  February 8 , 2018 </p>"
    document.getElementsByClassName("ProducerBox").item(3).appendChild(box1)


    var lines2 = document.createElement("div")
    lines2.classList.add("lines2")
    document.getElementsByClassName("ProducerBox").item(3).appendChild(lines2)

    var box1 = document.createElement("div")
    box1.classList.add("box")
    box1.classList.add("box3")
    box1.innerHTML = "<p> 65 Comment</p>"
    document.getElementsByClassName("ProducerBox").item(3).appendChild(box1)

    var image1 = document.createElement("div")
    image1.classList.add("image1")
    document.getElementsByClassName("section1").item(3).appendChild(image1)

    var imgImage1 = document.createElement("img")
    imgImage1.setAttribute("src","image2/Part4.JPG")
    document.getElementsByClassName("image1").item(3).appendChild(imgImage1)

    var box4 = document.createElement("div")
    box4.classList.add("box")
    box4.classList.add("box4")
    box4.classList.add("m-auto")
    box4.classList.add("my-5")
    box4.innerHTML = "<p>15 Temmuz Şehitler Köprüsü, eski adıyla Boğaziçi Köprüsü ya da boğaza inşa edilen ilk köprü olmasına atıfla halk arasında Birinci Köprü; Karadeniz ile Marmara Denizini birbirine bağlayan İstanbul Boğazı üzerinde yer alan üç asma köprüden biri ve ilkidir. Köprünün ayakları Avrupa Yakası'nda Ortaköy, Anadolu Yakası'nda Beylerbeyi semtlerindedir.\n" +
        "\n" +
        "                        İstanbul Boğazı üzerine yapılan ilk köprü olmasına atfen halk arasında Birinci Köprü olarak da adlandırılan Boğaziçi Köprüsü, daha sonra yapılan Fatih Sultan Mehmet Köprüsü, Yavuz Sultan Selim Köprüsü ve Avrasya Tüneli'yle birlikte kentin iki yakası arasındaki kesintisiz kara ulaşımını sağlar. 20 Şubat 1970 tarihinde yapımına başlanan köprü, 30 Ekim 1973 tarihinde, Türkiye Cumhuriyeti'nin kuruluşunun 50. yıldönümü şerefine dönemin cumhurbaşkanı Fahri Korutürk tarafından devlet töreniyle hizmete açıldı. Yapımı tamamlandığında dünyanın en uzun dördüncü asma köprüsüyken, 2012 yılı itibarıyla yirmi birinci sırada bulunmaktadır...</p>"
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
// Italy
    var row4 = document.createElement("div")
    row4.classList.add("row")
    document.getElementsByClassName("container").item(0).appendChild(row4)

    var paris = document.createElement("div")
    paris.classList.add("col-xl-12")
    paris.classList.add("p-0")
    paris.classList.add("m-0")
    paris.classList.add("paris")
    paris.classList.add("wow")
    paris.classList.add("animate__backInRight")
    paris.setAttribute("data-wow-duration","3s")
    document.getElementsByClassName("row").item(7).appendChild(paris)

    var sec1 = document.createElement("div")
    sec1.classList.add("section1")
    document.getElementsByClassName("paris").item(4).appendChild(sec1)

    var Para1 = document.createElement("div")
    Para1.classList.add("paragraph1")
    Para1.innerHTML = "<p> Italy</p>"
    document.getElementsByClassName("section1").item(4).appendChild(Para1)

    var Title1 = document.createElement("div")
    Title1.classList.add("title1")
    Title1.innerText = "Turin"
    document.getElementsByClassName("section1").item(4).appendChild(Title1)

    var ProducerBox = document.createElement("div")
    ProducerBox.classList.add("ProducerBox")
    document.getElementsByClassName("section1").item(4).appendChild(ProducerBox)

    var box1 = document.createElement("div")
    box1.classList.add("box")
    box1.classList.add("box1")
    box1.innerHTML = "<p>By : Michael Schreiber  </p>"
    document.getElementsByClassName("ProducerBox").item(4).appendChild(box1)

    var lines1 = document.createElement("div")
    lines1.classList.add("lines1")
    document.getElementsByClassName("ProducerBox").item(4).appendChild(lines1)

    var box1 = document.createElement("div")
    box1.classList.add("box")
    box1.classList.add("box2")
    box1.innerHTML = "<p> Date Modified : December 12 , 2012</p>"
    document.getElementsByClassName("ProducerBox").item(4).appendChild(box1)


    var lines2 = document.createElement("div")
    lines2.classList.add("lines2")
    document.getElementsByClassName("ProducerBox").item(4).appendChild(lines2)

    var box1 = document.createElement("div")
    box1.classList.add("box")
    box1.classList.add("box3")
    box1.innerHTML = "<p> 5609 Comment</p>"
    document.getElementsByClassName("ProducerBox").item(4).appendChild(box1)

    var image1 = document.createElement("div")
    image1.classList.add("image1")
    document.getElementsByClassName("section1").item(4).appendChild(image1)

    var imgImage1 = document.createElement("img")
    imgImage1.setAttribute("src","image2/Part6.JPG")
    document.getElementsByClassName("image1").item(4).appendChild(imgImage1)

    var box4 = document.createElement("div")
    box4.classList.add("box")
    box4.classList.add("box4")
    box4.classList.add("m-auto")
    box4.classList.add("my-5")
    box4.innerHTML = "<p>The Metropolitan City of Turin (Italian: Città metropolitana di Torino, Piedmontese: Sità metropolitan-a 'd Turin) is a metropolitan city in the Piedmont region, Italy. Its capital is the city of Turin. It replaced the Province of Turin and comprises the city of Turin and 311 other municipalities (comuni). It was created by the reform of local authorities (Law 142/1990) and established by the Law 56/2014. It has been officially operating since 1 January 2015. The Metropolitan City of Turin is headed by the metropolitan mayor (sindaco metropolitano) and by the metropolitan council (consiglio metropolitano). Since 5 June 2016, Chiara Appendino has served as the mayor of the capital city, succeeding Piero Fassino. The largest Metropolitan City of Italy, it is the only one to border a foreign state, France...</p>"
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

//    Setup Desk

    var row4 = document.createElement("div")
    row4.classList.add("row")
    document.getElementsByClassName("container").item(0).appendChild(row4)

    var paris = document.createElement("div")
    paris.classList.add("col-xl-12")
    paris.classList.add("p-0")
    paris.classList.add("m-0")
    paris.classList.add("paris")
    paris.classList.add("wow")
    paris.classList.add("animate__backInLeft")
    paris.setAttribute("data-wow-duration","3s")
    document.getElementsByClassName("row").item(8).appendChild(paris)

    var sec1 = document.createElement("div")
    sec1.classList.add("section1")
    document.getElementsByClassName("paris").item(5).appendChild(sec1)

    var Para1 = document.createElement("div")
    Para1.classList.add("paragraph1")
    Para1.innerHTML = "<p>Hotel Interior</p>"
    document.getElementsByClassName("section1").item(5).appendChild(Para1)

    var Title1 = document.createElement("div")
    Title1.classList.add("title1")
    Title1.innerText = "Modern Hotel Architecture"
    document.getElementsByClassName("section1").item(5).appendChild(Title1)

    var ProducerBox = document.createElement("div")
    ProducerBox.classList.add("ProducerBox")
    document.getElementsByClassName("section1").item(5).appendChild(ProducerBox)

    var box1 = document.createElement("div")
    box1.classList.add("box")
    box1.classList.add("box1")
    box1.innerHTML = "<p>By : Joakim Honkasalo</p>"
    document.getElementsByClassName("ProducerBox").item(5).appendChild(box1)

    var lines1 = document.createElement("div")
    lines1.classList.add("lines1")
    document.getElementsByClassName("ProducerBox").item(5).appendChild(lines1)

    var box1 = document.createElement("div")
    box1.classList.add("box")
    box1.classList.add("box2")
    box1.innerHTML = "<p> Date Modified : March 3 , 2018</p>"
    document.getElementsByClassName("ProducerBox").item(5).appendChild(box1)


    var lines2 = document.createElement("div")
    lines2.classList.add("lines2")
    document.getElementsByClassName("ProducerBox").item(5).appendChild(lines2)

    var box1 = document.createElement("div")
    box1.classList.add("box")
    box1.classList.add("box3")
    box1.innerHTML = "<p> 798 Comment</p>"
    document.getElementsByClassName("ProducerBox").item(5).appendChild(box1)

    var image1 = document.createElement("div")
    image1.classList.add("image1")
    document.getElementsByClassName("section1").item(5).appendChild(image1)

    var imgImage1 = document.createElement("img")
    imgImage1.setAttribute("src","image2/Part7.JPG")
    document.getElementsByClassName("image1").item(5).appendChild(imgImage1)

    var box4 = document.createElement("div")
    box4.classList.add("box")
    box4.classList.add("box4")
    box4.classList.add("m-auto")
    box4.classList.add("my-5")
    box4.innerHTML = "<p> This shot is taken in a hotel lobby in downtown Helsinki, as I was waiting for breakfast. I was lucky to look up, because I didn't realize the cool view at first. Design city...</p>"
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

    //  Pagination

    const row5 = document.createElement("div")
    row5.classList.add("row")
    document.getElementsByClassName("container").item(0).appendChild(row5)

    const pagination = document.createElement("div")
    pagination.classList.add("col-xl-12")
    pagination.classList.add("Pagination")
    pagination.classList.add("p-0")
    pagination.classList.add("m-0")
    pagination.classList.add("wow")
    pagination.classList.add("animate__backInDown")
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
    Apagenext.setAttribute("href","index.html")
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
    Divfooter.classList.add("animate__backInUp")
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
