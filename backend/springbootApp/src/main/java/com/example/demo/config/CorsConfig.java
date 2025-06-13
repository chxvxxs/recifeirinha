package com.example.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**") // aplica para todos os endpoints
                        // Agora permitimos múltiplas origens
                        .allowedOrigins(
                                "https://recifeirinha-front.vercel.app",   // Frontend na Vercel
                                "https://teste2-deploy-render.onrender.com",// Backend no Render
                                "http://localhost:3000"                      // Acesso para desenvolvimento local
                        )
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                        .allowedHeaders("*")
                        .allowCredentials(true);
            }
        };
    }
}
