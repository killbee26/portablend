"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, Twitter, ChevronDown } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Home() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#0B0C10] text-[#C5C6C7] relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-auto object-cover"
        style={{ filter: 'brightness(0.5)' }}
      >
        <source src="/images/videoplayback.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 flex flex-col min-h-screen">
        <motion.header 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="fixed w-full z-20 bg-transparent"
        >
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-[#66FCF1]">PortaBlend</h1>
            <nav>
              <ul className="flex space-x-4">
                <li><a href="#features" className="text-[#C5C6C7] hover:text-[#66FCF1]">Features</a></li>
                <li><a href="#testimonials" className="text-[#C5C6C7] hover:text-[#66FCF1]">Testimonials</a></li>
                <li><Link href="/product" className="text-[#C5C6C7] hover:text-[#66FCF1]">Shop</Link></li>
              </ul>
            </nav>
          </div>
        </motion.header>

        <main className="flex-grow">
          <section className="relative h-screen flex items-center overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center mb-12"
              >
                <h2 className="text-5xl md:text-7xl font-bold text-[#66FCF1] tracking-wider leading-tight">
                  Blend Anywhere,<br />Anytime
                </h2>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl mx-auto text-center"
              >
                <p className="text-xl mb-8 text-[#C5C6C7]">Experience the freedom of healthy smoothies on-the-go with our portable blenders.</p>
                <Link href="/product">
                  <Button size="lg" className="bg-[#45A29E] text-[#0B0C10] hover:bg-[#66FCF1]">Shop Now</Button>
                </Link>
              </motion.div>
            </div>
            <motion.div 
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ChevronDown size={32} className="text-[#66FCF1]" />
            </motion.div>
          </section>

          <section id="features" className="py-20 bg-[#1F2833] bg-opacity-80">
            <div className="container mx-auto px-4">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-center mb-12 text-[#66FCF1]"
              >
                Key Features
              </motion.h2>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                <motion.div variants={itemVariants}>
                  <FeatureCard
                    icon="🔋"
                    title="Long-lasting Battery"
                    description="Blend up to 20 smoothies on a single charge."
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <FeatureCard
                    icon="💪"
                    title="Powerful Motor"
                    description="Crush ice and frozen fruits with ease."
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <FeatureCard
                    icon="🧼"
                    title="Easy to Clean"
                    description="Dishwasher safe and self-cleaning mode."
                  />
                </motion.div>
              </motion.div>
            </div>
          </section>

          <ProductShowcase />

          <StatisticsCounter />

          <FAQSection />

          <section id="testimonials" className="py-20 bg-[#0B0C10] bg-opacity-80 text-[#C5C6C7] relative">
            <ParticleBackground />
            <div className="container mx-auto px-4 relative z-10">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-center mb-12 text-[#66FCF1]"
              >
                What Our Customers Say
              </motion.h2>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                <motion.div variants={itemVariants}>
                  <TestimonialCard
                    name="Sarah L."
                    quote="This portable blender has been a game-changer for my busy lifestyle. I can make healthy smoothies anywhere!"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <TestimonialCard
                    name="Mike T."
                    quote="I love how powerful this little blender is. It crushes ice like a champ!"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <TestimonialCard
                    name="Emily R."
                    quote="The battery life is impressive. I can use it for days before needing to recharge."
                  />
                </motion.div>
              </motion.div>
            </div>
          </section>
        </main>

        <motion.footer 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-[#1F2833] bg-opacity-80 text-[#C5C6C7] py-8"
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold text-[#66FCF1]">PortaBlend</h3>
                <p className="text-sm">Blend Anywhere, Anytime</p>
              </div>
              <div className="flex space-x-4">
                <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-[#45A29E] hover:text-[#66FCF1]"><Facebook size={24} /></motion.a>
                <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-[#45A29E] hover:text-[#66FCF1]"><Instagram size={24} /></motion.a>
                <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-[#45A29E] hover:text-[#66FCF1]"><Twitter size={24} /></motion.a>
              </div>
            </div>
            <div className="mt-8 text-center text-sm">
              © 2023 PortaBlend. All rights reserved.
            </div>
          </div>
        </motion.footer>
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
      <Card className="text-center bg-[#0B0C10] border border-[#45A29E] h-full">
        <CardContent className="pt-6 flex flex-col h-full">
          <div className="text-4xl mb-4">{icon}</div>
          <h3 className="text-xl font-semibold mb-2 text-[#66FCF1]">{title}</h3>
          <p className="text-[#C5C6C7] flex-grow">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function TestimonialCard({ name, quote }) {
  return (
    <Card className="bg-[#1F2833] border border-[#45A29E]">
      <CardContent className="pt-6">
        <p className="italic mb-4 text-[#C5C6C7]">"{quote}"</p>
        <p className="font-semibold text-right text-[#66FCF1]">- {name}</p>
      </CardContent>
    </Card>
  )
}

function ProductShowcase() {
  const [rotation, setRotation] = useState(0)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const rotationValue = ((x / rect.width) - 0.5) * 30
    setRotation(rotationValue)
  }

  return (
    <section className="py-20 bg-[#0B0C10] bg-opacity-80">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#66FCF1]">Our Product</h2>
        <div 
          className="relative w-64 h-64 mx-auto"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setRotation(0)}
        >
          <motion.div
            style={{ 
              rotateY: rotation,
              transformStyle: "preserve-3d",
              perspective: "1000px"
            }}
          >
            <Image
              src="/images/belnder_img.jpg?height=256&width=256"
              alt="PortaBlend Product"
              width={256}
              height={256}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function StatisticsCounter() {
  const [count, setCount] = useState(0)
  const targetCount = 10000

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => {
        if (prevCount < targetCount) {
          return prevCount + 100
        }
        clearInterval(timer)
        return targetCount
      })
    }, 20)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-[#1F2833] bg-opacity-80">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-[#66FCF1]">Happy Customers</h2>
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-6xl font-bold text-[#45A29E]">{count.toLocaleString()}+</span>
        </motion.div>
      </div>
    </section>
  )
}

function FAQSection() {
  return (
    <section className="py-20 bg-[#0B0C10] bg-opacity-80">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#66FCF1]">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="max-w-2xl mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-[#C5C6C7]">How long does the battery last?</AccordionTrigger>
            <AccordionContent className="text-[#C5C6C7]">
              Our PortaBlend can make up to 20 smoothies on a single charge, depending on the ingredients used.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-[#C5C6C7]">Is it easy to clean?</AccordionTrigger>
            <AccordionContent className="text-[#C5C6C7]">
              Yes! The PortaBlend is dishwasher safe and also features a self-cleaning mode for quick rinses between uses.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-[#C5C6C7]">Can it crush ice?</AccordionTrigger>
            <AccordionContent className="text-[#C5C6C7]">
              The powerful motor in the PortaBlend can easily crush ice and blend frozen fruits for perfect smoothies every time.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}

function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let particles: { x: number; y: number; size: number; speedX: number; speedY: number }[] = []

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 3 - 1.5,
        speedY: Math.random() * 3 - 1.5
      })
    }

    function animate() {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let particle of particles) {
        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = '#45A29E'
        ctx.fill()
      }
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="absolute inset-0" style={{ pointerEvents: 'none' }}></canvas>
  )
}