"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import Link from 'next/link';
import { Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
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

      <div id="contact-faq" data-section="contact-faq">
        <ContactFaq
          ctaTitle="Visite-nos em Queluz"
          ctaDescription="Localização central com fácil acesso e estacionamento. Aberto todos os dias para almoço e jantar."
          ctaButton={{ text: "Ver no Mapa", href: "https://maps.google.com/?q=Sabor+Dos+Anjos+Queluz" }}
          ctaIcon={MapPin}
          faqs={[
            { id: "1", title: "Qual é o nosso horário de funcionamento?", content: "Seg-Dom: 11:30-15:00 (almoço) | 18:00-22:30 (jantar) | Encerrado aos segundos" },
            { id: "2", title: "Aceitam reservas?", content: "Sim! Recomendamos reserva para grupos maiores. Ligue +351-21-XXXXXXX ou preencha o formulário de contacto." },
            { id: "3", title: "Oferecem serviço de takeaway?", content: "Absolutamente! Entregas rápidas e em caixas bem acondicionadas. Ligue para encomendar!" },
            { id: "4", title: "Fazem catering para eventos?", content: "Sim! Pedir orçamento para eventos, festas e celebrações. Contacte-nos para mais detalhes e disponibilidade." },
          ]}
          useInvertedBackground={false}
          animationType="slide-up"
          ariaLabel="Contact and FAQ section"
        />
      </div>

      <div id="contact-info" data-section="contact-info">
        <SplitAbout
          title="Contacte-nos Agora"
          description="Temos prazer em ouvir de si. Quer seja para fazer uma reserva, fazer uma encomenda ou simplesmente nos deixar feedback, estamos aqui para ajudar."
          tag="Direto ao Ponto"
          tagIcon={Phone}
          tagAnimation="slide-up"
          bulletPoints={[
            { title: "Telefone", description: "+351-21-XXXXXXX | Disponível durante o horário de funcionamento para reservas e encomendas.", icon: Phone },
            { title: "Email", description: "info@sabordosanjos.pt | Envie-nos uma mensagem e responderemos dentro de 24 horas.", icon: Phone },
            { title: "Horário", description: "Seg-Dom: 11:30-15:00 (almoço) | 18:00-22:30 (jantar) | Encerrado aos segundos", icon: Clock },
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/baked-chicken-with-brussels-sprouts-table_23-2147954307.jpg?_wi=3"
          imageAlt="Prato especial do Sabor Dos Anjos"
          imagePosition="right"
          textboxLayout="default"
          useInvertedBackground={false}
          mediaAnimation="slide-up"
          ariaLabel="Contact information section"
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
                { label: "Horário", href: "/contacto" },
                { label: "Estacionamento", href: "/contacto" },
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