String.prototype.removeDuplicates = function()  {
    let arr = str.split(' ');

    str = arr.filter(function(value, index, self) {
        return self.indexOf(value) === index;
    }).join(' ');
    return str;
}
