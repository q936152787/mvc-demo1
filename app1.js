import $ from 'jquery'
import './app1.css'

let $num = $('.output')
const $add = $('#add')
const $minus = $('#minus')
const $mul = $('#multiple')
const $divide = $('#divide')
const n = localStorage.getItem('n')
$num.text(n||100)

$add.on('click',()=>{
    let n = parseInt($num.text())
    n++
    localStorage.setItem('n',n)
    $num.text(n)
})


$minus.on('click',()=>{
    let n = parseInt($num.text())
    n--
    localStorage.setItem('n',n)
    $num.text(n)
})

$mul.on('click',()=>{
    let n = parseInt($num.text())
    n=n*2
    localStorage.setItem('n',n)
    $num.text(n)
})

$divide.on('click',()=>{
    let n = parseInt($num.text())
    n=n/2
    localStorage.setItem('n',n)
    $num.text(n)
})
