# Data.js
Native javascript array library for data manipulation and analysis.

Key Feature: 

- Simplicity: Works with 2D arrays like a spreadsheet, making it simple and straightforward.
- User-Friendly: Easy-to-read syntax inspired by Python and R, with methods that are intuitive and clean.
- Clear Data Display: The print() method shows data in a clean table format for quick understanding.
- Native to JavaScript: Fully compatible with JavaScript projects and works seamlessly.
- Convertible: Easily converts data into objects or other formats for flexible use in various applications.
- Customizable: Data.js adopts an object-oriented design, making it easier to extend, modify, and build.

## Documentation

### Instance Methods

#### Create new Data

```js
const x = new Data(
    array=[["Getser", "Microsoft", 7, 28], ["Wikan", "Google", 8, 27], ["Miki", "Bitcoin", 9, 29]], 
    cols=["name", "company", "score", "age"]
);
```

#### Print

```js
x.print();
```

```
print:1
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

#### Get Cell

```js
x.getCell(row=1, col="company"); // 'Google'
```

#### Get Size

```js
x.getSize(); // [3, 4]
```

#### Rename Col

```js
const y = new Data(
    array=[["Getser", "Microsoft", 7, 28], ["Wikan", "Google", 8, 27], ["Miki", "Bitcoin", 9, 29]], 
    cols=["name", "company", "score", "age"]
);

y.print().renameCol(oldName="score", newName="employment_time").print();
```

```
print:1
----------------------------------------
|   | name   | company   | score | age | 
----------------------------------------
| 0 | Getser | Microsoft | 7     | 28  | 
| 1 | Wikan  | Google    | 8     | 27  | 
| 2 | Miki   | Bitcoin   | 9     | 29  | 
----------------------------------------
print:2
--------------------------------------------------
|   | name   | company   | employment_time | age | 
--------------------------------------------------
| 0 | Getser | Microsoft | 7               | 28  | 
| 1 | Wikan  | Google    | 8               | 27  | 
| 2 | Miki   | Bitcoin   | 9               | 29  | 
--------------------------------------------------
```

#### Drop Col

```js
const z = new Data(
    array=[["Getser", "Microsoft", 7, 28], ["Wikan", "Google", 8, 27], ["Miki", "Bitcoin", 9, 29]], 
    cols=["name", "company", "score", "age"]
);

z.print().dropCol("score").print();
```

```
print:1
----------------------------------------
|   | name   | company   | score | age | 
----------------------------------------
| 0 | Getser | Microsoft | 7     | 28  | 
| 1 | Wikan  | Google    | 8     | 27  | 
| 2 | Miki   | Bitcoin   | 9     | 29  | 
----------------------------------------
print:2
--------------------------------
|   | name   | company   | age | 
--------------------------------
| 0 | Getser | Microsoft | 28  | 
| 1 | Wikan  | Google    | 27  | 
| 2 | Miki   | Bitcoin   | 29  | 
--------------------------------
```

#### Drop Row
```js
const z = new Data(
    array=[["Apple", 10, 1], ["Orange", 2, 2],["Lecy", 20, 3]],
    cols=["fruit", "quantity", "price_usd"]
);

z.print().dropRow(1).print();
```

```
print:1
-------------------------------------
|   | fruit  | quantity | price_usd | 
-------------------------------------
| 0 | Apple  | 10       | 1         | 
| 1 | Orange | 2        | 2         | 
| 2 | Lecy   | 20       | 3         | 
-------------------------------------
print:2
------------------------------------
|   | fruit | quantity | price_usd | 
------------------------------------
| 0 | Apple | 10       | 1         | 
| 1 | Lecy  | 20       | 3         | 
------------------------------------
```

#### Copy

Copy the object from another object, make data manipulation and analysis much easier.

```js
const x = new Data(
    array=[["Apple", 10, 1], ["Orange", 2, 2],["Lecy", 20, 3]],
    cols=["fruit", "quantity", "price_usd"]
);

const y = x.copy().dropCol("price_usd");

y.print()
x.print()

```

```
print:1
-------------------------
|   | fruit  | quantity | 
-------------------------
| 0 | Apple  | 10       | 
| 1 | Orange | 2        | 
| 2 | Lecy   | 20       | 
-------------------------
print:2
-------------------------------------
|   | fruit  | quantity | price_usd | 
-------------------------------------
| 0 | Apple  | 10       | 1         | 
| 1 | Orange | 2        | 2         | 
| 2 | Lecy   | 20       | 3         | 
-------------------------------------
```

#### To Object 

Convert `array` object property value to object which using column names as key.

```js
const y = x.toObject();
y.company; // ['Microsoft', 'Google', 'Bitcoin']
y.name; // ['Getser', 'Wikan', 'Miki']
```


