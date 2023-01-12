// import React, { Component } from 'react';
// import 'Profile.css'

// const Profile2 = () => {

//     var slideIndex = 1;
//     showDivs(slideIndex);

//     function plusDivs(n) {
//         showDivs((slideIndex += n));
//     }

//     function currentDiv(n) {
//         showDivs((slideIndex = n));
//     }

//     function showDivs(n) {
//         var i;
//         var x = document.getElementsByClassName("mySlides");
//         var dots = document.getElementsByClassName("demo > div");
//         if (n > x.length) {
//             slideIndex = 1;
//         }
//         if (n < 1) {
//             slideIndex = x.length;
//         }
//         for (i = 0; i < x.length; i++) {
//             x[i].style.display = "none";
//         }
//         for (i = 0; i < dots.length; i++) {
//             dots[i].className = dots[i].className.replace(
//                 " w3-white",
//                 ""
//             );
//         }
//         x[slideIndex - 1].style.display = "block";
//         dots[slideIndex - 1].className += " w3-white";
//     }

//     return(
//         <>
//         <div class="nav flex space-between">
//             <div></div>
//             <div class="logo"><span>K</span>ahank<span>i</span></div>
//             <div></div>
//             <div></div>
//         </div>
//         <div class="container flex">
//             <div class="card flex">
//                 <div class="photo flex column space-between">
//                     <div class="img">
//                         <img
//                             class="mySlides"
//                             src="https://cdn.7days.ru/pic/377/013A2F614B4A245A4325861C005DF4BB/568865/90.jpg"
//                             style="width: 100%"
//                         />
//                         <img
//                             class="mySlides"
//                             src="https://i.ibb.co/mN2cxrK/timotisalame.jpg"
//                             style="width: 100%"
//                         />
//                         <img
//                             class="mySlides"
//                             src="https://img5tv.cdnvideo.ru/webp/shared/files/202109/1_1395311.jpg"
//                             style="width: 100%"
//                         />
//                     </div>
//                     <div class="demo flex space-between">
//                         <div onclick="currentDiv(1)"></div>
//                         <div onclick="currentDiv(2)"></div>
//                         <div onclick="currentDiv(3)"></div>
//                     </div>
//                     <div class="arrows flex space-between">
//                         <div class="" onclick="plusDivs(-1)">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 id="Outline"
//                                 viewBox="0 0 24 24"
//                                 width="40"
//                                 height="40"
//                             >
//                                 <path
//                                     d="M17.17,24a1,1,0,0,1-.71-.29L8.29,15.54a5,5,0,0,1,0-7.08L16.46.29a1,1,0,1,1,1.42,1.42L9.71,9.88a3,3,0,0,0,0,4.24l8.17,8.17a1,1,0,0,1,0,1.42A1,1,0,0,1,17.17,24Z"
//                                 />
//                             </svg>
//                         </div>
//                         <div class="" onclick="plusDivs(1)">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 id="Outline"
//                                 viewBox="0 0 24 24"
//                                 width="40"
//                                 height="40"
//                                 class="rotate"
//                             >
//                                 <path
//                                     d="M17.17,24a1,1,0,0,1-.71-.29L8.29,15.54a5,5,0,0,1,0-7.08L16.46.29a1,1,0,1,1,1.42,1.42L9.71,9.88a3,3,0,0,0,0,4.24l8.17,8.17a1,1,0,0,1,0,1.42A1,1,0,0,1,17.17,24Z"
//                                 />
//                             </svg>
//                         </div>
//                     </div>
//                     <div class="text font-white">
//                         <span class=""> Дима, 26 </span>
//                         <span class=""> ЦЦР, developer </span>
//                         <span> Минск </span>
//                     </div>
//                 </div>
//                 <div class="info flex column space-between">
//                     <div class="common align-center">
//                         <h3>
//                             Общая информация
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 id="Outline"
//                                 viewBox="0 0 24 24"
//                                 width="20"
//                                 height="20"
//                             >
//                                 <path
//                                     d="M22.853,1.148a3.626,3.626,0,0,0-5.124,0L1.465,17.412A4.968,4.968,0,0,0,0,20.947V23a1,1,0,0,0,1,1H3.053a4.966,4.966,0,0,0,3.535-1.464L22.853,6.271A3.626,3.626,0,0,0,22.853,1.148ZM5.174,21.122A3.022,3.022,0,0,1,3.053,22H2V20.947a2.98,2.98,0,0,1,.879-2.121L15.222,6.483l2.3,2.3ZM21.438,4.857,18.932,7.364l-2.3-2.295,2.507-2.507a1.623,1.623,0,1,1,2.295,2.3Z"
//                                 />
//                             </svg>
//                         </h3>
//                         <span>Образование: БГУ Работа: ЦЦР, developer </span>
//                     </div>
//                     <div class="common align-center">
//                         <h3>Обо мне</h3>
//                         <span
//                             >Имя: Настя Возраст: 26 Пол: Женский Ориентация:
//                             Геторо Образование: БГУ Работа: ЦЦР, developer
//                             Город: Минск</span
//                         >
//                     </div>
//                     <div class="common align-center">
//                         <h3>Где меня найти:</h3>
//                         <span
//                             >Имя: Настя Возраст: 26 Пол: Женский Ориентация:
//                             Геторо Образование: БГУ Работа: ЦЦР, developer
//                             Город: Минск</span
//                         >
//                     </div>
//                 </div>
//             </div>
//             <div class="btns">
//                 <div></div>
//                 <div></div>
//                 <div></div>
//             </div>
//         </div>
//         </>
//     )
// }

// export default Profile2;