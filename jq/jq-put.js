$.ajax({
  method: 'PUT',
  url: 'http://localhost:3000/posts/3',
  data: {
    title: 'The Adventures of Tom3',
    author: 'Mark Twain3'
  }
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
