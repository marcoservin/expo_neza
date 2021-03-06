  /* SCRIPT - presente.html*/ 
 /* CARGA DE PAGINA */
  window.onload = function(){
  $('#onload').fadeOut();
  $('body').addClass('hidden');
}   
  /* NAVBAR - ANIMACION */
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');
const body = document.querySelector('body');
//display 
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    body.classList.toggle('active');
};
menu.addEventListener('click', mobileMenu);
  /* CARGA DEL CONTENIDO - DESPLAZAMINETO HORIZONTAL CON LOCOMOTIVESCROLL Y GSAP */
window.addEventListener("load", function () {
  gsap.registerPlugin(ScrollTrigger);
  const pageContainer = document.querySelector(".container");
  pageContainer.setAttribute("data-scroll-container", "");
  const scroller = new LocomotiveScroll({
    el: pageContainer,
    smooth: true,
    getDirection: true });
  scroller.on("scroll", function (t) {
    document.documentElement.setAttribute("data-direction", t.direction);
  });
  scroller.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy(pageContainer, {
    scrollTop(value) {
      return arguments.length ?
      scroller.scrollTo(value, 0, 0) :
      scroller.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        left: 0,
        top: 0,
        width: window.innerWidth,
        height: window.innerHeight };
    },
    pinType: pageContainer.style.transform ? "transform" : "fixed" });
/* DIV HORIZONTALES - CAMBIOS DE COLOR */
  // DIV DE REFERENCIA (WRAP) 
  let horizontalSections = document.querySelectorAll(".horizontal-scroll");
  horizontalSections.forEach(horizontalSection => {
    let pinWrap = horizontalSection.querySelector(".pin-wrap");
    let pinWrapWidth = pinWrap.offsetWidth;
    let horizontalScrollLength = pinWrapWidth - window.innerWidth;
    gsap.to(pinWrap, {
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        scrub: true,
        trigger: horizontalSection,
        pin: true,
        start: "top top",
        end: () => `+=${pinWrapWidth}`,
        invalidateOnRefresh: true },
      x: -horizontalScrollLength,
      ease: "none" });
  });
  const scrollColorElems = document.querySelectorAll("[data-bgcolor]");
  scrollColorElems.forEach((colorSection, i) => {
    const prevBg = i === 0 ? "" : scrollColorElems[i - 1].dataset.bgcolor;
    const prevText = i === 0 ? "" : scrollColorElems[i - 1].dataset.textcolor;
    ScrollTrigger.create({
      trigger: colorSection,
      scroller: "[data-scroll-container]",
      start: "top 50%",
      onEnter: () =>
      gsap.to("body", {
        backgroundColor: colorSection.dataset.bgcolor,
        color: colorSection.dataset.textcolor,
        overwrite: "auto" }),
      onLeaveBack: () =>
      gsap.to("body", {
        backgroundColor: prevBg,
        color: prevText,
        overwrite: "auto" }) });
  });
  ScrollTrigger.addEventListener("refresh", () => scroller.update());
  ScrollTrigger.refresh();
});
/*EVITAR CLIC DERECHO*/
document.oncontextmenu = function(){return false}
//___________Carousel PRESENTE-DESARROLLLO____________
const pintura14 = document.querySelector('.pintura14');
pintura14.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalV">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/13-alfredo-arcos/Pintura 46-min.jpg" alt=""></img>'+  
          ' </div>'+
          ' <div class="textoMV">'+
          '     <TABLE class="DES">'+
          '       <TR>'+
          '         <TH>Descripci??n:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>El nacimiento de Francisco Javier en situaci??n de pobreza. muestra la precariedad de los habitantes que vivi??n en casas de cart??n, cuyo ingreso econ??mico part??a de la venta y crianza de cerdos.</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          '     <TABLE class="FT">'+
          '       <TR>'+
          '         <TH>Ficha T??cnica:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Sin T??tulo</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Artista:  Alfredo Arcos</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Fragmentaciones:  2</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>T??cnica:  ??leo sobre tela</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Medidas:  65x100cm</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura14F1 = document.querySelector('.pintura14F1');
