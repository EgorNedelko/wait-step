document.addEventListener('click', (e) => {
   if (e.target.classList.contains('editor-box') && e.target.classList.contains('inactive')) {
      //save data
      const data = e.target.textContent
      
      //remove div
      document.querySelector('.container').removeChild(document.querySelector('.editor-box'))

      //create input
      const inputEl = document.createElement('textarea')
      inputEl.classList.add('editor-box')
   
      //insert elem
      document.querySelector('.container').append(inputEl)

      //insert saved data
      document.querySelector('.editor-box').value = data
   }
})

window.addEventListener('DOMContentLoaded', () => {
   setTimeout(() => {
      const newElem = document.createElement('button')
      newElem.setAttribute('value', '5s-delayed btn')
      newElem.setAttribute('id', 'delayedBtn')
      document.querySelector('.container').append(newElem)
   }, 5000)
})