import { useLocation, useNavigate } from "react-router-dom";
import RegisterPage from "./register";
import LoginPage from "./login";
import { Box } from '@mui/material';
import './style.scss'
import { useState } from 'react';
import { instance } from '../../utils/axios';
import { useAppDispatch } from '../../utils/hooks';
import { login } from '../../store/slices/auth';
import { AppErrors } from '../common/errors';

const AuthRootComponent: React.FC = (): JSX.Element => {
    const [firstName, setFirstName] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const location = useLocation()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleSubmit = async (e: {preventDefault: () => void}) => {
        e.preventDefault()
        if (location.pathname === '/login') {
            try {
                const userData = {
                    email,
                    password
                }
                const user = await instance.post('/auth/login', userData)
                await dispatch(login(user.data))
                navigate('/')
            } catch (e) {
                throw new Error()
            }
        } else if (location.pathname === '/register') {
            const userData = {
                firstName,
                userName,
                email,
                password
            }
            if (password === repeatPassword) {
                try {
                    const newUser = await instance.post('/auth/register', userData)
                    await dispatch(login(newUser.data))
                    navigate('/')
                } catch (e: any) {
                    console.log(e.response);
                }
            } else {
                throw new Error(AppErrors.PASSWORD_DO_NOT_MATCH);
            }
        }
    }
    
    return (
        <div className='root'>
            <form className="form" onSubmit={handleSubmit}>
                <Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    flexDirection='column'
                    maxWidth={640}
                    margin='auto'
                    padding={5}
                    borderRadius={5}
                    boxShadow={'5px 5px 10px #ccc'}
                >
                    {location.pathname === '/login'
                        ? <LoginPage setEmail={setEmail} setPassword={setPassword} navigate={navigate} />
                        : location.pathname === '/register'
                        ? <RegisterPage
                            setFirstName={setFirstName}
                            setUserName={setUserName}
                            setEmail={setEmail}
                            setPassword={setPassword}
                            setRepeatPassword={setRepeatPassword}
                            navigate={navigate}
                          /> : null}
                </Box>
            </form>
        </div>    
    )
}

export default AuthRootComponent