const config=require('./app/config')
const app=require('./app/index')
require('./app/database')
app.listen(config.APP_PORT,()=>{
  console.log(`服务器在${config.APP_PORT}启动成功`)
})

