'use client'

import { updateUser } from '@/lib/user-action'
import { Button, Heading, Text, TextField } from '@radix-ui/themes'
import { useFormState, useFormStatus } from 'react-dom'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'

export default function UpdateForm({ session }: any) {

  const [state, formAction] = useFormState(updateUser, {
    message: '',
  })
  const { pending } = useFormStatus()

  const { userInfo } = useSelector((state: any) => state.next);

  return (

    <div className="py-5">
      <Heading size="5"  >Update your personal information</Heading>
      <form
        action={async (formData) => {
          const res = await updateUser(null, formData)
          toast.success(res.message, { duration: 4000, position: "top-center", })
        }}
      >
        <div className='flex gap-16 '>
          <div>
            <div className="form-control w-full max-w-xs py-4">
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Full Name
                </Text>
                <TextField.Root
                  type="text"
                  id="name"
                  name="name"

                  required
                  autoComplete='false'
                  defaultValue={session?.user?.name}

                />
              </label>
            </div>
            <input
              type="hidden"
              id="email"
              name="email"

              required
              autoComplete='false'
              defaultValue={session?.user?.email}
            />

            <div className="form-control w-full max-w-xs py-4">
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Password
                </Text>
                <TextField.Root
                  type="password"
                  id="password"
                  name="password"

                  required
                  autoComplete='false'
                  defaultValue=""
                />
              </label>
            </div>
          </div>
          <div>
            <div className="form-control w-full max-w-xs py-4">
              <Text size="6">Shipping information</Text>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Address
                </Text>
                <TextField.Root
                  type="text"
                  id="address"
                  name="address"
                  required
                  autoComplete='false'
                  defaultValue={userInfo?.user.address}
                />
              </label>

            </div>
            <div className="form-control w-full max-w-xs py-4">
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  City
                </Text>
                <TextField.Root
                  type="text"
                  id="city"
                  name="city"

                  required
                  autoComplete='false'
                  defaultValue={userInfo?.user.city}
                />
              </label>

            </div>
            <div className="form-control w-full max-w-xs py-4">

              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Postal Code
                </Text>
                <TextField.Root
                  type="text"
                  id="postal"
                  name="postal"
                  required
                  autoComplete='false'
                  defaultValue={userInfo?.user.postal}
                />
              </label>
            </div>
            <div className="form-control w-full max-w-xs py-4">
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Country
                </Text>
                <TextField.Root
                  type="text"
                  id="country"
                  name="country"
                  className="a_input"
                  required
                  autoComplete='false'
                  defaultValue={userInfo?.user.country}
                />
              </label>

            </div>
            <Button size="3" type="submit" disabled={pending} >
              Upate
            </Button>
          </div>

        </div>

      </form>
    </div>

  )
}