pintura14F1.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalV">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/13-alfredo-arcos/2 fragmentaci??n de pintura 46-min.jpg" alt=""></img>'+  
          ' </div>'+
          ' <div class="fragmentoV">'+
          '   <div class="textoFMV">'+
          '     <TABLE class="FT">'+
          '       <TR>'+
          '         <TH>Ficha T??cnica:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Sin T??tulo</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Artista:  Alfredo Arcos</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Fragmento:  1/2</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>T??cnica:  ??leo sobre tela</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          '   </div>'+
          '   <div class="fragPintura">'+
          '     <img src="../images/fragmentos/Pintura 46-2.jpg" alt=""></img>'+  
          '   </div>'+
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura14F2 = document.querySelector('.pintura14F2');
pintura14F2.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/13-alfredo-arcos/1 fragmentaci??n de pintura 46-min.jpg" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <a class="fragmentoH">'+
    '   <div class="textoMH">'+
    '     <TABLE class="FT">'+
    '       <TR>'+
    '         <TH>Ficha T??cnica:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Sin T??tulo</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Artista:  Alfredo Arcos</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Fragmento:  2/2</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>T??cnica:  ??leo sobre tela</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    '   </div>'+
    '   <div class="fragPintura">'+
    '     <img src="../images/fragmentos/Pintura 46-1.jpg" alt=""></img>'+  
    '   </div>'+
    ' </a>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura15 = document.querySelector('.pintura15');
pintura15.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalV">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/13-alfredo-arcos/Pintura 47-min.jpg" alt=""></img>'+  
          ' </div>'+
          ' <div class="textoMV">'+
          '     <TABLE class="DES">'+
          '       <TR>'+
          '         <TH>Descripci??n:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Francisco Javier, el ni??o que naci?? sumergido en la pobreza y desigualdad sobre los techos de cart??n, se convirti?? en un drogadicto.</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          '     <TABLE class="FT">'+
          '       <TR>'+
          '         <TH>Ficha T??cnica:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Sin T??tulo</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Artista:  Alfredo Arcos</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Fragmentaciones:  3</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>T??cnica:  ??leo sobre tela</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Medidas:  65x100cm</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura15F1 = document.querySelector('.pintura15F1');
pintura15F1.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/13-alfredo-arcos/1 fragmentaci??n de pintura 47-min.jpg" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <a class="fragmentoH">'+
    '   <div class="textoMH">'+
    '     <TABLE class="FT">'+
    '       <TR>'+
    '         <TH>Ficha T??cnica:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Sin T??tulo</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Artista:  Alfredo Arcos</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Fragmento:  1/3</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>T??cnica:  ??leo sobre tela</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    '   </div>'+
    '   <div class="fragPintura">'+
    '     <img src="../images/fragmentos/Pintura 47-1.jpg" alt=""></img>'+  
    '   </div>'+
    ' </a>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura15F2 = document.querySelector('.pintura15F2');
pintura15F2.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalV">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/13-alfredo-arcos/2 fragmentacion pintura 47-min.JPG" alt=""></img>'+  
          ' </div>'+
          ' <div class="fragmentoV">'+
          '   <div class="textoFMV">'+
          '     <TABLE class="FT">'+
          '       <TR>'+
          '         <TH>Ficha T??cnica:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Sin T??tulo</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Artista:  Alfredo Arcos</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Fragmento:  2/3</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>T??cnica:  ??leo sobre tela</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          '   </div>'+
          '   <div class="fragPintura">'+
          '     <img src="../images/fragmentos/Pintura 47-2.jpg" alt=""></img>'+  
          '   </div>'+
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura15F3 = document.querySelector('.pintura15F3');
pintura15F3.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalV">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/13-alfredo-arcos/3 fragmentacion pintura 47-min.jpg" alt=""></img>'+  
          ' </div>'+
          ' <div class="fragmentoV">'+
          '   <div class="textoFMV">'+
          '     <TABLE class="FT">'+
          '       <TR>'+
          '         <TH>Ficha T??cnica:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Sin T??tulo</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Artista:  Alfredo Arcos</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Fragmento:  3/3</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>T??cnica:  ??leo sobre tela</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          '   </div>'+
          '   <div class="fragPintura">'+
          '     <img src="../images/fragmentos/Pintura 47-3.jpg" alt=""></img>'+  
          '   </div>'+
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura16 = document.querySelector('.pintura16');
pintura16.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalV">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/13-alfredo-arcos/Pintura 48-min.jpg" alt=""></img>'+  
          ' </div>'+
          ' <div class="textoMV">'+
          '     <TABLE class="DES">'+
          '       <TR>'+
          '         <TH>Descripci??n:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Discusi??n entre los padres de Francisco Javier que lo corren de su casa.</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          '     <TABLE class="FT">'+
          '       <TR>'+
          '         <TH>Ficha T??cnica:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Sin T??tulo</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Artista:  Alfredo Arcos</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Fragmentaciones:  Ninguna</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>T??cnica:  ??leo sobre tela</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Medidas:  65x100cm</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura16F1 = document.querySelector('.pintura17F1');
