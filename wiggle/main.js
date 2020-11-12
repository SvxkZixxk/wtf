/** Zimek 2020 Wiggle generator **/

let settings = {
  text:'wiggle',
  speed:20, //ms
  max_wide:80,
  min_wide:5,
}

let data = {
  spaceBars:'',
  spaceBar:' ',
  spaceCount:0
}


// random number generator
function getRandomInt(min, max) { min = Math.ceil(min); max = Math.floor(max); return Math.floor(Math.random() * (max - min)) + min;}

//interval for the generator
setInterval(function(){

    //check if should generate new number
    if(data.spaceBars.length == data.spaceCount){
      //generate number of spacebars between min_wide and max_wide
      data.spaceCount = getRandomInt(settings.min_wide, settings.max_wide)
    } else {

      // if number of spacebars is higher than spaceCount => remove 1 spacebar
      // else add a spacebar
      // repeat that till spacebars will equal space count to generate another number
    if(data.spaceBars.length > data.spaceCount/data.spaceBar.length)
      data.spaceBars = data.spaceBars.substring(1)
    else
      data.spaceBars += data.spaceBar

      //output wiggle
      $("body").append(`<span style="padding-left:${data.spaceBars.length*10};">${settings.text}</span><br>`)
      //data.spaceBars + settings.text

$('body').scrollTop( $('body').height() )

    }

},settings.speed)
