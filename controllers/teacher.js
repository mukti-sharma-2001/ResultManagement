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



// const addStudentPage=(req,res)=>{
//     res.status(200).render('add-student');
// }

// const addStudent=(req,res)=>{
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
    
// }

// const updateStudentQuery=(req,res)=>{
//     const studentRollno=req.params.studentRollno;
//     let sql=`select * from students where rollno=${studentRollno}`
//     let query=connection.query(sql,(err,result)=>{
//         if(err) throw err
//         res.status(200).render('edit-student',{
//             student:result[0] 
//         })
        
//     })
// }

// const updateStudent=(req,res)=>{
//     const studentRollno=req.body.rollno;
//     let sql="update students SET rollno='"+req.body.rollno+"',name='"+req.body.name+"',dob='"+req.body.dob+"',score='"+req.body.score+"' where rollno="+studentRollno
//     let query = connection.query(sql,(err, results) => {
//         if(err) throw err
//         res.status(200).redirect('/student-list')
//     })
// }

// const deleteStudent=(req,res)=>{
//     const studentRollno=req.params.studentRollno;
//     let sql=`delete from students where rollno=${studentRollno}`;
//     let query=connection.query(sql,(err,results)=>{
//         if (err) throw err;
//         res.status(200).redirect('/student-list');
//     })
// }


// module.exports={
//                 getStudentList,
//                 addStudentPage,
//                 addStudent,
//                 updateStudentQuery,
//                 updateStudent,
//                 deleteStudent

// }

