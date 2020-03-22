// json数据
const table = [
    {
        name: "张..",
        phone: "12345678912",
        email: "123456789@qq.com"
    },
    {
        name: "张..",
        phone: "12345678912",
        email: "123456789@qq.com"
    }
]
    
// 生成字符串
let str = `姓名,电话,邮箱\n`;

table.forEach(item=>{
    for(let text in item){
        str += `${item[text] + '\t'},`
    }
    str+='\n';
})

// 创建下载链接
let link = document.createElement("a")

// 格式转换 important
link.href = 'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(str);
link.download =  "json数据表.csv";

// 自动下载事件
let ev = new MouseEvent("click")
link.dispatchEvent(ev)