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
x.row[1];
```

```
['Wikan', 'Google', 8, 27]
```

#### Get Column

```
x.col['company']
```

```
['Microsoft', 'Google', 'Bitcoin']
```

#### Get Size

```
x.size();
```

```
[3, 4]
```
