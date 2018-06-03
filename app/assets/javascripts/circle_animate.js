$( document ).on('turbolinks:load', function(event) {

  console.log(event.originalEvent.data.timing.visitStart)

  if (event.originalEvent.data.timing.visitStart) {
    //fade in here
    $('.page-content').fadeIn("slow")
  }

  let toBeAnimated = [ 'about', 'programs', 'blog', 'apply', 'contact' ];

  // Attach event listener to each element
  let addListener = function(val) {
    let element = $('#' + val);
    element.on('turbolinks:click', function(event){
      let offset = $(event.target).offset();
      $('.page-content').fadeOut("slow")
      console.log(offset)
      $(event.target).addClass('growCircle')
    })
  }

  toBeAnimated.forEach(addListener);
})
