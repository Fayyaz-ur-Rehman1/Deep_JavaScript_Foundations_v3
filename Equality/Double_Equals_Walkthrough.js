"5" == 5 // true, because "5" is converted to the number 5

"true" == true // true, because "true" is converted to the boolean `true`
"false" == false // true, because "false" is converted to the boolean `false`

null == undefined // true

[1, 2] == "1,2" // true, because the array is converted to a string

NaN == NaN // false

false == 0 // true, because both are falsy
null == false // false, because null is not falsy
"" == 0 // true, because both are falsy
"5" == true // true, because "5" is converted to the boolean `true`

5 === 5 // true
"5" === 5 // false