import { z } from "zod";

// 1. Added 'as const' so Zod can read these as fixed values
export const courseLevels = ["Beginner", "Intermediate", "Advanced"] as const;
export const courseStatus = ["Draft", "Published", "Archived"] as const;

export const categoryOptions = [
   "web-development", 
   "mobile-development",
   "data-science",
   "ai-ml", 
   "ui-ux",
   "cybersecurity", 
   "cloud-computing", 
   "devops", 
   "game-dev", 
   "software-testing", 
   "digital-marketing",
   "business", 
   "project-management",
   "finance", 
   "personal-dev",
   "graphic-design",
   "photography", 
   "data-analysis", 
   "networking", 
   "blockchain",
]as const;

export const CoursesSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Title must be at least 3 characters" })
    .max(100, { message: "Title cannot exceed 100 characters" }),
  
  description: z
    .string()
    .min(3, { message: "Description must be at least 10 characters" }),
  
  fileKey: z.string().min(1, { message: "Course image or video is required" }),
  
  price: z
  .number()
  .min(1, { message: "Price cannot be a negative number" }),
  
  duration: z
  .number()
  .min(1, { message: "Duration must be at least 1 minute" })
  .max(500),
  
  // FIXED: Remove the message object from z.enum()
  level: z.enum(courseLevels),
  
  category: z.enum(categoryOptions),
  
  smallDescription: z
    .string()
    .min(3, { message: "Small description must be at least 3 characters" })
    .max(100, { message: "Small description cannot exceed 100 characters" }),
  
  slug: z.string().min(3, { message: "Slug must be at least 3 characters" }),
  
  // FIXED: Remove the message object from z.enum()
  status: z.enum(courseStatus),
});

export type CourseSchemaType = z.infer<typeof CoursesSchema>;

