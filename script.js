$(document).ready(onReady);

function onReady() {
  $( '#fire-button' ).on( 'click', addFire);
  $( '#ice-button' ).on( 'click', addIce);
  console.log('We got this.');
  $('.submit-button').on('click', addAffirmation);
  $('tbody').on('click', '#delete-button', deleteThis);

}
function deleteThis(){
  $(this).parent().parent().remove();
}

function addFire() {
  // NOTE: will add class to span later.
  $( '#fire-ice-container' ).append( '<span>🔥</span>');
}

function addIce() {
  // NOTE: will add class to span later.
  $( '#fire-ice-container' ).append( '<span>❄️</span>' );
}

function addAffirmation(event){
  event.preventDefault();
  let readAffirmation = $('#affirmation-input').val();
  let readAuthor = $('#author-input').val();
  $('tbody').append(`
  <tr id="table-row">
  <td>${readAffirmation}</td>
  <td>${readAuthor}</td>
  <td><button id="delete-button">❌</button></td>
  </tr>
  `);
  $('#affirmation-input').val("");
  $('#author-input').val("");
}