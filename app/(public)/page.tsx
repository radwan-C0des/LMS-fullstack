"use client"
import { motion } from "framer-motion" // Import this!
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import Link from 'next/link'



interface featuresType {
    title: string,
    description: string,
    icon: string // Changed to string for easier management
}

const features: featuresType[] = [
    {
        title: "Comprehensive Courses",
        description: "Access a wide range of courses across various subjects, designed by industry experts.",
        icon: "/books.png"
    },
    {
        title: "Interactive Learning",
        description: "Engage with interactive content, quizzes, and assignments that make learning fun.",
        icon: "/interactive.png"
    },
    {
        title: "Progress Tracking",
        description: "Monitor your learning journey with our built-in progress tracking tools.",
        icon: "/prograss.png"
    },
    {
        title: "Community Support", // Fixed capitalization
        description: "Join a vibrant community of learners and educators to share knowledge.",
        icon: "/community.png"
    }
]

function Home() {


    return (
        <div className="min-h-screen bg-background">
            {/* HERO SECTION */}
            <section className='relative py-20 px-6'>
                <div className='max-w-5xl mx-auto flex flex-col items-center text-center space-y-8'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <Badge variant="outline" className="px-4 py-1 border-primary/30 bg-primary/5 text-primary">
                            The Future of Online Education
                        </Badge>
                    </motion.div>

                    <h1 className='font-bold text-4xl md:text-7xl tracking-tighter bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                        Elevate your Learning <br /> Experience
                    </h1>

                    <p className='max-w-175 text-muted-foreground md:text-xl leading-relaxed'>
                        Discover a new way to learn with our innovative platform designed for modern learners.
                        Access courses and track progress anytime, anywhere.
                    </p>

                    <div className='flex flex-col sm:flex-row gap-4 mt-4'>
                        <Link className={buttonVariants({ size: "lg", variant: "outline" })} href="/courses">
                            Explore Courses
                        </Link>
                        <Link className={buttonVariants({ size: "lg" })} href="/login">
                            Sign In
                        </Link>
                    </div>
                </div>
            </section>

            {/* FEATURES SECTION */}
            <section className='container mx-auto px-6 py-20 mb-32'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {features.map((feature, index) => (
                      
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            // 1. PHYSICAL LIFT: Moves the card up when hovered
                            whileHover={{ y: -12 }}
                        >
                            <Card className="
        h-full transition-all duration-300 ease-out border-primary/10 
        bg-card/50 backdrop-blur-sm 
        
        /* 2. LIGHT MODE SHADOW: A deep, soft natural shadow */
        hover:shadow-2xl hover:shadow-black/10 
        
        /* 3. DARK MODE GLOW: A colored shadow that looks like a glow */
        dark:hover:shadow-[0_0_40px_-10px_rgba(var(--primary),0.3)] 
        dark:hover:border-primary/40
        
        overflow-hidden group
    ">
                                <CardHeader className="relative items-center pt-10 flex justify-center" >
                                    <motion.div
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: index * 0.5
                                        }}
                                        className="relative z-10 w-40 h-40"
                                    >
                                        <img
                                            src={feature.icon}
                                            alt={feature.title}
                                            className="w-full h-full object-contain drop-shadow-2xl flex items-center justify-center"
                                        />
                                    </motion.div>

                                    {/* NO MORE BLURRED DIV HERE */}
                                </CardHeader>

                                <CardContent className="text-center space-y-2 pb-8">
                                    <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                                    <p className='text-muted-foreground text-sm leading-relaxed'>
                                        {feature.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Home