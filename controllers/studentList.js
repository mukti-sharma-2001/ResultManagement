// const connection=require('../database')


// const getStudentList=(req,res)=>{
//     let sql="Select * from students";
//     let query=connection.query(sql,(err,rows)=>{
//         if(err) throw err;
//         console.log(rows);
//         res.status(200).render('student-list',{
//             students:rows,
//             total:rows.length
//         });

//     })
    
// }

// app.get('/add-student',(req,res)=>{
//     res.status(200).render('add-student');
// })

// app.post('/add-student',(req,res)=>{
//     let data={rollno:req.body.rollno,
//                 name:req.body.name, 
//                 dob:req.body.dob,
//                 // dob:moment(req.body.dob).format('YYYY/MM/DD'), 
//                 score:req.body.score}
//     console.log(data);
//     let sql='Insert into students SET ?';
//     let query= connection.query(sql,data,(err,results)=>{
//         console.log(results);
//         if(err) throw err;
//         res.status(200).render('add-student');
//     });
    
// })

// app.get('/update/:studentRollno',(req,res)=>{
//     const studentRollno=req.params.studentRollno;
//     let sql=`select * from students where rollno=${studentRollno}`
//     let query=connection.query(sql,(err,result)=>{
//         if(err) throw err
//         res.status(200).render('edit-student',{
//             student:result[0] 
//         })
        
//     })
// })

// app.post('/update',(req,res)=>{
//     const studentRollno=req.body.rollno;
//     let sql="update students SET rollno='"+req.body.rollno+"',name='"+req.body.name+"',dob='"+req.body.dob+"',score='"+req.body.score+"' where rollno="+studentRollno
//     let query = connection.query(sql,(err, results) => {
//         if(err) throw err
//         res.status(200).redirect('/student-list')
//     })
// })

// app.get('/delete/:studentRollno',(req,res)=>{
//     const studentRollno=req.params.studentRollno;
//     let sql=`delete from students where rollno=${studentRollno}`;
//     let query=connection.query(sql,(err,results)=>{
//         if (err) throw err;
//         res.status(200).redirect('/student-list');
//     })
// })




// app.post('/add-student',(req,res)=>{
//     console.log('hi');
//     console.log(req.body);
//     res.status(200).render("add-student");
// })
// app.get('/search',(req,res)=>{
//     res.status(200).render('search-result');
// })
// app.post('/result',(req,res)=>{
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
// })