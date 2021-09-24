let admin = ['Greta','Ada','Vim','Tim'];
module.exports =(req,res,next) => {
    if(admins.icludes(req.query.user)){
        next()
    }else{
        res.redirect('/login')
    }
} 