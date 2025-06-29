package api.projeto_portfolio.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import api.projeto_portfolio.dto.WeatherDTO;

@Service
public class ClimaService {
    
    @Autowired
    private WebClient webClient;

    @Value("${openweathermap.api.key}")
    private String apiKey;
    
    public WeatherDTO buscarDadosClima(String cidade) {
        return webClient
                .get()
                .uri(uriBuilder -> uriBuilder 
                .path("/weather")
                .queryParam("q", cidade)
                .queryParam("appid", apiKey)
                .queryParam("units", "metric")
                .queryParam("lang", "pt_br")
                .build()) ///weather?q=london&appid={key}&units=metric&lang=pt_br
            .retrieve()
            .bodyToMono(WeatherDTO.class)
            .block();
    }

}
