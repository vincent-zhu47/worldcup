//Marseille

d3.select("#stepm1").on('stepin',function(e) {
  if (e.detail.direction === 'down') {
    d3.select("#scrollyPhoto1").attr("src", "images/marseille1.png");
  }
})

d3.select("#stepm1").on('stepout',function(e) {
  if (e.detail.direction === 'up') {
    d3.select("#scrollyPhoto1").attr("src", "images/marseille0.png");
  }
})

d3.select("#stepm2").on('stepin',function(e) {
  if (e.detail.direction === 'down') {
    d3.select("#scrollyPhoto1").attr("src", "images/marseille2.png");
  }
})

d3.select("#stepm2").on('stepout',function(e) {
  if (e.detail.direction === 'up') {
    d3.select("#scrollyPhoto1").attr("src", "images/marseille1.png");
  }
})

d3.select("#stepm3").on('stepin',function(e) {
  if (e.detail.direction === 'down') {
    d3.select("#scrollyPhoto1").attr("src", "images/marseille3.png");
  }
})

d3.select("#stepm3").on('stepout',function(e) {
  if (e.detail.direction === 'up') {
    d3.select("#scrollyPhoto1").attr("src", "images/marseille2.png");
  }
})

d3.select("#stepm4").on('stepin',function(e) {
  if (e.detail.direction === 'down') {
    d3.select("#scrollyPhoto1").attr("src", "images/marseille4.png");
  }
})

d3.select("#stepm4").on('stepout',function(e) {
  if (e.detail.direction === 'up') {
    d3.select("#scrollyPhoto1").attr("src", "images/marseille3.png");
  }
})

// Marseille to NYC transition

d3.select("#stepm5").on('stepin',function(e) {
  if (e.detail.direction === 'down') {
    d3.select("#overlay1").style("opacity", 1);
  }
})
d3.select("#stepm5").on('stepout',function(e) {
  if (e.detail.direction === 'up') {
    d3.select("#overlay1").style("opacity", 0);
  }
})

d3.select("#stepm6").on('stepin',function(e) {
  if (e.detail.direction === 'down') {
    d3.select("#scrollyPhoto1").attr("src", "images/nyc0.png");
  }
})
d3.select("#stepm6").on('stepout',function(e) {
  if (e.detail.direction === 'up') {
    d3.select("#scrollyPhoto1").attr("src", "images/marseille4.png");
  }
})

d3.select("#stepm7").on('stepin',function(e) {
  if (e.detail.direction === 'down') {
    d3.select("#overlay1").style("opacity", 0);
  }
})

d3.select("#stepm7").on('stepout',function(e) {
  if (e.detail.direction === 'up') {
    d3.select("#overlay1").style("opacity", 1);
  }
})

// New York

d3.select("#stepm8").on('stepin',function(e) {
  if (e.detail.direction === 'down') {
    d3.select("#scrollyPhoto1").attr("src", "images/nyc1.png");
  }
})

d3.select("#stepm8").on('stepout',function(e) {
  if (e.detail.direction === 'up') {
    d3.select("#scrollyPhoto1").attr("src", "images/nyc0.png");
  }
})

d3.select("#stepm9").on('stepin',function(e) {
  if (e.detail.direction === 'down') {
    d3.select("#scrollyPhoto1").attr("src", "images/nyc2.png");
  }
})

d3.select("#stepm9").on('stepout',function(e) {
  if (e.detail.direction === 'up') {
    d3.select("#scrollyPhoto1").attr("src", "images/nyc1.png");
  }
})

d3.select("#stepm10").on('stepin',function(e) {
  if (e.detail.direction === 'down') {
    d3.select("#scrollyPhoto1").attr("src", "images/nyc3.png");
  }
})

d3.select("#stepm10").on('stepout',function(e) {
  if (e.detail.direction === 'up') {
    d3.select("#scrollyPhoto1").attr("src", "images/nyc2.png");
  }
})

d3.select("#stepm11").on('stepin',function(e) {
  if (e.detail.direction === 'down') {
    d3.select("#scrollyPhoto1").attr("src", "images/nyc4.png");
  }
})

d3.select("#stepm11").on('stepout',function(e) {
  if (e.detail.direction === 'up') {
    d3.select("#scrollyPhoto1").attr("src", "images/nyc3.png");
  }
})

