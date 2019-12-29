$.ajax({
  method: 'DELETE',
  url: 'http://localhost:3000/posts/1',
})
  .done(function(value) {
    console.log('success', value);
  })
  .fail(function(value) {
    console.log('error', value);
  })
  .always(function(value) {
    console.log('complete', value);
  });