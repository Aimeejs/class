# class

class Aimee的基类模块，用于创建类，依赖is, extend 

[is](https://github.com/Aimeejs/is)  
[extend](https://github.com/Aimeejs/extend)


##Install  
```
aimee i class
```

##API
```
var Class = require('class');


// 创建子类
var Persion = Class.create();

// 扩展类
Person.extend({foo: bar})

// 扩展原型链
Person.include({foo: bar})

// 扩展原型链
Person.fn.extend({foo: bar})

// 创建实例
var person = new Person;
```


##Example


```
// 调用
var Class = require('class');
```

```
// 创建一个纯净的类
var Person = Class.create({
    hello: function(name){
        console.log('Hello, My name is ' + name)
    }
});

var person = new Person;

person.hello('xiaoming')
// => Hello, My name is xiaoming
```

```
// 基于Person创建子类
var Man = Person.create({
    strong: function(){
        console.log('他是一个强壮的男人')
    }
});

var man = new Man;

man.strong()
// => 他是一个强壮的男人

console.log(man.charm)
// => undefined
```

```
// 基于Person创建子类
var Woman = Person.create({
    charm: function(){
        console.log('她是一个美丽的女人')
    }
});

var woman = new Woman;

woman.charm()
// => 她是一个美丽的女人

console.log(woman.strong)
// => undefined
```

```
// 类可以根据需要无限扩展，无限继承，比如你还可以这样继续基于Woman创建子类
var Girl = Woman.create();
Girl.fn.extend({
    say: function(){
        console.log('她是一个女孩')
    }
})

var girl = new Girl;

girl.charm()
// => 她是一个美丽的女人

girl.say()
// => 她是一个女孩

console.log(girl.strong)
// => undefined

console.log(woman.say)
// => undefined

console.log(man.say)
// => undefined
```
