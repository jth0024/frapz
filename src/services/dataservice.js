import $ from 'jquery';

export default function () {
  return {
    sendFormData: sendFormData
  }
}

function sendFormData (data) {
  return $.post('/php/signup.php', data);
}
