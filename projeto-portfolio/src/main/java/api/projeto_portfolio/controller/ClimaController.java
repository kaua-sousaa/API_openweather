package api.projeto_portfolio.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import api.projeto_portfolio.dto.WeatherDTO;
import api.projeto_portfolio.services.ClimaService;

@CrossOrigin(origins = {"http://localhost:5173", 
"https://6880365e6dd5960008b70560--api-clima-kaua-openweather.netlify.app"})

@RestController
@RequestMapping("/api/dados-clima")
public class ClimaController {
    
    @Autowired
    private ClimaService climaService;

    @GetMapping("/{cidade}")
    public ResponseEntity<WeatherDTO> obterDadosClima(@PathVariable String cidade) {
        WeatherDTO dadosClima = climaService.buscarDadosClima(cidade);

        if (dadosClima == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(dadosClima);
    }
}
