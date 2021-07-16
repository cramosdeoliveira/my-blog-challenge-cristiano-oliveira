import user2 from '../assets/img/user-2.png';
import { useForm } from 'react-hook-form';
import { useAuthentication } from '../hooks/useAuthentication';
import { ICreateUserDTO } from '../domain/modules/users/dtos/ICreateUserDTO';
import { useDropzone } from 'react-dropzone';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Register() {

  const { register, handleSubmit } = useForm();

  const history = useHistory();

  const { signUp } = useAuthentication();

  const [avatarImage, setAvatarImage] = useState<File | undefined>();

  const onDrop = (acceptedFiles: Array<File>) => {
    setAvatarImage(acceptedFiles[0]);
  }

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const onSubmit = async (data: ICreateUserDTO) => {
    try {
      await signUp({ ...data, avatar: avatarImage });
      history.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="register">
      <div className="container">
        <div className="content">
          <form id="register-form" onSubmit={handleSubmit(onSubmit)}>
            <textarea style={{ display: 'none' }} />
            <div className="form-box">
              <div className="content">
                <label>nome</label>
                <input {...register('name')} type="text" placeholder="Inserir nome..." />
              </div>
            </div>
            <div className="form-box">
              <div className="content">
                <label>email</label>
                <input {...register('email')} type="email" placeholder="Inserir email..." />
              </div>
            </div>
            <div className="form-box">
              <div className="content">
                <label>senha</label>
                <input {...register('password')} type="password" placeholder="Inserir senha..." />
              </div>
            </div>
            <div className="form-upload">
              <div className="content">
                <label>perfil</label>
                <div className="area">
                  <figure className="user">
                    <img src={avatarImage ? URL.createObjectURL(avatarImage) : user2} alt="User-2" />
                  </figure>
                  <div {...getRootProps()} className="content">
                    <input {...getInputProps()} />
                    <p>Escolha uma imagem para seu Perfil direto do seu computador.</p>
                    <button className="button type-2">
                      <span>upload</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="buttons">
        <div className="container">
          <button className="button type-1" onClick={() => {
            history.push('/');
          }}>
            <span>voltar</span>
          </button>
          <button type="submit" form="register-form" className="button type-1">
            <span>salvar</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Register;
