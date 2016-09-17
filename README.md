# sum-product

• [Usage](#usage) • [Test](#test) • [License](#license) •

Simple and small standalone function to calculate the sum of the product of array items.
`sumProduct([0,1], [2,3], [4,5]) //  0*2*4 + 1*3*5 = 15`

Uses a modified Kahan sum to reduce floating point errors.

## Usage

The function takes any number of arrays.

```javascript
var sumProduct = require('sum-product')
var result = sumProduct([0,1], [2,3], [4,5]) //  0*2*4 + 1*3*5 = 15
result = sumProduct() //  ==>0
result = sumProduct([]) //  ==>0
result = sumProduct([a]) //  ==>NaN
```

## License

Released under the [MIT License](http://www.opensource.org/licenses/MIT)
