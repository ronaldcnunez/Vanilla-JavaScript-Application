document.addEventListener('DOMContentLoaded', () => {
   const comments = document.getElementById('comments');
   const comments_right = document.getElementById('comments_right');
   const endPoint = 'https://country.register.gov.uk/records.json?page-size=5000';
   const symbol = [];

   // fetch the names of the countries
function firstRound(){
  fetch(`https://country.register.gov.uk/records.json?page-size=5000`)
    .then(r => r.json())
    .then(data => {
      const info = Object.values(data)
        const element = info[Math.floor(Math.random() * info.length)];
          const li_tag = document.createElement('div')
            li_tag.style["width"] =  "300px"
            li_tag.style["height"]=  "50px"
            li_tag.style["margin"]=  "1em"
            li_tag.style["background-color"] = "red"
            li_tag.innerText = element.item[0].name
            li_tag.id = element.item[0].country
            li_tag.class = "countries"
            li_tag.dataset.countryName = element.item[0].name
            comments.append(li_tag)
  })}

  comments.addEventListener('click', function(){
   let x = event.target
      const formHTML =`<form id="comment_form">
            <input id="comment_input" class="${event.target.id}" type="text" name="comment" placeholder="Add Comment"/>
            <input data-country-name="${event.target.id}" type="submit" value="submit" id="submit"/>
          </form>`
            if (x.children.length < 1){x.innerHTML += formHTML}
  })
  comments.addEventListener('submit', function(event){
    event.preventDefault()
      let y = event.target[0]
        console.log(y.className)
          if (y.value == y.className){
            alert("Great answer!")
              secondRound()
          }
          else{
            event.target.reset()
          }
  })
  function secondRound(){
    fetch(`https://country.register.gov.uk/records.json?page-size=5000`)
      .then(r => r.json())
        .then(data => {
          const xtraInfo = Object.values(data)
          const element = xtraInfo[Math.floor(Math.random() * xtraInfo.length)];
          const li_tag = document.createElement('div')
            li_tag.style["width"] =  "300px"
            li_tag.style["height"]=  "50px"
            li_tag.style["margin"]=  "1em"
            li_tag.style["background-color"] = "blue"
              li_tag.innerText = element.item[0]["name"]
              li_tag.id = element.item[0]["citizen-names"]
              li_tag.class = "countries"
              li_tag.dataset.countryName = element.item[0].name
              comments_right.append(li_tag)
        })

  comments_right.addEventListener('click', function(){
    let x = event.target
     const formHTML =
      `<form id="comment_form">
        <input id="comment_input" class="${event.target.id}" type="text" name="comment" placeholder="Add Comment"/>
          <input data-country-name="${event.target.id}" type="submit" value="submit" id="submit"/>
          </form>`
          if (x.children.length < 1){x.innerHTML += formHTML}
   })
  comments_right.addEventListener('submit', function(event){
    event.preventDefault()
      let y = event.target[0]
      console.log(y)
        if (y.value == y.className){
          console.log(y)
          alert("Great answer!")
          firstRound()
        }
      else{
        event.target.reset()
      }
  })
}

firstRound()
})
//