pintura16F1.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/13-alfredo-arcos/1 fragmentaci??n de pintura 49-min.jpg" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <a class="fragmentoH">'+
    '   <div class="textoMH">'+
    '     <TABLE class="FT">'+
    '       <TR>'+
    '         <TH>Ficha T??cnica:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Sin T??tulo</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Artista:  Alfredo Arcos</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Fragmento:  1/2</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>T??cnica:  ??leo sobre tela</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    '   </div>'+
    '   <div class="fragPintura">'+
    '     <img src="../images/fragmentos/Pintura 49-1.jpg" alt=""></img>'+  
    '   </div>'+
    ' </a>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura16F2 = document.querySelector('.pintura17F2');
pintura16F2.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/13-alfredo-arcos/2 fragmentaci??n de pintura 49-min.jpg" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <a class="fragmentoH">'+
    '   <div class="textoMH">'+
    '     <TABLE class="FT">'+
    '       <TR>'+
    '         <TH>Ficha T??cnica:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Sin T??tulo</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Artista:  Alfredo Arcos</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Fragmento:  1/2</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>T??cnica:  ??leo sobre tela</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    '   </div>'+
    '   <div class="fragPintura">'+
    '     <img src="../images/fragmentos/Pintura 49-2.jpg" alt=""></img>'+  
    '   </div>'+
    ' </a>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura17 = document.querySelector('.pintura17');
pintura17.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalV">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/13-alfredo-arcos/Pintura 49-min.jpg" alt=""></img>'+  
          ' </div>'+
          ' <div class="textoMV">'+
          '     <TABLE class="DES">'+
          '       <TR>'+
          '         <TH>Descripci??n:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Francisco Javier es encontrado en un mercado, semi devorado por ratas.</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          '     <TABLE class="FT">'+
          '       <TR>'+
          '         <TH>Ficha T??cnica:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Sin T??tulo</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Artista:  Alfredo Arcos</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Fragmentaciones:  2</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>T??cnica:  ??leo sobre tela</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Medidas:  65x100cm</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura18F1 = document.querySelector('.pintura18F1');
pintura18F1.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalV">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/5-juan-orozco-palmerin/1 fragmentaci??n de pintura 14-min.jpg" alt=""></img>'+  
          ' </div>'+
          ' <div class="fragmentoV">'+
          '   <div class="textoFMV">'+
          '     <TABLE class="FT">'+
          '       <TR>'+
          '         <TH>Ficha T??cnica:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Sin T??tulo</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Artista:  Juan Orozco Palmer??n</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Fragmento:  1/1</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>T??cnica:  ??leo sobre tela</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          '   </div>'+
          '   <div class="fragPintura">'+
          '     <img src="../images/fragmentos/Pintura 14-1.jpg" alt=""></img>'+  
          '   </div>'+
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura18 = document.querySelector('.pintura18');
pintura18.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/5-juan-orozco-palmerin/Pintura 14-min.jpg" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <div class="textoMH">'+
    '     <TABLE class="FT">'+
    '       <TR>'+
    '         <TH>Ficha T??cnica:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Sin T??tulo</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Artista:  Juan Orozco Palmer??n</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Fragmentaciones:  1</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>T??cnica:  ??leo sobre tela</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Medidas:  60x90cm</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    ' </div>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura19F1 = document.querySelector('.pintura19F1');
