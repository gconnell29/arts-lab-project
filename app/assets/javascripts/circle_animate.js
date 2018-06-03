$( document ).on('turbolinks:load', function(event) {

  if (!event.originalEvent.data.timing.visitStart) {
    //fade in here
    $(document).on('turbolinks:before-render', function(event){
      console.log(event.target.body)
      $(event.target.body).fadeIn(200)
    })
  }

  let toBeAnimated = [ 'about', 'programs', 'blog', 'apply', 'contact' ];

  // Attach event listener to each element
  let addListener = function(val) {
    let element = $('#' + val);
    element.on('turbolinks:click', function(event){
      $('.page-content').fadeOut(250)
      $(event.target).addClass('growCircle')
    })
  }

  toBeAnimated.forEach(addListener);
})
