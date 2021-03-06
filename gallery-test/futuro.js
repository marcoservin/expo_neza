  /* SCRIPT - futuro.html*/ 
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
  //___________Carousel FUTURO-IDENTIDAD____________
  const pintura32 = document.querySelector('.pintura32');
  pintura32.addEventListener("click", () => {
    const options = {
      html: 
            '<div class="modalH">'+
            ' <div class="pinturaM">'+
            '   <img src="../images/8-cuaya-rest-tren77-chez/imagen completa-min.jpg" alt=""></img>'+  
            ' </div>'+
            '</div>',
      showCloseButton: true,
      showConfirmButton: false,
      width:"95%",
      background: "#fff8",
      footer:' <div class="textoMH">'+
            '     <TABLE class="DES">'+
            '       <TR>'+
            '         <TH>Descripci??n:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Los inicios del grafiti y la m??sica Ska, dentro de Ciudad Neza, se muestra el pasado, presente y futuro de este tipo de expresi??n art??stica.</TD>'+
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
            '         <TD>Artistas:  Cuaya, Rest, Tren 77 y Chez Uno</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmentaciones:  1</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  Grafiti</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Medidas:  244x488cm</TD>'+
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
  const pintura32F1 = document.querySelector('.pintura32F1');
  pintura32F1.addEventListener("click", () => {
    const options = {
      html: 
            '<div class="modalV">'+
            ' <div class="pinturaM">'+
            '   <img src="../images/8-cuaya-rest-tren77-chez/Fragmentaci??n-min.jpg" alt=""></img>'+  
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
            '         <TD>Artistas:  Cuaya, Rest, Tren 77 y Chez Uno</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmento:  1/1</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  Grafiti</TD>'+
            '       </TR>'+
            '     </TABLE>'+
            '   </div>'+
            '   <div class="fragPintura">'+
            '     <img src="../images/fragmentos/imagen completa-1.jpg" alt="" ></img>'+  
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
  const pintura33 = document.querySelector('.pintura33');
  pintura33.addEventListener("click", () => {
    const options = {
      html: 
            '<div class="modalV">'+
            ' <div class="pinturaM">'+
            '   <img src="../images/12-lupus/Pintura 41-min.jpg" alt=""></img>'+  
            ' </div>'+
            ' <div class="textoMV">'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Sin T??tulo</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  Lupus</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmentaciones:  Ninguna</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  Acr??lico sobre madera</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Medidas:  60x90cm</TD>'+
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
  const pintura34 = document.querySelector('.pintura34');
  pintura34.addEventListener("click", () => {
    const options = {
      html: 
            '<div class="modalV">'+
            ' <div class="pinturaM">'+
            '   <img src="../images/12-lupus/Pintura 43-min.jpg" alt=""></img>'+  
            ' </div>'+
            ' <div class="textoMV">'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Sin T??tulo</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  Lupus</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmentaciones:  Ninguna</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  Acr??lico sobre madera</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Medidas:  60x90cm</TD>'+
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
  const pintura35 = document.querySelector('.pintura35');
  pintura35.addEventListener("click", () => {
    const options = {
      html: 
            '<div class="modalV">'+
            ' <div class="pinturaM">'+
            '   <img src="../images/12-lupus/Pintura 42-min.jpg" alt=""></img>'+  
            ' </div>'+
            ' <div class="textoMV">'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Sin T??tulo</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  Lupus</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmentaciones:  Ninguna</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  Acr??lico sobre madera</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Medidas:  120x120cm</TD>'+
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
  const pintura36 = document.querySelector('.pintura36');
  pintura36.addEventListener("click", () => {
    const options = {
      html: 
            '<div class="modalV">'+
            ' <div class="pinturaM">'+
            '   <img src="../images/12-lupus/Pintura 44-min.jpg" alt=""></img>'+  
            ' </div>'+
            ' <div class="textoMV">'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Sin T??tulo</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  Lupus</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmentaciones:  Ninguna</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  Acr??lico sobre madera</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Medidas:  120x120cm</TD>'+
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
  const pintura37 = document.querySelector('.pintura37');
  pintura37.addEventListener("click", () => {
    const options = {
      html: 
            '<div class="modalV">'+
            ' <div class="pinturaM">'+
            '   <img src="../images/12-lupus/Pintura 45-min.jpg" alt=""></img>'+  
            ' </div>'+
            ' <div class="textoMV">'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Sin T??tulo</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  Lupus</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmentaciones:  Ninguna</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  Acr??lico sobre madera</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Medidas:  120x120cm</TD>'+
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
  const pintura38 = document.querySelector('.pintura38');
  pintura38.addEventListener("click", () => {
    const options = {
      html: 
            '<div class="modalV">'+
            ' <div class="pinturaM">'+
            '   <img src="../images/9-alejandro-perez-cruz/Pintura 27-min.jpg" alt=""></img>'+  
            ' </div>'+
            ' <div class="textoMV">'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Sin T??tulo</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  Alejandro P??rez Cruz</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmentaciones:  Ninguna</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  Grabado sobre papel</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Medidas:  21.5x28cm</TD>'+
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
  const pintura39 = document.querySelector('.pintura39');
  pintura39.addEventListener("click", () => {
    const options = {
      html: 
            '<div class="modalV">'+
            ' <div class="pinturaM">'+
            '   <img src="../images/9-alejandro-perez-cruz/Pintura 28-min.jpg" alt=""></img>'+  
            ' </div>'+
            ' <div class="textoMV">'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Sin T??tulo</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  Alejandro P??rez Cruz</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmentaciones:  Ninguna</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  Grabado sobre papel</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Medidas:  21.5x28cm</TD>'+
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
  const pintura40 = document.querySelector('.pintura40');
  pintura40.addEventListener("click", () => {
    const options = {
      html: 
            '<div class="modalV">'+
            ' <div class="pinturaM">'+
            '   <img src="../images/9-alejandro-perez-cruz/Pintura 29-min.jpg" alt=""></img>'+  
            ' </div>'+
            ' <div class="textoMV">'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Sin T??tulo</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  Alejandro P??rez Cruz</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmentaciones:  Ninguna</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  Grabado sobre papel</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Medidas:  21.5x28cm</TD>'+
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
  const pintura401 = document.querySelector('.pintura401');
  pintura401.addEventListener("click", () => {
    const options = {
      html: 
            '<div class="modalV">'+
            ' <div class="pinturaM">'+
            '   <img src="../images/9-alejandro-perez-cruz/Pintura 30-min.jpg" alt=""></img>'+  
            ' </div>'+
            ' <div class="textoMV">'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Sin T??tulo</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  Alejandro P??rez Cruz</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmentaciones:  Ninguna</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  Grabado sobre papel</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Medidas:  21.5x28cm</TD>'+
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
  const pintura41 = document.querySelector('.pintura41');
  pintura41.addEventListener("click", () => {
    const options = {
      html: 
            '<div class="modalV">'+
            ' <div class="pinturaM">'+
            '   <img src="../images/9-alejandro-perez-cruz/Pintura 31-min.jpg" alt=""></img>'+  
            ' </div>'+
            ' <div class="textoMV">'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Sin T??tulo</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  Alejandro P??rez Cruz</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmentaciones:  Ninguna</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  Grabado sobre papel</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Medidas:  21.5x28cm</TD>'+
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
  const pintura42 = document.querySelector('.pintura42');
  pintura42.addEventListener("click", () => {
    const options = {
      html: 
            '<div class="modalV">'+
            ' <div class="pinturaM">'+
            '   <img src="../images/9-alejandro-perez-cruz/Pintura 32-min.jpg" alt=""></img>'+  
            ' </div>'+
            ' <div class="textoMV">'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Sin T??tulo</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  Alejandro P??rez Cruz</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmentaciones:  Ninguna</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  Grabado sobre papel</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Medidas:  21.5x28cm</TD>'+
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
  const pintura43 = document.querySelector('.pintura43');
  pintura43.addEventListener("click", () => {
    const options = {
      html: 
            '<div class="modalV">'+
            ' <div class="pinturaM">'+
            '   <img src="../images/9-alejandro-perez-cruz/Pintura 33-min.jpg" alt=""></img>'+  
            ' </div>'+
            ' <div class="textoMV">'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Sin T??tulo</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  Alejandro P??rez Cruz</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmentaciones:  Ninguna</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  Grabado sobre papel</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Medidas:  21.5x28cm</TD>'+
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
  const pintura44 = document.querySelector('.pintura44');
  pintura44.addEventListener("click", () => {
    const options = {
      html: 
            '<div class="modalV">'+
            ' <div class="pinturaM">'+
            '   <img src="../images/9-alejandro-perez-cruz/Pintura 34-min.jpg" alt=""></img>'+  
            ' </div>'+
            ' <div class="textoMV">'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Sin T??tulo</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  Alejandro P??rez Cruz</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmentaciones:  Ninguna</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  Grabado sobre papel</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Medidas:  21.5x28cm</TD>'+
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
  const pintura45 = document.querySelector('.pintura45');
  pintura45.addEventListener("click", () => {
    const options = {
      html: 
            '<div class="modalH">'+
            ' <div class="pinturaM">'+
            '   <img src="../images/11-duany/Pintura 37-min.jpg" alt=""></img>'+  
            ' </div>'+
            '</div>',
      showCloseButton: true,
      showConfirmButton: false,
      width:"95%",
      background: "#fff8",
      footer:' <div class="textoMH">'+
            '     <TABLE class="DES">'+
            '       <TR>'+
            '         <TH>Descripci??n:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Serie de 4 piezas: ???Makuto vive aqu?????.<br>Serie1.<br>La solidaridad entre las personas que no tienen nada y que est??n inmersos en la pobreza y desigualdad.<br>Se aprecian figuras abstractas de ni??os.</TD>'+
            '       </TR>'+
            '     </TABLE>'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Serie de 4 piezas</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Colecci??n:  ???Ni??os en Neza???</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  Duany</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmentaciones:  Ninguna</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  Acr??lico sobre cartulina</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Medidas:  45x90cm</TD>'+
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
  const pintura46 = document.querySelector('.pintura46');
  pintura46.addEventListener("click", () => {
    const options = {
      html: 
            '<div class="modalH">'+
            ' <div class="pinturaM">'+
            '   <img src="../images/11-duany/Pintura 38-min.jpg" alt=""></img>'+  
            ' </div>'+
            '</div>',
      showCloseButton: true,
      showConfirmButton: false,
      width:"95%",
      background: "#fff8",
      footer:' <div class="textoMH">'+
            '     <TABLE class="DES">'+
            '       <TR>'+
            '         <TH>Descripci??n:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Serie 2.<br>???Makuto vive aqu?????</TD>'+
            '       </TR>'+
            '     </TABLE>'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Serie de 4 piezas</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Colecci??n:  ???Ni??os en Neza???</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  Duany</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmentaciones:  Ninguna</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  Acr??lico sobre cartulina</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Medidas:  45x90cm</TD>'+
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
  const pintura47 = document.querySelector('.pintura47');
  pintura47.addEventListener("click", () => {
    const options = {
      html: 
            '<div class="modalH">'+
            ' <div class="pinturaM">'+
            '   <img src="../images/11-duany/Pintura 39-min.jpg" alt=""></img>'+  
            ' </div>'+
            '</div>',
      showCloseButton: true,
      showConfirmButton: false,
      width:"95%",
      background: "#fff8",
      footer:' <div class="textoMH">'+
            '     <TABLE class="DES">'+
            '       <TR>'+
            '         <TH>Descripci??n:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Serie 3.<br>???Makuto vive aqu?????</TD>'+
            '       </TR>'+
            '     </TABLE>'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Serie de 4 piezas</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Colecci??n:  ???Ni??os en Neza???</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  Duany</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmentaciones:  Ninguna</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  Acr??lico sobre cartulina</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Medidas:  45x90cm</TD>'+
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
  const pintura48 = document.querySelector('.pintura48');
  pintura48.addEventListener("click", () => {
    const options = {
      html: 
            '<div class="modalH">'+
            ' <div class="pinturaM">'+
            '   <img src="../images/11-duany/Pintura 40-min.jpg" alt=""></img>'+  
            ' </div>'+
            '</div>',
      showCloseButton: true,
      showConfirmButton: false,
      width:"95%",
      background: "#fff8",
      footer:' <div class="textoMH">'+
            '     <TABLE class="DES">'+
            '       <TR>'+
            '         <TH>Descripci??n:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Serie 4.<br>???Makuto vive aqu?????</TD>'+
            '       </TR>'+
            '     </TABLE>'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Serie de 4 piezas</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Colecci??n:  ???Ni??os en Neza???</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  Duany</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmentaciones:  Ninguna</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  Acr??lico sobre cartulina</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Medidas:  45x90cm</TD>'+
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
  const pintura49 = document.querySelector('.pintura49');
  pintura49.addEventListener("click", () => {
    const options = {
      html: 
            '<div class="modalV">'+
            ' <div class="pinturaM">'+
            '   <img src="../images/13-alfredo-arcos/Pintura 50-min.jpg" alt=""></img>'+  
            ' </div>'+
            ' <div class="textoMV">'+
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