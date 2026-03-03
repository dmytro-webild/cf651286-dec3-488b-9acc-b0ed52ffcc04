"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import Link from 'next/link';
import { Utensils, Award, HomeIcon, UtensilsCrossed, TrendingDown, Zap, Star, ThumbsUp, MapPin, Clock } from 'lucide-react';

export default function HomePage() {
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

      <div id="hero" data-section="hero">
        <HeroSplitDoubleCarousel
          title="Sabor tradicional português em Queluz"
          description="Comida caseira, doses generosas e atendimento rápido. A autêntica experiência de uma churrasqueira portuguesa com ingredientes frescos e preços acessíveis."
          tag="Bem-vindo"
          tagIcon={Utensils}
          tagAnimation="slide-up"
          buttons={[
            { text: "Ligar Agora", href: "tel:+351-21-xxxxxxx" },
            { text: "Fazer Reserva", href: "/contacto" },
          ]}
          buttonAnimation="slide-up"
          leftCarouselItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/side-view-traditional-azerbaijani-buglama-white-plate_140725-10306.jpg?_wi=1", imageAlt: "Prato tradicional português" },
            { imageSrc: "http://img.b2bpic.net/free-photo/side-view-tobacco-pita-bread-with-onions-sauce-with-salad-olives_141793-5139.jpg?_wi=1", imageAlt: "Frango grelhado" },
            { imageSrc: "http://img.b2bpic.net/free-photo/steak-with-vegetable-salad-fried-potatoes_114579-3255.jpg?_wi=1", imageAlt: "Carne grelhada" },
            { imageSrc: "http://img.b2bpic.net/free-photo/wedding-hall-interior-design-photo-shooting_114579-2234.jpg?_wi=1", imageAlt: "Interior do restaurante" },
          ]}
          rightCarouselItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/fried-fish-with-lemon-slices-garlic_140725-6641.jpg?_wi=1", imageAlt: "Peixe grelhado" },
            { imageSrc: "http://img.b2bpic.net/free-photo/baked-chicken-with-brussels-sprouts-table_23-2147954307.jpg?_wi=1", imageAlt: "Porções generosas" },
            { imageSrc: "http://img.b2bpic.net/free-photo/woman-squashing-dough-with-fork-before-baking-top-view_176474-5545.jpg?_wi=1", imageAlt: "Comida caseira" },
            { imageSrc: "http://img.b2bpic.net/free-photo/side-view-traditional-azerbaijani-buglama-white-plate_140725-10306.jpg?_wi=2", imageAlt: "Experiência gastronómica" },
          ]}
          carouselPosition="right"
          background={{ variant: "glowing-orb" }}
          ariaLabel="Hero section - Sabor Dos Anjos"
        />
      </div>

      <div id="why-us" data-section="why-us">
        <SplitAbout
          title="Por Que Escolher Sabor Dos Anjos"
          description="Somos mais do que um restaurante - somos uma tradição de sabor autêntico, qualidade inquestionável e acolhimento genuíno. Venha descobrir o que torna especial cada refeição connosco."
          tag="Qualidade Garantida"
          tagIcon={Award}
          tagAnimation="slide-up"
          bulletPoints={[
            { title: "Comida Caseira", description: "Receitas tradicionais portuguesas preparadas diariamente com carinho e autenticidade.", icon: HomeIcon },
            { title: "Doses Generosas", description: "Porções abundantes que refletem a generosidade portuguesa e deixam todos satisfeitos.", icon: UtensilsCrossed },
            { title: "Preços Acessíveis", description: "Qualidade premium com preços justos. Almoço completo de €5-10, como deve ser.", icon: TrendingDown },
            { title: "Atendimento Rápido", description: "Eficiência sem sacrificar a qualidade. Perfeito para quem tem pressa mas não quer comprometer.", icon: Zap },
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/wedding-hall-interior-design-photo-shooting_114579-2234.jpg?_wi=2"
          imageAlt="Ambiente acolhedor do Sabor Dos Anjos"
          imagePosition="right"
          textboxLayout="default"
          useInvertedBackground={false}
          mediaAnimation="slide-up"
          ariaLabel="About section - Why choose us"
        />
      </div>

      <div id="featured-dishes" data-section="featured-dishes">
        <ProductCardFour
          products={[
            { id: "1", name: "Frango na Brasa", price: "€8.50", variant: "Inteiro ou Meia dose", imageSrc: "http://img.b2bpic.net/free-photo/side-view-tobacco-pita-bread-with-onions-sauce-with-salad-olives_141793-5139.jpg?_wi=2", imageAlt: "Frango grelhado na brasa", isFavorited: false },
            { id: "2", name: "Peixe Grelhado", price: "€10.00", variant: "Corvina, Robalo ou Dourada", imageSrc: "http://img.b2bpic.net/free-photo/fried-fish-with-lemon-slices-garlic_140725-6641.jpg?_wi=2", imageAlt: "Peixe fresco grelhado", isFavorited: false },
            { id: "3", name: "Carne Assada", price: "€9.50", variant: "Bifes ou Novilho", imageSrc: "http://img.b2bpic.net/free-photo/steak-with-vegetable-salad-fried-potatoes_114579-3255.jpg?_wi=2", imageAlt: "Carne premium grelhada", isFavorited: false },
          ]}
          title="Especialidades da Casa"
          description="Descobra os nossos pratos mais procurados - receitas que definem o sabor português autêntico."
          tag="Recomendações"
          tagIcon={Star}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          ariaLabel="Featured dishes section"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwelve
          testimonials={[
            { id: "1", name: "Maria Silva", imageSrc: "http://img.b2bpic.net/free-photo/young-businesswoman-portrait-office_1262-1506.jpg?_wi=1", imageAlt: "Maria Silva" },
            { id: "2", name: "João Costa", imageSrc: "http://img.b2bpic.net/free-photo/young-businesswoman-portrait-office_1262-1506.jpg?_wi=2", imageAlt: "João Costa" },
            { id: "3", name: "Ana Pereira", imageSrc: "http://img.b2bpic.net/free-photo/young-businesswoman-portrait-office_1262-1506.jpg?_wi=3", imageAlt: "Ana Pereira" },
            { id: "4", name: "Pedro Oliveira", imageSrc: "http://img.b2bpic.net/free-photo/young-businesswoman-portrait-office_1262-1506.jpg?_wi=4", imageAlt: "Pedro Oliveira" },
          ]}
          cardTitle="Classificação 5 Estrelas no Google - Dezenas de Clientes Satisfeitos"
          cardTag="Local Guide - Avaliações Verificadas"
          cardTagIcon={ThumbsUp}
          cardAnimation="slide-up"
          useInvertedBackground={false}
          ariaLabel="Customer testimonials section"
        />
      </div>

      <div id="location" data-section="location">
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
          ariaLabel="Location and FAQ section"
        />
      </div>

      <div id="final-cta" data-section="final-cta">
        <FeatureCardTwentyOne
          title="Faça a Sua Reserva Agora"
          description="Não espere mais para provar o autêntico sabor português. Reserve a sua mesa ou faça a sua encomenda hoje mesmo."
          tag="Ação Rápida"
          tagIcon={Clock}
          tagAnimation="slide-up"
          buttons={[
            { text: "Ligar: +351-21-XXXXXXX", href: "tel:+351-21-xxxxxxx" },
            { text: "Reservar Online", href: "/contacto" },
          ]}
          buttonAnimation="slide-up"
          accordionItems={[
            { id: "1", title: "Reserva Fácil", content: "Reserve a sua mesa diretamente pelo telefone ou formulário online. Confirmamos em minutos!" },
            { id: "2", title: "Takeaway Rápido", content: "Encomende o seu prato favorito e retire em 15-20 minutos. Entrega rápida também disponível." },
            { id: "3", title: "Eventos & Catering", content: "Eventos especiais? Oferecemos catering para reuniões, festas e celebrações. Orçamento sem compromisso!" },
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/woman-squashing-dough-with-fork-before-baking-top-view_176474-5545.jpg?_wi=2"
          imageAlt="Comida fresca sendo preparada"
          mediaAnimation="slide-up"
          useInvertedBackground={false}
          mediaPosition="left"
          ariaLabel="Final CTA section"
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
                { label: "Queluz, Portugal", href: "#location" },
                { label: "Ver no Mapa", href: "https://maps.google.com/?q=Sabor+Dos+Anjos+Queluz" },
                { label: "Horário", href: "#location" },
                { label: "Estacionamento", href: "#location" },
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