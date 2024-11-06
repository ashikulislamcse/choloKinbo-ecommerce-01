const UserLogin = async (req,res)=>{};
const UserRegister = async (req,res)=>{
    try {
        res.json({
            success:true,
            message:'API is Connected Successfully..'
        });
    } catch (error) {
        console.log('User Rigister Error',error);
        res.json({success:true, message: error?.message});    
    }
};
const AdminLogin = async (req,res)=>{};
const RemoveUser = async (req,res)=>{};
const UpdateUser = async (req,res)=>{};
const GetUsers = async (req,res)=>{
    res.send('Hello from Users..');
};


export {
    UserLogin, 
    UserRegister, 
    AdminLogin, 
    RemoveUser, 
    UpdateUser, 
    GetUsers
};