const config = require("./docs/.vuepress/config.js");
const fs = require("fs");
const path = require("path");
const baseUrl = path.resolve(__dirname, "./docs")
//@ts-ignore
config.default.themeConfig.sidebar.forEach(item => {
  if (item.title === "中等") {
    fs.access(baseUrl + "/medium",fs.constants.F_OK,(res) => {
      if(res){
        fs.mkdirSync(baseUrl+"/medium")
      }
      const children = item.children;
      const nameArr = children.map(item=>item.replace("/medium/","")+".md");
      for(let name of nameArr){
        const content = name.replace(".md","");
        fs.writeFileSync(baseUrl+"/medium/"+name, `# ${content}\n## 题目\n## 分析\n## 题解\n## 知识点`)
      }
    })
  }
})