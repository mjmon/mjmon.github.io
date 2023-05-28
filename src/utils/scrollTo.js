export const scrollTo = (selector) => {
  const element = document.querySelector(selector);
  element.scrollIntoView();
};
