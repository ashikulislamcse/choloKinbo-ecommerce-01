import validator from 'validator';
import UserModel from "../Models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'

const createToken = (user) =>{
    return jwt.sign({
        _id:user._id,
        email:user.email,
        name:user.name,
    },
process.env.jWT_SECRET, 
{expiresIn:"10h"});
};
const UserLogin = async (req,res)=>{
    try {
        const {email,password} = req.body;

        if (!email){
            return res.json({
                success:false,
                message:'Email is Required'
            });
        }
        if (!password){
            return res.json({
                success:false,
                message:'Password is Required'
            });
        }

        const user = await UserModel.findOne({email});
        if (!user){
            return res.json({
                success:false,
                message:"User Does't Exits",
            });
        }
        
        const isMatch = await bcrypt.compare(password,user.password);

        if (isMatch){
            const token = createToken(user)
            res.json({
                success:true,
                token,
                message:"User Login Successful.."
            })
        }else{
            return res.json({
                success:false,
                message:"Invalid Password, Try Again..."
            })
        }
    } catch (error) {
        console.log('User Login Error',error);
        res.json({success:true, message: error?.message}); 
    }
};
const UserRegister = async (req,res)=>{
    try {
        const {name,email,password} = await req.body;
        if (!name){
            return res.json({
                success:false,
                message:'User Name is Required'
            });
        }
        if (!email){
            return res.json({
                success:false,
                message:'Email is Required'
            });
        }
        if (!password){
            return res.json({
                success:false,
                message:'Password is Required'
            });
        }

        // Email Validator
        if (!validator.isEmail(email)){
            return res.json({
                success:false,
                message:'Please Enter Your Valid Email Address..'
            });
        }

        // Check User Status
        const existingUser = await UserModel.findOne({email});
        if (existingUser){
            return res.json({success:true, message:'User Already Exist'});
        }

        // Password Validation
        if (password.length<8){
            return res.json({
                success:false,
                message:"password should be equal or grater than 8 charecters"
            });
        }

        // Hashing Password
        const salt = await bcrypt.genSalt(10);
        const encryptedpassword = await bcrypt.hash(password,salt);

        // Register a New User For Database
        const newUser = new UserModel({
            name,
            email,
            password:encryptedpassword,
        });
        
        // Save New Register user
        await newUser.save()


        res.json({            
            success:true,
            message:'User Registerd Successfully..'
        });
    } catch (error) {
        console.log('User Rigister Error',error);
        res.json({success:true, message: error?.message});    
    }
};
const AdminLogin = async (req,res)=>{
    try {
        const {email,password} = req.body;
        if(email===process.env.ADMIN_EMAIL && 
            process.env.ADMIN_PASSWORD
        ){
            const token = jwt.sign(email+password,process.env.jWT_SECRET);
            res.json({
                success:true,
                token,
                message:"Welcome Admin User..",
            })
        }         
    } catch (error) {
        console.log('Admin Login Error',error);
        res.json({success:true, message: error?.message}); 
    }
};
const RemoveUser = async (req,res)=>{
    try {
        await UserModel.findByIdAndDelete(req.body._id);
        res.json({
            success:true,
            message:"User Deleted Successfully.."
        })

    } catch (error) {
        console.log('Remove User Error',error);
        res.json({success:true, message: error?.message}); 
    }
};
const UpdateUser = async (req,res)=>{
    try {
        const {name,email,password} = req.body;

        const user = await UserModel.findById(_id);
        if (!user){
            res.json({
                success:false,
                message:"User Not Found",
            })
        }
        if(name) user.name = name;

        if(email){
            if (!validator.isEmail(email)){
                return res.json({
                    success:false,
                    message:'Please Enter Your Valid Email Address..'
                });
            }
            user.email = email;
        }
        if (password){
            if (password.length<8){
                return res.json({
                    success:false,
                    message:"password should be equal or grater than 8 charecters"
                });
            }
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password,salt);
        }
        await user.save();
        res.json({
            success:true,
            message:"User Updated Successfully.."
        })
        
    } catch (error) {
        console.log('Update User Error',error);
        res.json({success:true, message: error?.message}); 
    }
};
const GetUsers = async (req,res)=>{
    try {
        const total = await UserModel.countDocuments({})
        const users = await UserModel.find({})
        res.json({
            success:true,
            total,
            users,
        })
    } catch (error) {
        console.log('All Users Get Error',error);
        res.json({success:true, message: error?.message});
    }
};


export {
    UserLogin, 
    UserRegister, 
    AdminLogin, 
    RemoveUser, 
    UpdateUser, 
    GetUsers
};