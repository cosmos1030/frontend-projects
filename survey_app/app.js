const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const ageInput = document.querySelector('#age');
const genderInput = document.querySelector('#gender');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = nameInput.value;
  const age = ageInput.value;
  const gender = genderInput.value;

  if (name === '' || age === '' || gender === '') {
    alert('모든 항목을 입력해주세요');
  } else {
    const result = `이름: ${name}\n나이: ${age}\n성별: ${gender}`;
    alert(result);
  }
});
