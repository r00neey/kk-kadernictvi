const images = [
    "pics/img1.jpeg",
    "pics/img2.jpeg",
    "pics/img3.jpeg",
    "pics/img4.jpeg",
    "pics/img5.jpeg"
  ];
  
  let currentIndex = 0;
  
  function openLightbox(index) {
    currentIndex = index;
    document.getElementById("lightbox-img").src = images[currentIndex];
    document.getElementById("lightbox").style.display = "flex";
  }
  
  function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
  }
  
  function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    document.getElementById("lightbox-img").src = images[currentIndex];
  }