import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { ICreateUserSessionDTO } from '../domain/modules/users/dtos/ICreateUserSessionDTO';
import { useAuthentication } from '../hooks/useAuthentication';

function Login() {

  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const { signIn } = useAuthentication();

  const onSubmit = async (data: ICreateUserSessionDTO) => {
    try {
      await signIn(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="login">
      <div className="container">
        <div className="content">
          <form id="login-form" onSubmit={handleSubmit(onSubmit)}>
            <textarea style={{ display: 'none' }} />
            <div className="form-box">
              <div className="content">
                <label>email</label>
                <input {...register('email')} type="email" placeholder="Inserir email de usuário..." />
              </div>
            </div>
            <div className="form-box">
              <div className="content">
                <label>senha</label>
                <input {...register('password')} type="password" placeholder="Inserir senha..." />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="buttons">
        <div className="container">
          <button type="submit" form="login-form" className="button type-1">
            <span>entrar</span>
          </button>
          <button className="button type-1" onClick={() => {
            history.push('/register');
          }}>
            <span>cadastrar</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Login;
