"use client"
import * as z from "zod";
import {useForm} from "react-hook-form";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {zodResolver} from "@hookform/resolvers/zod";
import {UserValidation} from "@/lib/validations/user";

import Image from "next/image";
import {ChangeEvent} from "react";

interface Props {
  user :{
    id      : String,
    objectId: String,
    username: String,
    name    : String,
    bio     : String,
    image   : String,
  }
  btnTitle: String;
}
const AccountProfile =({user, btnTitle}:Props) => {

  const form = useForm({
    resolver: zodResolver(UserValidation),
    defaultValues: {
      profile_photo : '',
      name          : '',
      username      : '',
      bio           : '',
    }
  })
  const handleImage = (
    e: ChangeEvent<HTMLInputElement>,
    fieldChange: (value: string) => void
  ) => {
    e.preventDefault();
  };
  function onSubmit(values: z.infer<typeof UserValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }


  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-start gap-10"
      >
        <FormField
          control={form.control}
          name="profile_photo"
          render={({ field }) => (
            <FormItem className="flex items-center gap-4">
              <FormLabel className="account-form_image-label">
                {field.value ? (
                  <Image
                    src={field.value}
                    alt="Profile Photo"
                    width={96}
                    height={96}
                    priority
                    className="rounded-full object-contain"
                  />
                ) : (
                  <Image
                    src="/assets/profile.svg"
                    alt="Profile Photo"
                    width={24}
                    height={24}
                    priority
                    className="object-contain"
                  />
                )}
              </FormLabel>
              <FormControl className="flex-1 text-dark-1 text-gray-200 border border-gray-300 p-2 rounded">
                <Input
                  type="file"
                  accept="image/*"
                  className="account-form_image-Input"
                  placeholder=" Upload a Image "
                  onSubmit={(e)=> handleImage(e,field.onChange)}
                />
              </FormControl>
              {/*<FormDescription>*/}
              {/*  This is your public display name.*/}
              {/*</FormDescription>*/}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex items-center gap-3 w-full">
              <FormLabel className="text-base-semibold text-light-2">
                Name
              </FormLabel>
              <FormControl className="flex-1 text-dark-1 text-gray-200 ">
                <Input
                  type={"text"}
                  className="account-form_Input no-focus"
                  {...field}
                />
              </FormControl>
              {/*<FormDescription>*/}
              {/*  This is your public display name.*/}
              {/*</FormDescription>*/}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="flex items-center gap-3 w-full">
              <FormLabel className="text-base-semibold text-light-2">
                Username
              </FormLabel>
              <FormControl className="flex-1 text-base-semibold text-gray-200 ">
                <Input
                  type={"text"}
                  className="account-form_Input no-focus"
                  {...field}
                />
              </FormControl>
              {/*<FormDescription>*/}
              {/*  This is your public display name.*/}
              {/*</FormDescription>*/}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem className="flex items-center gap-3 w-full">
              <FormLabel className="text-base-semibold text-light-2">
                Bio
              </FormLabel>
              <FormControl className="flex-1 text-base-semibold text-gray-200 ">
                <Textarea
                  rows={10}
                  className="account-form_Input no-focus"
                  {...field}
                />
              </FormControl>
              {/*<FormDescription>*/}
              {/*  This is your public display name.*/}
              {/*</FormDescription>*/}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );


}

export default AccountProfile;