// 获取元素
let switchCtn = document.querySelector("#switch-cnt"); // 获取创建/登陆容器
let switchC1 = document.querySelector("#switch-c1"); // 获取开关登入1
let switchC2 = document.querySelector("#switch-c2"); // 获取开关注册2
let switchCircle = document.querySelectorAll(".switch_circle"); // 获取开关圆圈
let switchBtn = document.querySelectorAll(".switch-btn"); // 获取开关按钮
let aContainer = document.querySelector("#a-container"); // 获取表单A创建容器
let bContainer = document.querySelector("#b-container"); // 获取表单B登入容器
let allButtons = document.querySelectorAll(".submit"); // 获取所有提交按钮

// 定义函数
let getButtons = (e) => e.preventDefault() // 阻止默认提交事件
let changeForm = (e) => {
    // 修改类名
    switchCtn.classList.add("is-gx"); // 添加类名
    setTimeout(function () {
        switchCtn.classList.remove("is-gx"); //在动画结束后删除类名，即1.5s后删除
    }, 1500)
    switchCtn.classList.toggle("is-txr"); // 切换类名，向左移动
    switchCircle[0].classList.toggle("is-txr"); // 切换类名 向左移动
    switchCircle[1].classList.toggle("is-txr"); // 切换类名 向左移动

    switchC1.classList.toggle("is-hidden"); // 切换类名
    switchC2.classList.toggle("is-hidden"); // 切换类名
    aContainer.classList.toggle("is-txl"); // 切换类名 向左移动 0px，紧靠左侧
    bContainer.classList.toggle("is-txl"); // 切换类名 向左移动 0px，紧靠左侧
    bContainer.classList.toggle("is-z"); // 切换类名,b切换为可见
}

// 点击事件
let shell = (e) => {
    for (var i = 0; i < allButtons.length; i++)
        allButtons[i].addEventListener("click", getButtons); // 添加点击事件
    for (var i = 0; i < switchBtn.length; i++)
        switchBtn[i].addEventListener("click", changeForm) // 添加点击事件
}

// 加载事件
window.addEventListener("load", shell); // 添加加载事件
