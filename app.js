// masala 1

function helloName(name){
  return "Hello " + name + "!"
}
document.getElementById('btn1').addEventListener('click', ()=> {
  document.getElementById('result1').textContent = helloName(document.getElementById('masala1').value)
})
// masala 2

function makeAbba(a, b){
  return  a + b + b + a
}
document.getElementById('btn2').addEventListener('click', ()=> {
  document.getElementById('result2').textContent = makeAbba(document.getElementById('masala2a').value, document.getElementById('masala2b').value)
})

// masala 3

function makeTags(tag, word){
  return  `<${tag}>${word}</${tag}>`
}
document.getElementById('btn3').addEventListener('click', ()=> {
  document.getElementById('result3').innerHTML = makeTags(document.getElementById('masala3a').value, document.getElementById('masala3b').value)
})

// masala 4
function makeOutWord(out, word){
  return out.slice(0,2) + word + out.slice(2, 4)
}
document.getElementById('btn4').addEventListener('click', ()=> {
  document.getElementById('result4').innerHTML = makeOutWord(document.getElementById('masala4a').value, document.getElementById('masala4b').value)
})


// masala 5

function extraEnd(str){
  let a = str.slice(str.length - 2, str.length)
  return a + a + a
}
document.getElementById('btn5').addEventListener('click', ()=> {
  document.getElementById('result5').innerHTML = extraEnd(document.getElementById('masala5').value)
})

// masala 6

function firstTwo(str){
  return str.slice(0, 2)
}
document.getElementById('btn6').addEventListener('click', ()=> {
  document.getElementById('result6').innerHTML = firstTwo(document.getElementById('masala6').value)
})

// masala 7

function firstHalf(str){
  return str.slice(0, str.length)
}
document.getElementById('btn7').addEventListener('click', ()=> {
  document.getElementById('result7').innerHTML = firstHalf(document.getElementById('masala7').value)
})


// masala 8

function withoutEnd(str){
  return str.slice(1, str.length - 1)
}
document.getElementById('btn8').addEventListener('click', ()=> {
  document.getElementById('result8').innerHTML = withoutEnd(document.getElementById('masala8').value)
})

// masala 9

function comboString(a, b){
  if(a.length > b.length) {
    return b + a + b
  } else {
    return a + b + a
  }
}
document.getElementById('btn9').addEventListener('click', ()=> {
  document.getElementById('result9').innerHTML = comboString(document.getElementById('masala9a').value, document.getElementById('masala9b').value)
})


// masala 10

function nonStart(a, b){
  return a.slice(1) + b.slice(1)
}
document.getElementById('btn10').addEventListener('click', ()=> {
  document.getElementById('result10').innerHTML = nonStart(document.getElementById('masala10a').value, document.getElementById('masala10b').value)
})

// masala 11

function left2(str){
  return str.slice(2) + str.slice(0, 2);
}
document.getElementById('btn11').addEventListener('click', ()=> {
  document.getElementById('result11').innerHTML = left2(document.getElementById('masala11').value)
})
// masala 12

function right2(str){
  return str.slice(str.length - 2, str.length) + str.slice(0, str.length - 2)
}
document.getElementById('btn12').addEventListener('click', ()=> {
  document.getElementById('result12').innerHTML = right2(document.getElementById('masala12').value)
})

// masala 13

function theEnd(str, front){
  if(front == 'true') {
    return str[0]
  } else {
    return str[str.length - 1]
  }
}
document.getElementById('btn13').addEventListener('click', ()=> {
  document.getElementById('result13').innerHTML = theEnd(document.getElementById('masala13a').value, document.getElementById('masala13b').value)
})

// masala 14

function withoutEnd2(str){
  return str.slice(1, str.length - 1)
}
document.getElementById('btn14').addEventListener('click', ()=> {
  document.getElementById('result14').innerHTML = withoutEnd2(document.getElementById('masala14').value)
})

// masala 15

function middleTwo(str){
  return str.slice(str.length / 2 - 1 , str.length / 2 + 1)
}
document.getElementById('btn15').addEventListener('click', ()=> {
  document.getElementById('result15').innerHTML = middleTwo(document.getElementById('masala15').value)
})

// masala 16

function endsLy(str){
  let ends = str.slice(str.length - 2)
  if(ends == 'ly') {
    return true
  } else {
    return false
  }
}
document.getElementById('btn16').addEventListener('click', ()=> {
  document.getElementById('result16').innerHTML = endsLy(document.getElementById('masala16').value)
})

// masala 17

function nTwice(str, n){
  return str.slice(0, n) + str.slice(str.length - n, str.length)
}
document.getElementById('btn17').addEventListener('click', ()=> {
  document.getElementById('result17').innerHTML = nTwice(document.getElementById('masala17a').value, document.getElementById('masala17b').value)
})

// masala 18

function twoChar(str, index){
  return str.slice(index, index + 2).length >= 2 ? str.slice(index, index + 2) : str.slice(0, 2)
}
document.getElementById('btn18').addEventListener('click', ()=> {
  document.getElementById('result18').innerHTML = twoChar(document.getElementById('masala18a').value, document.getElementById('masala18b').value)
})

// masala 19

function middleThree(str){
  return str.slice(str.length / 2 - 1, str.length / 2 + 2)
}
document.getElementById('btn19').addEventListener('click', ()=> {
  document.getElementById('result19').innerHTML = middleThree(document.getElementById('masala19').value)
})

