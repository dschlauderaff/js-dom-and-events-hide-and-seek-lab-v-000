function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  const list = document.querySelectorAll('.ranked-list')

  for (let i = 0;  i < list.length; i++){
    list[i].innerHTML = parseInt(list[i].innerHTML) + n
  }

  return list
}

function deepestChild(){
  let current = document.getElementById("grand-node").querySelector('div')
  let next = current

  while (next){
    next = current.querySelector('div')
    if (!next){
      return current
    }
    current = current.querySelector('div')
  }
  return null
}