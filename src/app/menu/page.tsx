"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import Link from 'next/link';
import { Award, Star, Utensils } from 'lucide-react';

export default function MenuPage() {
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

      <div id="menu-intro" data-section="menu-intro">
        <SplitAbout
          title="Menu - Sabor Dos Anjos"
          description="Descubra a variedade de pratos tradicionais portugueses do nosso cardápio. Cada prato é preparado com cuidado, usando ingredientes frescos e receitas autênticas passadas de geração em geração."
          tag="Cardápio Completo"
          tagIcon={Award}
          tagAnimation="slide-up"
          bulletPoints={[
            { title: "Grelhados Frescos", description: "Carnes e peixes selecionados, grelhados na brasa ao ponto de perfeição.", icon: Utensils },
            { title: "Pratos do Dia", description: "Especialidades diárias que variam conforme a estação e disponibilidade de ingredientes.", icon: Star },
            { title: "Acompanhamentos Variados", description: "Arroz, batata frita, saladas frescas e outras opções para completar o seu prato.", icon: Star },
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/side-view-traditional-azerbaijani-buglama-white-plate_140725-10306.jpg"
          imageAlt="Pratos tradicionais portugueses"
          imagePosition="right"
          textboxLayout="default"
          useInvertedBackground={false}
          mediaAnimation="slide-up"
          ariaLabel="Menu introduction section"
        />
      </div>

      <div id="featured-menu-items" data-section="featured-menu-items">
        <ProductCardFour
          products={[
            { id: "1", name: "Frango na Brasa", price: "€8.50", variant: "Inteiro ou Meia dose", imageSrc: "http://img.b2bpic.net/free-photo/side-view-tobacco-pita-bread-with-onions-sauce-with-salad-olives_141793-5139.jpg", imageAlt: "Frango grelhado na brasa", isFavorited: false },
            { id: "2", name: "Peixe Grelhado", price: "€10.00", variant: "Corvina, Robalo ou Dourada", imageSrc: "http://img.b2bpic.net/free-photo/fried-fish-with-lemon-slices-garlic_140725-6641.jpg", imageAlt: "Peixe fresco grelhado", isFavorited: false },
            { id: "3", name: "Carne Assada", price: "€9.50", variant: "Bifes ou Novilho", imageSrc: "http://img.b2bpic.net/free-photo/steak-with-vegetable-salad-fried-potatoes_114579-3255.jpg", imageAlt: "Carne premium grelhada", isFavorited: false },
          ]}
          title="Pratos Recomendados"
          description="Os favoritos dos nossos clientes - escolhas perfeitas para uma refeição memorável."
          tag="Mais Populares"
          tagIcon={Star}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          ariaLabel="Featured menu items section"
        />
      </div>

      <div id="menu-footer-cta" data-section="menu-footer-cta">
        <SplitAbout
          title="Pronto para Encomendar?"
          description="Contacte-nos para fazer a sua encomenda ou reservar uma mesa. Estamos abertos para almoço e jantar, todos os dias."
          tag="Ação Rápida"
          tagIcon={Award}
          tagAnimation="slide-up"
          buttons={[
            { text: "Ligar Agora", href: "tel:+351-21-xxxxxxx" },
            { text: "Fazer Reserva", href: "/contacto" },
          ]}
          bulletPoints={[
            { title: "Almoço", description: "11:30 - 15:00 | Almoço completo de €5-10", icon: Star },
            { title: "Jantar", description: "18:00 - 22:30 | Ambiente acolhedor para refeições tranquilas", icon: Star },
            { title: "Takeaway", description: "Disponível durante todo o horário de funcionamento", icon: Star },
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/baked-chicken-with-brussels-sprouts-table_23-2147954307.jpg"
          imageAlt="Porções generosas do Sabor Dos Anjos"
          imagePosition="left"
          textboxLayout="default"
          useInvertedBackground={false}
          mediaAnimation="slide-up"
          ariaLabel="Menu footer CTA section"
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