pintura19F1.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/5-juan-orozco-palmerin/1 fragmentaci??n de la pintura 15-min.jpg" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <a class="fragmentoH">'+
    '   <div class="textoMH">'+
    '     <TABLE class="FT">'+
    '       <TR>'+
    '         <TH>Ficha T??cnica:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Sin T??tulo</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Artista:  Juan Orozco Palmer??n</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Fragmento:  1/1</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>T??cnica:  ??leo sobre tela</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    '   </div>'+
    '   <div class="fragPintura">'+
    '     <img src="../images/fragmentos/Pintura 15-1.jpg" alt=""></img>'+  
    '   </div>'+
    ' </a>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura19 = document.querySelector('.pintura19');
pintura19.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/5-juan-orozco-palmerin/Pintura 15-min.jpg" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <div class="textoMH">'+
    '     <TABLE class="FT">'+
    '       <TR>'+
    '         <TH>Ficha T??cnica:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Sin T??tulo</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Artista:  Juan Orozco Palmer??n</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Fragmentaciones:  1</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>T??cnica:  ??leo sobre tela</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Medidas:  60x90cm</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    ' </div>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura20F1 = document.querySelector('.pintura20F1');
pintura20F1.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/5-juan-orozco-palmerin/1 fragmentaci??n de la pintura 16-min.jpg" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <a class="fragmentoH">'+
    '   <div class="textoMH">'+
    '     <TABLE class="FT">'+
    '       <TR>'+
    '         <TH>Ficha T??cnica:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Sin T??tulo</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Artista:  Juan Orozco Palmer??n</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Fragmento:  1/1</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>T??cnica:  ??leo sobre tela</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    '   </div>'+
    '   <div class="fragPintura">'+
    '     <img src="../images/fragmentos/Pintura 16-1.jpg" alt=""></img>'+  
    '   </div>'+
    ' </a>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura20 = document.querySelector('.pintura20');
pintura20.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/5-juan-orozco-palmerin/Pintura 16-min.jpg" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <div class="textoMH">'+
    '     <TABLE class="FT">'+
    '       <TR>'+
    '         <TH>Ficha T??cnica:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Sin T??tulo</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Artista:  Juan Orozco Palmer??n</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Fragmentaciones:  1</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>T??cnica:  ??leo sobre tela</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Medidas:  60x90cm</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    ' </div>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura21F1 = document.querySelector('.pintura21F1');
pintura21F1.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalV">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/5-juan-orozco-palmerin/2 fragmentacion de la pintura 17-min.jpg" alt=""></img>'+  
          ' </div>'+
          ' <div class="fragmentoV">'+
          '   <div class="textoFMV">'+
          '     <TABLE class="FT">'+
          '       <TR>'+
          '         <TH>Ficha T??cnica:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Sin T??tulo</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Artista:  Juan Orozco Palmer??n</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Fragmento:  1/2</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>T??cnica:  ??leo sobre tela</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          '   </div>'+
          '   <div class="fragPintura">'+
          '     <img src="../images/fragmentos/Pintura 17-2.jpg" alt=""></img>'+  
          '   </div>'+
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura21F2 = document.querySelector('.pintura21F2');
pintura21F2.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/5-juan-orozco-palmerin/1 fragmentacion de la pintura 17-min.jpg" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <a class="fragmentoH">'+
    '   <div class="textoMH">'+
    '     <TABLE class="FT">'+
    '       <TR>'+
    '         <TH>Ficha T??cnica:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Sin T??tulo</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Artista:  Juan Orozco Palmer??n</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Fragmento:  2/2</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>T??cnica:  ??leo sobre tela</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    '   </div>'+
    '   <div class="fragPintura">'+
    '     <img src="../images/fragmentos/Pintura 17-1.jpg" alt=""></img>'+  
    '   </div>'+
    ' </a>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura21 = document.querySelector('.pintura21');
pintura21.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/5-juan-orozco-palmerin/Pintura 17-min.jpg" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <div class="textoMH">'+
    '     <TABLE class="FT">'+
    '       <TR>'+
    '         <TH>Ficha T??cnica:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Sin T??tulo</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Artista:  Juan Orozco Palmer??n</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Fragmentaciones:  2</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>T??cnica:  ??leo sobre tela</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Medidas:  60x90cm</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    ' </div>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura22F1 = document.querySelector('.pintura22F1');
