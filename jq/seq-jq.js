$.ajax({
  method: 'POST',
  url: 'http://localhost:3000/posts',
  data: {
    title: 'The Adventures of Tom',
    author: 'Mark Twain'
  }
})
  .done(function(value) {
    $.get( "http://localhost:3000/posts").done(function(value) {
      $.ajax({
        method: 'DELETE',
        url: 'http://localhost:3000/posts/11',
      })        
    });
  })
  .fail(function(value) {
    console.log('error', value);
  })
  .always(function(value) {
    console.log('complete', value);
  });