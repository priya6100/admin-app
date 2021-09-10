const baseUrl = "https://soulbyindian-backend.herokuapp.com";
//  location.hostname === "localhost"
//   ? "http://localhost:7000" 
//   : "https://soulbyindian-backend.herokuapp.com";


export const api = `${baseUrl}/api`;
export const generatePublicUrl = (fileName) =>{

    return `${baseUrl}/public/${fileName}`;
}