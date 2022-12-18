import { Typography, TextField, Button } from '@mui/material'
import { IPropsReg } from '../../common/types/auth'

const RegisterPage: React.FC<IPropsReg> = (props: IPropsReg): JSX.Element => {
    const {setFirstName, setUserName, setEmail, setPassword, setRepeatPassword, navigate} = props

    return (
        <>
            <Typography variant='h2' fontFamily='Poppins' textAlign='center' >Авторизация</Typography>
            <Typography variant='body1' marginBottom={3} fontFamily='Popins' textAlign='center' >Введите данные для регистраций</Typography>
            <TextField fullWidth={true} margin='normal' label='Name' variant='outlined' placeholder='Введите ваше имя' onChange={(e) => setFirstName(e.target.value)}/>
            <TextField fullWidth={true} margin='normal' label='Username' variant='outlined' placeholder='Введите ваш ник' onChange={(e) => setUserName(e.target.value)}/>
            <TextField fullWidth={true} margin='normal' label='Email' variant='outlined' placeholder='Введите ваш email' onChange={(e) => setEmail(e.target.value)}/>
            <TextField type='password' fullWidth={true} margin='normal' label='Password' variant='outlined' placeholder='Введите ваш пароль' onChange={(e) => setPassword(e.target.value)}/>
            <TextField type='password' fullWidth={true} margin='normal' label='Password' variant='outlined' placeholder='Повторите пароль' onChange={(e) => setRepeatPassword(e.target.value)}/>
            <Button type='submit' sx={{fontFamily:'Poppins', marginTop: 2, marginBottom: 2, width: '50%'}} variant="contained">Регистрация</Button>
            <Typography variant='body1' sx={{ fontFamily: 'Popins' }}>У меня уже есть <span className='insideRegText' onClick={() => navigate('/login')}>аккаунт</span></Typography>
        </>
    )
}

export default RegisterPage