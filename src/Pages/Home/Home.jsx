import React from 'react';

        // Componente para la sección destacada (Hero Section)
        const HeroSection = () => {
          return (
            <section className="hero">
              {/* Contenido de la sección destacada */}
              <h1>Bienvenido a InfoTech</h1>
              <p> La tienda online de referencia para productos de informática</p>
              {/* Otros elementos visuales, como imágenes o videos */}
            </section>
          );
        };
        
        // Componente para mostrar categorías destacadas
        const FeaturedCategories = () => {
          const categories = [
            { id: 1, name: 'Laptops' },
            { id: 2, name: 'Componentes' },
            { id: 3, name: 'Periféricos' },
          ];
        
          return (
            <section className="featured-categories">
              <h2>Categorías Destacadas</h2>
              <ul>
                {/* Muestra las categorías en forma de lista */}
                {categories.map((category) => (
                  <li key={category.id}>
                    <a href={`/category/${category.id}`}>{category.name}</a>
                  </li>
                ))}
              </ul>
            </section>
          );
        };
        
        const Home = () => {
          return (
            <div className="home">
              <HeroSection />
              <FeaturedCategories />
            </div>
          );
        };
        
        export default Home;