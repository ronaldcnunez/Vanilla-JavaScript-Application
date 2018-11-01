document.addEventListener('DOMContentLoaded', () => {
   const comments = document.getElementById('comments');
   const comments_right = document.getElementById('comments_right');
   const endPoint = 'https://country.register.gov.uk/records.json?page-size=5000';
   const boxColorArray = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan", ,"DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"]


   const symbol = [];

   // fetch the names of the countries
  function firstRound(){
    fetch(`https://country.register.gov.uk/records.json?page-size=5000`)
      .then(r => r.json())
      .then(data => {
        const info = Object.values(data)
          const element = info[Math.floor(Math.random() * info.length)];
          const color = boxColorArray[Math.floor(Math.random() * boxColorArray.length)];
            const li_tag = document.createElement('div')
            comments.style["display"] = "grid"
            comments.style["grid-template-columns"] = " 135px 135px 135px 135px "
            comments.style["grid-template-rows"] = " 75px 75px 75px 75px "
              li_tag.style["grid-gap"] = "10px"
              li_tag.style["border-radius"]=  "5px"
              li_tag.style["height"]=  "75px"
              li_tag.style["width"]=  "135px"
              li_tag.style["background-color"] = `${color}`
              li_tag.innerText = element.item[0].name
              li_tag.id = element.item[0].country
              li_tag.class = "countries"
              li_tag.dataset.countryName = element.item[0].name

              comments.append(li_tag)
      })
  }

  comments.addEventListener('click', function(){
   let x = event.target
      const formHTML =
        `<form id="comment_form"> <input id="comment_input" class="${event.target.id}" type="text" name="comment" placeholder="Add Comment"/> <input data-country-name="${event.target.id}" type="submit" value="submit" id="submit"/> </form>`
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
          const color = boxColorArray[Math.floor(Math.random() * boxColorArray.length)];
          const li_tag = document.createElement('div')
          comments_right.style["display"] = "grid"
          comments_right.style["grid-template-columns"] = " 135px 135px 135px 135px "
          comments_right.style["grid-template-rows"] = " 75px 75px 75px 75px  "
            li_tag.style["grid-gap"] = "10px"
            li_tag.style["border-radius"]=  "5px"
            li_tag.style["height"]=  "75px"
            li_tag.style["width"]=  "135px"
            li_tag.style["background-color"] = `${color}`
            li_tag.innerText = element.item[0]["name"]
            li_tag.id = element.item[0]["citizen-names"]
            li_tag.class = "countries"
            li_tag.dataset.countryName = element.item[0].name
              comments_right.append(li_tag)
          })

    comments_right.addEventListener('click', function(){
      let x = event.target
       const formHTML =
        `<form id="comment_form"> <input id="comment_input" class="${event.target.id}" type="text" name="comment" placeholder="Add Comment"/> <input data-country-name="${event.target.id}" type="submit" value="submit" id="submit"/> </form>`
          if (x.children.length < 1){x.innerHTML += formHTML}
    })

    comments_right.addEventListener('submit', function(event){
      event.preventDefault()
        let y = event.target[0]
          console.log(y)
            if (y.value == y.className){
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