pintura22F1.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalV">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/5-juan-orozco-palmerin/1 fragmentaci??n de pintura 18-min.jpg" alt=""></img>'+  
          ' </div>'+
          ' <div class="fragmentoV">'+
          '   <div class="textoFMV">'+
          '     <TABLE class="FT">'+
          '       <TR>'+
          '         <TH>Ficha T??cnica:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Sin T??tulo</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Artista:  Juan Orozco Palmer??n</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Fragmento:  1/2</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>T??cnica:  ??leo sobre tela</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          '   </div>'+
          '   <div class="fragPintura">'+
          '     <img src="../images/fragmentos/Pintura 18-1.jpg" alt=""></img>'+  
          '   </div>'+
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura22F2 = document.querySelector('.pintura22F2');
pintura22F2.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/5-juan-orozco-palmerin/2 fragmentaci??n de pintura 18-min.jpg" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <a class="fragmentoH">'+
    '   <div class="textoMH">'+
    '     <TABLE class="FT">'+
    '       <TR>'+
    '         <TH>Ficha T??cnica:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Sin T??tulo</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Artista:  Juan Orozco Palmer??n</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Fragmento:  2/2</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>T??cnica:  ??leo sobre tela</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    '   </div>'+
    '   <div class="fragPintura">'+
    '     <img src="../images/fragmentos/Pintura 18-2.jpg" alt=""></img>'+  
    '   </div>'+
    ' </a>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura22 = document.querySelector('.pintura22');
pintura22.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/5-juan-orozco-palmerin/Pintura 18-min.jpg" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <div class="textoMH">'+
    '     <TABLE class="FT">'+
    '       <TR>'+
    '         <TH>Ficha T??cnica:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Sin T??tulo</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Artista:  Juan Orozco Palmer??n</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Fragmentaciones:  2</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>T??cnica:  ??leo sobre tela</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Medidas:  60x90cm</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    ' </div>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura23 = document.querySelector('.pintura23');
pintura23.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/5-juan-orozco-palmerin/Pintura 19-min.jpg" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <div class="textoMH">'+
    '     <TABLE class="FT">'+
    '       <TR>'+
    '         <TH>Ficha T??cnica:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Sin T??tulo</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Artista:  Juan Orozco Palmer??n</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Fragmentaciones:  Ninguna</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>T??cnica:  ??leo sobre tela</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Medidas:  60x90cm</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    ' </div>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura24 = document.querySelector('.pintura24');
pintura24.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/6-martin-cuaya/Pintura 20-min.jpg" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <div class="textoMH">'+
    '     <TABLE class="FT">'+
    '       <TR>'+
    '         <TH>Ficha T??cnica:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Sin T??tulo</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Artista:  Mart??n Cuaya</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Fragmentaciones:  1</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>T??cnica:  ??leo sobre tela</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Medidas:  60x90cm</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    ' </div>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura24F1 = document.querySelector('.pintura24F1');
pintura24F1.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/6-martin-cuaya/1 fragmentacion de pintura 20-min.jpg" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <a class="fragmentoH">'+
    '   <div class="textoMH">'+
    '     <TABLE class="FT">'+
    '       <TR>'+
    '         <TH>Ficha T??cnica:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Sin T??tulo</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Artista:  Mart??n Cuaya</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Fragmento:  1/1</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>T??cnica:  ??leo sobre tela</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    '   </div>'+
    '   <div class="fragPintura">'+
    '     <img src="../images/fragmentos/Pintura 20-1.jpg" alt=""></img>'+  
    '   </div>'+
    ' </a>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura25F1 = document.querySelector('.pintura25F1');
