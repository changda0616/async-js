$.ajax({
  method: 'GET',
  url: 'http://localhost:3000/posts'
})
  .done(function(value) {
    console.log('success', value);
  })
  .fail(function(value) {
    console.log('error', value);
  })
  .always(function(value) {
    console.log('complete', value);
  })

$.get('http://localhost:3000/posts')
  .done(function(value) {
    console.log('success', value);
  })
  .fail(function(value) {
    console.log('error', value);
  })
  .always(function(value) {
    console.log('complete', value);
  });

$.get( "http://localhost:3000/posts", function( value ) {
  console.log('success', value);
});