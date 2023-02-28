import type { NextPage } from 'next'
import Image from "next/image"
import { Divider } from '../components/Divider'
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { Button } from '../components/Button';
import { useRouter, NextRouter }  from "next/router"
import { useState } from 'react';

const Home: NextPage = () => {

  const router = useRouter()
  const [errors, setErrors] = useState<string[]>([]);

  const authenticate = (username: string, password: string, router: NextRouter) => {
    // hardcoded user
    if(username !== "admin" && password !== "admin") {
      setErrors(["Username and password are incorrect"])
      return;
    }

    if(username !== "admin") {
      setErrors(["Username is incorrect"])
      return;
    }
  
    if(password !== "admin") {
      setErrors(["Password is incorrect"])
      return;
    }
  
  
    router.push("/dashboard")
  } 


  return (
    <section className="h-[100vh] bg-neutral-100 flex flex-col justify-center items-center space-y-8">
      <Image src="/vives_logo.svg" alt="Vives logo" width={200} height={200}/>
      <div className='bg-white px-12 py-8 rounded-md'>
        <div className='text-center'>
            <strong className="text-2xl ">Sign in</strong>
        </div>
        <Divider />

        {errors.length !== 0 
          ? <div className="bg-[#e0001f] px-8 py-4 text-white rounded-md mb-4">
            <strong>Some errors ocurred:</strong>
            <ul>
              {errors.map(error => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </div> 
          : <></>}

        <Formik
          initialValues={{
            username: '',
            password: '',
          }}

          onSubmit={(
            values: User,
            { setSubmitting }: FormikHelpers<User>
          ) => {
            setTimeout(() => {
              authenticate(values.username, values.password, router)
              setSubmitting(false);
            }, 500);
          }}

        >
              <Form>
                  <label htmlFor="firstName" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Username</label>
                  <Field className="appearance-none  w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white transition-all ease-in-out duration-75" id="username" name="username" placeholder="r00932341"></Field>

                  <label htmlFor="password" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Password</label>
                  <Field className="appearance-none  w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white transition-all ease-in-out duration-75" id="password" name="password" type="password"></Field>
              
                  <Button type="submit" text="Log in"/>
              </Form>
        </Formik>
      </div>
    </section>
  )
}

export default Home
