console.log('Interested in working with us?, send us an email at dev@liftit.co')

var mailTos = document.getElementsByClassName('js-mailto')

for(var i=0;i < mailTos.length; i++){
  mailTos[i].addEventListener('click', sendEmail)
}

function sendEmail() {
  window.location.href='mailto:me@truongbrian.com'
  analytics.track('send_email', {
    location: 'landing',
    type: 'button'
  })
}

var linkedIn_links = document.getElementsByClassName('js-link_linkedin')

for(var i=0;i < linkedIn_links.length; i++){
  linkedIn_links[i].addEventListener('click', gotoLink)
}

function gotoLink() {
  analytics.track('link_linkedin', {
    location: 'team',
    type: 'link'
  })
}
