module.exports = {
    content: ['./src/**/*.{js,jsx}', 
    './dist/index.html'
    ],
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
            mytheme: {
              
                        "primary": "#6d60c1",
                                
                        "secondary": "#007f6c",
                                
                        "accent": "#5a2099",
                                
                        "neutral": "#1B191F",
                                
                        "base-100": "#384256",
                                
                        "info": "#6AA7D2",
                                
                        "success": "#24B78D",
                                
                        "warning": "#EFA72A",
                                
                        "error": "#EB4C6E",
              },
            },
          ],
      },
};
