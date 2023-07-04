function Hour() {
    var body = document.querySelector('body#body')
    var sec = document.querySelector('section#imgFundo')
    var p = document.querySelector('p#main')
    var p2 = document.querySelector('p#message')
    var img = window.document.querySelector('img#image')
    var copy = window.document.querySelector('a#end')
    var time = new Date()
    var cT = time.getHours()
    if (cT > 6 && cT < 11) {
      img.src = 'images/morning.jpg'
      body.style.backgroundColor = '#c6dde5'
      p.innerHTML = `${cT} o'clock`
      p2.innerHTML = 'Good morning sunshine!'
      p.style.color = '#839398'
      p2.style.color = '#839398'
      copy.style.color = 'black'
    } else if (cT >= 11 && cT < 18) {
      img.src = 'images/midday.jpg'
      body.style.backgroundColor = '#937f7e'
      p.innerHTML = `${cT} o'clock`
      p2.innerHTML = 'Seems a pretty day!'
      p.style.color = '#463c3c'
      p2.style.color = '#463c3c'
    } else if (cT >= 18 && cT < 20) {
      img.src = 'images/evening.jpg'
      body.style.backgroundColor = '#52280f'
      p.innerHTML = `${cT} o'clock`
      p2.innerHTML = 'The sun is setting (somewhere)'
      p.style.color = '#9d3e0e'
      p2.style.color = '#d34811'
    } else if (cT >= 20) {
      img.src = 'images/night.jpg'
      body.style.background = '#015d76'
      p.innerHTML = `${cT} o'clock`
      p2.innerHTML = `It's time to sleep`
      p.style.color = '#1e1e1c'
      p2.style.color = '#1e1e1c'
    } else {
        body.style.backgroundImage = 'lin'
      img.src = 'images/midnight.jpg'
      body.style.background = '#000000'
      sec.style.background = '#000000'
      p.innerHTML = `${cT} o'clock devil clock time.`
      p2.innerHTML = 'Beware of the devil...'
    }
  }
  document.addEventListener("DOMContentLoaded", function() {
    Hour()
  })
  