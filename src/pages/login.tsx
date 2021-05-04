import { Button } from 'components/Button'
import { Input } from 'components/Input'
import { Layout } from '../components/Layout'

const LoginPage = () => (
  <Layout>
    <form className="flex flex-col w-4/5 xl:w-2/5">
      <h1 className="font-bold text-5xl mb-12">Login</h1>
      <Input label="Username" />
      <Input label="Password" />
      <Button label="Login" style={{ marginTop: '1em' }} />
    </form>
  </Layout>
)

export default LoginPage