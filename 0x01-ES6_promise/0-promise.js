function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const mockResponse = { data: 'Mock API response' };
      resolve(mockResponse); // Resolve the Promise with the response
    }, 1000);
  });
}

export default getResponseFromAPI;
