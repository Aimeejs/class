/**
 * Aimee-class
 * Author by gavinning
 * Homepage https://github.com/gavinning/aimee-class
 */

var is, extend, Class, create;

is = require('is');
extend = require('extend');

Class = function(){
    this.name = 'aimee-class';
    this.version = '1.0.0';
}

/**
 * 以Parent为源创建子类
 * @param  {[Function]} parent [要继承的类]
 * @param  {[object]}   obj    [类的扩展]
 * @return {[Function]}        [返回子类]
 */
create = function(Fn, obj){
    var o = function(){};

    o.fn = o.prototype;
    o.constructor = Class;
    o.create = o.fn.create = create;
    o.extend = o.fn.extend = extend;

    // 继承父级原型链
    o.fn.extend(this.prototype);

    // 检查是否存在需要继承的类
    if(is.plainObject(Fn)){
        obj = Fn;
        Fn = null;
    };

    // 继承指定类的原型链
    if(Fn){
        o.fn.extend(Fn.prototype);
    };

    // 扩展子类
    o.fn.extend(obj || {});

    return o;
}

Class.create = create;
module.exports = Class;
