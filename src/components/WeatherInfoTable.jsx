import "../styles/WeatherInfoTable.css";

const WeatherInfoTable = () => {
    return (
        <table className="WeatherInfoTable">
          <tbody>
            {/* First row */}
            <tr>
              <td>Temperature</td>
              <td>Low</td>
              <td>High</td>
              <td>Feels Like</td>
            </tr>

            {/* Second row */}
            <tr>
              <td>72°F</td>
              <td>72°F</td>
              <td>72°F</td>
              <td>72°F</td>
            </tr>
        
            {/* Third row */}
            <tr>
              <td>Wind Speed</td>
              <td>Wind Pressure</td>
              <td>Humidity</td>
              <td>Precipitation</td>
            </tr>
            {/* Fourth row */}
            <tr>
              <td>0.0 mph</td>
              <td>0 mb</td>
              <td>0%</td>
              <td>0 mm</td>
            </tr>
          </tbody>
        </table>
    )
}

export default WeatherInfoTable;