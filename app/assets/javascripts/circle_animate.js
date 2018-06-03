$( document ).on('turbolinks:load', function() {

  let toBeAnimated = [ 'about', 'programs', 'blog', 'apply', 'contact' ];

  // Attach event listener to each element
  let addListener = function(val) {
    let element = $('#' + val);
    element.on('turbolinks:click', function(event){
      let offset = $(event.target).offset();
      console.log(offset)
      $(event.target).addClass('growCircle')
    })
  }

  toBeAnimated.forEach(addListener);
})
