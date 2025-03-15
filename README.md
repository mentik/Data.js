# Data.js
Native javascript array library for data manipulation and analysis.


## Documentation

### Create new Data

```js
const x = new Data(
    [["Getser", "Microsoft", 7, 28], ["Wikan", "Google", 8, 27], ["Miki", "Bitcoin", 9, 29]], 
    ["name", "company", "score", "age"]
);
```

#### Print Data

```js
x.print();
```

```
----------------------------------------
|   | name   | company   | score | age | 
----------------------------------------
| 0 | Getser | Microsoft | 7     | 28  | 
| 1 | Wikan  | Google    | 8     | 27  | 
| 2 | Miki   | Bitcoin   | 9     | 29  | 
----------------------------------------
```

#### Get Row

```js
x.getRow(1); // ['Wikan', 'Google', 8, 27]
```

#### Get Column

```js
x.getCol('company'); // ['Microsoft', 'Google', 'Bitcoin']
```

#### Get Size

```js
x.getSize(); // [3, 4]
```

#### To Object 

Convert `array` object property value to which using column names as key.

```js
const y = x.toObject();
y.company; // ['Microsoft', 'Google', 'Bitcoin']
y.name; // ['Getser', 'Wikan', 'Miki']
```
