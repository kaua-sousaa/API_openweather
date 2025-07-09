package api.projeto_portfolio.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@JsonIgnoreProperties(ignoreUnknown = true)
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class WeatherMainDTO {
    
    private Double temp;
    private Double temp_max;
    private Double temp_min;

    private int humidity;

    @JsonProperty("feels_like")
    private double feelsLike;

}
