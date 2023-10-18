// const connection=require('../database')

// const searchResult=(req,res)=>{
//     res.status(200).render('search-result');
// }
// const postResult=(req,res)=>{
//     let rollno=req.body.rollno;
//     let name=req.body.name;
       
//     let sql="Select * from students where rollno=? AND name=?"
//     let query=connection.query(sql,[rollno,name],(err,result)=>{
//         if(err) throw err;
//         if(!result[0]) res.status(404).render("404-not-found")
//         res.status(200).render('display-result',{
//             student:result[0]
//         })
//     })
// }

// module.exports={
//                 searchResult,
//                 postResult

// }