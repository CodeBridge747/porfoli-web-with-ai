import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Phone,
  MapPin,
  Calendar,
  Award,
  Code,
  Database,
  Globe,
  Smartphone,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  const projects = [
    {
      title: "전자상거래 플랫폼",
      description: "React와 Node.js를 사용한 풀스택 전자상거래 웹사이트",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "#",
    },
    {
      title: "모바일 앱 대시보드",
      description: "React Native로 개발한 크로스플랫폼 모바일 애플리케이션",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
      github: "#",
      demo: "#",
    },
    {
      title: "데이터 시각화 도구",
      description: "D3.js와 Python을 활용한 인터랙티브 데이터 분석 플랫폼",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Python", "D3.js", "Flask", "PostgreSQL"],
      github: "#",
      demo: "#",
    },
    {
      title: "AI 챗봇 서비스",
      description: "OpenAI API를 활용한 지능형 고객 서비스 챗봇",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Next.js", "OpenAI", "Prisma", "Tailwind CSS"],
      github: "#",
      demo: "#",
    },
  ]

  const skills = [
    { category: "프론트엔드", items: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"] },
    { category: "백엔드", items: ["Node.js", "Python", "Express", "Django", "GraphQL"] },
    { category: "데이터베이스", items: ["PostgreSQL", "MongoDB", "Redis", "Supabase"] },
    { category: "도구 & 기타", items: ["Git", "Docker", "AWS", "Figma", "Jest"] },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">김개발</h1>
            <div className="hidden md:flex space-x-6">
              <Link href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
                소개
              </Link>
              <Link href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">
                프로젝트
              </Link>
              <Link href="#skills" className="text-gray-600 hover:text-gray-900 transition-colors">
                기술
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                연락처
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <Image
              src="/placeholder.svg?height=150&width=150"
              alt="프로필 사진"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
            />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              안녕하세요, <span className="text-blue-600">김개발</span>입니다
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">풀스택 개발자 | 문제 해결을 좋아하는 개발자</p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
              사용자 중심의 웹 애플리케이션을 개발하며, 새로운 기술을 배우고 적용하는 것을 즐깁니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://inflearn.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Mail className="mr-2 h-4 w-4" />
                  연락하기
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                <Github className="mr-2 h-4 w-4" />
                GitHub 보기
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">소개</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">저에 대해</h3>
              <p className="text-gray-600 mb-4">
                5년 경력의 풀스택 개발자로, 사용자 경험을 최우선으로 생각하며 개발합니다. React, Next.js를 주력으로 하는
                프론트엔드 개발과 Node.js, Python을 활용한 백엔드 개발 모두에 능숙합니다.
              </p>
              <p className="text-gray-600 mb-6">
                새로운 기술을 배우는 것을 좋아하며, 팀워크를 중시하고 코드 품질에 대한 높은 기준을 가지고 있습니다.
                복잡한 문제를 단순하고 효율적인 솔루션으로 해결하는 것에 보람을 느낍니다.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">
                  <Calendar className="mr-1 h-3 w-3" />
                  5년 경력
                </Badge>
                <Badge variant="secondary">
                  <Award className="mr-1 h-3 w-3" />
                  정보처리기사
                </Badge>
                <Badge variant="secondary">
                  <MapPin className="mr-1 h-3 w-3" />
                  서울, 대한민국
                </Badge>
              </div>
            </div>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Code className="mr-2 h-5 w-5" />
                    개발 철학
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    "깨끗하고 유지보수 가능한 코드를 작성하며, 사용자의 관점에서 생각하는 개발자"
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="mr-2 h-5 w-5" />
                    관심 분야
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge>웹 개발</Badge>
                    <Badge>모바일 앱</Badge>
                    <Badge>AI/ML</Badge>
                    <Badge>클라우드</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">프로젝트</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.github}>
                        <Github className="mr-1 h-4 w-4" />
                        코드
                      </Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link href={project.demo}>
                        <ExternalLink className="mr-1 h-4 w-4" />
                        데모
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">기술 스택</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    {skillGroup.category === "프론트엔드" && <Globe className="mr-2 h-5 w-5" />}
                    {skillGroup.category === "백엔드" && <Code className="mr-2 h-5 w-5" />}
                    {skillGroup.category === "데이터베이스" && <Database className="mr-2 h-5 w-5" />}
                    {skillGroup.category === "도구 & 기타" && <Smartphone className="mr-2 h-5 w-5" />}
                    {skillGroup.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="mr-2 mb-2">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">연락처</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-600 mb-8">새로운 기회나 협업에 관심이 있으시다면 언제든 연락해 주세요!</p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6">
                <Mail className="h-8 w-8 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold mb-2">이메일</h3>
                <p className="text-gray-600">kim.developer@email.com</p>
              </Card>
              <Card className="p-6">
                <Phone className="h-8 w-8 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold mb-2">전화</h3>
                <p className="text-gray-600">010-1234-5678</p>
              </Card>
              <Card className="p-6">
                <MapPin className="h-8 w-8 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold mb-2">위치</h3>
                <p className="text-gray-600">서울, 대한민국</p>
              </Card>
            </div>
            <div className="flex justify-center space-x-4">
              <Button variant="outline" size="lg" asChild>
                <Link href="#">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </Link>
              </Button>
              <Button size="lg" asChild>
                <Link href="mailto:kim.developer@email.com">
                  <Mail className="mr-2 h-5 w-5" />
                  이메일 보내기
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 김개발. 모든 권리 보유.</p>
          <p className="text-gray-400 mt-2">Next.js와 Tailwind CSS로 제작되었습니다.</p>
        </div>
      </footer>
    </div>
  )
}
