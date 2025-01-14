'use client'

// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { BookOpen,CodeXml, Users, Trophy, Target, ArrowRight, GraduationCap, Calendar, Clock } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { IoCodeSlash } from "react-icons/io5";

export default function Page2() {
  const formations = [
    {
      title: "Programmation de web",
      duration: "2 years +",
      startDate: "September 2025",
      students: 40,
      description: "Plongez dans le monde de la programmation, des algorithmes et du développement de logiciels",
      skills: ["Programming", "Algorithms", "Software Engineering"],
      icon: CodeXml,
      color: "bg-blue-500"
    },
    {
      title: "Infographie",
      duration: "2 years",
      startDate: "October 2025",
      students:45 ,
      description: "Libérez votre créativité grâce à l'art du graphisme",
      skills: ["Design", "Animation", "Illustration", "Visual Effects"],
      icon: Users,
      color: "bg-purple-500"
    },
    {
      title: "genie civil",
      duration: "3 years",
      startDate: "August 2024",
      students: 100,
      description: "Master the art of data-driven decision making",
      skills: ["D3D Modeling", "Creativity", "Business Intelligence", "Visualization"],
      icon: Trophy,
      color: "bg-green-500"
    }
  ]

//   gradient-to-b from-slate-50 to-slate-100

  return (
    <section className="py-20 bg-[#e4ebf5]">
      <div className=" mx-auto px-4">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 px-2 py-1 bg-main text-white" variant="secondary">
            Institut des Métiers Appliqués Privée
            </Badge>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 text-transparent bg-clip-text">
            Façonnez votre avenir avec nos programmes
            </h2>
            <p className="text-muted-foreground text-lg">
            nos programmes conçus pour autonomiser la prochaine génération d'innovateurs, de créateurs et de dirigeants.
            </p>
          </motion.div>
        </div>

        {/* Formation Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {formations.map((formation, index) => (
            <motion.div
              key={formation.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="relative overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  {/* Floating Background Icon */}
                  <div className="absolute right-0 top-0 -mr-8 -mt-8 opacity-10">
                    <formation.icon size={120} />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className={`${formation.color} w-12 h-12 rounded-lg flex items-center justify-center mb-6`}>
                      <formation.icon className="text-white" size={24} />
                    </div>

                    <h3 className="text-2xl font-bold mb-4">{formation.title}</h3>
                    <p className="text-muted-foreground mb-6">{formation.description}</p>

                    {/* Info Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span>{formation.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span>{formation.startDate}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <span>{formation.students} students</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <GraduationCap className="w-4 h-4 text-muted-foreground" />
                        <span>Certificate</span>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="space-y-2 mb-6">
                      <h4 className="text-sm font-semibold">Key Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {formation.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="font-normal">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <Button className="w-full group bg-main">
                        Voir Plus
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-4 gap-8">
          {[
            { label: "Years of Excellence", value: "25+" },
            { label: "Professional Instructors", value: "100+" },
            { label: "Success Rate", value: "95%" },
            { label: "Career Placement", value: "88%" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/60 text-transparent bg-clip-text">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex gap-4">
            <Button size="lg">
              Apply Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline">
              Download Brochure
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}