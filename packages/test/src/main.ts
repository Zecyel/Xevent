import * as data from "@ethf/data"
import { Div } from "@ethf/dom"

let a = new data.XNumber(0)
let b = new data.XNumber(30)

let equ = data.NotEqual(a, b)

let div = new Div()

div.onMount.bind((_) => {
    let p = document.createElement('p')
    p.textContent = "123"
    div.el.appendChild(p)
})
div.mount()
data.Link(div.visible, equ)

document.getElementById('root').appendChild(div.el)