d3.select("#stepm12").on('stepin',function(e) {
  if (e.detail.direction === 'down') {
    d3.select("#scrollyPhoto1").attr("src", "images/nyc5.png");
  }
})

d3.select("#stepm12").on('stepout',function(e) {
  if (e.detail.direction === 'up') {
    d3.select("#scrollyPhoto1").attr("src", "images/nyc4.png");
  }
})

d3.select("#stepm13").on('stepin',function(e) {
  if (e.detail.direction === 'down') {
    d3.select("#scrollyPhoto1").attr("src", "images/nyc6.png");
  }
})

d3.select("#stepm13").on('stepout',function(e) {
  if (e.detail.direction === 'up') {
    d3.select("#scrollyPhoto1").attr("src", "images/nyc5.png");
  }
})

d3.select("#stepm14").on('stepin',function(e) {
  if (e.detail.direction === 'down') {
    d3.select("#scrollyPhoto1").attr("src", "images/nyc7.png");
  }
})

d3.select("#stepm14").on('stepout',function(e) {
  if (e.detail.direction === 'up') {
    d3.select("#scrollyPhoto1").attr("src", "images/nyc6.png");
  }
})

//Barcelona

d3.select("#stepb1").on('stepin',function(e) {
  if (e.detail.direction === 'down') {
    d3.select("#scrollyPhoto2").attr("src", "images/barca1.png");
  }
})

d3.select("#stepb1").on('stepout',function(e) {
  if (e.detail.direction === 'up') {
    d3.select("#scrollyPhoto2").attr("src", "images/barca0.png");
  }
})

d3.select("#stepb2").on('stepin',function(e) {
  if (e.detail.direction === 'down') {
    d3.select("#scrollyPhoto2").attr("src", "images/barca2.png");
  }
})

d3.select("#stepb2").on('stepout',function(e) {
  if (e.detail.direction === 'up') {
    d3.select("#scrollyPhoto2").attr("src", "images/barca1.png");
  }
})

d3.select("#stepb3").on('stepin',function(e) {
  if (e.detail.direction === 'down') {
    d3.select("#scrollyPhoto2").attr("src", "images/barca3.png");
  }
})

d3.select("#stepb3").on('stepout',function(e) {
  if (e.detail.direction === 'up') {
    d3.select("#scrollyPhoto2").attr("src", "images/barca2.png");
  }
})

d3.select("#stepb4").on('stepin',function(e) {
  if (e.detail.direction === 'down') {
    d3.select("#scrollyPhoto2").attr("src", "images/barca4.png");
  }
})

d3.select("#stepb4").on('stepout',function(e) {
  if (e.detail.direction === 'up') {
    d3.select("#scrollyPhoto2").attr("src", "images/barca3.png");
  }
})

d3.select("#stepb5").on('stepin',function(e) {
  if (e.detail.direction === 'down') {
    d3.select("#scrollyPhoto2").attr("src", "images/barca5.png");
  }
})

d3.select("#stepb5").on('stepout',function(e) {
  if (e.detail.direction === 'up') {
    d3.select("#scrollyPhoto2").attr("src", "images/barca4.png");
  }
})

// Barca to Atlanta transition

d3.select("#stepb6").on('stepin',function(e) {
  if (e.detail.direction === 'down') {
    d3.select("#overlay2").style("opacity", 1);
  }
})
d3.select("#stepb6").on('stepout',function(e) {
  if (e.detail.direction === 'up') {
    d3.select("#overlay2").style("opacity", 0);
  }
})

d3.select("#stepb7").on('stepin',function(e) {
  if (e.detail.direction === 'down') {
    d3.select("#scrollyPhoto2").attr("src", "images/atlanta0.png");
  }
})
d3.select("#stepb7").on('stepout',function(e) {
  if (e.detail.direction === 'up') {
    d3.select("#scrollyPhoto2").attr("src", "images/barca5.png");
  }
})

d3.select("#stepb8").on('stepin',function(e) {
  if (e.detail.direction === 'down') {
    d3.select("#overlay2").style("opacity", 0);
  }
})

d3.select("#stepb8").on('stepout',function(e) {
  if (e.detail.direction === 'up') {
    d3.select("#overlay2").style("opacity", 1);
  }
})

