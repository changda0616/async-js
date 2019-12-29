// 寫法 1
$.ajax({
  method: 'POST',
  url: 'http://localhost:3000/posts',
  data: {
    title: 'The Adventures of Tom',
    author: 'Mark Twain'
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

// 寫法 2
$.post('http://localhost:3000/posts', {
  title: 'The Adventures of Tom',
  author: 'Mark Twain'
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

// 寫法 3
$.post(
  'http://localhost:3000/posts',
  {
    title: 'The Adventures of Tom',
    author: 'Mark Twain'
  },
  function(value) {
    console.log('success', value);
  }
);
