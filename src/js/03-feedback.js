import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onFormSubmit);
inForm();

function onFormData(e) {
  let filters = localStorage.getItem(LOCALSTORAGE_KEY);
  filters = filters ? JSON.parse(filters) : {};
  const { name, value } = e.target;
  filters[name] = value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(filters));
}

function inForm() {
  let filters = localStorage.getItem(LOCALSTORAGE_KEY);
  if (filters) {
    filters = JSON.parse(filters);
    Object.entries(filters).forEach(([name, value]) => {
      form.elements[name].value = value;
    });
  }
  
}
function onFormSubmit(e) {
  e.preventDefault();
  const formData = new FormData(form);
  formData.forEach((value, name) => console.log(value, name));
  e.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}