// Atlanta

d3.select("#stepb9").on('stepin',function(e) {
  if (e.detail.direction === 'down') {
    d3.select("#scrollyPhoto2").attr("src", "images/atlanta1.png");
  }
})

d3.select("#stepb9").on('stepout',function(e) {
  if (e.detail.direction === 'up') {
    d3.select("#scrollyPhoto2").attr("src", "images/atlanta0.png");
  }
})

d3.select("#stepb10").on('stepin',function(e) {
  if (e.detail.direction === 'down') {
    d3.select("#scrollyPhoto2").attr("src", "images/atlanta2.png");
  }
})

d3.select("#stepb10").on('stepout',function(e) {
  if (e.detail.direction === 'up') {
    d3.select("#scrollyPhoto2").attr("src", "images/atlanta1.png");
  }
})

d3.select("#stepb11").on('stepin',function(e) {
  if (e.detail.direction === 'down') {
    d3.select("#scrollyPhoto2").attr("src", "images/atlanta3.png");
  }
})

d3.select("#stepb11").on('stepout',function(e) {
  if (e.detail.direction === 'up') {
    d3.select("#scrollyPhoto2").attr("src", "images/atlanta2.png");
  }
})

// Regions

d3.select("#stepr1").on('stepin',function(e) {
  if (e.detail.direction === 'down') {
    d3.select("#mars").attr("src", "images/marsr1.png");
    d3.select("#nyc").attr("src", "images/nycr1.png");
    d3.select("#bar").attr("src", "images/barr1.png");
    d3.select("#atl").attr("src", "images/atlr1.png");
  }
})

d3.select("#stepr1").on('stepout',function(e) {
  if (e.detail.direction === 'up') {
    d3.select("#mars").attr("src", "images/marsr0.png");
    d3.select("#nyc").attr("src", "images/nycr0.png");
    d3.select("#bar").attr("src", "images/barr0.png");
    d3.select("#atl").attr("src", "images/atlr0.png");
  }
})

d3.select("#stepr1_1").on('stepin',function(e) {
  if (e.detail.direction === 'down') {
    d3.select("#mars").attr("src", "images/marsr1_1.png");
    d3.select("#nyc").attr("src", "images/nycr1_1.png");
    d3.select("#bar").attr("src", "images/barr1_1.png");
    d3.select("#atl").attr("src", "images/atlr1_1.png");
  }
})

d3.select("#stepr1_1").on('stepout',function(e) {
  if (e.detail.direction === 'up') {
    d3.select("#mars").attr("src", "images/marsr1.png");
    d3.select("#nyc").attr("src", "images/nycr1.png");
    d3.select("#bar").attr("src", "images/barr1.png");
    d3.select("#atl").attr("src", "images/atlr1.png");
  }
})

d3.select("#stepr2").on('stepin',function(e) {
  if (e.detail.direction === 'down') {
    d3.select("#mars").attr("src", "images/marsr2.png");
    d3.select("#nyc").attr("src", "images/nycr2.png");
    d3.select("#bar").attr("src", "images/barr2.png");
    d3.select("#atl").attr("src", "images/atlr2.png");
  }
})

d3.select("#stepr2").on('stepout',function(e) {
  if (e.detail.direction === 'up') {
    d3.select("#mars").attr("src", "images/marsr1_1.png");
    d3.select("#nyc").attr("src", "images/nycr1_1.png");
    d3.select("#bar").attr("src", "images/barr1_1.png");
    d3.select("#atl").attr("src", "images/atlr1_1.png");
  }
})

d3.select("#stepr2_1").on('stepin',function(e) {
  if (e.detail.direction === 'down') {
    d3.select("#nyc").attr("src", "images/nycr2_1.png");
  }
})

d3.select("#stepr2_1").on('stepout',function(e) {
  if (e.detail.direction === 'up') {
    d3.select("#nyc").attr("src", "images/nycr2.png");
  }
})

d3.select("#stepr3").on('stepin',function(e) {
  if (e.detail.direction === 'down') {
    d3.select("#mars").attr("src", "images/marsr3.png");
    d3.select("#nyc").attr("src", "images/nycr3.png");
    d3.select("#bar").attr("src", "images/barr3.png");
    d3.select("#atl").attr("src", "images/atlr3.png");
  }
})

