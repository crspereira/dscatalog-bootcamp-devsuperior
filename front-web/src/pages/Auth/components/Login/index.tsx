import ButtonIcon from 'core/components/ButtonIcon';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import AuthCard from '../Card';
import './styles.scss';

//modelo de dados a ser enviado pelo ReactHookForm
type FormData = {
   email: string;
   password: string;
}

const Login = () => {
   //iniciando o ReactHook Form
   const { register, handleSubmit } = useForm<FormData>();
   const onSubmit = (data: FormData) => {
      return (
         console.log(data) //data pode ser qualquer nome
         // chamar API de autenticação
      );
   }

   return (
      <div className="login-container" >
         <AuthCard title="Login">
            <form onSubmit={handleSubmit(onSubmit)} className="login-form">
               <input 
                  type="email" //type é do html5
                  className="form-control input-base margin-button-30" //form-control é do bootstrap
                  placeholder="Email"
                  //integração com o ReactHook Form
                  name="email"
                  ref={register}
               />
               <input 
                  type="password" //type é do html5
                  className="form-control input-base" //form-control é do bootstrap
                  placeholder="Senha"
                  //integração com o ReactHook Form
                  name="password"
                  ref={register}
               />
               <Link to="/admin/auth/recover" className="login-link-recover" >
                  Esqueci a senha?
               </Link>
               <div className="login-submit">
                  <ButtonIcon textButton="Logar"/>
                  <Link to="/admin/products/create" className="login-link-recover" >
                  </Link>
               </div>
               <div className="not-registered-content">
                  <span className="not-registered-content-text">
                     Não tem Cadastro?
                  </span>
                  <Link to="/admin/auth/register" className="not-registered-link-register" >
                     Cadastrar
                  </Link>
               </div>

            </form>
         </AuthCard>
      </div>
   );
}

export default Login;