pintura25F1.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/6-martin-cuaya/1 fragmentaci??n de pintura 21-min.jpg" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <a class="fragmentoH">'+
    '   <div class="textoMH">'+
    '     <TABLE class="FT">'+
    '       <TR>'+
    '         <TH>Ficha T??cnica:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Sin T??tulo</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Artista:  Mart??n Cuaya</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Fragmento:  1/1</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>T??cnica:  ??leo sobre tela</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    '   </div>'+
    '   <div class="fragPintura">'+
    '     <img src="../images/fragmentos/Pintura 21-2.jpg" alt=""></img>'+  
    '   </div>'+
    ' </a>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura25 = document.querySelector('.pintura25');
pintura25.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/6-martin-cuaya/Pintura 21-min.jpg" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <div class="textoMH">'+
    '     <TABLE class="FT">'+
    '       <TR>'+
    '         <TH>Ficha T??cnica:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Sin T??tulo</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Artista:  Mart??n Cuaya</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Fragmentaciones:  1</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>T??cnica:  ??leo sobre tela</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Medidas:  60x90cm</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    ' </div>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura26 = document.querySelector('.pintura26');
pintura26.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/6-martin-cuaya/Pintura 22-min.jpg" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <div class="textoMH">'+
    '     <TABLE class="FT">'+
    '       <TR>'+
    '         <TH>Ficha T??cnica:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Sin T??tulo</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Artista:  Mart??n Cuaya</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Fragmentaciones:  Ninguna</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>T??cnica:  ??leo sobre tela</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Medidas:  60x90cm</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    ' </div>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura27 = document.querySelector('.pintura27');
pintura27.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/6-martin-cuaya/Pintura 23-min.jpg" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <div class="textoMH">'+
    '     <TABLE class="FT">'+
    '       <TR>'+
    '         <TH>Ficha T??cnica:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Sin T??tulo</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Artista:  Mart??n Cuaya</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Fragmentaciones:  Ninguna</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>T??cnica:  ??leo sobre tela</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Medidas:  60x90cm</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    ' </div>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura28 = document.querySelector('.pintura28');
pintura28.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/6-martin-cuaya/Pintura 24-min.jpg" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <div class="textoMH">'+
    '     <TABLE class="FT">'+
    '       <TR>'+
    '         <TH>Ficha T??cnica:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Sin T??tulo</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Artista:  Mart??n Cuaya</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Fragmentaciones:  Ninguna</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>T??cnica:  ??leo sobre tela</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Medidas:  60x90cm</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    ' </div>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura29 = document.querySelector('.pintura29');
pintura29.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/7-pablo-moran/Pintura 25-min.jpg" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <div class="textoMH">'+
    '     <TABLE class="FT">'+
    '       <TR>'+
    '         <TH>Ficha T??cnica:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Sin T??tulo</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Artista:  Pablo Mor??n</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Fragmentaciones:  Ninguna</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>T??cnica:  ??leo sobre tela</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Medidas:  50x60cm</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    ' </div>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura30 = document.querySelector('.pintura30');
pintura30.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalV">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/10-epitafio-tacho/Pintura 35-min.jpg" alt=""></img>'+  
          ' </div>'+
          ' <div class="textoMV">'+
          '     <TABLE class="DES">'+
          '       <TR>'+
          '         <TH>Descripci??n:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Autorretrato de Epitafio ??lvarez de Le??n ???Tacho??? y conocido como el pintor del pueblo.</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          '     <TABLE class="FT">'+
          '       <TR>'+
          '         <TH>Ficha T??cnica:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Sin T??tulo</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Artista:  Epitafio ??lvarez de Le??n</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Fragmentaciones:  Ninguna</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>T??cnica:  Pluma sobre papel</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura31 = document.querySelector('.pintura31');
pintura31.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalV">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/10-epitafio-tacho/Pintura 36-min.jpg" alt=""></img>'+  
          ' </div>'+
          ' <div class="textoMV">'+
          '     <TABLE class="DES">'+
          '       <TR>'+
          '         <TH>Descripci??n:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Autorretrato de Epitafio ??lvarez de Le??n ???Tacho??? y conocido como el pintor del pueblo.</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          '     <TABLE class="FT">'+
          '       <TR>'+
          '         <TH>Ficha T??cnica:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Sin T??tulo</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Artista:  Epitafio ??lvarez de Le??n</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Fragmentaciones:  Ninguna</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>T??cnica:  Pluma sobre papel</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
