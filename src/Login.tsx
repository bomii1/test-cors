import { oauthLogin } from "./loginApi";

const Login = () => {
    const handleOauthLogin = async (provider: string) => {
        try {
          await oauthLogin({ provider });
        } catch (error) {
          console.error(`${provider} OAuth login failed:`, error);
        }
      };
  return (
    <div><button onClick={() => handleOauthLogin('google')}>로그인</button></div>
  )
}

export default Login