d3.select("#stepr3").on('stepout',function(e) {
  if (e.detail.direction === 'up') {
    d3.select("#mars").attr("src", "images/marsr2.png");
    d3.select("#nyc").attr("src", "images/nycr2_1.png");
    d3.select("#bar").attr("src", "images/barr2.png");
    d3.select("#atl").attr("src", "images/atlr2.png");
  }
})

d3.select("#stepr3_1").on('stepin',function(e) {
  if (e.detail.direction === 'down') {
    d3.select("#mars").attr("src", "images/marsr3_1.png");
    d3.select("#bar").attr("src", "images/barsr3_1.png");
  }
})

d3.select("#stepr3_1").on('stepout',function(e) {
  if (e.detail.direction === 'up') {
    d3.select("#mars").attr("src", "images/marsr3.png");
    d3.select("#bar").attr("src", "images/barr3.png");
  }
})

d3.select("#stepr3_2").on('stepin',function(e) {
  if (e.detail.direction === 'down') {
    d3.select("#atl").attr("src", "images/atlr3_1.png");
    d3.select("#nyc").attr("src", "images/nycr3_1.png");
  }
})

d3.select("#stepr3_2").on('stepout',function(e) {
  if (e.detail.direction === 'up') {
    d3.select("#atl").attr("src", "images/atlr3.png");
    d3.select("#nyc").attr("src", "images/nycr3.png");
  }
})

d3.select("#stepr4").on('stepin',function(e) {
  if (e.detail.direction === 'down') {
    d3.select("#mars").attr("src", "images/marsr4.png");
    d3.select("#nyc").attr("src", "images/nycr4.png");
    d3.select("#bar").attr("src", "images/barr4.png");
    d3.select("#atl").attr("src", "images/atlr4.png");
  }
})

d3.select("#stepr4").on('stepout',function(e) {
  if (e.detail.direction === 'up') {
    d3.select("#mars").attr("src", "images/marsr3.png");
    d3.select("#nyc").attr("src", "images/nycr3.png");
    d3.select("#bar").attr("src", "images/barr3.png");
    d3.select("#atl").attr("src", "images/atlr3.png");
  }
})

d3.select("#stepr4_1").on('stepin',function(e) {
  if (e.detail.direction === 'down') {
    d3.select("#mars").attr("src", "images/marsr4_1.png");
    d3.select("#bar").attr("src", "images/barsr4_1.png");
  }
})

d3.select("#stepr4_1").on('stepout',function(e) {
  if (e.detail.direction === 'up') {
    d3.select("#mars").attr("src", "images/marsr4.png");
    d3.select("#bar").attr("src", "images/barr4.png");
  }
})

d3.select("#stepr4_2").on('stepin',function(e) {
  if (e.detail.direction === 'down') {
    d3.select("#atl").attr("src", "images/atlr4_1.png");
    d3.select("#nyc").attr("src", "images/nycr4_1.png");
  }
})

d3.select("#stepr4_2").on('stepout',function(e) {
  if (e.detail.direction === 'up') {
    d3.select("#atl").attr("src", "images/atlr4.png");
    d3.select("#nyc").attr("src", "images/nycr4.png");
  }
})

// LEAVE ALONE, scrolly code goes in the section below
const scroller = scrollama();

scroller
  .setup({
    step: ".scrolly .scrolly-overlay .step",
    offset: 0.4,
    progress: true,
    debug: false
  })
  .onStepEnter(function({ element, index, direction}) {
    const event = new CustomEvent('stepin', { detail: { direction: direction } })
    element.dispatchEvent(event);
  })
  .onStepExit(function({ element, index, direction }) {
    const event = new CustomEvent('stepout', { detail: { direction: direction } })
    element.dispatchEvent(event);
  });

window.addEventListener("resize", scroller.resize);

// mobile phone warning modal
document.addEventListener("DOMContentLoaded", function () {
  const isSmallScreen = window.innerWidth <= 900;

  if (isSmallScreen) {
    document.getElementById("deviceModal").style.display = "flex";
  }

  document
    .getElementById("continueBtn")
    .addEventListener("click", function () {
      document.getElementById("deviceModal").style.display = "none";
    });
});
