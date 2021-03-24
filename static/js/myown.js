AOS.init();



document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".carousel-container").forEach((carousel) => {
    insertNumbers(carousel);

    carousel.querySelector(".prev").addEventListener("click", (e) => {
      minusItem(carousel);
    });

    carousel.querySelector(".next").addEventListener("click", () => {
      plusItem(carousel);
    });

    insertDots(carousel);

    carousel.querySelectorAll(".dot").forEach((dot) => {
      dot.addEventListener("click", (e) => {
        let item = Array.prototype.indexOf.call(
          e.target.parentNode.children,
          e.target
        );

        showItems(carousel, item);
      });
    });

    showItems(carousel, 0);
  });
});

function insertNumbers(carousel) {
  const length = carousel.querySelectorAll(".item").length;
  for (let i = 0; i < length; i++) {
    const nmbr = document.createElement("div");
    nmbr.classList.add("numbertext");
    nmbr.innerText = i + 1 + " / " + length;

    carousel.querySelectorAll(".item")[i].append(nmbr);
  }
}

function insertDots(carousel) {
  const dots = document.createElement("div");
  dots.classList.add("dots");

  carousel.append(dots);

  carousel.querySelectorAll(".item").forEach((elem) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");

    carousel.querySelector(".dots").append(dot);
  });
}

function plusItem(carousel) {
  let item = currentItem(carousel);

  carousel
    .querySelectorAll(".item")
    [item].nextElementSibling.classList.contains("item")
    ? showItems(carousel, item + 1)
    : showItems(carousel, 0);
}

function minusItem(carousel) {
  let item = currentItem(carousel);

  carousel.querySelectorAll(".item")[item].previousElementSibling != null
    ? showItems(carousel, item - 1)
    : showItems(carousel, carousel.querySelectorAll(".item").length - 1);
}

function currentItem(carousel) {
  return [...carousel.querySelectorAll(".item")].findIndex(
    (item) => item.style.display == "block"
  );
}

function showItems(carousel, item) {
  if (carousel.querySelectorAll(".item")[currentItem(carousel)] != undefined)
    carousel.querySelectorAll(".item")[currentItem(carousel)].style.display =
      "none";
  carousel.querySelectorAll(".item")[item].style.display = "block";

  if (carousel.querySelector(".dot.active") != null)
    carousel.querySelector(".dot.active").classList.remove("active");
  carousel.querySelectorAll(".dot")[item].classList.add("active");
}



$(document).ready(function(){
  // Add smooth scrolling to all links
  $("#next").on('click', function(event) {
    var max_sections = 4;
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;
      var sectionNumber = parseInt(hash.slice(-1));
      sectionNumber = sectionNumber + 1;
      if (sectionNumber > max_sections){
        sectionNumber = 1;
      }
      $('#next').attr("href","#sec"+sectionNumber.toString());
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

function scrollToSection(hash){
  $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
}
function switchTabs(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}






app = new Vue({
  el: '#root',
  data() {
    return {
      vName :'',
      vEmail: '',
      vSubject: '',
      vMessage: '',

      socialIcons: [
      {social: 'fas fa-file', url: 'https://drive.google.com/file/d/14CNGW8TiQN-z8pLdPbpsz6_nfG6BNa0i/view?usp=sharing', target: '_blank'},
      //{social: 'fab fa-facebook', url: '#open-modal', target:''},
      {social: 'fab fa-instagram', url: 'https://instagram.com/abhishek__munjal/', target:''},
      {social: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/abhishek-munjal-619017a9/',target:'_blank'},
      {social: 'fab fa-github', url: 'https://github.com/AbhiKakarot/',target:'_blank'},
      {social: 'far fa-envelope', url: 'mailto:munjalabhishek1996@gmail.com',target:'_blank'},
      ],

      greeting: [
        "Namaste",
        "Sat sri akaal",
        "Salaam",
        "Aadaab",
        "Hello"
      ],

    };
  },

  methods:{
    greet(){
          const first = this.greeting.shift();
          this.greeting = this.greeting.concat(first);
          $("#changingGreet").fadeOut(function() {
            $(this).text(first).fadeIn();
          });
        },
    collapsed: function(event){
      if(event.target.tagName == 'LABEL'){
        if($(event.target).hasClass('collapse-right')){
          $(event.target).siblings().hide();
          $(event.target).removeClass('collapse-right');
          $(event.target).addClass('collapse-down');  
        }
        else{
          $(event.target).siblings().show();
          $(event.target).removeClass('collapse-down');
          $(event.target).addClass('collapse-right');  
        }
      }
    }
  },
  mounted(){
    window.setInterval(()=>{
      this.greet();
    }, 3500);

    /*var this_kw = this;
    $(document).ready(function(){
      var labels = document.getElementsByClassName('collapse-right');
      console.log(labels);
      for(var i=1;i<labels.length;i++){
        $(labels[i]).siblings().hide();
        $(labels[i]).removeClass('collapse-right');
        $(labels[i]).addClass('collapse-down');  
      }
    });*/
  }
 });