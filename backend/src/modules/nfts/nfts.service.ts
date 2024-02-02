import { configuration } from "src/core/config/configuration";

/* eslint-disable prettier/prettier */
const config = configuration(); 
export class NftsService {

  async findNftsByCollection() {
    try {
        const apiKey = config.OPENSEA_API_KEY; // Asegúrate de tener OPENSEA_API_KEY en tu configuración
        const url = 'https://api.opensea.io/api/v2/collection/mystical-wizards/nfts';
  
        const response = await fetch(url, {
          headers: {
            'X-API-KEY': apiKey,
          },
  
        });
  
        console.log(response)
  
        if (!response.ok) {
          throw new Error(`Error al obtener datos de OpenSea: ${response.status} ${response.statusText}`);
        }
  
        const responseData = await response.json();
  
        console.log(responseData);
  
        return responseData;
      } catch (error) {
        console.error(error.message);
        return 'Error al obtener datos de OpenSea';
      }
  }
}
