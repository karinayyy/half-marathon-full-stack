let a = undefined // "undefined"

let b = 0 // "number"

let c = 10n // "bigint"

let d = true // "boolean"

let e = "foo" // "string"

let f = Symbol("id") // "symbol"

let g = alert // "function"

let h = null // "object"


alert(  "a is " + typeof a + "\n" +
        "b is " + typeof b + "\n" +
        "c is " + typeof c + "\n" +
        "d is " + typeof d + "\n" +
        "e is " + typeof e + "\n" +
        "f is " + typeof f + "\n" +
        "g is " + typeof g + "\n" +
        "h is " + typeof h + "\n" )