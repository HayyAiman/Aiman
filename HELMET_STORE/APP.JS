const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Arai RX-Q Flame",
    price: 899,
    colors: [
      {
        img: "IMG/helmet arai.png",
      },
    ],
  },
  {
    id: 2,
    title: "Arai Corsair-X",
    price: 799,
    colors: [
      {
        img: "IMG/helmet arai2.png",
      },
    ],
  },
  {
    id: 3,
    title: "HJC CL-17 Cosmos",
    price: 759,
    colors: [
      {
        img: "IMG/helmets cosmos.png",
      },
    ],
  },
  {
    id: 4,
    title: "THH TX-27 Zoom",
    price: 649,
    colors: [
      {
        img: "IMG/motocross.png",
      },
    ],
  },
  {
    id: 5,
    title: "AFX FX-17",
    price: 599,
    colors: [
      {
        img: "IMG/motocross2.png",
      },
    ],
  },
  {
    id: 6,
    title: "Helmet Modular(Bluetooth)",
    price: 729,
    colors: [
      {
        img: "IMG/shark helmat.png",
      },
    ],
  }, 
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const choosenProductColor =  document.querySelector(".color");
const currentProductSizes = document.querySelectorAll(".size");

      menuItems.forEach((item, index) => {
        item.addEventListener("click", () => {

          wrapper.style.transform = `translateX(${-100 * index}vw)`;
      
          choosenProduct = products[index];
      
          currentProductTitle.textContent = choosenProduct.title;
          currentProductPrice.textContent = "RM " + choosenProduct.price;
          currentProductImg.src = choosenProduct.colors[0].img;
      
          currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].img;
          });
        });
      });
      
      currentProductColors.forEach((color, index) => {
        color.addEventListener("click", () => {
          currentProductImg.src = choosenProduct
        });
      });
      currentProductSizes.forEach((size, index) => {
        size.addEventListener("click", () => {
          currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
          });
        });
      });
      
      const productButton = document.querySelector(".productButton");
      const payment = document.querySelector(".payment");
      const close = document.querySelector(".close");
      
      productButton.addEventListener("click", () => {
        payment.style.display = "flex";
      });
      
      close.addEventListener("click", () => {
        payment.style.display = "none";
      });