// masala 20

function hasBad(str){
  return str.slice(0, 3) == 'bad' || str.slice(1, 4) == 'bad'  ? true : false
}
document.getElementById('btn20').addEventListener('click', ()=> {
  document.getElementById('result20').innerHTML = hasBad(document.getElementById('masala20').value)
})

// masala 21

function atFirst(str){
  return str.length >= 2 ? str.slice(0,2) : str.slice(0) ? str + '@' : '@@'
}
document.getElementById('btn21').addEventListener('click', ()=> {
  document.getElementById('result21').innerHTML = atFirst(document.getElementById('masala21').value)
})

// masala 22

function lastChars(a, b){
  let A = a[0] ? a[0] : "@"
  let B = b[b.length - 1] ? b[b.length - 1] : "@"
  return A + B
}
document.getElementById('btn22').addEventListener('click', ()=> {
  document.getElementById('result22').innerHTML = lastChars(document.getElementById('masala22a').value, document.getElementById('masala22b').value)
})

// masala 23

function conCat(a, b){
  if(a[a.length - 1] == b[0]) {
    return a + b.slice(1)
  } else {
    return a + b
  }
}
document.getElementById('btn23').addEventListener('click', ()=> {
  document.getElementById('result23').innerHTML = conCat(document.getElementById('masala23a').value, document.getElementById('masala23b').value)
})

// masala 24

function lastTwo(str){
  if(str.length >= 2) {
    return str.slice(0, str.length - 2) + str[str.length - 1] + str[str.length - 2]
  } else {
    return str
  }
}
document.getElementById('btn24').addEventListener('click', ()=> {
  document.getElementById('result24').innerHTML = lastTwo(document.getElementById('masala24').value)
})


// masala 25

function seeColor(str){
  if(str.slice(0, 3) == 'red') {
    return str.slice(0, 3)
  } else if(str.slice(0,4) == "blue") {
    return str.slice(0,4)
  } else {
    return ''
  }
}
document.getElementById('btn25').addEventListener('click', ()=> {
  document.getElementById('result25').innerHTML = seeColor(document.getElementById('masala25').value)
})

// masala 26

function frontAgain(str){
  if(str.slice(0, 2) == str.slice(str.length - 2, str.length) && str.length > 1 ) {
    return true
  } else {
    return false
  }
}
document.getElementById('btn26').addEventListener('click', ()=> {
  document.getElementById('result26').innerHTML = frontAgain(document.getElementById('masala26').value)
})

// masala 27

function minCat(a, b){
  if(a.length > b.length) {
    return a.slice(a.length - b.length) + b
  } else {
    return a + b.slice(b.length - a.length)
  }
}
document.getElementById('btn27').addEventListener('click', ()=> {
  document.getElementById('result27').innerHTML = minCat(document.getElementById('masala27a').value, document.getElementById('masala27b').value)
})

// masala 28

function extraFront(str){
  return str.length >= 2 ? str.slice(0,2).repeat(3) : str.repeat(3)
}
document.getElementById('btn28').addEventListener('click', ()=> {
  document.getElementById('result28').innerHTML = extraFront(document.getElementById('masala28').value)
})

// masala 29

function without2(str){
  if (str.slice(0, 2) == str.slice(str.length - 2) && str.length > 1) {
    return str.slice(2)
  } else {
    return str
  }
}
document.getElementById('btn29').addEventListener('click', ()=> {
  document.getElementById('result29').innerHTML = without2(document.getElementById('masala29').value)
})

// masala 30

function deFront(str){
  if(str[0] == 'a' && str[1] == "b") {
    return str[0] + str[1] + str.slice(2)
  } else if(str[1] == 'b') {
    return str[1] + str.slice(2)
  } else if(str[0] == 'a') {
    return str[0] + str.slice(2)
  }else {
    return str.slice(2)
  }
}
document.getElementById('btn30').addEventListener('click', ()=> {
  document.getElementById('result30').innerHTML = deFront(document.getElementById('masala30').value)
})

// masala 31

function startWord(str, word){
  if(str.slice(0, word.length) == word) {
    return str.slice(0, word.length)
  } else if(str.slice(1, word.length) == word.slice(1)) {
    return str.slice(0, word.length)
  } else {
    return ''
  }
}
document.getElementById('btn31').addEventListener('click', ()=> {
  document.getElementById('result31').innerHTML = startWord(document.getElementById('masala31a').value, document.getElementById('masala31b').value)
})

// masala 32

function withoutX(str){
  if(str[0] == "x" && str[str.length - 1] == 'x') {
    return str.slice(1, str.length - 1)
  } else if(str[str.length - 1] == 'x') {
    return str.slice(0, str.length - 1)
  } else if(str[0] == "x"){
    return str.slice(1, str.length)
  } else {
    return str
  }
}
document.getElementById('btn32').addEventListener('click', ()=> {
  document.getElementById('result32').innerHTML = withoutX(document.getElementById('masala32').value)
})

// masala 33

function withoutX2(str){
  if(str[0] == 'x' && str[1] == "x") {
    return str.slice(2)
  } else if (str[0] == "x") {
    return str.slice(1)
  } else if (str[1] == 'x') {
    return str[0] + str.slice(2)
  }  else {
    return str
  }
}
document.getElementById('btn33').addEventListener('click', ()=> {
  document.getElementById('result33').innerHTML = withoutX2(document.getElementById('masala33').value)
})