import type { NextPage } from 'next'
import { Divider } from '../components/Divider'
import { Button } from "../components/Button"

const Home: NextPage = () => {
  return (
    <section className="h-[100vh] bg-neutral-100 flex justify-center items-center">
      <div className='bg-white px-12 py-8 rounded-md'>
        <div className='text-center'>
            <strong className="text-2xl ">Sign in</strong>
        </div>
        <Divider />
        <form action="#" className="w-full max-w-lg">
          <div className="flex flex-col -mx-3 mb-6 space-y-2">
            <div>
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="username">
                Username
              </label>
            <input className="appearance-none  w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="username" type="text" placeholder="r03890081" />
            </div>

            <div>
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="username">
                Password
              </label>
              <input className="appearance-none  w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="username" type="password" />
            </div>

          <Button color="#e0001f" text="Log in"/>

          </div>
        </form>
      </div>
    </section>
  )
}

export default Home
