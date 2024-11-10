import Link from "next/link";
import Image from "next/image";
import {GitHubIcon,InstagramIcon,LinkedInIcon,YoutTubeIcon,} from '@/components/social-icon';



function SocialLink({icon: Icon, ...props}: any) {
    return(
        <Link className='group -m-1 p-1' {...props}>
            <Icon className='h-6 w-6' />
        </Link>

    )

}

function AboutSection() {
    return (
        <section id="about" className='container flex flex-col md:max-w-[64rem]  md:py-12 lg:py-24'>
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-y-12 lg:grid-rows-[auto-1fr] ">
                <div className="lg:pl-20 flex justify-center">
                    <div className="max-w-xs px-2.5 lg:max-w-none">
                        <Image 
                            src='/auditprologo.jpg' 
                            alt='AuditPro App'  
                            width={800} 
                            height={800} 
                            quality={95} 
                            priority={true} 
                            className="aspect-square rotate-3 rounded-lg bg-zinc-100 dark:bg-zinc-800 object-cover"
                            />
                    </div>
                </div>
                <div className="lg:order-first lg:row-span-2 text-center md:text-start">
                    <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl">Auditoria com tecnologia!</h1>
                    <p className="m-6 text-base text-muted-foreground">
                        O app AuditPro é uma ferramenta poderosa para automatizar e gerenciar auditorias de forma eficiente. Com nossa solução, você pode criar, personalizar e conduzir auditorias de maneira dinâmica e segura. Nossa plataforma permite que você adicione seu próprio conteúdo facilmente, mantendo a qualidade e a confiança em todo o processo. Fique por dentro das últimas atualizações e recursos em nossa seção de novidades. Além disso, compartilhe suas opiniões e feedback no nosso fórum de suporte, onde você também pode obter respostas imediatas para suas dúvidas.
                    </p>
                </div>
                <div className="mt-6 flex justify-center md:justify-start gap-6">
                    <SocialLink href='https://instagram.com/' icon={InstagramIcon}

                    />
                    <SocialLink href='https://github.com/' icon={GitHubIcon}
                    
                    />
                    <SocialLink href='https://linkedin.com/in/' icon={LinkedInIcon}
                    
                    />
                    <SocialLink href='https://youtube.com/' icon={YoutTubeIcon}
                    
                    />
                </div>

            </div>
        </section>
    )

}

export default AboutSection