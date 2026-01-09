"use client"

import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CoursesSchema, CourseSchemaType, categoryOptions, courseLevels, courseStatus } from "@/lib/zodSchemas";
import { ArrowLeft, PlusIcon, SparkleIcon } from "lucide-react";
import Link from "next/link";
;
import { zodResolver } from "@hookform/resolvers/zod"

import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import slugify from "slugify"
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";




export default function CreateCourses() {

  const form = useForm<CourseSchemaType>({
    resolver: zodResolver(CoursesSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "ai-ml",
      duration: 0 as number,
      fileKey: "",
      price: 0 as number,
      level: "Beginner" as const,
      slug: "",
      smallDescription: "",
      status: "Draft" as const
    },
  });

  function onSubmit(data: CourseSchemaType) {
    // Do something with the form values.
    console.log(data)
  }
  return (
    <>
      <div className="flex flex-row gap-4">
        <Link href="/admin/courses" className={buttonVariants({

          variant: "outline",
          size: "icon"

        })}>
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <h1 className="text-2xl font-bold">Create Courses</h1>
      </div>

      <Card>
        <CardHeader>

          <CardTitle>
            Basic Imformation
          </CardTitle>
          <CardDescription>
            Provide basic imformation about the course
          </CardDescription>
        </CardHeader>
        <CardContent>

          <Form {...form}>

            <form className="space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="title"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Title" {...field}></Input>
                    </FormControl>
                  </FormItem>
                )}
              />
                
              <div className="flex gap-4 items-end">
                <FormField
                control={form.control}
                name="slug"
                render={({field}) => (
                  <FormItem className="w-full">
                    <FormLabel>Slug</FormLabel>
                    <FormControl>
                      <Input placeholder="Slug" {...field}></Input>
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button type="button" className="w-fit" onClick={() =>{
                const taitleValue = form.getValues("title")

                const slug = slugify(taitleValue);
                form.setValue("slug",slug , {shouldValidate:true})
              }}>
                Generate Slug <SparkleIcon className="ml-1" size={16} />
              </Button>

              </div>
              <FormField
                control={form.control}
                name="smallDescription"
                render={({field}) => (
                  <FormItem >
                    <FormLabel>SmallDescription</FormLabel>
                    <FormControl>
                      <Textarea placeholder="SmallDescription" className="min-h-30 resize-none" {...field}></Textarea>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="duration"
                render={({field}) => (
                  <FormItem >
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Description" className="min-h-30 resize-none" {...field}></Textarea>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="fileKey"
                render={({field}) => (
                  <FormItem >
                    <FormLabel>Thumbnail image</FormLabel>
                    <FormControl>
                      <Input placeholder="thumbnail url" className="min-h-30 resize-none" {...field}></Input>
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                control={form.control}
                name="category"
                render={({field}) => (
                  <FormItem >
                    <FormLabel>Category</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select Category" />

                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {categoryOptions.map((category) => (
                          <SelectItem key={category} value={category}>
                              {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
                 <FormField
                control={form.control}
                name="level"
                render={({field}) => (
                  <FormItem >
                    <FormLabel>Level</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select Value" />

                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {courseLevels.map((category) => (
                          <SelectItem key={category} value={category}>
                              {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="duration"
                render={({field}) => (
                  <FormItem >
                    <FormLabel>Duration</FormLabel>
                    <FormControl>
                      <Input placeholder="Duration" type="number" {...field}></Input>
                    </FormControl>
                  </FormItem>
                )}
              />
                 <FormField
                control={form.control}
                name="price"
                render={({field}) => (
                  <FormItem >
                    <FormLabel>Price ($)</FormLabel>
                    <FormControl>
                      <Input placeholder="price" type="number" {...field}></Input>
                    </FormControl>
                  </FormItem>
                )}
              />
              </div>
              <FormField
                control={form.control}
                name="status"
                render={({field}) => (
                  <FormItem >
                    <FormLabel>Status</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select Status" />

                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {courseStatus.map((category) => (
                          <SelectItem key={category} value={category}>
                              {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full cursor-pointer">
                Create Course <PlusIcon className="ml-1"/>
              </Button>

            </form>
          </Form>


        </CardContent>
      </Card>
    </>
  )
}