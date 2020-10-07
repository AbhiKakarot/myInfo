AOS.init();


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

function scrollToContact(){
  var hash = '#sec4';
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
      {social: 'fab fa-facebook', url: '#'},
      {social: 'fab fa-instagram', url: '#'},
      {social: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/abhishek-munjal-619017a9/'},
      {social: 'fab fa-github', url: 'https://github.com/AbhiKakarot/'},
      {social: 'far fa-envelope', url: 'mailto:munjalabhishek1996@gmail.com'},
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
  },
  mounted(){
    window.setInterval(()=>{
      this.greet();
    }, 3500);
  }
 });