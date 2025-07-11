package api.projeto_portfolio.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@JsonIgnoreProperties(ignoreUnknown = true)
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class WeatherDTO {
    
    private List<WeatherDescriptionDTO> weather;
    private WeatherMainDTO main;
    private String name;

}
