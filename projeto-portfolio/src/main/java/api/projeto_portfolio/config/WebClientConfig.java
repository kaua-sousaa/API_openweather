package api.projeto_portfolio.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.client.WebClient;

@Configuration
public class WebClientConfig {
    
    @Bean
    public WebClient webClient (WebClient.Builder builder){ 
        return builder
                .baseUrl("http://api.openweathermap.org/data/2.5")
                .build();
    }
}
