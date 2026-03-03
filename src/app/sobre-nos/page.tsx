"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import Link from 'next/link';
import { Award, Heart, ThumbsUp } from 'lucide-react';

export default function AboutPage() {
  const navItems = [
    { name: "Home", id: "/" },
    { name: "Menu", id: "/menu" },
    { name: "Sobre Nós", id: "/sobre-nos" },
    { name: "Contacto", id: "/contacto" },
  ];

  return (
    <ThemeProvider
      defaultButtonVariant="text-shift"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="smallMedium"
      sizing="mediumLargeSizeMediumTitles"
      background="aurora"
      cardStyle="soft-shadow"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="layered"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Sabor Dos Anjos"
          navItems={navItems}
          button={{
            text: "Ligar Agora",
            href: "tel:+351-21-xxxxxxx",
          }}
        />
      </div>

      <div id="about-story" data-section="about-story">
        <SplitAbout
          title="Sobre Nós - Sabor Dos Anjos"
          description="A nossa história começou com a paixão pela gastronomia portuguesa autêntica. Sabor Dos Anjos é mais que um restaurante - é um lugar onde tradição encontra excelência, onde cada prato conta uma história e cada cliente se torna parte da nossa família."
          tag="A Nossa História"
          tagIcon={Heart}
          tagAnimation="slide-up"
          bulletPoints={[
            { title: "Tradição Autêntica", description: "Receitas transmitidas de geração em geração, preservando o verdadeiro sabor português.", icon: Award },
            { title: "Qualidade Inquestionável", description: "Seleção rigorosa de ingredientes frescos, fornecedores locais de confiança.", icon: Award },
            { title: "Acolhimento Genuíno", description: "Sentir-se em casa é a nossa prioridade. Cada cliente é parte da nossa comunidade.", icon: Heart },
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/wedding-hall-interior-design-photo-shooting_114579-2234.jpg?_wi=3"
          imageAlt="Interior acolhedor do Sabor Dos Anjos"
          imagePosition="right"
          textboxLayout="default"
          useInvertedBackground={false}
          mediaAnimation="slide-up"
          ariaLabel="About story section"
        />
      </div>

      <div id="about-testimonials" data-section="about-testimonials">
        <TestimonialCardTwelve
          testimonials={[
            { id: "1", name: "Maria Silva", imageSrc: "http://img.b2bpic.net/free-photo/young-businesswoman-portrait-office_1262-1506.jpg?_wi=5", imageAlt: "Maria Silva" },
            { id: "2", name: "João Costa", imageSrc: "http://img.b2bpic.net/free-photo/young-businesswoman-portrait-office_1262-1506.jpg?_wi=6", imageAlt: "João Costa" },
            { id: "3", name: "Ana Pereira", imageSrc: "http://img.b2bpic.net/free-photo/young-businesswoman-portrait-office_1262-1506.jpg?_wi=7", imageAlt: "Ana Pereira" },
            { id: "4", name: "Pedro Oliveira", imageSrc: "http://img.b2bpic.net/free-photo/young-businesswoman-portrait-office_1262-1506.jpg?_wi=8", imageAlt: "Pedro Oliveira" },
          ]}
          cardTitle="O que os nossos clientes dizem sobre nós"
          cardTag="Avaliações de Clientes"
          cardTagIcon={ThumbsUp}
          cardAnimation="slide-up"
          useInvertedBackground={false}
          ariaLabel="Customer testimonials on about page"
        />
      </div>

      <div id="about-values" data-section="about-values">
        <SplitAbout
          title="Os Nossos Valores"
          description="Cada dia, trabalhamos para viver estes valores que definem quem somos e como servimos a nossa comunidade."
          tag="Compromisso"
          tagIcon={Award}
          tagAnimation="slide-up"
          buttons={[
            { text: "Visita-nos Agora", href: "/contacto" },
          ]}
          bulletPoints={[
            { title: "Excelência", description: "Qualidade em tudo o que fazemos, desde a seleção de ingredientes até ao atendimento.", icon: Award },
            { title: "Autenticidade", description: "Mantemos vivas as tradições portuguesas, honrando a culinária do nosso povo.", icon: Heart },
            { title: "Comunidade", description: "Somos parte da comunidade local, apoiamos negócios locais e criamos relações duradouras.", icon: Heart },
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/woman-squashing-dough-with-fork-before-baking-top-view_176474-5545.jpg?_wi=3"
          imageAlt="Comida caseira sendo preparada com cuidado"
          imagePosition="left"
          textboxLayout="default"
          useInvertedBackground={false}
          mediaAnimation="slide-up"
          ariaLabel="Values section"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Contacto",
              items: [
                { label: "Telefone", href: "tel:+351-21-xxxxxxx" },
                { label: "Email", href: "mailto:info@sabordosanjos.pt" },
                { label: "Reservas", href: "/contacto" },
                { label: "Takeaway", href: "/menu" },
              ],
            },
            {
              title: "Localização",
              items: [
                { label: "Queluz, Portugal", href: "/" },
                { label: "Ver no Mapa", href: "https://maps.google.com/?q=Sabor+Dos+Anjos+Queluz" },
                { label: "Horário", href: "/" },
                { label: "Estacionamento", href: "/" },
              ],
            },
            {
              title: "Menu",
              items: [
                { label: "Início", href: "/" },
                { label: "Menu", href: "/menu" },
                { label: "Sobre Nós", href: "/sobre-nos" },
                { label: "Contacto", href: "/contacto" },
              ],
            },
          ]}
          copyrightText="© 2025 Sabor Dos Anjos | Restaurante Português em Queluz | Todos os direitos reservados"
          ariaLabel="Footer section"
        />
      </div>
    </ThemeProvider>
  );
}