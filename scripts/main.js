let myImage = document.querySelector('img');

myImage.onclick = function() {
      let mySrc = myImage.getAttribute('src');
      if(mySrc === 'images/图片1.jpg') {
        myImage.setAttribute('src', 'images/图片2.jpg');
      } else {
       myImage.setAttribute('src', 'images/图片1.jpg');
      }
}

// 我们可以称之为初始化代码，因为它在页面初次读取时进行构造工作： 
let storedName = localStorage.getItem('name');
if(!storedName) {
      setUserName();
} else {
      setHeading(storedName);
}

function setHeading(name) {
     let myHeading = document.querySelector('h1');
     myHeading.textContent = '测试切换用户：' + name + '！';
}

function setUserName() {
     let myName = prompt('请输入你的名字');

     // 添加if语句为了避免用户拒绝输入用户名或输入空的用户名（null）
     if(!myName || myName === null)
     {
           setUserName();
     }
     else
     {
           // 如果有值（上面的表达式结果不为真），就把值存储到 localStorage 并且设置标题。
           // 这里用 localStorage 的 setItem() 函数来创建一个'name' 数据项，并把 myName 变量复制给它
           localStorage.setItem('name', myName);
           setHeading(myName);
     }
} 

// 最后，为按钮设置 onclick 事件处理器。按钮按下时运行 setUserName() 函数。这样用户就可以通过按这个按钮来自由设置新名字了
let myButton = document.querySelector('button'); 
myButton.onclick = setUserName;
// myButton.onclick = function() {
//       setUserName();

// }


let myHeading = document.querySelector('h2');
myHeading.textContent = '已被js修改textContent（副标题h2）';

document.querySelector('#my-id').onclick = function() {
    alert('人家脾气才不爆！')
}

document.querySelector('h2').onclick = function() {
      alert('别戳人家，人家怕疼~');
}