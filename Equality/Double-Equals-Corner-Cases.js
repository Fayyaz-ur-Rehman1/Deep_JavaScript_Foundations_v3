0 == '0' // true, because '0' is converted to a number
false == 0 // true, because both are falsy
null == undefined // true, because they are considered equal

NaN == NaN // false

'' == 0 // true
'' == false // true

'5' == 5 // true
'5' == '5' // true
'5' == [5] // true

[1, 2] == '1,2' // true

'true' == true // true
'false' == false // true

if (value == 5) {
    // This may not behave as expected if 'value' can have different types
}

'5' == 5 // true, but it might hide a potential issue if the types should be different