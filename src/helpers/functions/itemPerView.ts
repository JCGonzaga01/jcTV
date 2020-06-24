const itemPerView = (screenWidth: number) => {
  let perView = 1;

  if (screenWidth >= 320 && screenWidth <= 550) perView = 2;
  else if (screenWidth > 550 && screenWidth < 730) perView = 3;
  else if (screenWidth >= 730 && screenWidth < 1140) perView = 4;
  else if (screenWidth >= 1140) perView = 5;
  return perView;
};

export default itemPerView;
