<div id="top"></div>
<!--
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
-->
<br />
<div align="center">
  <a href="">
    <img src="https://abhikakarot.github.io/myInfo/images/abhishek_anim.png" alt="Logo" width="100" height="100">
  </a>

  <h3 align="center">Web Development Stuff</h3>

  <p align="center">
    Here are some things that I use for development purposes and also some syntaxes that I usually forget!
    <br />
  </p>
</div>
<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#things-that-i-generally-forget-the-syntax-of">Things that I forget</a>
      <ul>
        <li><a href="#1.font-face">Font Face</a></li>
        <li><a href="#tags">Tags</a></li>
        <ul>
	        <li><a href="#viewport-tag">Meta viewport Tag</a></li>
	        <li><a href="#favicon-tag">Favicon Tag</a></li>
	        <li><a href="#picture-tag">Picture Tag</a></li>
			<li><a href="#video-tag">Video Tag</a></li>
      </ul>
              <li><a href="#page-loader">Page loader</a></li>
	        <li><a href="#css-gradient">CSS Gradient</a></li>
	        <li><a href="#media-query">@media Syntax</a></li>
	        <li><a href="#keyframes">@keyframes Syntax</a></li>
    </li>
    <li>
      <a href="#things-that-come-handy-to-me-resources">Things that come handy to me</a>
    </li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Things that I generally forget the syntax of
###### These things may and may not be useful for you
<p align="right">(<a href="#things-that-come-handy-to-me-resources">Skip to resources</a>)</p>


### 1. Font Face
```
@font-face {  
	font-family:  myFirstFont;  
	src:  url(sansation_light.woff);  
}
```

### 2. Tags

#### a. Viewport Tag
```
<meta name="viewport"  content="width=device-width, initial-scale=1.0">
```

#### b. Favicon Tag
```
<link rel="icon" href="demo_icon.gif" type="image/gif" sizes="16x16">
```

#### c. Picture Tag
```
<picture>  
	<source media="(min-width:650px)" srcset="img_pink_flowers.jpg">
	<source media="(min-width:465px)" srcset="img_white_flower.jpg">
	<img src="img_orange_flowers.jpg" alt="Flowers" style="width:auto;">
</picture>
```

#### d. Video Tag
```
<video width="320" height="240" controls>
	<source src="movie.mp4"  type="video/mp4">
	<source src="movie.ogg"  type="video/ogg">
	Your browser does not support the video tag.
</video>
```

### 3. Page loader
```
<div id="page_loader"></div>

document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'interactive') {
       document.getElementById('page_loader').style.visibility="visible";
  } else if (state == 'complete') {
      setTimeout(function(){
         document.getElementById('page_loader').style.visibility="hidden";
      },1000);
  }
}
```

### 4.  CSS Gradient
```
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
```

### 5. @media query
```
@media screen and (max-width: 900px) and (min-width: 600px), (min-width: 1100px) {  
	div.example  {  
	font-size:  50px;  
	padding:  50px;  
	border:  8px solid black;  
	background:  yellow;  
	}  
}
```

### 6. @keyframes
```
@keyframes mymove {  
	0% {top:  0px;}  
	25% {top:  200px;}  
	50% {top:  100px;}  
	75% {top:  200px;}  
	100%  {top:  0px;}  
}
```


## Things that come handy to me [Resources]

* [Characters](https://copychar.cc/)
* [CSS Gradient](https://cssgradient.io/)
* [Clip path generator](https://bennettfeely.com/clippy/)
* [CSS filter generator](https://codepen.io/sosuke/pen/Pjoqqp)
* [Epoch Converter](https://www.epochconverter.com/)
* [Cubic Bezier](https://cubic-bezier.com/#.17,.67,.83,.67)
* [SVG BG](https://bgjar.com/)
* [Keyframes](https://keyframes.app/)
* [Wait animate](https://waitanimate.wstone.io/)
<br /><br />
### I will keep on adding more stuff!

<a href="#top">back to top ☝️</a>